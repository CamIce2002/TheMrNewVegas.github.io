---
layout: default
title: Installation
nav_order: 2
description: D&DR Install Guide
---

# Installation Guide

### [Current Modlist Compatible Oblivion Version (OBR V1.1 / June 5th Manifest))](https://steamdb.info/depot/2623191/manifests/)
- **Command for Steam Console**
```
download_depot 2623190 2623191 3680196445693511195
```
- For steps on how to downgrade your game to match this, please go to **Part 5** of the installation guide.
- Downgrade your game before starting any list installation steps **if it is required**. Your list will install incorrectly otherwise.


# Part 1: Preinstallation

:::tip

We currently use rootbuilder. Not only does this save you space, but prevents any overwrites or edits occurring to your base game folder. 

Please follow the below instructions to the letter to ensure your base install remains unaffected/you can play the list successfully :). 

:::


## Requirements
:::note

- A Fresh Copy of Oblivion Remaster: Deluxe Edition in a **NONPROTECTED DIRECTORY** such as `Program Files`.
> The best place for your steam games is *always* the root of your drive
> 
> For example, this would be `C:\Steam\steamapps\common\Oblivion Remastered`
>
> You can relocate your Steam Library easily using [Lost Dragonist's Steam Library Tool](https://github.com/LostDragonist/steam-library-setup-tool/wiki/Usage-Guide)

- ~ 130 GB of Space

- [Net Runtime x64](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-8.0.5-windows-x64-installer)
- [Visual C++ x64](https://aka.ms/vs/17/release/vc_redist.x64.exe)
- A Premium Nexus Membership is **HIGHLY** reccommended 
:::


**Step 1:** If you have it, ensure One Drive is disabled on your computer.
- A tutorial can be found [here](https://support.microsoft.com/en-us/office/turn-off-disable-or-uninstall-onedrive-f32a17ce-3336-40fe-9c38-6efb09f944b0)

**Step 2:** Disable any third party anti-virus such as MalwareBytes.

**Step 3:** Ensure you have a clean install of Oblivion Remastered. You can do this by doing the following.
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
> If they do not, change the paths to where your game or associated executables are located

**Step 16:** In the dropdown again, select "Dungeons & Daedra: Remastered", then press "Run".

Enjoy playing the list!

# Part 5: Downgrading Your Game to Make it Compatible
When Oblivion Remastered updates, there will likely be a window where several incompatibilities exist. To prevent this from stopping you from playing your game/the modlist from working, you can do the following.

### Step 1 - Setting Your Steam Update Preference
- Go to Steam, then go to your Library
- Right click your Oblivion Remastered and go to "Properties", then the "Updates" section
- In the "Automatic Updates" dropdown, select "Wait Until I Launch the Game", then you may exit out.

### Step 2 - Finding the needed information
- Go to the [Oblivion Remastered SteamDB Page](https://steamdb.info/depot/2623191/manifests/)
- Once inside of this page, go to Depots. Look through these and identify *the most recent depot* and *the second most recent depot*
- Now that you have identified the most recent and second most recent update, click the numbers for the second most recent update.
- Copy down the *Depot ID*, *Build ID*, & *Manifest ID* found on this page

### Step 3 - Downgrading your game
- Press the Windows Key + R, then type the following in
```steam://open/console```
- This will open steam to the console section.
- In there enter this command
```download_depot appid depotid target manifestid```
- Once this download has finished, go to your ```steam/steamapps``` folder and look for a file titled ```appmanifest_2623190.acf```
- Right click this, go to properties, then select **"Read Only"**
- The game should now be downgraded and any forced updates prevented. If you would like to move on to a new update, you will need to disable the read only property in ```appmanifest_2623190.acf```


- For inquiries into which update is supported, please check the top of the installation guide [here](https://www.modlists.net/docs/3ddr/Installation).
> This may not always be updated in a timely manner. Please do your due dilligence with the guide above to ensure your list works.

# Troubleshooting Installation Issues

**Load Order Issues:** If your load or mod order does not seem to be correct, follow the below steps
- Close out of Mod Organizer
- Grab our loadorder.txt, modlist.txt, mods.txt, & paks.txt from [Load Order Library](https://loadorderlibrary.com/lists/dungeons-daedra-2)
- Navigate to your modlist location, then to `Profiles/Default`
- Copy & Paste the files you just downloaded into here and overwrite the old ones

**Hanging Loads/Issues with MagicLoader or UE4SS**
- Close Your Game by ALT-F4ing or whichever way is available
- Go the the bottom left of the Mod Pane in MO2 and right click "Overwrite". Then press "Clear Overwrite".
- After this is done, relaunch your game. If the issue persists after multiple attempts, create a bug or help report.
