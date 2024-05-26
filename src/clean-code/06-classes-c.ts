(() => {
    //Aplicando el principio de responsabilidad unica
    //Priorizar la composición frente a la herencia

    type Gender = 'M' | 'F';

    interface PersonProps{
         birthdate : Date;
         gender    : Gender;
         name      : string;
    }

    class Person {
        public birthdate : Date
        public gender    : Gender;
        public name      : string;
        constructor({ name , gender ,birthdate }: PersonProps) 
        { 
            this.birthdate = birthdate;
            this.gender    = gender;
            this.name      = name;
        }
    }

    interface UserProps{
            email     : string;
            role      : string;    
    }

    class User {
        public email      : string;
        public lastAccess : Date;
        public role       : string;
        
        constructor({
            email     ,
            role       }: UserProps
        ) {
            this.lastAccess = new Date();
            this.email      = email;
            this.role        = role;
        }

        checkCredentiasls() {
            return true;
        }
    }

    interface SettingsProps {
            lastOpenFolder   : string,
            workingDirectory : string      
    }

    class Settings  {
        public lastOpenFolder   : string;
        public workingDirectory : string;
        constructor({
            lastOpenFolder   ,
            workingDirectory       
        }:SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsProps {
        birthdate        : Date,
        email            : string,
        gender           : Gender,
        name             : string,
        lastOpenFolder   : string,
        role              : string,
        workingDirectory : string      
    }

    class UserSettings {
        public person   : Person;
        public settings : Settings;
        public user     : User; 

        constructor({
            name,gender,birthdate,
            email,role ,
            lastOpenFolder,workingDirectory
        }:UserSettingsProps){
            this.person   = new Person ({ name, gender, birthdate });
            this.settings = new Settings ({ lastOpenFolder, workingDirectory });
            this.user     = new User ({ email, role });
        }
    }

    const userSettings = new UserSettings({
        birthdate        : new Date('1996-06-02'),
        email            : 'escanor@gmail.com',
        gender           : 'M',
        name             : 'David',
        lastOpenFolder   : '/home',
        role             : 'Admin',
        workingDirectory : '/usr/home'
    });
    
    console.log({userSettings});
})();