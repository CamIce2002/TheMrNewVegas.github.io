---
layout: default
title: Install Guide
nav_order: 2
description: Dungeons & Daedra Remastered
---

# Installation Guide

# Part 1: Preinstallation

:::tip

D&DR uses rootbuilder to allow for an overall smaller overall download size in addition to the use of MO2's virtual file system. In short, root builder places files virtually *in* your main Oblivion directory without *actually* editing your existing installation. Please read the below steps to ensure this can work without a hitch!

:::


## Requirements
:::note

- A Fresh Copy of Oblivion Remaster: Deluxe Edition in a **NONPROTECTED DIRECTORY** such as `Program Files`.
> The best place for your steam games is *always* the root of your drive
> 
> For example, this would be `C:\Steam\steamapps\common\Oblivion Remastered`
>
> You can relocate your Steam Library easily using [Lost Dragonist's Steam Library Tool](https://github.com/LostDragonist/steam-library-setup-tool/wiki/Usage-Guide)

- ~ 120 GB of Space (This does NOT include space needed for Oblivion Remastered)
> We are currently troubleshooting why rootbuilder is keeping a full copy of the game to minimize this issue

- [Net Runtime x64](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-8.0.5-windows-x64-installer)
- [Visual C++ x64](https://aka.ms/vs/17/release/vc_redist.x64.exe)
- A Premium Nexus Membership is **HIGHLY** reccommended 
:::


**Step 1:** If you have it, ensure One Drive is disabled on your computer.
- A tutorial can be found [here](https://support.microsoft.com/en-us/office/turn-off-disable-or-uninstall-onedrive-f32a17ce-3336-40fe-9c38-6efb09f944b0)

**Step 2:** Disable any third party anti-virus such as MalwareBytes.

**Step 3:** Ensure you have a clean install of Oblivion. You can do this by doing the following.
- If you have installed third party programs or mods, delete your Oblivion Remastered folder (Usually located at `C:\Steam\steamapps\common\Oblivion Remastered`)
- Additionally, go to your Windows Search Bar, type in `%USERS%`, from there navigate to `[Your Account]/Documents/My Games/Oblivion Remastered` and delete the Oblivion Remastered Folder
> If you have any saves you wish to keep, please ensure you back them up in a separate location before deleting this folder

**Step 4:** Reinstall Oblivion through Steam. Run the game once and open it to the main menu to allow file generation, then close out. 

# Part 2: Wabbajack Setup

**Step 5:** Download Wabbajack from [here](https://github.com/wabbajack-tools/wabbajack/releases/latest/download/Wabbajack.exe)

**Step 6:** Place the downloaded .exe into a folder on the root of your drive (IE: `C:/Wabbajack`) and run it.

**Step 7:** In Wabbajack, go to the settings Cogwheel at the bottom right, then log in to your Nexus Account.


# Part 3: List Installation

:::warning

PAY ATTENTION HERE. YOU WILL ONLY BE FOLLOWING ONE PART OF THESE STEPS OR THE OTHER, NOT BOTH. PLEASE PICK WHICHEVER IS BEST SUITED FOR YOUR NEEDS.

CURRENTLY, THE LIST CAN ONLY BE INSTALLED THROUGH OUR WABBAJACK FILE AND IS NOT ON THE GALLERY SO ONLY FOLLOW THESE STEPS FOR THE TIME BEING.

:::

## Installing the List From the Wabbajack Gallery (PENDING APPROVAL)

**Step 8A:** Inside of Wabbajack, select Browse Lists. Then search for "Dungeons & Daedra: Remastered"
> Ensure that the check box that says "Non-featured" is ticked.

**Step 9A:** Click the list when it pops up, then Download & Install at the bottom left. Give it some time to boot up.

**Step 10A:** Wabbajack may set your installation Location & Downloads Location Auatomatically at the top left
- If it doesn't, set your Installation Location to a root drive folder that you would like your modlist to be stored in (IE: `C:/Modlists/DNDR`)
- Your downloads location should autopopulate, but if this doesnt, simply choose the same directory and add downloads to the end (IE: `C:/Modlists/DNDR/downloads`)

**Step 11A:** Press the Install Button at the bottom right and go make a quick cup of coffee!

## Installing the List From the Wabbajack File

**Step 8B:** Download the Wabbajack file from Nexus. Once downloaded unzip the file to your desktop

**Step 9B:** With Wabbajack open, go to "Browse Lists" on the lefthand side, then click "Install From Disk" at the top right.

**Step 10B:** Select the Wabbajack file you just unzipped and press open.

**Step 11B:** Wabbajack may set your installation Location & Downloads Location Auatomatically at the top left
- If it doesn't, set your Installation Location to a root drive folder that you would like your modlist to be stored in (IE: `C:/Modlists/DNDR`)
- Your downloads location should autopopulate, but if this doesnt, simply choose the same directory and add downloads to the end (IE: `C:/Modlists/DNDR/downloads`)

**Step 12B:** Press the Install Button at the bottom right and go make a quick cup of coffee!

# Part 4: Post Installation

**Step 13:** Go to your modlist folder and open up the program Mod Organizer.exe

**Step 14:** Once open, go to the top right of MO2 to the dropdown. Click it and press "Edit"

**Step 15:** Ensure that the beginning of all paths in here match to where your Oblivion is located on your computer. Exit this menu once done.
> If they do not, change the paths to where your game is located

**Step 16:** In the dropdown again, select MagicLoader. Press Run. When Magic Loader Opens, press "Do Magic" and wait for it to complete. Then close Magic Loader.

**Step 17:** In the same dropdown, select "Dungeons & Daedra: Remastered", click play, and give yourself a pat on the back because you are done!

# Troubleshooting Installation Issues

**Load Order Issues:** If your load or mod order does not seem to be correct, follow the below steps
- Close out of Mod Organizer
- Go to our load order library [here]()
- Download the loadorder.txt and/or modlist.txt
- Navigate to your modlist location, then to `Profiles/Default`
- Copy & Paste the LoadOrder.TXT and/or Modlists.TXT you just downloaded into here and overwrite the old ones

