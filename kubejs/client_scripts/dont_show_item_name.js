const $VanillaGuiLayers = Java.loadClass('net.neoforged.neoforge.client.gui.VanillaGuiLayers')

NativeEvents.onEvent('net.neoforged.neoforge.client.event.RenderGuiLayerEvent$Pre', event => {
    if (event.getName().equals($VanillaGuiLayers.SELECTED_ITEM_NAME)) {
        event.setCanceled(true)
    }
})