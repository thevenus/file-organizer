# File Organizer CLI tool
## A CLI tool for organizing files in a folder according to their birthdates.
### Files will be organized in dir/year/month format
### Author: Fuad Mammadzade

For example, let's assume you want organize files in /home/user/photos and you have photos in that directory from 2019 November and 2018 December. In this occassion, program will create two parent folders, named 2019 and 2018, and their subfolders November and December, respectively      
****
**Command Line Interface:** 
* **Name of tool:** organize
* **Arguments:** 
    * *Directory path*, in which the files will be organized
* **Usage:** `$ organize [path]`

**How Program Works**
1. Accepts directory path in the argument
2. For each file in the directory:
    1. Check the birth year and month
    2. destinationpath = dir/year/month
    3. If destinationpath does not exists than create it
    4. move files from source to destination        
    

**TODOs:**
- [x] Creating Command line interface that accepts arguments
- [x] Making script file executable so that it is possible to run the program just with its name
- [ ] Understanding Asynchronous programming and trying to implement the program in asynchronous way

    
