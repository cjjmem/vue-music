import MyLoveIndex from '@/components/mylove/index'
import Song from '@/components/mylove/song'
import Sheet from '@/components/mylove/sheet'

export default{
  path: '/mylove',
  component: MyLoveIndex,
  redirect: '/mylove',
  children: [
    {
      path: 'sheet',
      component: Sheet
    },
    {
      path: 'song',
      component: Song
    }
  ]
}
