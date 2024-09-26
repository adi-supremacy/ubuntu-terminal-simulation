// Import xterm's escape codes for color formatting
const ESC = '\x1b[';

// Function to return colorful text
const colorize = (text, colorCode) => `${ESC}${colorCode}m${text}${ESC}0m`;

// List of commands with aligned, colorful, and playful output
export const commands = [
  {
    command: 'pwd',
    output: [
      `${colorize('/home/user/adarshkanthraj/portfolio', 36)}`
    ]
  },
  {
    command: 'python -x HelloWorld.py',
    output: [
      `${colorize('Hello, Welcome to my Linux Side, where coding meets creativity!', 32)}`
    ]
  },
  {
    command: 'uname -a',
    output: [
      `${colorize('Linux ubuntu 5.4.0-66-generic #74-Ubuntu SMP x86_64 GNU/Linux', 34)}`,
      `${colorize('Running on Creativity OS, powered by endless imagination and innovation!', 34)}`
    ]
  },
  {
    command: 'whoami',
    output: [
      `${colorize('adarshkanthraj lin(ux)er', 33)}`
    ]
  },
  {
    command: 'ls -l',
    output: [
        `drwxr-xr-x 2 user group ${colorize('10K', 33)} Mar 12 1996 ${colorize('Creative_Projects', 33)}`,
        `drwx------ 2 user group ${colorize('15K', 33)} Sep 05 1998 ${colorize('Inspiration_Folder', 33)}`, 
        `drwxrwxr-x 2 user group ${colorize('8K', 33)} Feb 22 2001 ${colorize('Ideas_Trove', 33)}`,
        `dr-xr-xr-- 2 user group ${colorize('12K', 33)} Jun 14 2004 ${colorize('Music_Station', 33)}`,
        `drwxrwx--- 2 user group ${colorize('20K', 33)} Nov 18 2009 ${colorize('Visual_Memories', 33)}`,  
        `drwxr-x--- 2 user group ${colorize('25K', 33)} Apr 30 2015 ${colorize('Coding_Lab', 33)}`,
    ]
  },
  {
    command: 'df -h',
    output: [
      `${colorize('Filesystem', 31)} ${colorize('Size', 33)} ${colorize('Used', 32)} ${colorize('Avail', 36)} ${colorize('Use%', 34)} ${colorize('Mounted on', 35)}`,
      `${colorize('brain', 31)} 100G 50G 50G 50% ${colorize('/mind', 35)}`,
      `${colorize('thinking', 31)} 200G 100G 100G 50% ${colorize('/thoughts', 35)}`,
      `${colorize('magic', 31)} 500G 250G 250G 50% ${colorize('/creativity', 35)}`
    ]
  },
  {
    command: 'uptime',
    output: [
      `${colorize('Up since 1996, running strong for 28 years, with endless creativity in the background.', 36)}`
    ]
  },
  {
    command: 'cat /etc/os-release',
    output: [
      `${colorize('NAME="Linux Wonderland"', 35)}`,
      `${colorize('VERSION="Infinite Magic (Since 1996)"', 33)}`,
      `${colorize('ID=lin(ux)er', 36)}`,
      `${colorize('PRETTY_NAME="Linux Wonderland 1996 Edition"', 34)}`
    ]
  },
  {
    command: 'free -h',
    output: [
      `${colorize('Imagination', 36)} 100G 40G 60G 5G 10G 80G`,
      `${colorize('Creativity', 36)} 500G 200G 300G 50G 100G 400G`,
      `${colorize('Magic', 36)} 1.0T 300G 700G 100G 200G 900G`
    ]
  },
  {
    command: 'top',
    output: [
      `${colorize('Tasks', 35)}: 100 total, ${colorize('50 active', 33)}, ${colorize('50 sleeping', 32)}`,
      `${colorize('%CPU', 35)} ${colorize('IDLE MAGIC', 33)} 100.00% ${colorize('Creativity', 32)}`,
      `${colorize('%MEM', 35)} ${colorize('FREE THOUGHT', 33)} 80.00% ${colorize('OpenMinds', 32)}`,
      `${colorize('PID', 35)} ${colorize('USER', 35)} ${colorize('PR', 35)} ${colorize('NI', 35)} ${colorize('VIRT', 35)} ${colorize('RES', 35)} ${colorize('SHR', 35)} ${colorize('S', 35)} ${colorize('%CPU', 35)} ${colorize('%MEM', 35)} ${colorize('TIME+', 35)} ${colorize('COMMAND', 35)}`,
      `${colorize('1', 33)} ${colorize('root', 33)} 20 0 500000 8000 1000 50.0 5.0 00:00:15 ${colorize('ThinkBig', 33)}`,
      `${colorize('2', 32)} ${colorize('user', 32)} 20 0 600000 10000 1200 40.0 8.0 00:00:20 ${colorize('DreamInColor', 32)}`
    ]
  },
  {
    command: 'ps aux',
    output: [
      `${colorize('USER', 33)} ${colorize('PID', 35)} %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND`,
      `${colorize('root', 33)} 1 0.1 0.0 1000 800 ? S 2024 0:00 Imagination`,
      `${colorize('user', 35)} 2 0.5 0.1 2000 1500 ? S 2024 0:01 Innovation`,
      `${colorize('user', 33)} 3 0.7 0.3 2500 2000 ? R 2024 0:03 Execution`
    ]
  }
];
