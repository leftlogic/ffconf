import csv
import sys

file_name = sys.argv[1:][0]
formatted_output = []
missing_email = []

try:
    with open(file_name, mode='r', encoding='utf-8') as file:
        reader = csv.reader(file)

        # Read the header row (questions)
        headers = next(reader)

        # loop through the rest of the file and get the 26th and 34th columns
        for row in reader:
            if row[0].strip() != "TICKET":
                continue  # Skip empty rows
            name = row[25]  # 26th column (0-indexed)
            # now try to split `name` on the first space to save first and last name
            if ' ' in name:
                first_name, last_name = name.split(' ', 1)
            else:
                first_name = name
                last_name = ''

            email = row[33]  # 34th column (0-indexed)
            if not email:
                missing_email.append(name)
            else:
              # each field should be quotes by double quotes if it contains a comma or a single or double quote
              if ',' in first_name or '"' in first_name or "'" in first_name:
                  first_name = f'"{first_name.replace("\"", "\"\"")}"'
              if ',' in last_name or '"' in last_name or "'" in last_name:
                  last_name = f'"{last_name.replace("\"", "\"\"")}"'
              if ',' in email or '"' in email or "'" in email:
                  email = f'"{email.replace("\"", "\"\"")}"'
              formatted_output.append(f"{first_name},{last_name},{email},ffconf2025")
    print("first_name,last_name,email,tags")
    for entry in formatted_output:
        print(entry)

    if len(missing_email) > 0:
      print("\nAttendees missing email addresses:")
      for name in missing_email:
          print(name)

except FileNotFoundError:
    print(f"Error: The file '{file_name}' was not found.")
except StopIteration:
    print("Error: The CSV file seems to be empty or missing data rows.")
except Exception as e:
    print(f"An error occurred: {e}")