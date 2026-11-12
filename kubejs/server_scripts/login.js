PlayerEvents.loggedIn(event => {
    event.player.tell(Text.literal("Welcome to Millénaire Magics Beta! This modpack is still in development. Use the /wip command for more information."))
    event.player.tell(Text.literal("Please note that Dragon Mounts Remastered is planned on being removed and replaced with a different mod in a future version.").red())
    event.player.tell(Text.of("Please report any issues you find to the github issue tracker!").blue().underlined(true).hover(Text.of("https://github.com/Partonetrain/Millenaire-Magics/issues")).click(Text.clickEventOf({action: 'open_url', value: 'https://github.com/Partonetrain/Millenaire-Magics/issues'})))
})