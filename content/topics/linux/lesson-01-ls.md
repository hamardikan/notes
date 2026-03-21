---
title: Linux Fundamentals - Lesson 01 (ls)
created: 2026-03-21
tags: [linux, killercoda, cli, ls, learning]
source:
  - https://killercoda.com/pawelpiwosz/course/linuxFundamentals
  - https://killercoda.com/pawelpiwosz/course/linuxFundamentals/lf-01-ls
---

# Lesson 01 - list files with `ls`

## Goal
Learn `ls` deeply enough to:
- list files and directories confidently,
- reveal hidden files,
- sort by time and size,
- format output for human reading and scripts.

## Quick Commands

```bash
ls
ls -l
ls -a
ls -al
ls -lt
ls -lS
ls -lh
ls -1
ls --format=commas
ls --help
```

## Core Concepts

### 1) What is `ls`
`ls` is a core Linux/Unix command to list directory contents.

### 2) Arguments style
- `-x` means short argument (single-letter style)
- `--word` means long argument (full-word style)

Important clarification:
- It is not "single vs multiple arguments".
- It is mostly "short option name vs long option name".
- Example: `ls -l -a` is same as `ls -la` (multiple short options can be combined).
- Example: `ls --color=auto` uses one long option.

### 3) Long listing (`ls -l`) columns
1. permissions
2. hard link count
3. owner
4. group
5. size
6. last modification time
7. filename

### 4) Hidden files
- dotfiles start with `.`
- `.` means current directory
- `..` means parent directory

### 5) File times
- `atime`: last access
- `mtime`: last content modification
- `ctime`: last metadata change

---

## Guided Practice

Paste your real terminal output under each section.

### Practice A - first look

```bash
ls
ls --color=no
ls --color=yes
ls --color=auto .
```

Output:

```text
root@ubuntu:~$ ls
File-01.txt  file-01  file-01.txt  file-02  filesystem  notmyfile  notmyfile2  testDir  testdir

root@ubuntu:~$ ls --color=no
File-01.txt  file-01  file-01.txt  file-02  filesystem  notmyfile  notmyfile2  testDir  testdir

root@ubuntu:~$ ls --color=yes
File-01.txt  file-01  file-01.txt  file-02  filesystem  notmyfile  notmyfile2  testDir  testdir

root@ubuntu:~$ ls --color=auto .
File-01.txt  file-01  file-01.txt  file-02  filesystem  notmyfile  notmyfile2  testDir  testdir
```

Mentor note:
- Great run. You proved color behavior correctly.
- `--color=no` disables color.
- `--color=yes` forces color.
- `--color=auto` shows color when output is a terminal.

Image (your screenshot):

```md
![practice-a](./images/lesson-01-practice-a.png)
```

### Practice B - more details

```bash
clear
ls -l .
ls -n
```

What to observe:
- names vs UID/GID output
- each `-l` column meaning

Output:

```text
root@ubuntu:~$ ls -l
total 168
-rw-r--r-- 1 root      root      149370 Mar 21 10:58 File-01.txt
-rw-r--r-- 1 root      root           0 Mar 21 10:58 file-01
-rw-r--r-- 1 root      root          18 Mar 21 10:58 file-01.txt
-rw-r--r-- 1 root      root           0 Mar 21 10:58 file-02
lrwxrwxrwx 1 root      root           1 Mar  4 09:06 filesystem -> /
-rw-r--r-- 1 testuser  testuser      18 Mar 21 10:58 notmyfile
-rw-r--r-- 1 otheruser otheruser     19 Mar 21 10:58 notmyfile2
drwxr-xr-x 2 root      root        4096 Mar 21 10:58 testDir
drwxr-xr-x 3 root      root        4096 Mar 21 10:58 testdir

root@ubuntu:~$ ls -n
total 168
-rw-r--r-- 1    0    0 149370 Mar 21 10:58 File-01.txt
-rw-r--r-- 1    0    0      0 Mar 21 10:58 file-01
-rw-r--r-- 1    0    0     18 Mar 21 10:58 file-01.txt
-rw-r--r-- 1    0    0      0 Mar 21 10:58 file-02
lrwxrwxrwx 1    0    0      1 Mar  4 09:06 filesystem -> /
-rw-r--r-- 1 1001 1001     18 Mar 21 10:58 notmyfile
-rw-r--r-- 1 1002 1002     19 Mar 21 10:58 notmyfile2
drwxr-xr-x 2    0    0   4096 Mar 21 10:58 testDir
drwxr-xr-x 3    0    0   4096 Mar 21 10:58 testdir
```

Mentor note:
- Perfect observation.
- `clear` only clears visible terminal screen; it does not delete command history.
- `-l` = long format (human-friendly owner/group names).
- `-n` = numeric owner/group IDs (UID/GID numbers).

### Practice C - hidden files

```bash
ls
ls -a
ls .
ls ..
ls -A .
ls -al .
```

What to observe:
- why `-a` reveals dotfiles
- difference between `-a` and `-A`

Output:

```text
root@ubuntu:~$ ls
File-01.txt  file-01  file-01.txt  file-02  filesystem  notmyfile  notmyfile2  testDir  testdir

root@ubuntu:~$ ls -a
.  .bash_history  .hidden-file  .ssh     .vimrc      File-01.txt  file-01.txt  filesystem  notmyfile2  testdir
.. .bashrc        .profile      .theia   .wget-hsts  file-01      file-02      notmyfile   testDir

root@ubuntu:~$ ls .
File-01.txt  file-01  file-01.txt  file-02  filesystem  notmyfile  notmyfile2  testDir  testdir

root@ubuntu:~$ ls ..
bin  bin.usr-is-merged  boot  dev  etc  home  lib  lib.usr-is-merged  lib64  lost+found  media  mnt  opt  proc  run  root  sbin  sbin.usr-is-merged  snap  srv  swapfile  sys  tmp  usr  var

root@ubuntu:~$ ls -A
.bash_history  .hidden-file  .ssh    .vimrc      File-01.txt  file-01.txt  filesystem  notmyfile2  testdir
.bashrc        .profile      .theia  .wget-hsts  file-01      file-02      notmyfile   testDir

root@ubuntu:~$ ls -al
total 204
drwx------  6 root      root       4096 Mar 21 10:58 .
drwxr-xr-x 22 root      root       4096 Mar  4 09:06 ..
-rw-------  1 root      root         10 Feb 10  2025 .bash_history
-rw-r--r--  1 root      root       3234 Mar  4 09:07 .bashrc
-rw-r--r--  1 root      root          0 Mar 21 10:58 .hidden-file
-rw-r--r--  1 root      root        161 Apr 22  2024 .profile
drwxr-xr-x  2 root      root       4096 Mar  4 09:05 .ssh
drwxr-xr-x  2 root      root       4096 Mar  4 09:07 .theia
-rw-r--r--  1 root      root        109 Mar  4 09:07 .vimrc
-rw-r--r--  1 root      root        165 Mar  4 09:07 .wget-hsts
-rw-r--r--  1 root      root     149370 Mar 21 10:58 File-01.txt
-rw-r--r--  1 root      root          0 Mar 21 10:58 file-01
-rw-r--r--  1 root      root         18 Mar 21 10:58 file-01.txt
-rw-r--r--  1 root      root          0 Mar 21 10:58 file-02
lrwxrwxrwx  1 root      root          1 Mar  4 09:06 filesystem -> /
-rw-r--r--  1 testuser  testuser     18 Mar 21 10:58 notmyfile
-rw-r--r--  1 otheruser otheruser    19 Mar 21 10:58 notmyfile2
drwxr-xr-x  2 root      root       4096 Mar 21 10:58 testDir
drwxr-xr-x  3 root      root       4096 Mar 21 10:58 testdir
```

Learner interpretation:
- `ls -a` shows all files including hidden files.
- `.` is current directory and `..` is parent directory.
- `ls -A` is almost all (excludes `.` and `..`).
- `ls -al` combines all files with long listing details.

Mentor feedback:
- Excellent interpretation.
- "Parent directory" is the best term (more precise than parent folder).
- Your command-combination explanation is correct: `-al` is combined short options.

### Practice D - sort by time

```bash
date +%s
date
ls -lt
ls -ltu
ls -ltc
touch theNewestFile
ls -ltu
ls -ltc
echo "hello world!" > file-02
ls -ltu
ls -ltc
chmod 444 file-01
ls -ltu
ls -ltc
```

What to observe:
- when order changes for `-u`
- when order changes for `-c`

Learner interpretation (checkpoint before running):
- `ctime` is metadata change time (permissions, moving/renaming, ownership, etc.).
- `atime` is last access time.
- `mtime` is last content modification time.

Mentor feedback:
- Excellent. That model is correct and ready for the next exercise.

Output:

```text
root@ubuntu:~$ date +%s
1774094082

root@ubuntu:~$ date
Sat Mar 21 11:54:42 UTC 2026

root@ubuntu:~$ ls -ltu
...
drwxr-xr-x 2 root root 4096 Mar 21 11:54 testDir
drwxr-xr-x 3 root root 4096 Mar 21 11:54 testdir
...

root@ubuntu:~$ touch theNewestFile
root@ubuntu:~$ ls -ltu
...
-rw-r--r-- 1 root root 0 Mar 21 11:54 theNewestFile
...

root@ubuntu:~$ echo "hello world!" > file-02
root@ubuntu:~$ ls -ltc
...
-rw-r--r-- 1 root root 13 Mar 21 11:54 file-02
...

root@ubuntu:~$ chmod 444 file-01
root@ubuntu:~$ ls -ltc
...
-r--r--r-- 1 root root 0 Mar 21 11:54 file-01
...
```

Learner interpretation:
- `theNewestFile` went to the top after `touch` because it was just created.
- `ls -ltu` is about access time (`atime`).
- `ls -ltc` moved files after metadata changes, like `chmod`.

Mentor feedback:
- Great analysis.
- Important correction: `ls -ltc` uses `ctime` for sorting/display, not both `mtime` and `ctime`.
- Baseline behavior is `ls -lt` (mtime). Then `-u` switches to atime, and `-c` switches to ctime.

Checkpoint Q/A:
- Q: If you run `echo "x" >> file-01.txt`, which one should reflect it most directly: `-lt`, `-ltu`, or `-ltc`?
- Learner answer: `-lt` because it modifies file content.
- Mentor validation: Correct. Content append updates `mtime`, so `ls -lt` is the primary one to watch.

### Practice E - sort by size

```bash
ls -s
ls -ls
ls -lS
ls -lh
ls -l --si
ls -lSh
```

What to observe:
- extra blocks column from `-s`
- case-sensitive behavior of `-s` vs `-S`

Output:

```text
[paste output here]
```

### Practice F - formatting

```bash
ls -1
ls --format=commas
ls -m
ls --format=long
ls -lQ
ls -l --time-style=locale
ls -l --time-style=iso
ls -l --time-style=full-iso
```

Output:

```text
[paste output here]
```

### Practice G - extra useful options

```bash
ls -al --author
ls -ald
ls -ali
ls -alR
ls -alr
ls -alSr
ls --version
ls --help
```

Output:

```text
[paste output here]
```

---

## Quiz + Answers

Q1. Whole command for long list in current directory?
- Answer: `ls -l .`

Q2. Argument for sorting by time?
- Answer: `-t`

Q3. For long color argument, use `--`, `-`, or `.`?
- Answer: `--` (example: `ls --color=auto`)

Q4. UID represents?
- Answer: User identifier

Q5. How to list parent directory?
- Answer: `ls ..`

Q6. I have `ls -lt`. What to add to see content modification order?
- Answer: nothing; `-t` with default long list already uses `mtime`

Q7. Full command for long + human readable sizes?
- Answer: `ls -lh`

Q8. Full command for comma-separated short list (not `-m`)?
- Answer: `ls --format=commas`

Q9. Short list, one per line, with quotes?
- Answer: `ls -1Q`

---

## Reflection

- Easiest part:
- Most confusing part:
- 3 commands I will keep using:
  1.
  2.
  3.
- What I will practice tomorrow:
