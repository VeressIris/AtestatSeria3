# FireshipHub

Atestat seria 2.3 CoderDojo Web Dev
## Concept
**Long story short:** Movies & shows? Boring. Short coding videos? Exciting.

Love FireshipIO 💖😍

**Short long story:** Prompt wanted short 1-2 minunte videos -> immediately thought of FireshipIO's "... in 100 seconds" series and then *boom* this idea was born.

## Utility files
1. [**youtube_downloader.py**](youtube_downloader.py)
    - Uses the [YouTube Data API](https://developers.google.com/youtube/v3)
    - Automatically downloads the videos from a playlist, including their thumbnails
    - Writes their metadata into a json file
2. [**get_categories.py**](get_categories.py)
   - Reads through [videoData.json](src/videoData.json) and prints all of the categories that exist
   - Why? For the "all categories" page
