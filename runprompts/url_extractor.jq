# 1. Read the content of ../src/articles/articles.json (the first positional argument).
# Since we use -R (raw), we must convert the input string to JSON.
(.posts | map({(.url): true}) | add) as $exclusion_set

# 2. Process all subsequent inputs (raw lines from the pipe: urls.txt).
| [
  inputs | debug
  # 3. Filter out comments and empty lines
  | select(startswith("#") | not)
  | select(length > 0)
  # 4. Check if the URL is NOT a key in the exclusion set
  | select($exclusion_set[.] | not)
]
# 5. Construct the final JSON object
| {urls: .}