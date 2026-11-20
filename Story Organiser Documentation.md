# Story Organiser: Documentation

Nov 19, 2026

## Overview

Story Organiser is a private planning app for long fiction. It keeps the structure of your book (files, chapters, arcs, routes, characters, places, events, a calendar) while the prose stays in your Word files.

It is one web page you open in the browser or install on your phone. It runs entirely on your device and, if you sign in, in your own OneDrive. There is no server of ours in between.

**What it stores**

- Names, headings and word counts read from your Word files.
- Everything you add around them: dates, point of view, characters, locations, tags, summaries, notes, arcs, routes, variants, events, calendar items, cover pictures, the world settings.

**What it never stores**

- Your manuscript text. When the app reads a chapter (Reader, Find repeats, Copy chapter) it holds the text in memory only and forgets it when you close the tab.

**When it writes into your Word files**

Only when you ask, through four tools: Write anchors and dates, Add a chapter to Word, Move or copy a chapter, and the Chapters export (which creates a new file). Each of the three that change an existing file saves a backup copy of it first.

**The main places**

| Place | What it is for |
| --- | --- |
| Documents | Your Word files in reading order, grouped by arc |
| Arcs | Storylines and sub arcs, with cover, summary, notes |
| Chapters | Every chapter on its own, by story date or reading order; export to Word |
| Timeline | Events and documents in story order |
| Calendar | Dated chapters, calendar items, relationships, colours, world and sky |
| Characters, Locations | Cards linked to the chapters they appear in |

Tools (a menu in Documents) holds Routes, Chapter order, Reading path, Checks, Revision pass, Export, Schedules and whole-folder import. Search is `Ctrl/Cmd + K` or `/`.

## Getting started

You can use the app with no account, or sign in with Microsoft so your library follows you across devices.

### Two ways to run it

|  | Local | OneDrive edition |
| --- | --- | --- |
| Where the library lives | In this browser only (`story-organiser-v1`) | In your OneDrive at `Story Organiser/data.json`, shared by every device |
| Reading Word files | You pick the files each time | The app reads your manuscript folder directly |
| Writing into Word | Downloads a changed copy | Writes into the file, with a backup |
| Safety net | Backup to a JSON file by hand | Hourly backups, restore, shrink guard |

The OneDrive edition needs a free Azure app registration (single-page app). In Settings, OneDrive, paste its Application (client) ID. The page shows the redirect address to register. After that, "Sign in with Microsoft" works on any device.

### First steps

1. Create a project from the Projects menu. Everything below belongs to one project.
2. Add your Word files: Tools, Whole folder (OneDrive) or Add documents. Put them in reading order.
3. Open a file and press Read this (or Refresh) so the app reads its headings. Chapters are the headings at the chapter level you set in Settings (default Heading 2).
4. Give chapters a story date, a point of view, characters, locations and an arc.

### Project settings

Settings has a section for the current project:

- **Name** and an optional **OneDrive folder link** (adds an OneDrive button to Documents).
- **Timeline date sorting**: real calendar (understands 12 August 1248, August 1248, 1248, 1248-08-12) or sort numbers for a made-up calendar.
- **Calendar**: Edit calendar opens the months, weeks and leap-year editor.
- **Chapter heading level** and **names for each heading level**.
- **Versions**: your own variants beside Canon and Alternate (for example Draft 1 or Cut).
- **Theme**: 25 themes, including System.
- **Backup**: export or restore your library as JSON.

### Install it as an app

On a phone, open the site in Chrome and use Install app (or Add to Home screen). It opens full screen with its own icon. The page loads the newest files first and only uses its saved copy when you are offline. Sign-in and OneDrive requests are never saved.

## Documents

A document is one Word file. The Documents list is your book in reading order, and its numbers are reading positions.

### The document card

| Field | What it does |
| --- | --- |
| Kind | Draft, Outline, Notes, Research, Front matter or Back matter. Outline, Notes and Research sit outside the reading order by default |
| Variant | Canon, Alternate, or one of your own versions |
| Route | Which branch of the story the file belongs to |
| Replaces | Marks this file as a rewrite of another one. With one route selected, the replacement is shown and the original is hidden. With all routes shown, both appear |
| Include in reading order and timeline | Overrides the kind. Turn it off for anything that is not part of the story |
| Arc, status, tags, POV, characters, locations | File-level details. Chapters inside the file can override the arc and carry their own details |

### The list

- **Reading order.** Drag the grip, or use the arrow keys on the focused grip, to reorder. `[` and `]` move the selection to the previous or next document.
- **Grouped by arc.** Each arc appears once, with its sub arcs as `Year 1 › Investigation`. A file shows under its own arc and again, as a read-only row, under every arc that one of its chapters is assigned to. Files with no arc come last.
- **Outside the reading order.** Notes, outlines and anything switched off sit in their own group at the bottom.
- **Order by date.** One button rearranges every chapter by story date. Undated ones go last in their current order. You are asked first and it can be undone.
- **Filters.** Variant (Canon by default, then Alternate, your versions, All variants, Trash), status, arc, tag, kind, and search. Filtering by a parent arc includes its sub arcs.
- **Route buttons.** Shown when the project has more than one route. They filter the list, and All is the default. See Arcs, routes and variants.
- **Find repeats.** Lists chapters with the same name, and, if you press Compare the text, chapters whose text is identical or very similar (chapters of 25 words or more).

### Removing documents

- **Trash.** Moves a document to the Trash view. Restore brings it back; Delete permanently removes it. Undo works straight after.
- **A Deleted folder in OneDrive.** A Word file inside any folder in your manuscript folder whose name contains Deleted or Trash counts as deleted. The app trashes its document and sync does not bring it back. Move the file back out and the document returns.
- **Permanently deleted files** are remembered so sync skips them. Settings, OneDrive lists them with Allow again.
- **New files picker.** When sync finds Word files that are not in the organiser, it asks which to add. Unticked ones are remembered and left alone.

## Chapters

Chapters are the headings inside your Word files at the chapter level you chose in Settings (default Heading 2). Use real Heading styles in Word so the app can read them.

### What a chapter carries

- Story date, point of view, characters, locations, tags and a summary.
- An arc, which can differ from the file's arc.
- A variant (Canon, Alternate or your own).
- Notes with a status of Open, In progress or Done.

Open a file in Documents and expand a chapter to edit these. The Chapters view edits the same fields.

### Keeping headings in step with Word

- **Read this / Refresh** reads the file again and updates headings and word counts. Only heading text and counts are saved, never prose.
- Each heading is matched by its Word bookmark, or failing that by level, title and position. A heading you renamed in Word shows as not found.
- **Move the info** lets you pick the heading a renamed chapter now corresponds to. Dates, POV, characters, locations, tags, summary and notes are carried over.
- **Write anchors and dates into Word** (see Word and OneDrive) adds invisible bookmarks so renames are tracked from then on.

### The Chapters view

Every chapter on its own row, with the same fields as Documents.

- **Story date** orders chapters by their date; undated chapters follow their file. **Reading order** follows your book and can be dragged.
- **From and To** limit the list to a date range. Try a year, a month and year, or a full date.
- **Arc and Route** dropdowns show only the chapters of one arc (sub arcs included) or one route (plus the main story it branches from). Clear filters resets everything. Dragging is off while a filter is active.
- **Export to Word.** Tick chapters and export them, in story-date order, to one new Word file saved next to your files. You get headings and text only, with an option to put the story date above each chapter. The originals are not changed.

### Other ways to work with chapters

| Tool | What it does |
| --- | --- |
| Chapter order | Your own reading order across files. Chapters from different files can be mixed. Move a chapter anywhere; the document list follows |
| Reading path | Follow one route in order |
| Extract chapters | Copies chosen chapters (heading and text) into a new Word file. Formatting is not kept |
| Checks | Scenes in reading order whose dates or point of view do not add up. Ignore the ones you meant |
| Revision pass | Every open note, in reading order |
| Find repeats | Same names and same or similar text |

## Word and OneDrive

The app reads your Word files to learn their headings and word counts. It changes them only through the tools below, and only when you press the button.

### Reading and syncing

- **Manuscript folder.** Choose it once (Settings, OneDrive). The app scans it, including subfolders, and links each file by its OneDrive id, so renaming or moving a file does not break the link.
- **Syncing.** While you work, the app checks the folder. Files that changed are read again; files it does not know are offered in the New files picker; files in a Deleted or Trash folder are ignored.
- **What the app sees.** The Settings, OneDrive scan shows what is new, renamed, changed, missing, skipped or up to date, with a button to add and refresh.
- **Portraits folder.** Images named after a character (for example `Danielle Stewart.jpg`) become that character's portrait. An image named after an arc becomes the arc's cover.

### Tools that write into Word

Each of these saves a copy of the file first in a hidden `.so-backups` folder next to it, and writes nothing if the file changed in OneDrive meanwhile. Close the file in Word first. Without a OneDrive link, they produce a changed copy in your downloads instead.

| Tool | Where | What it does |
| --- | --- | --- |
| Write anchors and dates | Document card | Hidden bookmarks on chapter headings, the story date as a Subtitle line under each heading, and optionally renaming headings in Word to match the app |
| Add a chapter to Word | Document card | Inserts plain text into the file at the end or after a chapter. Paste text, or copy a chapter from another document. Italics, images and footnotes are not carried over |
| Move or copy to another file | Chapter row | Sends a chapter, with its formatting, into another OneDrive file at a chosen position. Copy keeps it in the original; Move removes it once it is safely in the other file. The chapter's arc, date, point of view, characters, locations and tags go with it. It stops if the chapter has images, footnotes or comments |

### Tools that create a new file

- **Extract chapters** copies the heading and text of ticked chapters into a new Word file next to the original. Formatting is not kept, and the original is not changed. The source then shows a warning that the text is still in it, so you can delete it there and read the headings again.
- **Export to Word** (Chapters view) writes the ticked chapters, in story-date order, to one new file.

### If something goes wrong

| Message | Meaning |
| --- | --- |
| File changed in OneDrive meanwhile | Someone or something saved the file while the app was working. Nothing was written. Try again |
| Word has the file open | OneDrive would not let the app write. Close it in Word |
| Could not find the chapter or position | The file no longer matches the app. Refresh the document, then retry |

The backup copy of any file the app changed sits in `.so-backups` beside it.

## Arcs, sub arcs, routes and variants

Four separate ideas that are easy to mix up. Arcs say what a chapter is about. Variants say how official it is. Routes say which branch of the story it belongs to. Replaces says which document it stands in for.

### Arcs and sub arcs

- **Arc.** A named storyline or period (Year 1, The Investigation). Each has a colour, a summary, notes and an optional cover picture.
- **Sub arc.** An arc inside another arc. Make one with **Add a sub arc** on the parent, or set **Part of** on any arc. Year 1 can hold Investigation 1 and Investigation 2, and so on to any depth.
- **Where arcs are set.** On a whole document, which then groups under that arc in the Documents view, and on single chapters. A document can show under several arcs when its chapters belong to different ones.
- **Cover and summary.** Open the arc to add a picture and a summary. Covers are kept inside the app's data (resized to be small). **Save to portraits folder** puts a copy in OneDrive, and **Download** gives you the file. A picture named after the arc in the portraits folder is picked up automatically.
- **Arcs or events?** Use sub arcs for containment (this belongs inside that). Use events and tags for threads that cut across arcs, such as Investigation 1, 2 and 3 scattered through several years.

### Variants

A document's **Variant** says its status in your story.

| Variant | Meaning |
| --- | --- |
| Canon | The real version of events. Shown by default, whatever its route |
| Alternate | A what-if, draft or discarded version. Hidden until you ask for it |
| Custom | Any variant name you type, for your own categories |

The old AU variant no longer exists; it was the same as Alternate and was converted.

### Routes

A route is a branch of the story, for when canon splits and you have not chosen which branch wins.

- **Route.** Give documents a route (Route 1, Route 2). Documents with no route are shared trunk and appear on every route.
- **Filter, not gatekeeper.** Routes are only a filter. All routes is the default, so nothing disappears just because the story forks. Pick one or more routes to see those branches plus the trunk.
- **Where it applies.** The Documents, Chapters, Timeline and Reader views use the route filter.
- **Two branches, no canon.** If both branches are still undecided, leave both as Canon on their own routes. Both show under All routes, and you can look at one at a time. When you choose, set the loser to Alternate.

### Replaces

**Replaces** (on a document) names another document this one is a rewrite or substitute for. Use it for a second draft of a chapter set or a branch that takes over from a point. The replaced document stays in the app but is left out of the reading order and timeline, so you do not count the same events twice. It is separate from variant and route, and optional.

**Include in reading order and timeline** is a simple switch. Untick it for notes, outlines or anything that is not part of the story proper. Such documents go to the bottom of the Documents view.

## Characters, locations, events and the timeline

These hold the facts of your story. Chapters link to them, and the timeline is built from the links.

### Characters

- **Profile.** Name, portrait, aliases, notes and any fields you add.
- **Portraits.** Put an image named after the character in the portraits folder in OneDrive and the app picks it up. Or set one inside the app.
- **Chapter links.** Tick characters on a chapter to say who appears. Each character page then lists their chapters in story order.
- **Point of view.** A chapter can also name its POV character, so you can see whose eyes carry each stretch.

### Locations

Same idea as characters: a name, notes and a picture, plus the chapters set there. A location can sit inside another (a room in a house in a town).

### Events and tags

An event is a thread or happening that you link chapters to, for example the Investigation 1, 2 and 3 threads. Chapters from any arc or file can share one. Use events for things that cut across arcs, and sub arcs for things that sit inside them.

### Timeline

- **Order.** Chapters sort by story date. Chapters with no date keep their place in the reading order, beside their neighbours.
- **Order by date.** In the Documents view, this button re-sorts everything by story date in one go. Undo brings the old order back.
- **Filters.** The route filter and variant choice apply here as well. Documents switched out of the reading order and timeline are skipped.
- **Story dates.** Dates follow your calendar (see the next section). The date can be set on a chapter, and the app can fill dates from headings if they hold one.

### Finding repeats

**Find repeats** (Chapters view) lists chapters with the same title or near-identical text, so you can spot duplicates left over from drafts. It compares only what the app already knows (titles and word counts), not your prose.

## Calendar

The calendar turns story dates into something you can see. It works for a real-world calendar or one you invent, and nothing about any particular world is built in.

### Custom calendars

- **Months, weeks and days.** Define your own month names and lengths, days per week, and which days are work or rest days.
- **Years.** Story years must have three or four digits (100 to 9999). Years below 100 are not accepted.
- **Eras and numbering.** Name the era and choose the start year.
- **Day length.** The hours in a day can differ from 24.

### Items and relationships

- **Items.** Put chapters, events, birthdays or anything else on a day. Click a day to add or open one.
- **Relationships.** Link items to characters and locations, and the links show on both sides.
- **Ages.** Birth dates give each character's age on any day you view.

### Painting days

Pick a colour in the paint bar and click days, or drag across several, to colour them however you like, for any reason or none. Colours are saved with your project and shown inline, so they show up in every theme. Choose the eraser to clear them.

### World and sky

A generic system for the physical world of your story. Open **World and sky** and add only what your world has.

| Part | What it holds |
| --- | --- |
| Day | Hours per day, and names for parts of the day (dawn, dusk, your own terms) |
| Bodies | Suns, moons, stars or anything that crosses the sky |
| Cycles | A repeating cycle of any length, with named phases, for example a moon with eight phases, or a ten year cycle with two states |
| Terms | Your own vocabulary (types of light, names for hours) |
| Seasons | Named seasons with start dates, which can follow a cycle |
| Festivals | Named days that repeat yearly, with optional nicknames |

The calendar day then shows the phases, season and festivals that apply, and the month header shows the season. Leave it empty and nothing extra appears.

### School planner build

There is a second build, `calendar.html`, made for planning a school year. It shows the calendar, items and painting, but has no Documents list and no World and sky section. It reads the same project data.

### Installing as an app

Both builds can be installed as a web app from the browser menu (Install or Add to Home Screen). They work as normal pages in the browser; the install gives an icon and a window of their own. There is no Android APK.

## Reader, data safety, backups and export

### Reader

Open any chapter to read it inside the app. Prose is read from your Word file on demand and is never stored by the app.

- **Copy chapter.** Copies the whole chapter text to the clipboard.
- **Open file.** Opens the Word file in OneDrive.
- **Navigation.** Move to the previous or next chapter in reading order. The route filter applies.

### Where your data lives

- **Project data.** Structure only (documents, headings, arcs, characters, dates, notes, colours, covers). It is saved as `data.json` in the `Story Organiser` folder in OneDrive, or in the browser if you are not signed in.
- **Your prose.** Stays in your Word files. The app keeps no copy.
- **Conflicts.** The app checks the file's version before each save. If it changed elsewhere, it stops and asks instead of overwriting.

### Backups

- **Automatic.** Backups of the project data go to `Story Organiser/backups`.
- **Before Word writes.** A copy of each Word file is kept in a hidden `.so-backups` folder beside it before the app changes it.
- **Undo.** Most edits can be undone from the toast that appears after them.

### Restore

Open Settings, Backups, pick a backup by date and restore it. The current state is backed up first, so a restore can itself be reversed.

### Import and export

| Action | Result |
| --- | --- |
| Export project | A JSON file with all structure data |
| Import project | Loads a JSON file. Choose to replace everything or merge |
| Export to Word | Chosen chapters in story-date order, as a new .docx |
| Download cover | An arc picture as an image file |

### Settings note

The Settings hint says your Word files are only read, never changed. That text is out of date: the app writes into Word, but only through the tools in the Word and OneDrive section, and only when you press the button.

## Limits, troubleshooting and glossary

### Known limits

- **Word only.** The app reads .docx files. Other formats are not read.
- **Add a chapter** inserts plain text. Italics, images and footnotes are not carried over. **Extract** to a new file also drops formatting.
- **Move or copy** keeps formatting but stops on chapters with images, footnotes or comments.
- **Calendar years** must be 100 or above.
- **No APK.** Install as a web app instead.
- **Not yet proven on your real OneDrive and Word.** Tested against stand-ins only: the Deleted folder fix, arc cover upload, Move or copy, and Add a chapter. If one misbehaves, note the exact message and folder name and report it.

### Troubleshooting

| Problem | Try this |
| --- | --- |
| Deleted files come back | Check the folder is named Deleted or Trash and report its exact name if they persist |
| A write was refused | Close the file in Word and retry |
| Headings out of date | Refresh the document, or run the OneDrive scan |
| Colours or covers not showing | Reload the page; covers must be http, https or app-stored images |
| App out of date after an update | Reload twice, since the installed web app caches pages briefly |
| Something broke | Restore the last backup (Settings, Backups) |

### Glossary

| Term | Meaning |
| --- | --- |
| Arc | A named storyline or period, with optional sub arcs |
| Sub arc | An arc inside another arc |
| Canon | The real version of events |
| Alternate | A what-if or discarded version |
| Route | A branch of the story, used as a filter |
| Replaces | Marks a document as standing in for another |
| Anchor | A hidden bookmark on a Word heading that lets the app find the chapter |
| Event | A thread chapters are linked to across arcs |
| Story date | The date within your world, not the real one |
| World and sky | Optional description of days, bodies, cycles, seasons and festivals |
