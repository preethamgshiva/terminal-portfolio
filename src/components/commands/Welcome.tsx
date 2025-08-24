import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
  ____                _   _                     
 |  _ \\ _ __ ___  ___| |_| |__   __ _ _ __ ___  
 | |_) | '__/ _ \\/ _ \\ __| '_ \\ / _\` | '_ \` _ \\ 
 |  __/| | |  __/  __/ |_| | | | (_| | | | | | |
 |_|   |_|  \\___|\\___|\\__|_| |_|\\__,_|_| |_| |_|
                                                
  `}
        </PreName>

        <PreWrapper>
          <PreNameMobile>
            {`        
  ____                _   _                     
 |  _ \\ _ __ ___  ___| |_| |__   __ _ _ __ ___  
 | |_) | '__/ _ \\/ _ \\ __| '_ \\ / _\` | '_ \` _ \\ 
 |  __/| | |  __/  __/ |_| | | | (_| | | | | | |
 |_|   |_|  \\___|\\___|\\__|_| |_|\\__,_|_| |_| |_|
                                                
  `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/preethamgshiva/terminal-portfolio">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        {/*<PreImg>
          {`
                   ..                 
            :=%@@@@@@@%:              
          :%@@@@@@@@@@@@@%:           
         =@@@@@@##%%%@@@@@@#          
       .*@@%#*======+*#%@@@@-         
       +@@%**+===---====+*@@*         
       -@@%*+====---====+*@@.         
       :%@%###**=--=*####*@%          
       .#@#*+*#**==++%#*=+%+          
        -@#+=+==++========#++.        
       :=%#+=--=+=-==---=+*==.        
       .==%*====+*=*=-===+=-          
         .=*+++***+**+====.           
           -*****+=+*++==:            
            +**+======+*=             
            =**##*****+==             
           =%+=++====+==*=            
          =##+==+=======**=           
       :*****+==========**#*==.       
   :+****##+*==========+********==.   
=******+#*****===---===*************+:
**+*#****=#****=-----=*##**+**********
*******+###**##**=--+**+**=**********+
*#+*****+**********+**+****+**+*****+*
**%**#***++************=*=**+*********
         `}
        </PreImg>*/}
      </div>
    </HeroContainer>
  );
};

export default Welcome;
