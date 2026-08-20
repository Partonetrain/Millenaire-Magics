PlayerEvents.loggedIn(event => {
    event.player.tell(Text.literal("Welcome to Millénaire Magics Beta! This modpack is still in development. Use the /wip command for more information."))
    event.player.tell(Text.literal("Note that Millenaire is in beta and is somewhat buggy. Please see the Millenaire Discord's dev-build-bug-report-forum channel."))
})