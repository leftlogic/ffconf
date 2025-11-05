import csv
import sys

file_name = sys.argv[1:][0]
formatted_output = []

try:
    with open(file_name, mode='r', encoding='utf-8') as file:
        reader = csv.reader(file)

        # Read the header row (questions)
        headers = next(reader)

        # Read the first data row (responses)
        # Assuming only one response row as per the snippet
        responses = next(reader)

        # Questions start from the 3rd column (index 2)
        questions = headers[2:]
        answers = responses[2:]

        # Format each question and answer
        for q, a in zip(questions, answers):
            # Format: **${question}**\n\n> ${response}
            # Need to handle potential multi-line responses in the CSV,
            # although the snippet doesn't explicitly show them.
            # The > prefix should ideally be applied to each line of the response.

            # Replace newline characters in the answer with "\n> " to format as blockquote
            formatted_answer = "> " + a.replace('\n', '\n> ')

            formatted_output.append(f"**{q}**\n\n{formatted_answer}\n")

    # Print the combined markdown output
    print("\n".join(formatted_output))

except FileNotFoundError:
    print(f"Error: The file '{file_name}' was not found.")
except StopIteration:
    print("Error: The CSV file seems to be empty or missing data rows.")
except Exception as e:
    print(f"An error occurred: {e}")