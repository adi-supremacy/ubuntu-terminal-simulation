import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';  // Import Fit Add-on
import 'xterm/css/xterm.css';
import { commands } from './commands';  // Import the command file

const App = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    const fitAddon = new FitAddon();  // Initialize Fit Add-on
    const terminal = new Terminal({
      cursorBlink: true,
      scrollback: 0,  // Disable scrollback
      disableStdin: true,  // Prevent user input
      rows: 20,  // Dynamically adjust this to fit the screen
      cols: 80,  // Dynamically adjust this to fit the screen
      theme: {
        background: 'transparent',
        foreground: '#ffffff',
        cursor: 'block',
      },
    });

    terminal.loadAddon(fitAddon);  // Load the Fit Add-on
    terminal.open(terminalRef.current);
    fitAddon.fit();  // Apply the fit function to resize the terminal

    terminal.writeln('The Linux side');
    
    const typeCommand = (command, output) => {
      let index = 0;
      terminal.write('user@ubuntu:~$ ');

      const typingInterval = setInterval(() => {
        if (index < command.length) {
          terminal.write(command[index]);  // Type the command
          index++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            terminal.writeln('');  // Move to the next line
            output.forEach(line => terminal.writeln(line));  // Print each line of the output
            terminal.writeln('');  // Add a blank line after the output
          }, 500);  // Delay before output
        }
      }, 100);  // Typing speed
    };

    let commandIndex = 0;
    const executeNextCommand = () => {
      if (commandIndex < commands.length) {
        const { command, output } = commands[commandIndex];
        typeCommand(command, output);
        commandIndex++;
        setTimeout(executeNextCommand, 3500);  // Delay between commands
      }
    };

    executeNextCommand();

    window.addEventListener('resize', () => {
      fitAddon.fit();  // Re-apply fit on window resize
    });

    return () => terminal.dispose();
  }, []);

  return (
    <div className="terminal-container" data-testid="terminal-container">
      <div className="ascii-art-background">
        <pre className="ascii-art">
           {`
              .--.      
             |o_o |     
             |:_/ |     
            //   \\\\ \\    
           (|     | )   
          /'\\_   _/\\'\\  
          \\___)=(___/   
  
           ###       ##                               
            ##                                        
            ##      ###     #####    ##  ##   ##  ##  
            ##       ##     ##  ##   ##  ##    ####   
            ##       ##     ##  ##   ##  ##     ##    
            ##       ##     ##  ##   ##  ##    ####   
           ####     ####    ##  ##    ######  ##  ##  
           `}
        </pre>
      </div>
      <div ref={terminalRef} className="xterm-wrapper"></div>
    </div>
  );  
};

export default App;
