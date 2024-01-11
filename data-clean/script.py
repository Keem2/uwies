import pandas as p
import json

exam_data = p.read_csv("./data/examlist.csv")

# Removing blank values 
exam_data.dropna(inplace=True)

# converting time to string, then changing from am to pm
exam_data['time'] = exam_data['time'].astype(str)

exam_data.loc[exam_data['time'] == '1:00 am','time'] = '1:00 pm'
exam_data.loc[exam_data['time'] == '4:00 am','time'] = '2:00 pm'
exam_data.loc[exam_data['time'] == '2:00 am','time'] = '4:00 pm'

# chaning HRS to hours
exam_data["hours"] = exam_data["hours"].str.replace('HRS', 'hours')
    

# Appending cleaned file to examlist_clean.csv
exam_data.to_csv('./data/examlist_clean.csv', mode='a', index=False)

# Converting cleaned file to json
json.dumps(json.loads(exam_data.to_json('./data/examlist_clean.json', orient='records')))