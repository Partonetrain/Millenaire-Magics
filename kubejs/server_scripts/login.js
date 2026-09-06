PlayerEvents.loggedIn(event => {
    event.player.tell(Text.literal("Welcome to Millénaire Magics Beta! This modpack is still in development. Use the /wip command for more information."))
    event.player.tell(Text.literal("Although the Millénaire mod itself is out of beta, it is potentially still somewhat buggy. Please see the Millenaire Discord's dev-build-bug-report-forum channel."))
})