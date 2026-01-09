/*******Panel Top*********/
panelbottom = new Panel
panelbottom.hiding = "none"
panelbottom.location = "bottom"
panelbottom.height = 44
panelbottom.offset = 0

/**** conociendo la resolucion de pantalla ****/
const width = screenGeometry(panelbottom.screen).width

/**** widgets ****/
panelbottom.addWidget("org.kde.plasma.kickoff")
panelbottom.addWidget("org.kde.plasma.pager")
panelbottom_taskmanager = panelbottom.addWidget("org.kde.plasma.icontasks")
panelbottom.addWidget("swap-color")
panelbottom.addWidget("org.kde.plasma.systemtray")
panelbottom.addWidget("org.kde.plasma.digitalclock")
panelbottom.addWidget("org.kde.plasma.showdesktop")

/**** task manager configuration ****/
/**** https://develop.kde.org/docs/plasma/scripting/keys ****/
const taskmanager_launchers = ["applications:org.kde.novasettings.desktop", "applications:org.kde.novastore.desktop", "preferred://filemanager", "applications:org.kde.station.desktop"];
panelbottom_taskmanager.currentConfigGroup = ["General"]
panelbottom_taskmanager.writeConfig("launchers", taskmanager_launchers)
