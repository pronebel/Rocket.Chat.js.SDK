/** @todo contribute these to @types/rocketchat and require */

export interface IMessage {
  rid: string, // room ID
  _id?: string, // generated by Random.id()
  t?: string, // type, e.g. rm
  msg?: string, // text content
  alias?: string, // ??
  emoji?: string, // emoji code
  avatar?: string, // url
  groupable?: boolean, // ?
  bot?: boolean, // sent by bot
  urls?: Array<string>, // ?
  mentions?: Array<string>, // ?
  reactions?: { [emoji: string]: Array<string> } // emoji: [usernames]
  location?: {
    type: string, // e.g. Point
    coordinates: Array<string> // longitude, latitude
  },
  attachments?: Array<IAttachment>,
  editedAt?: Date,
  editedBy?: {
    _id: string,
    username: string
  }
}

export interface IAttachment {
  fields: Array<IAttachmentField>,
  color?: string,
  text?: string,
  ts?: string,
  thumb_url?: string,
  message_link?: string,
  collapsed?: boolean,
  author_name?: string,
  author_link?: string,
  author_icon?: string,
  title?: string,
  title_link?: string,
  title_link_download?: string,
  image_url?: string,
  audio_url?: string,
  video_url?: string
}

export interface IAttachmentField {
  short?: boolean,
  title: 'string',
  value: 'string'
}