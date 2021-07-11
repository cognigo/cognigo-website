import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'


export const SidebarData=[
    {
        title:'Services',
        path:'/services',
        icon:<AiIcons.AiFillLayout/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title:'Strategy and Compliances',
                path:'/services/Strategy',
                icon:<IoIcons.IoIosPaper/>,
            },
            {
                title:'Supply Chain',
                path:'/services/Supply',
                icon:<IoIcons.IoIosPaper/>,
            }
        ]
    },
    {
        title:'About',
        path:'/about',
        icon:<AiIcons.AiFillHome/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title:'News',
                path:'/about/news',
                icon:<IoIcons.IoIosPaper/>,
            },
            {
                title:'Contact Us',
                path:'/about/contactUs',
                icon:<IoIcons.IoIosPaper/>,
            }
        ]
    },
    {
        title:'Industries',
        path:'/industries',
        icon:<FaIcons.FaBuilding/>
    }

]