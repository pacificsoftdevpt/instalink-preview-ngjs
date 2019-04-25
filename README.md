# instalink-preview-ngjs

This is a pakage for angularjs for instalink

How to use?

- Load module: instalinkPreviewNgjs

- Add <instalink-preview-ngjs options="{}"></instalink-preview-ngjs> to html file with options param:
  
  api	—	URL address to the /instalink/api/ folder. InstaLink API requires PHP 5.2+ version.
  
  username	—	Instagram username (without '@' symbol). Leave empty if you use the data-il-access-token attribute.
  
  hashtag	—	Instagram hashtag. If "data-il-username" is specified, then images will be selected by the username and filtered by the specified hashtag. Also it supports multiple hashtags separated by comma or space.
  
  lang	en	Widget UI language (posts, followers, following and follow button labels). Supports 16 languages: en, id, de, es, fr, it, nl, pl, pt-BR, ru, sv, tr, zh-HK, ja, ko, he.
  
  showHeading	true	If this option is specified "false", the heading panel will be hidden.
  
  scroll	true	If option is specified "true", it's possible to show more images by scrolling down.
  
  width	270px	Widget width (any CSS valid value: px, %, em, etc.). Set "auto" to make the widget responsive.
  
  height	350px	Widget height (any CSS valid value: px, %, em, etc.).
  
  imageSize	medium	Size of images (small, medium, large or xlarge).
  
  bgColor	#285989	Header and button background color (any CSS valid value).
  
  contentBgColor	#F8F8F8	Content background color (any CSS valid value).
  
  fontColor	#FFFFFF	Header and button text color (any CSS valid value).
  
  ban	—	List of usernames separated by comma or space. Set any username to hide all photos from this account in your feed. Works only with hashtags.
