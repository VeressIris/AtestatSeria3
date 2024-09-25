import os
from dotenv import load_dotenv
import google_auth_oauthlib.flow
import googleapiclient.discovery
import googleapiclient.errors
import pytube
import urllib.request
import json
from datetime import datetime
import re
import yt_dlp

scopes = ["https://www.googleapis.com/auth/youtube.readonly"]

class Movie:
    def __init__(self, title, release_date, description):
        self.title = title
        dt = datetime.strptime(release_date, "%Y-%m-%dT%H:%M:%SZ")
        self.release_date = dt.strftime("%b %d, %Y")
        self.description = description
        self.rating = 9
        self.categories = [""]

class Video:
    def __init__(self, title, release_date, description):
        self.title = title
        dt = datetime.strptime(release_date, "%Y-%m-%dT%H:%M:%SZ")
        self.release_date = dt.strftime("%b %d, %Y")
        self.description = description

class Show:
    def __init__(self, title, release_date, end_date, description):
        self.title = title
        self.release_date = release_date
        self.end_date = end_date
        self.description = description
        self.rating = 9
        self.categories = [""]
        self.episodes = []
    
    def to_dict(self):
        return {
            "title": self.title,
            "release_date": self.release_date,
            "end_date": self.end_date,
            "description": self.description,
            "rating": self.rating,
            "categories": self.categories,
            "episodes": [episode.__dict__ for episode in self.episodes]  # Convert episodes to dicts
        }

def download_thumbnail(videoID, title):
    video = pytube.YouTube(f"https://www.youtube.com/watch?v={videoID}")
    thumbnail_url = video.thumbnail_url
    urllib.request.urlretrieve(thumbnail_url, f"fireshipIO_thumbnails/{title}_thumbnail.jpg")

def write_video_data(video):
    file = open("videoData.json", "w")
    file.write('[')
    file.write(f'{json.dumps(video.__dict__)},\n')
    file.write(']')
    file.close()

def download_and_combine(url, output_path='downloads', ffmpeg_location='C:/PATH_Programs/ffmpeg.exe'):
    ydl_opts = {
        'format': 'bestvideo[height<=720]+bestaudio/best',
        'outtmpl': f'{output_path}/%(title)s.%(ext)s',
        'merge_output_format': 'mp4',  # Combine video and audio into MP4
        'ffmpeg_location': ffmpeg_location,
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
    except Exception as e:
        print(f"An error occurred: {e}")

def get_videos_from_playlist(youtube, playlist_id):
    videos = []
    request = youtube.playlistItems().list(
        part="snippet,contentDetails",
        maxResults=50,  # API allows a maximum of 50 results per page
        playlistId=playlist_id
    )
    
    while request:
        response = request.execute()
        videos.extend(response['items'])  # Collect video data from current page
        request = youtube.playlistItems().list_next(request, response)  # Get next page
    
    return videos

in100Seconds = "PL0vfts4VzfNiI1BsIK5u7LpPaIDKMJIDN"
cs101 = "PL0vfts4VzfNjQOM9VClyL5R0LeuTxlAR3"

def main():
    load_dotenv()

    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

    api_service_name = "youtube"
    api_version = "v3"
    client_secrets_file = os.getenv("CLIENT_FILE")

    flow = google_auth_oauthlib.flow.InstalledAppFlow.from_client_secrets_file(
        client_secrets_file, scopes)
    
    credentials = flow.run_local_server(port=0)

    youtube = googleapiclient.discovery.build(
        api_service_name, api_version, credentials=credentials)

    videos = get_videos_from_playlist(youtube, cs101)

    file = open("videoData.json", "w")
    file.write('[')
    
    episodes = [] # only for shows

    for item in videos:
        video_id = item['contentDetails']['videoId']
        title = item['snippet']['title']
        description = item['snippet']['description']
        published_at = item['snippet']['publishedAt']

        if ("Brainf**k" in title): continue

        download_thumbnail(video_id, re.sub(r"[ /?:]", "_", title))

        download_and_combine(f"https://www.youtube.com/watch?v={video_id}")

        # for shows:
        # video = Video(title, published_at, description[:re.search(r"\n|[^\x00-\x7F]", description).start()])
        # episodes.append(video)

        # write video data to json file
        video = Movie(title, published_at, description[:re.search(r"\n|[^\x00-\x7F]", description).start()])
        file.write(f'{json.dumps(video.__dict__)},\n')

    # write show data to json file
    # show = Show("CS101", episodes[0].release_date, episodes[-1].release_date, episodes[0].description)   
    # show.episodes = episodes
    # file.write(f'{json.dumps(show.to_dict(), indent=4)}')
    
    file.write(']')
    file.close()

if __name__ == "__main__":
    main()
