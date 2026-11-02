# Changelog

Newest first. Installers and the full notes are on the
[releases page](https://github.com/yuvrajangadsingh/camber/releases).

## 0.2.0 (2026-11-01)

The Arc features people said they would miss most, plus tab hygiene.

- Little window: links from other apps open in a small window over whatever you
  are doing (Cmd+Shift+N opens one too). Open in camber (Cmd+O) moves the page
  into the current space.
- Default browser: File > Make camber the Default Browser. On Linux,
  `xdg-settings set default-web-browser camber.desktop` if it doesn't stick.
- Air Traffic Control: Tab > Always Open Links to This Site in This Space. Links
  to that site and its subdomains from other apps land in that space. Rules
  survive a re-import from Arc.
- Split view: Tab > Split with… (or "split" in the command bar) puts two tabs of
  the space side by side. Cmd+Shift+\ closes it.
- Peek: Shift+click a favorite, or Cmd+Shift+click a pinned tab, to look at it
  over the page. Esc or a click outside closes it, Open as tab keeps it.
- Auto picture-in-picture: a playing video pops out when you leave its tab and
  goes back when you return.
- Per-site permissions: sites ask before they get the camera, microphone,
  location, notifications and the rest, once per site.
- Tab hygiene: drag to reorder (drop among the pinned ones to pin), hover close
  button, closing a tab returns to the one you came from, unpinned tabs unused
  for 12 hours are closed (Tab > Archive After), double-click a space to rename it.
- Tabs only load web and extension pages; nothing can point a tab at a local file.

Known gaps: a site that never asked reads camera, microphone and notifications as
"granted" until it asks; no Widevine; 1Password doesn't work yet; no auto-update,
no Windows arm64 build, no sync, Boosts or Live Folders. Nothing is signed.

## 0.1.0 (2026-10-28)

First build: Arc's sidebar, spaces, pinned tabs and command bar on Electron 45
(Chromium 156), for macOS, Windows and Linux. No AI features.

- Import from Arc (File > Import from Arc, or Import Arc File… for a copied file):
  spaces with names and colors, Arc's profiles (spaces that shared a profile
  share logins), favorites per profile, pinned tabs with their names, nested
  folders, today tabs. Importing again replaces the earlier import.
- Not imported: history, passwords, bookmarks, extensions, Boosts, Easels. Split
  views and tab groups become plain tabs.
- Chrome Web Store extensions, with their buttons in the sidebar.
- A sidebar note when a newer release is out.

Nothing is signed: macOS is ad-hoc signed and not notarized, Windows shows a
SmartScreen warning.
