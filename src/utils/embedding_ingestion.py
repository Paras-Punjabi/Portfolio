import os
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores.supabase import SupabaseVectorStore
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_community.document_loaders.text import TextLoader
from langchain.schema import Document
from dotenv import load_dotenv
from supabase.client import create_client
import requests
import json

load_dotenv()

#* This Python Script used to insert the new embeddings into Supabase pgVector and delete the old embeddings
#! Write the context in /src/utils/context.txt

GEMINI_MODEL = os.getenv("GEMINI_MODEL")
GEMINI_EMBEDDING_MODEL = os.getenv("GEMINI_EMBEDDING_MODEL")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_SERVICE_KEY = os.getenv("SUPABASE_SERVICE_KEY")

loader = TextLoader("./context.txt")
docs = loader.load()

splitter = RecursiveCharacterTextSplitter(separators=["\n\n", "\n", ".", " "], chunk_size=800, chunk_overlap=200)
docs = splitter.split_documents(docs)

supabase_client = create_client(SUPABASE_URL,SUPABASE_SERVICE_KEY)
embeddings = GoogleGenerativeAIEmbeddings(model=GEMINI_EMBEDDING_MODEL,google_api_key=GEMINI_API_KEY)

supabase_client.table("documents").delete().neq("content","").execute()
print("Old Embeddings successfully deleted from Supabase.")

vector_store =  SupabaseVectorStore(
    client=supabase_client,
    embedding=embeddings,
    table_name="documents",
    query_name="match_documents"
)

vector_store.add_texts(
    texts=[item.page_content for item in docs],
    metadatas=[item.metadata for item in docs]
)

query = f"""
{{
  matchedUser(username: "Paras_Punjabi") {{
    username
    profile {{
      realName
      countryName
      ranking
      reputation
      starRating
      aboutMe
      userAvatar
    }}
    submitStats {{
      acSubmissionNum {{
        difficulty
        count
      }}
    }}
  }}
  userContestRanking(username: "Paras_Punjabi") {{
    rating
    globalRanking
    attendedContestsCount
    topPercentage
  }}
}}
"""

headers = {
    "Content-Type": "application/json",
    "Referer": f"https://leetcode.com/Paras_Punjabi/",
    "User-Agent": "Mozilla/5.0"
}

res = requests.post("https://leetcode.com/graphql", json={"query": query}, headers=headers)
data = res.json()
data = json.dumps(data)

doc = Document(page_content=data,metadata={"source":"leetcode_profile","username":"Paras_Punjabi"})

vector_store.add_documents([doc])

print("New Embeddings successfully inserted into Supabase.")