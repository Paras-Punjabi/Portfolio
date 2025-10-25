---* Create this function in supabase sql editor to fetch similar embeddings when invoked from backend using supabase client

create or replace function public.match_documents(
  filter jsonb,
  match_count int,
  query_embedding vector
)
returns table(id uuid, content text, metadata jsonb, embedding vector)
language sql
as $$
  select id, content, metadata, embedding
  from public.documents
  where filter is null or metadata @> filter
  order by embedding <-> query_embedding
  limit match_count;
$$;