import os
import json
import csv
from validator import validate_quiz
from utils import print_summary, export_to_markdown

QUIZ_DIR = "quizzes"
EXPORT_DIR = "exports"

def load_quizzes():
    quizzes = []
    for file in os.listdir(QUIZ_DIR):
        if file.endswith(".json"):
            path = os.path.join(QUIZ_DIR, file)
            with open(path, "r", encoding="utf-8") as f:
                data = json.load(f)
                quizzes.append((file, data))
    return quizzes

def main():
    os.makedirs(EXPORT_DIR, exist_ok=True)
    quizzes = load_quizzes()

    report = []

    for file, quiz in quizzes:
        valid, errors = validate_quiz(quiz)
        print(f"\n📘 Validating {file}")
        if valid:
            print("✅ Valid structure")
        else:
            print("❌ Errors found:")
            for e in errors:
                print(f"   - {e}")
        
        # Summarize regardless
        summary = print_summary(file, quiz)
        report.append(summary)

    # Export to CSV
    with open(os.path.join(EXPORT_DIR, "summary_report.csv"), "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["File", "Category", "Questions", "Difficulties"])
        writer.writeheader()
        for r in report:
            writer.writerow(r)

    # Export to Markdown
    export_to_markdown(quizzes, os.path.join(EXPORT_DIR, "markdown_export.md"))

if __name__ == "__main__":
    main()
