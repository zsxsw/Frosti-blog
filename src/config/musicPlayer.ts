// 音乐播放器配置
export const musicPlayerConfig = {
  // 是否启用音乐播放器
  enable: true,
  
  // 播放器模式: "local" 或 "meting"
  // local: 使用本地播放列表
  // meting: 使用 Meting API 获取在线音乐
  mode: "meting" as "local" | "meting",
  
  // Meting API 地址
  // 默认使用公益 API，建议自建 API 以获得更好的体验
  meting_api: "https://meting.kemiaosw.top/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",
  
  // Meting API 参数
  // 服务器: netease(网易云), tencent(QQ音乐), kugou(酷狗), xiami(虾米), baidu(百度)
  server: "netease" as "netease" | "tencent" | "kugou" | "xiami" | "baidu",
  
  // 类型: playlist(歌单), album(专辑), search(搜索), artist(艺术家)
  type: "playlist" as "playlist" | "album" | "search" | "artist",
  
  // ID: 根据类型填写相应的ID
  // 歌单ID、专辑ID、搜索关键词或艺术家ID
  id: "13681647281", // 示例：网易云音乐歌单ID
  
  // 本地播放列表（当 mode 为 "local" 时生效）
  localPlaylist: [
    // {
    //   title: "歌曲名称",
    //   artist: "艺术家",
    //   cover: "/path/to/cover.jpg",
    //   url: "/path/to/song.mp3",
    //   duration: 180, // 秒
    // },
  ],
};