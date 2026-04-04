'use client'
import StudioEditor from '@grapesjs/studio-sdk/react';


const  grapess =() =>{

return (
// ...
<>
<StudioEditor
  options={{
      // ...
      licenseKey:"dsfasfas",
      layout: {
          default: {
            type: 'row',
            style: { height: '100%' },
            children: [
              {
                type: 'sidebarLeft',
                children: {
                  type: 'tabs',
                  value: 'blocks',
                  tabs: [
                    {
                      id: 'blocks',
                      label: 'Blocks',
                      children: { type: 'panelBlocks', style: { height: '100%' } },
                    },
                    {
                      id: 'layers',
                      label: 'Layers',
                      children: { type: 'panelLayers', style: { height: '100%' } },
                    },
                  ],
                },
              },
              {
                type: 'canvasSidebarTop',
                sidebarTop: { leftContainer: { buttons: [] } },
              },
              {
                type: 'sidebarRight',
                children: {
                  type: 'tabs',
                  value: 'styles',
                  tabs: [
                    {
                      id: 'styles',
                      label: 'Styles',
                      children: {
                        type: 'column',
                        style: { height: '100%' },
                        children: [
                          { type: 'panelSelectors', style: { padding: 5 } },
                          { type: 'panelStyles' },
                        ],
                      },
                    },
                    {
                      id: 'props',
                      label: 'Properties',
                      children: { type: 'panelProperties', style: { padding: 5, height: '100%' } },
                    },
                    {
                      id: 'custom',
                      label: 'Custom',
                      children: ['New custom tab'],
                    },
                  ],
                },
              },
            ],
          },
      },
      project: {
        default: {
          pages: [{ name: 'Home', component: '<h1>Home page</h1>' }]
        }
      }
    
    
  }}
/>
</>
)
}