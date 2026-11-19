# Harsh Sharma — portfolio

A plain HTML/CSS/JS site. No build step, so Vercel serves it as is.

## Editing (everything is in `content.js`)

- **About, tagline, contact, awards:** change the text between the quotes.
- **Reorder films or stills:** cut a `{ ... }` film block (or a still's file name) and paste it higher or lower.
- **Add a film:** copy an existing film block, paste it where you want it, change the title, text and video id.
- **Hide something without deleting it:** add `hidden: true,` inside the film block.
- **Add a still:** upload the image into the main folder of the repo on GitHub (next to index.html), then add its file name to `stills`.
- **Change a film's poster:** set `poster: "still-05.jpg"` in its `video` line.
- **Colours:** the first lines of `style.css` (`--royal`, `--ink`).

On GitHub: open the file, click the pencil, edit, then **Commit changes**. Vercel redeploys in about a minute.
