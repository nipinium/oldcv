const Chivi = require('../old_lib/main')

const chivi = new Chivi('.keeps/')

const input = `第一章
狠狠的一把将鼠标甩了出去，看着自己65级的人物被一个浑身穿的金光闪闪的52级玩家p死，然后踩着自己人物的尸体在那炫武扬威，我郁闷的几乎吐血，mb什么垃圾网游啊，tm靠钱砸出来的，没有rmb的玩家鸟也不是。
本人姓吴名凡，23岁，刚刚从某个三流大学毕业，目前待业，健康男性，未婚，征集女友中……
好不容易从那该死的垃圾学校拿了毕业证书，本以为可以安安分分的找个工作度完下半生，却无奈又一脚踏入浩浩荡荡的待业大学生大军，总想找到一份称心的工作，无奈高不成低不就，不是我不要人家，就是人家看不上我，一直拖到现在，毕业已经几个月了，也还是无所事事的度日，好在老爸老妈临死的时候还留下一大笔钱，让自己能舒舒服服的过完大学，还有一套处于gz市黄金地段的房子。150平方左右，自己一个人住不下，索性租了一般出去，光靠收的租金也够自己度过余生了。
但我吴凡是什么人，虽然说创业的激情已经给残酷的现实磨灭了大半，但是好歹咱也是个新时代大好青年，怎么能就这样混吃等死呢，于是这几个月的主要工作就来就是在人才网上投投简历，再去人才市场看看有没有哪个瞎了眼的跨国企业能看上自己这份三流毕业证书。闲暇之余就是玩玩比自己学校还要烂上无数倍的某些网游——没办法，自己性格比较孤僻，学校没交上几个朋友，毕业以后，唯一那个长的一般般的女朋友，也一并撕破了最后一曾薄弱的感情，潇洒的跟自己的拜拜了。自己一不泡吧二不shopping，平时最多的娱乐也只是上上网，看看电视，偶尔去打打篮球这样子而已。`
const lines = chivi.convert_chap(input, '0-tong-hop')
console.log(lines.map(line => line.map(t => t[1]).join('')).join('\n'))

// console.log(
//   JSON.stringify(chivi.inspect_line('第一章 书生孟浩', '0-tong-hop'))
// )

// const entries = chivi.dict_entries('common', 'lexicon', {
//   limit: 50,
//   offset: 0,
//   key: '^伏',
// })
// console.log(entries.length)
// console.log(entries)
