import json

with open("videoData.json", 'r') as file:
    data = json.load(file)

categories = []
for obj in data:
    # print('"' + '", "'.join(obj['categories']), end='", ')
    for category in obj['categories']:
        if category not in categories:
            categories.append(category)

print('"' + '", "'.join(categories), end='", ')

