﻿$.getScript("https://dl.dropboxusercontent.com/s/ed8wrz5cgirdxwq/imgload.js");
$.getScript("https://dl.dropboxusercontent.com/s/pk16y48alhfefr2/random_pics_v_1.0.1.js");
$.getScript("https://dl.dropboxusercontent.com/s/3hoqgcr0ocnuige/modules_v3.0.js");
$.getScript("https://dl.dropbox.com/s/49wsikt2qalz4fl/chat_colors.js?dl=0");
$.getScript('https://dl.dropbox.com/s/zbtrbphtouezle4/stikers-btn.js?dl=0');

var windowWidth = $(window).width();
if (windowWidth < 768) {
    $('#chatpanel').remove();
    $('#emotes-btn').remove();
    $.getScript("https://dl.dropboxusercontent.com/s/3lyq4n9phtwj9cr/emotespanel.js");
}

$(document).ready(function() {
    $('<link id="chanfavicon" href="https://dl.dropboxusercontent.com/s/zw3jggpt99l27xa/favicon.ico?dl=0" type="image/x-icon" />').attr('rel', 'shortcut icon').appendTo("head");
});

//$('#motdwrap').insertAfter("#plmeta");
$('#currenttitle').insertAfter("#mediainfo");

function embedbtnclick() {
    $(document).ready(function() {
        $("#ytapiplayer > div > button.btn.btn-default").click();
    });
}
embedbtnclick();
socket.on("changeMedia", function() {
    embedbtnclick();
});


$(document).ready(function() {
    $('<link id="chanfavicon" href="https://dl.dropboxusercontent.com/s/090pcwmcd1lhwx5/dl_dropbox_com_96366127.ico" type="image/x-icon" />').attr('rel', 'shortcut icon').appendTo("head");
});

$("<style>")
    .attr("type", "text/css")
    .appendTo("head")
    .text("\
\
#player-overlay{position:absolute;left:0;top:0;width:100%;height:100%;background:#000}\
#emotespanel {text-align: center;max-width: 100%;margin: 0px auto 5px auto;border: solid 1px transparent;border-radius: 6px;}\
#emotespanel img {margin:5px; max-height:25px; cursor:pointer}\
#smile-menu img {margin:5px; max-height:25px; cursor:pointer}\
#pictures-panel-body.row img {margin:5px; max-height:60px; cursor:pointer}\
.chat-picture{max-height: 120px}\
.btn, .btn:hover {text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);border-color: rgba(0, 0, 0, 0.6)}\
.close.pull-right{color: red}\
.panel.pm-panel.panel-default{color: #FFFFFF;font-weight: bolt}\
.close{color: red}\
#favourite-pictures-btn.btn-success{background: red  !important}\
#smiles-btn.btn-success{background: #702963!important}\
#modflair.label-success{background: #702963  !importan}\
#afk-btn.label-success{background: #87CEEB  !important;color: black}\
#smiles-and-picture-btn.btn-success{background: #7FFF00 !important}\
#userlist{overflow-y: hidden}#userlist:hover{overflow-y:scroll}\
#userlist, #messagebuffer {border-color: rgba(192,192,192,0.3)}\
#chatheader{background: rgba(192,192,192,0.2)!important ;border-color: rgba(192,192,192,0.3)}\
#currenttitle{color: #FFFFFF}\
#smiles-and-picture-btn.btn-success{background: #7FFF00 !important}\
.modal-body,.modal-content {background: rgba(0,0,0,0.7)}\
#motd, #motdrow, .well {background-color: rgba(0,0,0,0.01)}\
#pictures-body-panel > img, #smiles-panel > img{max-height: 30px !important}\
#showsearch > span.hidden-xs, #showcustomembed > span.hidden-xs, #showplaylistmanager > span.hidden-xs {font-size: 0;}\
#chatheader{background-color: rgba(0,0,0,0.7) !important}\
\
");

! function(modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: !1
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.loaded = !0, module.exports
    }
    var installedModules = {};
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.p = "", __webpack_require__(0)
}([function(module, exports, __webpack_require__) {
    __webpack_require__(1), __webpack_require__(2), __webpack_require__(3), __webpack_require__(4), __webpack_require__(5), __webpack_require__(6), __webpack_require__(7), __webpack_require__(10), __webpack_require__(11), __webpack_require__(12), __webpack_require__(14), __webpack_require__(15), __webpack_require__(16), __webpack_require__(17), __webpack_require__(18), __webpack_require__(19), __webpack_require__(20), __webpack_require__(21), __webpack_require__(22), __webpack_require__(23), __webpack_require__(26), __webpack_require__(27), __webpack_require__(28), __webpack_require__(29), __webpack_require__(30), __webpack_require__(31), __webpack_require__(32), __webpack_require__(33), __webpack_require__(34), __webpack_require__(35), __webpack_require__(36), __webpack_require__(37), __webpack_require__(38), __webpack_require__(39), __webpack_require__(40), __webpack_require__(41), module.exports = __webpack_require__(42)
}, function(module, exports) {
    window.cytubeEnhancedDefaultTranslates = window.cytubeEnhancedDefaultTranslates || {}, window.cytubeEnhancedDefaultTranslates.ru = {
        qCommands: {
            "of course": "определенно да",
            yes: "да",
            maybe: "возможно",
            impossible: "ни шанса",
            "no way": "определенно нет",
            "don't think so": "вероятность мала",
            no: "нет",
            "cirno is busy": "сырно устала и отвечать не будет",
            "I regret to inform you": "отказываюсь отвечать"
        },
        chatCommands: {
            "%username% action (e.g: <i>/me is dancing</i>)": "%username% что-то сделал. Например: <i>/me танцует</i>",
            spoiler: "спойлер",
            'sets the "AFK" status': 'устанавливает статус "Отошёл"',
            "random option from the list of options (!pick option1, option2, option3)": "выбор случайной опции из указанного списка слов, разделенных запятыми (Например: <i>!pick слово1, слово2, слово3</i>)",
            "asking a question with yes/no/... type answer (e.g. <i>!ask Will i be rich?</i>)": "задать вопрос с вариантами ответа да/нет/... (Например: <i>!ask Сегодня пойдет дождь?</i>)",
            "show the current time": "показать текущее время",
            "current time": "текущее время",
            "throw a dice": "кинуть кость",
            "random number between 0 and 999": "случайное число от 0 до 999",
            "show the random quote": "показать случайную цитату",
            "there aren't any quotes.": "цитаты отсутствуют.",
            "vote for the video skip": "проголосовать за пропуск текущего видео",
            "you have been voted for the video skip": "отдан голос за пропуск текущего видео",
            "play the next video": "проиграть следующее видео",
            "the next video is playing": "начато проигрывание следующего видео",
            "bump the last video": "поднять последнее видео",
            "the last video was bumped: ": "поднято последнее видео: ",
            "adds the video to the end of the playlist (e.g. <i>!add https://www.youtube.com/watch?v=hh4gpgAZkc8</i>)": "добавляет видео в конец плейлиста (Например: <i>!add https://www.youtube.com/watch?v=hh4gpgAZkc8</i>)",
            "error: the wrong link": "ошибка: неверная ссылка",
            "the video was added": "видео было добавлено",
            "show the current video's name": "показать название текущего видео",
            "now: ": "сейчас играет: ",
            "show the random emote": "показать случайный смайлик",
            "the secret command": "секретная команда",
            "Use !pick variant1, variant2": "Используй !pick вариант1, вариант2"
        },
        "The list of chat commands": "Список команд чата",
        "Standard commands": "Стандартные команды",
        "Extra commands": "Дополнительные команды",
        "Commands list": "Список команд",
        AFK: "АФК",
        Clear: "Очистить",
        "Are you sure, that you want to clear the chat?": "Вы уверены, что хотите очистить чат?",
        favPics: {
            "Show your favorite images": "Показать избранные картинки",
            "Export pictures": "Экспорт картинок",
            "Import pictures": "Импорт картинок",
            "Picture url": "Адрес картинки в сети",
            Add: "Добавить",
            Remove: "Удалить",
            "The image already exists": "Такая картинка уже была добавлена",
            "Drop the picture here to remove it": "Перетащите сюда картинку, чтобы её удалить",
            Exit: "Выход",
            "<p>Favourite pictures feature if for saving favourite pictures like browser bookmarks.</p><p>Features:<ul><li><strong>Only links to images can be saved</strong>, so if image from link was removed, it also removes from your panel.</li><li>Images links are storing in browser. There are export and import buttons to share them between browsers.</li><li>Images are the same for site channels, but <strong>they are different for http:// and https://</strong></li></ul></p>": "<p>Избранные картинки нужны для сохранения понравившихся картинок, как закладки браузера.</p><p>Особенности:<ul><li><strong>Хранятся не картинки, а ссылки на них</strong>, другими словами если картинка по ссылке удалится, то она удалится и у вас.</li><li>Ссылки на картинки хранятся в браузере. Для того, чтобы их перемещать между браузерами имеется кнопка экспорта (вытащить) и импорт (вставка экспортированного файла).</li><li>Картинки общие для каналов сайта, но <strong>разные для http:// и https://</strong></li></ul></p>",
            "Your old pictures will be removed and replaced with the images from uploaded file (file must correspond to format of the file from export button of this panel).<br>Are you sure you want to continue?": "Ваши старые картинки будут удалены, и заменены картинками из загруженного файла (поддерживаются только файлы, полученные экспортом через эту же панель).<br>Вы уверены, что хотите продолжить?",
            "Can't detect any pictures in this file.": "Невозможно распознать картинки из файла."
        },
        videoInfo: {
            "Now:": "Сейчас:",
            "Added by": "Добавлено",
            "Nothing is playing now": "Сейчас ничего не воспроизводится"
        },
        tabs: {
            Title: "Заголовок",
            Content: "Содержимое",
            "Show tabs settings (wct enhanced)": "Показать настройки вкладок (wct enhanced)",
            "Tabs settings": "Настройка вкладок",
            "Channel description": "Описание канала",
            "Add tab": "Добавить вкладку",
            "Remove the last tab": "Удалить последнюю вкладку",
            "Convert to the editor's code": "Преобразовать в код редактора",
            "The code in the editor will be replaced with the new code, continue?": "Код в редакторе будет удалён и заменен новым, продолжить?",
            "Tabs settings will be replaced with the code from the editor, continue?": "Настройки вкладок будут заменены кодом из редактора, продолжить?",
            "Wrong content for the dropdown": "Неправильное содержимое для выпадающего списка: ",
            "Convert from the editor's code": "Преобразовать из кода редактора",
            "By default tab behaves like simple tab.": "По умолчанию вкладка ведёт себя как обычная вкладка.",
            'Use !dropdown! prefix to create dropdown list. Example: !dropdown!My dropdown. Value must look like "[n]Link title 1[/n][a]URL 1[/a], [n]Link title 2[/n][a]URL 2[/a], [n]Link title 3[/n][a]URL 3[/a]"': 'Чтобы создать выпадающий список, используйте префикс !dropdown! перед названием, например "!dropdown!Мой выпадающий список". Значение должно выглядеть так "[n]Заголовок 1[/n][a]Адрес ссылки 1[/a], [n]Заголовок 2[/n][a]Адрес ссылки 2[/a], [n]Заголовок 3[/n][a]Адрес ссылки 3[/a]"',
            "Use !link! prefix to create link. Example: !link!My link. Value must contain URL.": 'Чтобы создать ссылку, используйте префикс !link! перед названием, например "!link!Моя ссылка". Значение должно содержать адрес ссылки.'
        },
        emotes: {
            "Show emotes": "Показать смайлики"
        },
        settings: {
            "Extended settings": "Расширенные настройки",
            Save: "Сохранить",
            Cancel: "Отмена",
            "Some settings need to refresh the page to get to work. Do it now?": "Для нормальной работы некоторых настроек требуется перезагрузить страницу. Сделать это сейчас?",
            Yes: "Да",
            No: "Нет"
        },
        general: {
            General: "Общее",
            "Smiles and pictures together": "Смайлики и картинки вместе",
            "Show emotes and favorite images": "Показать смайлики и избранные изображения",
            "Interface language": "Язык интерфейса"
        },
        chatAvatars: {
            "Chat avatars": "Аватарки в чате",
            Disabled: "Выключены",
            Small: "Маленькие",
            Big: "Большие"
        },
        standardUI: {
            "Create a poll": "Создать опрос",
            "Add video": "Добавить видео",
            "Add video from url": "Добавить видео по ссылке",
            "connected users": "пользователей",
            "connected user": "пользователь",
            AFK: "АФК",
            Anonymous: "Анонимных",
            "Channel Admins": "Администраторов канала",
            Guests: "Гостей",
            Moderators: "Модераторов",
            "Regular Users": "Обычных пользователей",
            "Site Admins": "Администраторов сайта",
            "Welcome, ": "Добро пожаловать, ",
            "Log out": "Выйти",
            Login: "Логин",
            Password: "Пароль",
            "Remember me": "Запомнить",
            "Log in": "Вход",
            Home: "На главную",
            Account: "Аккаунт",
            Logout: "Выход",
            Channels: "Каналы",
            Profile: "Профиль",
            "Change Password/Email": "Изменить пароль/почту",
            Register: "Регистрация",
            Options: "Настройки",
            "Channel Settings": "Настройки канала",
            Layout: "Оформление",
            "Chat Only": "Только чат",
            "Remove Video": "Удалить видео",
            "Video url": "Адрес видео",
            Next: "Следующим",
            "At end": "В конец",
            Play: "Проиграть",
            "Queue Next": "Поставить следующим",
            "Make Temporary": "Сделать временным",
            "Make Permanent": "Сделать постоянным",
            Delete: "Удалить",
            Name: "Имя",
            "Guest login": "Гостевой вход"
        },
        video: {
            "Refresh video": "Обновить видео",
            "Hide video": "Скрыть видео",
            best: "наивысшее",
            Quality: "Качество",
            "Use Youtube JS Player": "Использовать Youtube JS Player",
            "Expand playlist": "Развернуть плейлист",
            "Unexpand playlist": "Свернуть плейлист",
            "Scroll the playlist to the current video": "Прокрутить плейлист к текущему видео",
            "Contributors' list": "Список пользователей, добавивших видео",
            "Video's count": "Всего видео"
        },
        markdown: {
            "Markdown helper": "Помощник разметки",
            "Bold text": "Жирный текст",
            "Cursive text": "Наклонный текст",
            Spoiler: "Спойлер",
            Monospace: "Моноширинный текст",
            Strike: "Перечёркнутый текст"
        },
        pmHistory: {
            History: "История",
            "Chat history": "История чата",
            "Your chat messages history.": "История сообщений, адресованных вам в чате.",
            "Reset history": "Сбросить историю",
            "Are you sure, that you want to clear messages history?": "Вы уверены, что хотите сбросить историю сообщений?",
            Exit: "Выход"
        },
        extras: {
            Extras: "Сторонние модули",
            "Extras for additional functionality": "Сторонние модули для дополнительного функционала.",
            Source: "Источник"
        },
        themes: {
            Themes: "Темы",
            "Theme settings": "Настройка темы",
            "Apply this theme?": "Изменить тему на выбранную?",
            'Default theme was changed to "%themeTitle%" by administrator. Do you want to try it? (Don\'t forget, that you can switch your theme in extended settings anytime.)': 'Тема по умолчанию была измена администратором на "%themeTitle%". Вы хотите попробовать её? (Не забывайте, что вы можете поменять свою тему в расширенных настройках в любое время.)'
        },
        Help: "Помощь",
        Close: "Закрыть",
        ru: "Русский",
        en: "Английский",
        Confirm: "Подтвердить",
        Cancel: "Отмена",
        OK: "OK"
    }
}, function(module, exports) {
    window.CytubeEnhancedHelpers = function(app) {
        this.getViewportSize = function() {
            var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            return {
                width: width,
                height: height
            }
        }, this.addMessageToChatInput = function(message, position) {
            var $chatline = $(chatline);
            position = position || "end", "begin" === position ? message += $chatline.val() : message = $chatline.val() + message, $chatline.val(message).focus()
        }
    }
}, function(module, exports) {
    window.CytubeEnhancedStorage = function(storageName, isGlobal, autoSave) {
        var that = this;
        isGlobal = "undefined" != typeof isGlobal ? isGlobal : !0, autoSave = "undefined" != typeof autoSave ? autoSave : !1;
        var defaultData = {},
            initialData = {},
            data = {};
        try {
            data = JSON.parse(window.localStorage.getItem(storageName + "-" + (isGlobal ? "" : CHANNEL.name) + storageName)), data = _.isPlainObject(data) ? data : {}
        } catch (error) {
            data = {}
        }
        initialData = _.cloneDeep(data), this.getDefault = function(name) {
            return defaultData[name]
        }, this.setDefault = function(name, value) {
            value = _.cloneDeep(value), defaultData[name] = value, data[name] = "undefined" != typeof data[name] ? data[name] : value, initialData[name] = "undefined" != typeof initialData[name] ? initialData[name] : value
        }, this.get = function(name) {
            return data[name]
        }, this.set = function(name, value) {
            var result = data[name] = _.cloneDeep(value);
            return autoSave && that.save(), result
        }, this.toggle = function(name) {
            var result = data[name] = !data[name];
            return autoSave && that.save(), result
        }, this.isDirty = function(nameData) {
            var isDirty = !1;
            if (_.isArray(nameData)) {
                for (var name in nameData)
                    if (!isEqual(data[name], initialData[name])) {
                        isDirty = !0;
                        break
                    }
            } else isDirty = !isEqual(data[nameData], initialData[nameData]);
            return isDirty
        }, this.save = function() {
            try {
                return window.localStorage.setItem(storageName + "-" + (isGlobal ? "" : CHANNEL.name) + storageName, JSON.stringify(data))
            } catch (error) {
                return !1
            }
        }, this.reset = function() {
            data = _.cloneDeep(defaultData)
        };
        var isEqual = function(value1, value2) {
            return _.isArray(value1) && _.isArray(value2) ? 0 === _.difference(value1, value2).length && 0 === _.difference(value2, value1).length : _.isEqual(value1, value2)
        }
    }
}, function(module, exports) {
    window.CytubeEnhancedUISettings = function(app) {
        "use strict";
        var that = this;
        this.$navbar = $("#nav-collapsible").find(".navbar-nav"), this.tabs = {}, this.$tabsContainerHeader = $('<div class="' + app.prefix + 'ui__header"></div>'), this.$tabsContainerBody = $('<div class="' + app.prefix + 'ui__body tab-content"></div>'), this.$tabsContainerTabs = $('<ul class="nav nav-tabs">'), this.$tabsContainerFooter = $('<div class="' + app.prefix + 'ui__footer"></div>'), this.$tabsContainerOpenButton = $('<a href="#" id="' + app.prefix + 'ui"></a>').text(app.t("settings[.]Extended settings")).on("click", function(event) {
            event.preventDefault(), event.stopPropagation(), that.openSettings()
        });
        var $cytubeOptions = $("#useroptions .modal-header .nav-tabs");
        0 !== $cytubeOptions.length, this.$tabsContainerOpenButton.appendTo(that.$navbar).wrap("<li>"), this.themeTabName = "theme-settings", this.themeTabTitle = app.t("themes[.]Theme settings"), this.storage = new CytubeEnhancedStorage("settings", !1);
        var pageReloadRequested = !1;
        $("<h4>" + app.t("settings[.]Extended settings") + "</h4>").appendTo(that.$tabsContainerHeader), that.$tabsContainerTabs.appendTo(that.$tabsContainerHeader), $('<button type="button" data-dismiss="modal" class="btn btn-success">' + app.t("settings[.]Save") + "</button>").appendTo(that.$tabsContainerFooter).on("click", function() {
            that.save()
        }), $('<button type="button" data-dismiss="modal" class="' + app.prefix + 'user-settings btn btn-default">' + app.t("settings[.]Cancel") + "</button>").appendTo(that.$tabsContainerFooter), this.onSave = function(callback) {
            $(document).on(app.prefix + "settings.save", function() {
                callback(that.storage)
            })
        }, this.save = function() {
            $(document).trigger(app.prefix + "settings.save"), that.storage.save(), pageReloadRequested && app.UI.createConfirmWindow(app.t("settings[.]Some settings need to refresh the page to get to work. Do it now?"), function(isComfirmed) {
                isComfirmed && window.location.reload()
            })
        }, this.reset = function() {
            that.storage.reset(), app.UI.createConfirmWindow(app.t("settings[.]Some settings need to refresh the page to get to work. Do it now?"), function(isComfirmed) {
                isComfirmed && window.location.reload()
            })
        };
        var addTab = function(name, title, sort) {
            var tab = new window.CytubeEnhancedUITab(app, name, title, sort);
            return tab.$button.appendTo(that.$tabsContainerTabs), tab.$content.appendTo(that.$tabsContainerBody), that.tabs[name] = tab, that.sortTabs(), tab
        };
        this.getTab = function(name, newTabTitle, sort) {
            return "undefined" != typeof that.tabs[name] ? that.tabs[name] : newTabTitle ? addTab(name, newTabTitle, sort) : null
        }, this.configureTheme = function(callback) {
            var tab = that.getTab(that.themeTabName, that.themeTabTitle, 99999),
                storage = new CytubeEnhancedStorage("themes." + app.Settings.storage.get("themes.selected"), !0, !0);
            callback(app, tab, storage)
        }, this.openTab = function(name) {
            return that.tabs[name] ? (that.tabs[name].show(), !0) : !1
        }, that.removeTab = function(name) {
            return that.tabs[name] ? (that.tabs[name].remove(), delete that.tabs[name], !0) : !1
        }, this.sortTabs = function() {
            var tabsArray = [];
            for (var tab in that.tabs) tabsArray.push(that.tabs[tab]);
            tabsArray = tabsArray.sort(function(a, b) {
                return a.sort > b.sort ? 1 : a.sort < b.sort ? -1 : 0
            });
            for (var tabIndex = 0, tabsLength = tabsArray.length; tabsLength > tabIndex; tabIndex++) tabsArray[tabIndex].$button.detach().appendTo(that.$tabsContainerTabs)
        }, this.openSettings = function() {
            app.UI.createModalWindow("settings", that.$tabsContainerHeader, that.$tabsContainerBody, that.$tabsContainerFooter, !0);
            var tabToOpen;
            for (var tab in that.tabs)("undefined" == typeof tabToOpen || "undefined" == typeof tabToOpen.sort || tabToOpen.sort > that.tabs[tab].sort) && (tabToOpen = that.tabs[tab]);
            tabToOpen.show()
        }, this.requestPageReload = function() {
            pageReloadRequested = !0
        }
    }
}, function(module, exports) {
    window.CytubeEnhancedUITab = function(app, name, title, sort) {
        "use strict";
        var that = this;
        this.$button = $('<li><a href="#' + app.prefix + name + '__content" class="' + name + '__button" data-toggle="tab">' + title + "</a></li>"), this.$content = $('<div id="' + app.prefix + name + '__content" class="tab-pane">'), this.$form = app.UI.createControlsWrapper("horizontal").appendTo(this.$content), this.sort = Math.abs(parseInt(sort, 10)) || 0, this.controls = {}, this.show = function() {
            that.$button.find("a").tab("show"), $(document).trigger(app.prefix + "tab-" + name + ".show")
        }, this.$button.on("show.bs.tab", function() {
            $(document).trigger(app.prefix + "tab-" + name + ".show")
        }), this.onShow = function(callback) {
            $(document).on(app.prefix + "tab-" + name + ".show", function() {
                callback(that)
            })
        }, this.addControl = function(type, controlType, title, name, options, handler, sort, $customContainer) {
            type = -1 != ["select", "checkbox"].indexOf(type) ? type : "select", sort = Math.abs(parseInt(sort, 10)) || 0;
            var controlFunctionName = "create" + type.slice(0, 1).toUpperCase() + type.slice(1) + "Control",
                $control = app.UI[controlFunctionName](controlType, title, name, options, handler);
            return $control.data("sort", sort), that.controls[name] = {
                $el: $control,
                sort: sort
            }, $customContainer ? $control.appendTo($customContainer) : $control.appendTo(that.$form), that.sortControls(), $control
        }, this.sortControls = function() {
            var controlsArray = [];
            for (var control in that.controls) controlsArray.push(that.controls[control]);
            controlsArray = controlsArray.sort(function(a, b) {
                return a.sort > b.sort ? 1 : a.sort < b.sort ? -1 : 0
            });
            for (var controlIndex = 0, controlsLength = controlsArray.length; controlsLength > controlIndex; controlIndex++) controlsArray[controlIndex].$el.detach().appendTo(that.$form)
        }, this.getName = function() {
            return name
        }, this.remove = function() {
            that.$button.empty(), that.$content.empty()
        }
    }
}, function(module, exports) {
    window.CytubeEnhancedUI = function(app) {
        var that = this;
        this.createModalWindow = function(id, $headerContent, $bodyContent, $footerContent, cache) {
            $(".modal").modal("hide"), id = app.prefix + "modal-" + id;
            var $cachedOuter = $("#" + id);
            if (cache) {
                if ($cachedOuter.length) return $cachedOuter.modal("show"), $cachedOuter
            } else $cachedOuter.remove();
            var $outer = $('<div class="modal fade" id="' + id + '" role="dialog" tabindex="-1">').appendTo($("body")),
                $modal = $('<div class="modal-dialog modal-lg">').appendTo($outer),
                $content = $('<div class="modal-content">').appendTo($modal);
            if ($headerContent) {
                var $header = $('<div class="modal-header">').append($headerContent).appendTo($content);
                $('<button type="button" class="close" data-dismiss="modal" aria-label="' + app.t("Close") + '">').html('<span aria-hidden="true">&times;</span>').prependTo($header)
            }
            return $bodyContent && $('<div class="modal-body">').append($bodyContent).appendTo($content), $footerContent && $('<div class="modal-footer">').append($footerContent).appendTo($content), $outer.on("hidden.bs.modal", function() {
                cache || $(this).remove()
            }), $outer.modal({
                keyboard: !0
            }), $outer
        }, this.createConfirmWindow = function(message, callback) {
            var isConfirmed = !1,
                $outer = $('<div class="modal fade ' + app.prefix + 'modal-confirm modal-centered" role="dialog" tabindex="-1">').appendTo($("body")),
                $modal = $('<div class="modal-dialog modal-sm">').appendTo($outer),
                $content = $('<div class="modal-content">').appendTo($modal);
            $('<div class="modal-header">').html($('<h3 class="modal-title">').html(message)).appendTo($content);
            var $footer = $('<div class="modal-footer">').appendTo($content);
            $('<button type="button" class="btn btn-default">' + app.t("Confirm") + "</button>").appendTo($footer).on("click", function() {
                isConfirmed = !0, $outer.modal("hide")
            }), $('<button type="button" data-dismiss="modal" class="' + app.prefix + 'user-settings btn btn-default">' + app.t("Cancel") + "</button>").appendTo($footer), $outer.on("shown.bs.modal", function() {
                that.centerModals($(this))
            }), $outer.on("hidden.bs.modal", function() {
                _.isFunction(callback) && callback(isConfirmed), $(this).remove()
            }), $outer.modal({
                keyboard: !0
            })
        }, this.createAlertWindow = function(message, callback) {
            var $outer = $('<div class="modal fade ' + app.prefix + 'modal-confirm modal-centered" role="dialog" tabindex="-1">').appendTo($("body")),
                $modal = $('<div class="modal-dialog modal-sm">').appendTo($outer),
                $content = $('<div class="modal-content">').appendTo($modal);
            $('<div class="modal-header">').html($('<h3 class="modal-title">').html(message)).appendTo($content);
            var $footer = $('<div class="modal-footer">').appendTo($content);
            $('<button type="button" data-dismiss="modal" class="btn btn-default">' + app.t("OK") + "</button>").appendTo($footer), $outer.on("shown.bs.modal", function() {
                that.centerModals($(this))
            }), $outer.on("hidden.bs.modal", function() {
                _.isFunction(callback) && callback(), $(this).remove()
            }), $outer.modal({
                keyboard: !0
            })
        }, this.createControlsWrapper = function(type) {
            return type = -1 != ["default", "horizontal", "inline"].indexOf(type) ? type : "default", $('<div class="form-' + type + '">')
        }, this.createSelectControl = function(type, title, name, options, handler) {
            options = options || [];
            var $select, $wrapper = $('<div class="form-group">');
            if ("horizontal" == type) {
                $('<label for="' + app.prefix + name + '" class="control-label col-sm-4">' + title + "</label>").appendTo($wrapper);
                var $selectWrapper = $('<div class="col-sm-8">').appendTo($wrapper);
                $select = $('<select id="' + app.prefix + name + '" class="form-control">').appendTo($selectWrapper)
            } else $('<label for="' + app.prefix + name + '">' + title + "</label>").appendTo($wrapper), $select = $('<select id="' + app.prefix + name + '" class="form-control">').appendTo($wrapper);
            handler && $select.on("change", handler);
            for (var selected, optionIndex = 0, optionsLength = options.length; optionsLength > optionIndex; optionIndex++) selected = options[optionIndex].selected ? "selected" : "", $select.append('<option value="' + options[optionIndex].value + '" ' + selected + ">" + options[optionIndex].title + "</option>");
            return $wrapper
        }, this.createButton = function(type, title, handler) {
            var $button = $('<button type="button" class="btn btn-' + type + '">' + title + "</button>");
            return handler && $button.on("click", handler), $button
        }, this.toggleLoader = function($node, mode) {
            $node.each(function() {
                "undefined" == typeof mode && (mode = $node.hasClass("loading-spinner__loading") ? "off" : "on"), $(this).removeClass("loading-spinner__loading"), $(".loading-spinner__overlay").remove(), $(this).css("height", "auto"), $(this).css("width", "auto"), "on" === mode && ($(this).addClass("loading-spinner__loading"), $(this).css("height", $(this).outerHeight()), $(this).css("width", $(this).outerWidth()), $('<div class="loading-spinner__overlay">').append($('<div class="loading-spinner__wrapper">').append('<div class="loading-spinner">')).appendTo($(this)))
            })
        }, $.fn.toggleLoader = function(mode) {
            that.toggleLoader($(this), mode)
        }, this.centerModals = function($outer) {
            "undefined" == typeof $outer && ($outer = $(".modal-centered")), $outer.each(function() {
                var $modal = $outer.find(".modal-dialog");
                $modal.css({
                    display: "block",
                    marginTop: Math.max(0, ($(window).height() - $modal.outerHeight()) / 2)
                })
            })
        }, $(window).resize(function() {
            that.centerModals()
        })
    }
}, function(module, exports, __webpack_require__) {
    __webpack_require__(8), window.CytubeEnhanced = function(language, modulesSettings, modulesExtends) {
        "use strict";
        var that = this;
        this.translations = {}, this.prefix = "ce-", this.version = "2.8.0";
        var modules = {},
            MODULE_LOAD_TIMEOUT = 6e4,
            MODULE_LOAD_PERIOD = 100;
        if (this.getModule = function(moduleName) {
                var promise = $.Deferred(),
                    time = MODULE_LOAD_TIMEOUT;
                return function getModuleRecursive() {
                    if ("undefined" != typeof modules[moduleName]) promise.resolve(modules[moduleName]);
                    else {
                        if (0 >= time) throw new Error("Load timeout for module " + moduleName + ".");
                        time -= MODULE_LOAD_PERIOD, setTimeout(getModuleRecursive, MODULE_LOAD_PERIOD)
                    }
                }(), promise
            }, this.addModule = function(moduleName, ModuleConstructor) {
                if (this.isModulePermitted(moduleName)) {
                    var moduleSettings = modulesSettings[moduleName] || {},
                        module = new ModuleConstructor(this, moduleSettings);
                    modulesExtends[moduleName] && modulesExtends[moduleName](module), modules[moduleName] = module
                }
            }, this.isModulePermitted = function(moduleName) {
                return modulesSettings.hasOwnProperty(moduleName) && modulesSettings[moduleName].hasOwnProperty("enabled") ? modulesSettings[moduleName].enabled : !0
            }, this.addTranslation = function(language, translationObject) {
                "undefined" == typeof that.translations[language] ? that.translations[language] = translationObject : $.extend(!0, that.translations[language], translationObject)
            }, this.t = function(text) {
                var translatedText = text;
                if ("en" !== that.storage.get("language") && that.translations[that.storage.get("language")])
                    if (-1 !== text.indexOf("[.]")) {
                        var textWithNamespaces = text.split("[.]");
                        if (translatedText = that.translations[that.storage.get("language")][textWithNamespaces[0]], "undefined" == typeof translatedText) return translatedText = text.split("[.]").pop(), translatedText || text;
                        for (var namespace = 1, namespacesLen = textWithNamespaces.length; namespacesLen > namespace; namespace++)
                            if (translatedText = translatedText[textWithNamespaces[namespace]], "undefined" == typeof translatedText) return translatedText = text.split("[.]").pop(), translatedText || text;
                        translatedText = translatedText || textWithNamespaces[textWithNamespaces.length - 1]
                    } else translatedText = that.translations[that.storage.get("language")][text];
                else -1 !== text.indexOf("[.]") && (translatedText = text.split("[.]").pop(), translatedText = translatedText || text);
                return translatedText
            }, this.parseJSON = function(jsonString, defaultValue) {
                defaultValue = "undefined" != typeof defaultValue ? defaultValue : null;
                var result;
                try {
                    result = window.JSON.parse(jsonString)
                } catch (error) {
                    result = defaultValue
                }
                return result
            }, this.toJSON = function(object, defaultValue) {
                defaultValue = "undefined" != typeof defaultValue ? defaultValue : null;
                var result;
                try {
                    result = window.JSON.stringify(object)
                } catch (error) {
                    result = defaultValue
                }
                return result
            }, $.ajaxSetup({
                cache: !0
            }), window.cytubeEnhancedDefaultTranslates)
            for (var translateLanguage in window.cytubeEnhancedDefaultTranslates) this.addTranslation(translateLanguage, window.cytubeEnhancedDefaultTranslates[translateLanguage]);
        this.storage = new window.CytubeEnhancedStorage("default", !0, !0), this.storage.setDefault("language", language), this.UI = new window.CytubeEnhancedUI(this), this.Helpers = new window.CytubeEnhancedHelpers(this), this.Settings = new window.CytubeEnhancedUISettings(this)
    }
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    (function(module, global) {
        (function() {
            function addMapEntry(map, pair) {
                return map.set(pair[0], pair[1]), map
            }

            function addSetEntry(set, value) {
                return set.add(value), set
            }

            function apply(func, thisArg, args) {
                var length = args.length;
                switch (length) {
                    case 0:
                        return func.call(thisArg);
                    case 1:
                        return func.call(thisArg, args[0]);
                    case 2:
                        return func.call(thisArg, args[0], args[1]);
                    case 3:
                        return func.call(thisArg, args[0], args[1], args[2])
                }
                return func.apply(thisArg, args)
            }

            function arrayAggregator(array, setter, iteratee, accumulator) {
                for (var index = -1, length = array.length; ++index < length;) {
                    var value = array[index];
                    setter(accumulator, value, iteratee(value), array)
                }
                return accumulator
            }

            function arrayConcat(array, other) {
                for (var index = -1, length = array.length, othIndex = -1, othLength = other.length, result = Array(length + othLength); ++index < length;) result[index] = array[index];
                for (; ++othIndex < othLength;) result[index++] = other[othIndex];
                return result
            }

            function arrayEach(array, iteratee) {
                for (var index = -1, length = array.length; ++index < length && iteratee(array[index], index, array) !== !1;);
                return array
            }

            function arrayEachRight(array, iteratee) {
                for (var length = array.length; length-- && iteratee(array[length], length, array) !== !1;);
                return array
            }

            function arrayEvery(array, predicate) {
                for (var index = -1, length = array.length; ++index < length;)
                    if (!predicate(array[index], index, array)) return !1;
                return !0
            }

            function arrayFilter(array, predicate) {
                for (var index = -1, length = array.length, resIndex = 0, result = []; ++index < length;) {
                    var value = array[index];
                    predicate(value, index, array) && (result[resIndex++] = value)
                }
                return result
            }

            function arrayIncludes(array, value) {
                return !!array.length && baseIndexOf(array, value, 0) > -1
            }

            function arrayIncludesWith(array, value, comparator) {
                for (var index = -1, length = array.length; ++index < length;)
                    if (comparator(value, array[index])) return !0;
                return !1
            }

            function arrayMap(array, iteratee) {
                for (var index = -1, length = array.length, result = Array(length); ++index < length;) result[index] = iteratee(array[index], index, array);
                return result
            }

            function arrayPush(array, values) {
                for (var index = -1, length = values.length, offset = array.length; ++index < length;) array[offset + index] = values[index];
                return array
            }

            function arrayReduce(array, iteratee, accumulator, initAccum) {
                var index = -1,
                    length = array.length;
                for (initAccum && length && (accumulator = array[++index]); ++index < length;) accumulator = iteratee(accumulator, array[index], index, array);
                return accumulator
            }

            function arrayReduceRight(array, iteratee, accumulator, initAccum) {
                var length = array.length;
                for (initAccum && length && (accumulator = array[--length]); length--;) accumulator = iteratee(accumulator, array[length], length, array);
                return accumulator
            }

            function arraySome(array, predicate) {
                for (var index = -1, length = array.length; ++index < length;)
                    if (predicate(array[index], index, array)) return !0;
                return !1
            }

            function baseFind(collection, predicate, eachFunc, retKey) {
                var result;
                return eachFunc(collection, function(value, key, collection) {
                    return predicate(value, key, collection) ? (result = retKey ? key : value, !1) : void 0
                }), result
            }

            function baseFindIndex(array, predicate, fromRight) {
                for (var length = array.length, index = fromRight ? length : -1; fromRight ? index-- : ++index < length;)
                    if (predicate(array[index], index, array)) return index;
                return -1
            }

            function baseIndexOf(array, value, fromIndex) {
                if (value !== value) return indexOfNaN(array, fromIndex);
                for (var index = fromIndex - 1, length = array.length; ++index < length;)
                    if (array[index] === value) return index;
                return -1
            }

            function baseIndexOfWith(array, value, fromIndex, comparator) {
                for (var index = fromIndex - 1, length = array.length; ++index < length;)
                    if (comparator(array[index], value)) return index;
                return -1
            }

            function baseMean(array, iteratee) {
                var length = array ? array.length : 0;
                return length ? baseSum(array, iteratee) / length : NAN
            }

            function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
                return eachFunc(collection, function(value, index, collection) {
                    accumulator = initAccum ? (initAccum = !1, value) : iteratee(accumulator, value, index, collection)
                }), accumulator
            }

            function baseSortBy(array, comparer) {
                var length = array.length;
                for (array.sort(comparer); length--;) array[length] = array[length].value;
                return array
            }

            function baseSum(array, iteratee) {
                for (var result, index = -1, length = array.length; ++index < length;) {
                    var current = iteratee(array[index]);
                    current !== undefined && (result = result === undefined ? current : result + current)
                }
                return result
            }

            function baseTimes(n, iteratee) {
                for (var index = -1, result = Array(n); ++index < n;) result[index] = iteratee(index);
                return result
            }

            function baseToPairs(object, props) {
                return arrayMap(props, function(key) {
                    return [key, object[key]]
                })
            }

            function baseUnary(func) {
                return function(value) {
                    return func(value)
                }
            }

            function baseValues(object, props) {
                return arrayMap(props, function(key) {
                    return object[key]
                })
            }

            function charsStartIndex(strSymbols, chrSymbols) {
                for (var index = -1, length = strSymbols.length; ++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1;);
                return index
            }

            function charsEndIndex(strSymbols, chrSymbols) {
                for (var index = strSymbols.length; index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1;);
                return index
            }

            function checkGlobal(value) {
                return value && value.Object === Object ? value : null
            }

            function countHolders(array, placeholder) {
                for (var length = array.length, result = 0; length--;) array[length] === placeholder && result++;
                return result
            }

            function deburrLetter(letter) {
                return deburredLetters[letter]
            }

            function escapeHtmlChar(chr) {
                return htmlEscapes[chr]
            }

            function escapeStringChar(chr) {
                return "\\" + stringEscapes[chr]
            }

            function indexOfNaN(array, fromIndex, fromRight) {
                for (var length = array.length, index = fromIndex + (fromRight ? 0 : -1); fromRight ? index-- : ++index < length;) {
                    var other = array[index];
                    if (other !== other) return index
                }
                return -1
            }

            function isHostObject(value) {
                var result = !1;
                if (null != value && "function" != typeof value.toString) try {
                    result = !!(value + "")
                } catch (e) {}
                return result
            }

            function iteratorToArray(iterator) {
                for (var data, result = []; !(data = iterator.next()).done;) result.push(data.value);
                return result
            }

            function mapToArray(map) {
                var index = -1,
                    result = Array(map.size);
                return map.forEach(function(value, key) {
                    result[++index] = [key, value]
                }), result
            }

            function replaceHolders(array, placeholder) {
                for (var index = -1, length = array.length, resIndex = 0, result = []; ++index < length;) {
                    var value = array[index];
                    value !== placeholder && value !== PLACEHOLDER || (array[index] = PLACEHOLDER, result[resIndex++] = index)
                }
                return result
            }

            function setToArray(set) {
                var index = -1,
                    result = Array(set.size);
                return set.forEach(function(value) {
                    result[++index] = value
                }), result
            }

            function stringSize(string) {
                if (!string || !reHasComplexSymbol.test(string)) return string.length;
                for (var result = reComplexSymbol.lastIndex = 0; reComplexSymbol.test(string);) result++;
                return result
            }

            function stringToArray(string) {
                return string.match(reComplexSymbol)
            }

            function unescapeHtmlChar(chr) {
                return htmlUnescapes[chr]
            }

            function runInContext(context) {
                function lodash(value) {
                    if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
                        if (value instanceof LodashWrapper) return value;
                        if (hasOwnProperty.call(value, "__wrapped__")) return wrapperClone(value)
                    }
                    return new LodashWrapper(value)
                }

                function baseLodash() {}

                function LodashWrapper(value, chainAll) {
                    this.__wrapped__ = value, this.__actions__ = [], this.__chain__ = !!chainAll, this.__index__ = 0, this.__values__ = undefined
                }

                function LazyWrapper(value) {
                    this.__wrapped__ = value, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = MAX_ARRAY_LENGTH, this.__views__ = []
                }

                function lazyClone() {
                    var result = new LazyWrapper(this.__wrapped__);
                    return result.__actions__ = copyArray(this.__actions__), result.__dir__ = this.__dir__, result.__filtered__ = this.__filtered__, result.__iteratees__ = copyArray(this.__iteratees__), result.__takeCount__ = this.__takeCount__, result.__views__ = copyArray(this.__views__), result
                }

                function lazyReverse() {
                    if (this.__filtered__) {
                        var result = new LazyWrapper(this);
                        result.__dir__ = -1, result.__filtered__ = !0
                    } else result = this.clone(), result.__dir__ *= -1;
                    return result
                }

                function lazyValue() {
                    var array = this.__wrapped__.value(),
                        dir = this.__dir__,
                        isArr = isArray(array),
                        isRight = 0 > dir,
                        arrLength = isArr ? array.length : 0,
                        view = getView(0, arrLength, this.__views__),
                        start = view.start,
                        end = view.end,
                        length = end - start,
                        index = isRight ? end : start - 1,
                        iteratees = this.__iteratees__,
                        iterLength = iteratees.length,
                        resIndex = 0,
                        takeCount = nativeMin(length, this.__takeCount__);
                    if (!isArr || LARGE_ARRAY_SIZE > arrLength || arrLength == length && takeCount == length) return baseWrapperValue(array, this.__actions__);
                    var result = [];
                    outer: for (; length-- && takeCount > resIndex;) {
                        index += dir;
                        for (var iterIndex = -1, value = array[index]; ++iterIndex < iterLength;) {
                            var data = iteratees[iterIndex],
                                iteratee = data.iteratee,
                                type = data.type,
                                computed = iteratee(value);
                            if (type == LAZY_MAP_FLAG) value = computed;
                            else if (!computed) {
                                if (type == LAZY_FILTER_FLAG) continue outer;
                                break outer
                            }
                        }
                        result[resIndex++] = value
                    }
                    return result
                }

                function Hash() {}

                function hashDelete(hash, key) {
                    return hashHas(hash, key) && delete hash[key]
                }

                function hashGet(hash, key) {
                    if (nativeCreate) {
                        var result = hash[key];
                        return result === HASH_UNDEFINED ? undefined : result
                    }
                    return hasOwnProperty.call(hash, key) ? hash[key] : undefined
                }

                function hashHas(hash, key) {
                    return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key)
                }

                function hashSet(hash, key, value) {
                    hash[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value
                }

                function MapCache(values) {
                    var index = -1,
                        length = values ? values.length : 0;
                    for (this.clear(); ++index < length;) {
                        var entry = values[index];
                        this.set(entry[0], entry[1])
                    }
                }

                function mapClear() {
                    this.__data__ = {
                        hash: new Hash,
                        map: Map ? new Map : [],
                        string: new Hash
                    }
                }

                function mapDelete(key) {
                    var data = this.__data__;
                    return isKeyable(key) ? hashDelete("string" == typeof key ? data.string : data.hash, key) : Map ? data.map["delete"](key) : assocDelete(data.map, key)
                }

                function mapGet(key) {
                    var data = this.__data__;
                    return isKeyable(key) ? hashGet("string" == typeof key ? data.string : data.hash, key) : Map ? data.map.get(key) : assocGet(data.map, key)
                }

                function mapHas(key) {
                    var data = this.__data__;
                    return isKeyable(key) ? hashHas("string" == typeof key ? data.string : data.hash, key) : Map ? data.map.has(key) : assocHas(data.map, key)
                }

                function mapSet(key, value) {
                    var data = this.__data__;
                    return isKeyable(key) ? hashSet("string" == typeof key ? data.string : data.hash, key, value) : Map ? data.map.set(key, value) : assocSet(data.map, key, value), this
                }

                function SetCache(values) {
                    var index = -1,
                        length = values ? values.length : 0;
                    for (this.__data__ = new MapCache; ++index < length;) this.push(values[index])
                }

                function cacheHas(cache, value) {
                    var map = cache.__data__;
                    if (isKeyable(value)) {
                        var data = map.__data__,
                            hash = "string" == typeof value ? data.string : data.hash;
                        return hash[value] === HASH_UNDEFINED
                    }
                    return map.has(value)
                }

                function cachePush(value) {
                    var map = this.__data__;
                    if (isKeyable(value)) {
                        var data = map.__data__,
                            hash = "string" == typeof value ? data.string : data.hash;
                        hash[value] = HASH_UNDEFINED
                    } else map.set(value, HASH_UNDEFINED)
                }

                function Stack(values) {
                    var index = -1,
                        length = values ? values.length : 0;
                    for (this.clear(); ++index < length;) {
                        var entry = values[index];
                        this.set(entry[0], entry[1])
                    }
                }

                function stackClear() {
                    this.__data__ = {
                        array: [],
                        map: null
                    }
                }

                function stackDelete(key) {
                    var data = this.__data__,
                        array = data.array;
                    return array ? assocDelete(array, key) : data.map["delete"](key)
                }

                function stackGet(key) {
                    var data = this.__data__,
                        array = data.array;
                    return array ? assocGet(array, key) : data.map.get(key)
                }

                function stackHas(key) {
                    var data = this.__data__,
                        array = data.array;
                    return array ? assocHas(array, key) : data.map.has(key)
                }

                function stackSet(key, value) {
                    var data = this.__data__,
                        array = data.array;
                    array && (array.length < LARGE_ARRAY_SIZE - 1 ? assocSet(array, key, value) : (data.array = null, data.map = new MapCache(array)));
                    var map = data.map;
                    return map && map.set(key, value), this
                }

                function assocDelete(array, key) {
                    var index = assocIndexOf(array, key);
                    if (0 > index) return !1;
                    var lastIndex = array.length - 1;
                    return index == lastIndex ? array.pop() : splice.call(array, index, 1), !0
                }

                function assocGet(array, key) {
                    var index = assocIndexOf(array, key);
                    return 0 > index ? undefined : array[index][1]
                }

                function assocHas(array, key) {
                    return assocIndexOf(array, key) > -1
                }

                function assocIndexOf(array, key) {
                    for (var length = array.length; length--;)
                        if (eq(array[length][0], key)) return length;
                    return -1
                }

                function assocSet(array, key, value) {
                    var index = assocIndexOf(array, key);
                    0 > index ? array.push([key, value]) : array[index][1] = value
                }

                function assignInDefaults(objValue, srcValue, key, object) {
                    return objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key) ? srcValue : objValue
                }

                function assignMergeValue(object, key, value) {
                    (value === undefined || eq(object[key], value)) && ("number" != typeof key || value !== undefined || key in object) || (object[key] = value)
                }

                function assignValue(object, key, value) {
                    var objValue = object[key];
                    hasOwnProperty.call(object, key) && eq(objValue, value) && (value !== undefined || key in object) || (object[key] = value)
                }

                function baseAggregator(collection, setter, iteratee, accumulator) {
                    return baseEach(collection, function(value, key, collection) {
                        setter(accumulator, value, iteratee(value), collection)
                    }), accumulator
                }

                function baseAssign(object, source) {
                    return object && copyObject(source, keys(source), object)
                }

                function baseAt(object, paths) {
                    for (var index = -1, isNil = null == object, length = paths.length, result = Array(length); ++index < length;) result[index] = isNil ? undefined : get(object, paths[index]);
                    return result
                }

                function baseClamp(number, lower, upper) {
                    return number === number && (upper !== undefined && (number = upper >= number ? number : upper), lower !== undefined && (number = number >= lower ? number : lower)), number
                }

                function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
                    var result;
                    if (customizer && (result = object ? customizer(value, key, object, stack) : customizer(value)), result !== undefined) return result;
                    if (!isObject(value)) return value;
                    var isArr = isArray(value);
                    if (isArr) {
                        if (result = initCloneArray(value), !isDeep) return copyArray(value, result)
                    } else {
                        var tag = getTag(value),
                            isFunc = tag == funcTag || tag == genTag;
                        if (isBuffer(value)) return cloneBuffer(value, isDeep);
                        if (tag == objectTag || tag == argsTag || isFunc && !object) {
                            if (isHostObject(value)) return object ? value : {};
                            if (result = initCloneObject(isFunc ? {} : value), !isDeep) return copySymbols(value, baseAssign(result, value))
                        } else {
                            if (!cloneableTags[tag]) return object ? value : {};
                            result = initCloneByTag(value, tag, baseClone, isDeep)
                        }
                    }
                    stack || (stack = new Stack);
                    var stacked = stack.get(value);
                    if (stacked) return stacked;
                    if (stack.set(value, result), !isArr) var props = isFull ? getAllKeys(value) : keys(value);
                    return arrayEach(props || value, function(subValue, key) {
                        props && (key = subValue, subValue = value[key]), assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack))
                    }), result
                }

                function baseConforms(source) {
                    var props = keys(source),
                        length = props.length;
                    return function(object) {
                        if (null == object) return !length;
                        for (var index = length; index--;) {
                            var key = props[index],
                                predicate = source[key],
                                value = object[key];
                            if (value === undefined && !(key in Object(object)) || !predicate(value)) return !1
                        }
                        return !0
                    }
                }

                function baseCreate(proto) {
                    return isObject(proto) ? objectCreate(proto) : {}
                }

                function baseDelay(func, wait, args) {
                    if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    return setTimeout(function() {
                        func.apply(undefined, args)
                    }, wait)
                }

                function baseDifference(array, values, iteratee, comparator) {
                    var index = -1,
                        includes = arrayIncludes,
                        isCommon = !0,
                        length = array.length,
                        result = [],
                        valuesLength = values.length;
                    if (!length) return result;
                    iteratee && (values = arrayMap(values, baseUnary(iteratee))), comparator ? (includes = arrayIncludesWith, isCommon = !1) : values.length >= LARGE_ARRAY_SIZE && (includes = cacheHas, isCommon = !1, values = new SetCache(values));
                    outer: for (; ++index < length;) {
                        var value = array[index],
                            computed = iteratee ? iteratee(value) : value;
                        if (value = comparator || 0 !== value ? value : 0, isCommon && computed === computed) {
                            for (var valuesIndex = valuesLength; valuesIndex--;)
                                if (values[valuesIndex] === computed) continue outer;
                            result.push(value)
                        } else includes(values, computed, comparator) || result.push(value)
                    }
                    return result
                }

                function baseEvery(collection, predicate) {
                    var result = !0;
                    return baseEach(collection, function(value, index, collection) {
                        return result = !!predicate(value, index, collection)
                    }), result
                }

                function baseExtremum(array, iteratee, comparator) {
                    for (var index = -1, length = array.length; ++index < length;) {
                        var value = array[index],
                            current = iteratee(value);
                        if (null != current && (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))) var computed = current,
                            result = value
                    }
                    return result
                }

                function baseFill(array, value, start, end) {
                    var length = array.length;
                    for (start = toInteger(start), 0 > start && (start = -start > length ? 0 : length + start), end = end === undefined || end > length ? length : toInteger(end), 0 > end && (end += length), end = start > end ? 0 : toLength(end); end > start;) array[start++] = value;
                    return array
                }

                function baseFilter(collection, predicate) {
                    var result = [];
                    return baseEach(collection, function(value, index, collection) {
                        predicate(value, index, collection) && result.push(value)
                    }), result
                }

                function baseFlatten(array, depth, predicate, isStrict, result) {
                    var index = -1,
                        length = array.length;
                    for (predicate || (predicate = isFlattenable), result || (result = []); ++index < length;) {
                        var value = array[index];
                        depth > 0 && predicate(value) ? depth > 1 ? baseFlatten(value, depth - 1, predicate, isStrict, result) : arrayPush(result, value) : isStrict || (result[result.length] = value)
                    }
                    return result
                }

                function baseForOwn(object, iteratee) {
                    return object && baseFor(object, iteratee, keys)
                }

                function baseForOwnRight(object, iteratee) {
                    return object && baseForRight(object, iteratee, keys)
                }

                function baseFunctions(object, props) {
                    return arrayFilter(props, function(key) {
                        return isFunction(object[key])
                    })
                }

                function baseGet(object, path) {
                    path = isKey(path, object) ? [path] : castPath(path);
                    for (var index = 0, length = path.length; null != object && length > index;) object = object[toKey(path[index++])];
                    return index && index == length ? object : undefined
                }

                function baseGetAllKeys(object, keysFunc, symbolsFunc) {
                    var result = keysFunc(object);
                    return isArray(object) ? result : arrayPush(result, symbolsFunc(object))
                }

                function baseGt(value, other) {
                    return value > other
                }

                function baseHas(object, key) {
                    return hasOwnProperty.call(object, key) || "object" == typeof object && key in object && null === getPrototype(object)
                }

                function baseHasIn(object, key) {
                    return key in Object(object)
                }

                function baseInRange(number, start, end) {
                    return number >= nativeMin(start, end) && number < nativeMax(start, end)
                }

                function baseIntersection(arrays, iteratee, comparator) {
                    for (var includes = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array(othLength), maxLength = 1 / 0, result = []; othIndex--;) {
                        var array = arrays[othIndex];
                        othIndex && iteratee && (array = arrayMap(array, baseUnary(iteratee))), maxLength = nativeMin(array.length, maxLength), caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined
                    }
                    array = arrays[0];
                    var index = -1,
                        seen = caches[0];
                    outer: for (; ++index < length && result.length < maxLength;) {
                        var value = array[index],
                            computed = iteratee ? iteratee(value) : value;
                        if (value = comparator || 0 !== value ? value : 0, !(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
                            for (othIndex = othLength; --othIndex;) {
                                var cache = caches[othIndex];
                                if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) continue outer
                            }
                            seen && seen.push(computed), result.push(value)
                        }
                    }
                    return result
                }

                function baseInverter(object, setter, iteratee, accumulator) {
                    return baseForOwn(object, function(value, key, object) {
                        setter(accumulator, iteratee(value), key, object)
                    }), accumulator
                }

                function baseInvoke(object, path, args) {
                    isKey(path, object) || (path = castPath(path), object = parent(object, path), path = last(path));
                    var func = null == object ? object : object[toKey(path)];
                    return null == func ? undefined : apply(func, object, args)
                }

                function baseIsEqual(value, other, customizer, bitmask, stack) {
                    return value === other ? !0 : null == value || null == other || !isObject(value) && !isObjectLike(other) ? value !== value && other !== other : baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack)
                }

                function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
                    var objIsArr = isArray(object),
                        othIsArr = isArray(other),
                        objTag = arrayTag,
                        othTag = arrayTag;
                    objIsArr || (objTag = getTag(object), objTag = objTag == argsTag ? objectTag : objTag), othIsArr || (othTag = getTag(other), othTag = othTag == argsTag ? objectTag : othTag);
                    var objIsObj = objTag == objectTag && !isHostObject(object),
                        othIsObj = othTag == objectTag && !isHostObject(other),
                        isSameTag = objTag == othTag;
                    if (isSameTag && !objIsObj) return stack || (stack = new Stack), objIsArr || isTypedArray(object) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
                    if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
                        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"),
                            othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
                        if (objIsWrapped || othIsWrapped) {
                            var objUnwrapped = objIsWrapped ? object.value() : object,
                                othUnwrapped = othIsWrapped ? other.value() : other;
                            return stack || (stack = new Stack), equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack)
                        }
                    }
                    return isSameTag ? (stack || (stack = new Stack), equalObjects(object, other, equalFunc, customizer, bitmask, stack)) : !1
                }

                function baseIsMatch(object, source, matchData, customizer) {
                    var index = matchData.length,
                        length = index,
                        noCustomizer = !customizer;
                    if (null == object) return !length;
                    for (object = Object(object); index--;) {
                        var data = matchData[index];
                        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return !1
                    }
                    for (; ++index < length;) {
                        data = matchData[index];
                        var key = data[0],
                            objValue = object[key],
                            srcValue = data[1];
                        if (noCustomizer && data[2]) {
                            if (objValue === undefined && !(key in object)) return !1
                        } else {
                            var stack = new Stack;
                            if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
                            if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) return !1
                        }
                    }
                    return !0
                }

                function baseIteratee(value) {
                    return "function" == typeof value ? value : null == value ? identity : "object" == typeof value ? isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value) : property(value)
                }

                function baseKeys(object) {
                    return nativeKeys(Object(object))
                }

                function baseKeysIn(object) {
                    object = null == object ? object : Object(object);
                    var result = [];
                    for (var key in object) result.push(key);
                    return result
                }

                function baseLt(value, other) {
                    return other > value
                }

                function baseMap(collection, iteratee) {
                    var index = -1,
                        result = isArrayLike(collection) ? Array(collection.length) : [];
                    return baseEach(collection, function(value, key, collection) {
                        result[++index] = iteratee(value, key, collection)
                    }), result
                }

                function baseMatches(source) {
                    var matchData = getMatchData(source);
                    return 1 == matchData.length && matchData[0][2] ? matchesStrictComparable(matchData[0][0], matchData[0][1]) : function(object) {
                        return object === source || baseIsMatch(object, source, matchData)
                    }
                }

                function baseMatchesProperty(path, srcValue) {
                    return isKey(path) && isStrictComparable(srcValue) ? matchesStrictComparable(toKey(path), srcValue) : function(object) {
                        var objValue = get(object, path);
                        return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG)
                    }
                }

                function baseMerge(object, source, srcIndex, customizer, stack) {
                    if (object !== source) {
                        if (!isArray(source) && !isTypedArray(source)) var props = keysIn(source);
                        arrayEach(props || source, function(srcValue, key) {
                            if (props && (key = srcValue, srcValue = source[key]), isObject(srcValue)) stack || (stack = new Stack), baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
                            else {
                                var newValue = customizer ? customizer(object[key], srcValue, key + "", object, source, stack) : undefined;
                                newValue === undefined && (newValue = srcValue), assignMergeValue(object, key, newValue)
                            }
                        })
                    }
                }

                function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
                    var objValue = object[key],
                        srcValue = source[key],
                        stacked = stack.get(srcValue);
                    if (stacked) return void assignMergeValue(object, key, stacked);
                    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined,
                        isCommon = newValue === undefined;
                    isCommon && (newValue = srcValue, isArray(srcValue) || isTypedArray(srcValue) ? isArray(objValue) ? newValue = objValue : isArrayLikeObject(objValue) ? newValue = copyArray(objValue) : (isCommon = !1, newValue = baseClone(srcValue, !0)) : isPlainObject(srcValue) || isArguments(srcValue) ? isArguments(objValue) ? newValue = toPlainObject(objValue) : !isObject(objValue) || srcIndex && isFunction(objValue) ? (isCommon = !1, newValue = baseClone(srcValue, !0)) : newValue = objValue : isCommon = !1), stack.set(srcValue, newValue), isCommon && mergeFunc(newValue, srcValue, srcIndex, customizer, stack), stack["delete"](srcValue), assignMergeValue(object, key, newValue)
                }

                function baseNth(array, n) {
                    var length = array.length;
                    if (length) return n += 0 > n ? length : 0, isIndex(n, length) ? array[n] : undefined
                }

                function baseOrderBy(collection, iteratees, orders) {
                    var index = -1;
                    iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));
                    var result = baseMap(collection, function(value, key, collection) {
                        var criteria = arrayMap(iteratees, function(iteratee) {
                            return iteratee(value)
                        });
                        return {
                            criteria: criteria,
                            index: ++index,
                            value: value
                        }
                    });
                    return baseSortBy(result, function(object, other) {
                        return compareMultiple(object, other, orders)
                    })
                }

                function basePick(object, props) {
                    return object = Object(object), arrayReduce(props, function(result, key) {
                        return key in object && (result[key] = object[key]), result
                    }, {})
                }

                function basePickBy(object, predicate) {
                    for (var index = -1, props = getAllKeysIn(object), length = props.length, result = {}; ++index < length;) {
                        var key = props[index],
                            value = object[key];
                        predicate(value, key) && (result[key] = value)
                    }
                    return result
                }

                function baseProperty(key) {
                    return function(object) {
                        return null == object ? undefined : object[key]
                    }
                }

                function basePropertyDeep(path) {
                    return function(object) {
                        return baseGet(object, path)
                    }
                }

                function basePullAll(array, values, iteratee, comparator) {
                    var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
                        index = -1,
                        length = values.length,
                        seen = array;
                    for (iteratee && (seen = arrayMap(array, baseUnary(iteratee))); ++index < length;)
                        for (var fromIndex = 0, value = values[index], computed = iteratee ? iteratee(value) : value;
                            (fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1;) seen !== array && splice.call(seen, fromIndex, 1), splice.call(array, fromIndex, 1);
                    return array
                }

                function basePullAt(array, indexes) {
                    for (var length = array ? indexes.length : 0, lastIndex = length - 1; length--;) {
                        var index = indexes[length];
                        if (length == lastIndex || index !== previous) {
                            var previous = index;
                            if (isIndex(index)) splice.call(array, index, 1);
                            else if (isKey(index, array)) delete array[toKey(index)];
                            else {
                                var path = castPath(index),
                                    object = parent(array, path);
                                null != object && delete object[toKey(last(path))]
                            }
                        }
                    }
                    return array
                }

                function baseRandom(lower, upper) {
                    return lower + nativeFloor(nativeRandom() * (upper - lower + 1))
                }

                function baseRange(start, end, step, fromRight) {
                    for (var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length); length--;) result[fromRight ? length : ++index] = start, start += step;
                    return result
                }

                function baseRepeat(string, n) {
                    var result = "";
                    if (!string || 1 > n || n > MAX_SAFE_INTEGER) return result;
                    do n % 2 && (result += string), n = nativeFloor(n / 2), n && (string += string); while (n);
                    return result
                }

                function baseSet(object, path, value, customizer) {
                    path = isKey(path, object) ? [path] : castPath(path);
                    for (var index = -1, length = path.length, lastIndex = length - 1, nested = object; null != nested && ++index < length;) {
                        var key = toKey(path[index]);
                        if (isObject(nested)) {
                            var newValue = value;
                            if (index != lastIndex) {
                                var objValue = nested[key];
                                newValue = customizer ? customizer(objValue, key, nested) : undefined, newValue === undefined && (newValue = null == objValue ? isIndex(path[index + 1]) ? [] : {} : objValue)
                            }
                            assignValue(nested, key, newValue)
                        }
                        nested = nested[key]
                    }
                    return object
                }

                function baseSlice(array, start, end) {
                    var index = -1,
                        length = array.length;
                    0 > start && (start = -start > length ? 0 : length + start), end = end > length ? length : end, 0 > end && (end += length), length = start > end ? 0 : end - start >>> 0, start >>>= 0;
                    for (var result = Array(length); ++index < length;) result[index] = array[index + start];
                    return result
                }

                function baseSome(collection, predicate) {
                    var result;
                    return baseEach(collection, function(value, index, collection) {
                        return result = predicate(value, index, collection), !result
                    }), !!result
                }

                function baseSortedIndex(array, value, retHighest) {
                    var low = 0,
                        high = array ? array.length : low;
                    if ("number" == typeof value && value === value && HALF_MAX_ARRAY_LENGTH >= high) {
                        for (; high > low;) {
                            var mid = low + high >>> 1,
                                computed = array[mid];
                            null !== computed && !isSymbol(computed) && (retHighest ? value >= computed : value > computed) ? low = mid + 1 : high = mid
                        }
                        return high
                    }
                    return baseSortedIndexBy(array, value, identity, retHighest)
                }

                function baseSortedIndexBy(array, value, iteratee, retHighest) {
                    value = iteratee(value);
                    for (var low = 0, high = array ? array.length : 0, valIsNaN = value !== value, valIsNull = null === value, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined; high > low;) {
                        var mid = nativeFloor((low + high) / 2),
                            computed = iteratee(array[mid]),
                            othIsDefined = computed !== undefined,
                            othIsNull = null === computed,
                            othIsReflexive = computed === computed,
                            othIsSymbol = isSymbol(computed);
                        if (valIsNaN) var setLow = retHighest || othIsReflexive;
                        else setLow = valIsUndefined ? othIsReflexive && (retHighest || othIsDefined) : valIsNull ? othIsReflexive && othIsDefined && (retHighest || !othIsNull) : valIsSymbol ? othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol) : othIsNull || othIsSymbol ? !1 : retHighest ? value >= computed : value > computed;
                        setLow ? low = mid + 1 : high = mid
                    }
                    return nativeMin(high, MAX_ARRAY_INDEX)
                }

                function baseSortedUniq(array, iteratee) {
                    for (var index = -1, length = array.length, resIndex = 0, result = []; ++index < length;) {
                        var value = array[index],
                            computed = iteratee ? iteratee(value) : value;
                        if (!index || !eq(computed, seen)) {
                            var seen = computed;
                            result[resIndex++] = 0 === value ? 0 : value
                        }
                    }
                    return result
                }

                function baseToNumber(value) {
                    return "number" == typeof value ? value : isSymbol(value) ? NAN : +value
                }

                function baseToString(value) {
                    if ("string" == typeof value) return value;
                    if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
                    var result = value + "";
                    return "0" == result && 1 / value == -INFINITY ? "-0" : result
                }

                function baseUniq(array, iteratee, comparator) {
                    var index = -1,
                        includes = arrayIncludes,
                        length = array.length,
                        isCommon = !0,
                        result = [],
                        seen = result;
                    if (comparator) isCommon = !1, includes = arrayIncludesWith;
                    else if (length >= LARGE_ARRAY_SIZE) {
                        var set = iteratee ? null : createSet(array);
                        if (set) return setToArray(set);
                        isCommon = !1, includes = cacheHas, seen = new SetCache
                    } else seen = iteratee ? [] : result;
                    outer: for (; ++index < length;) {
                        var value = array[index],
                            computed = iteratee ? iteratee(value) : value;
                        if (value = comparator || 0 !== value ? value : 0, isCommon && computed === computed) {
                            for (var seenIndex = seen.length; seenIndex--;)
                                if (seen[seenIndex] === computed) continue outer;
                            iteratee && seen.push(computed), result.push(value)
                        } else includes(seen, computed, comparator) || (seen !== result && seen.push(computed), result.push(value))
                    }
                    return result
                }

                function baseUnset(object, path) {
                    path = isKey(path, object) ? [path] : castPath(path), object = parent(object, path);
                    var key = toKey(last(path));
                    return !(null != object && baseHas(object, key)) || delete object[key]
                }

                function baseUpdate(object, path, updater, customizer) {
                    return baseSet(object, path, updater(baseGet(object, path)), customizer)
                }

                function baseWhile(array, predicate, isDrop, fromRight) {
                    for (var length = array.length, index = fromRight ? length : -1;
                        (fromRight ? index-- : ++index < length) && predicate(array[index], index, array););
                    return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index)
                }

                function baseWrapperValue(value, actions) {
                    var result = value;
                    return result instanceof LazyWrapper && (result = result.value()), arrayReduce(actions, function(result, action) {
                        return action.func.apply(action.thisArg, arrayPush([result], action.args))
                    }, result)
                }

                function baseXor(arrays, iteratee, comparator) {
                    for (var index = -1, length = arrays.length; ++index < length;) var result = result ? arrayPush(baseDifference(result, arrays[index], iteratee, comparator), baseDifference(arrays[index], result, iteratee, comparator)) : arrays[index];
                    return result && result.length ? baseUniq(result, iteratee, comparator) : []
                }

                function baseZipObject(props, values, assignFunc) {
                    for (var index = -1, length = props.length, valsLength = values.length, result = {}; ++index < length;) {
                        var value = valsLength > index ? values[index] : undefined;
                        assignFunc(result, props[index], value)
                    }
                    return result
                }

                function castArrayLikeObject(value) {
                    return isArrayLikeObject(value) ? value : []
                }

                function castFunction(value) {
                    return "function" == typeof value ? value : identity
                }

                function castPath(value) {
                    return isArray(value) ? value : stringToPath(value)
                }

                function castSlice(array, start, end) {
                    var length = array.length;
                    return end = end === undefined ? length : end, !start && end >= length ? array : baseSlice(array, start, end)
                }

                function cloneBuffer(buffer, isDeep) {
                    if (isDeep) return buffer.slice();
                    var result = new buffer.constructor(buffer.length);
                    return buffer.copy(result), result
                }

                function cloneArrayBuffer(arrayBuffer) {
                    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
                    return new Uint8Array(result).set(new Uint8Array(arrayBuffer)), result
                }

                function cloneDataView(dataView, isDeep) {
                    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
                    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength)
                }

                function cloneMap(map, isDeep, cloneFunc) {
                    var array = isDeep ? cloneFunc(mapToArray(map), !0) : mapToArray(map);
                    return arrayReduce(array, addMapEntry, new map.constructor)
                }

                function cloneRegExp(regexp) {
                    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
                    return result.lastIndex = regexp.lastIndex, result
                }

                function cloneSet(set, isDeep, cloneFunc) {
                    var array = isDeep ? cloneFunc(setToArray(set), !0) : setToArray(set);
                    return arrayReduce(array, addSetEntry, new set.constructor)
                }

                function cloneSymbol(symbol) {
                    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {}
                }

                function cloneTypedArray(typedArray, isDeep) {
                    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
                    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length)
                }

                function compareAscending(value, other) {
                    if (value !== other) {
                        var valIsDefined = value !== undefined,
                            valIsNull = null === value,
                            valIsReflexive = value === value,
                            valIsSymbol = isSymbol(value),
                            othIsDefined = other !== undefined,
                            othIsNull = null === other,
                            othIsReflexive = other === other,
                            othIsSymbol = isSymbol(other);
                        if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) return 1;
                        if (!valIsNull && !valIsSymbol && !othIsSymbol && other > value || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) return -1
                    }
                    return 0
                }

                function compareMultiple(object, other, orders) {
                    for (var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length; ++index < length;) {
                        var result = compareAscending(objCriteria[index], othCriteria[index]);
                        if (result) {
                            if (index >= ordersLength) return result;
                            var order = orders[index];
                            return result * ("desc" == order ? -1 : 1)
                        }
                    }
                    return object.index - other.index
                }

                function composeArgs(args, partials, holders, isCurried) {
                    for (var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(leftLength + rangeLength), isUncurried = !isCurried; ++leftIndex < leftLength;) result[leftIndex] = partials[leftIndex];
                    for (; ++argsIndex < holdersLength;)(isUncurried || argsLength > argsIndex) && (result[holders[argsIndex]] = args[argsIndex]);
                    for (; rangeLength--;) result[leftIndex++] = args[argsIndex++];
                    return result
                }

                function composeArgsRight(args, partials, holders, isCurried) {
                    for (var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(rangeLength + rightLength), isUncurried = !isCurried; ++argsIndex < rangeLength;) result[argsIndex] = args[argsIndex];
                    for (var offset = argsIndex; ++rightIndex < rightLength;) result[offset + rightIndex] = partials[rightIndex];
                    for (; ++holdersIndex < holdersLength;)(isUncurried || argsLength > argsIndex) && (result[offset + holders[holdersIndex]] = args[argsIndex++]);
                    return result
                }

                function copyArray(source, array) {
                    var index = -1,
                        length = source.length;
                    for (array || (array = Array(length)); ++index < length;) array[index] = source[index];
                    return array
                }

                function copyObject(source, props, object, customizer) {
                    object || (object = {});
                    for (var index = -1, length = props.length; ++index < length;) {
                        var key = props[index],
                            newValue = customizer ? customizer(object[key], source[key], key, object, source) : source[key];
                        assignValue(object, key, newValue)
                    }
                    return object
                }

                function copySymbols(source, object) {
                    return copyObject(source, getSymbols(source), object)
                }

                function createAggregator(setter, initializer) {
                    return function(collection, iteratee) {
                        var func = isArray(collection) ? arrayAggregator : baseAggregator,
                            accumulator = initializer ? initializer() : {};
                        return func(collection, setter, getIteratee(iteratee), accumulator)
                    }
                }

                function createAssigner(assigner) {
                    return rest(function(object, sources) {
                        var index = -1,
                            length = sources.length,
                            customizer = length > 1 ? sources[length - 1] : undefined,
                            guard = length > 2 ? sources[2] : undefined;
                        for (customizer = "function" == typeof customizer ? (length--, customizer) : undefined, guard && isIterateeCall(sources[0], sources[1], guard) && (customizer = 3 > length ? undefined : customizer, length = 1), object = Object(object); ++index < length;) {
                            var source = sources[index];
                            source && assigner(object, source, index, customizer)
                        }
                        return object
                    })
                }

                function createBaseEach(eachFunc, fromRight) {
                    return function(collection, iteratee) {
                        if (null == collection) return collection;
                        if (!isArrayLike(collection)) return eachFunc(collection, iteratee);
                        for (var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
                            (fromRight ? index-- : ++index < length) && iteratee(iterable[index], index, iterable) !== !1;);
                        return collection
                    }
                }

                function createBaseFor(fromRight) {
                    return function(object, iteratee, keysFunc) {
                        for (var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length; length--;) {
                            var key = props[fromRight ? length : ++index];
                            if (iteratee(iterable[key], key, iterable) === !1) break
                        }
                        return object
                    }
                }

                function createBaseWrapper(func, bitmask, thisArg) {
                    function wrapper() {
                        var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
                        return fn.apply(isBind ? thisArg : this, arguments);
                    }
                    var isBind = bitmask & BIND_FLAG,
                        Ctor = createCtorWrapper(func);
                    return wrapper
                }

                function createCaseFirst(methodName) {
                    return function(string) {
                        string = toString(string);
                        var strSymbols = reHasComplexSymbol.test(string) ? stringToArray(string) : undefined,
                            chr = strSymbols ? strSymbols[0] : string.charAt(0),
                            trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
                        return chr[methodName]() + trailing
                    }
                }

                function createCompounder(callback) {
                    return function(string) {
                        return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "")
                    }
                }

                function createCtorWrapper(Ctor) {
                    return function() {
                        var args = arguments;
                        switch (args.length) {
                            case 0:
                                return new Ctor;
                            case 1:
                                return new Ctor(args[0]);
                            case 2:
                                return new Ctor(args[0], args[1]);
                            case 3:
                                return new Ctor(args[0], args[1], args[2]);
                            case 4:
                                return new Ctor(args[0], args[1], args[2], args[3]);
                            case 5:
                                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
                            case 6:
                                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
                            case 7:
                                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6])
                        }
                        var thisBinding = baseCreate(Ctor.prototype),
                            result = Ctor.apply(thisBinding, args);
                        return isObject(result) ? result : thisBinding
                    }
                }

                function createCurryWrapper(func, bitmask, arity) {
                    function wrapper() {
                        for (var length = arguments.length, args = Array(length), index = length, placeholder = getPlaceholder(wrapper); index--;) args[index] = arguments[index];
                        var holders = 3 > length && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
                        if (length -= holders.length, arity > length) return createRecurryWrapper(func, bitmask, createHybridWrapper, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
                        var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
                        return apply(fn, this, args)
                    }
                    var Ctor = createCtorWrapper(func);
                    return wrapper
                }

                function createFlow(fromRight) {
                    return rest(function(funcs) {
                        funcs = baseFlatten(funcs, 1);
                        var length = funcs.length,
                            index = length,
                            prereq = LodashWrapper.prototype.thru;
                        for (fromRight && funcs.reverse(); index--;) {
                            var func = funcs[index];
                            if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                            if (prereq && !wrapper && "wrapper" == getFuncName(func)) var wrapper = new LodashWrapper([], !0)
                        }
                        for (index = wrapper ? index : length; ++index < length;) {
                            func = funcs[index];
                            var funcName = getFuncName(func),
                                data = "wrapper" == funcName ? getData(func) : undefined;
                            wrapper = data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && 1 == data[9] ? wrapper[getFuncName(data[0])].apply(wrapper, data[3]) : 1 == func.length && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func)
                        }
                        return function() {
                            var args = arguments,
                                value = args[0];
                            if (wrapper && 1 == args.length && isArray(value) && value.length >= LARGE_ARRAY_SIZE) return wrapper.plant(value).value();
                            for (var index = 0, result = length ? funcs[index].apply(this, args) : value; ++index < length;) result = funcs[index].call(this, result);
                            return result
                        }
                    })
                }

                function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
                    function wrapper() {
                        for (var length = arguments.length, index = length, args = Array(length); index--;) args[index] = arguments[index];
                        if (isCurried) var placeholder = getPlaceholder(wrapper),
                            holdersCount = countHolders(args, placeholder);
                        if (partials && (args = composeArgs(args, partials, holders, isCurried)), partialsRight && (args = composeArgsRight(args, partialsRight, holdersRight, isCurried)), length -= holdersCount, isCurried && arity > length) {
                            var newHolders = replaceHolders(args, placeholder);
                            return createRecurryWrapper(func, bitmask, createHybridWrapper, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length)
                        }
                        var thisBinding = isBind ? thisArg : this,
                            fn = isBindKey ? thisBinding[func] : func;
                        return length = args.length, argPos ? args = reorder(args, argPos) : isFlip && length > 1 && args.reverse(), isAry && length > ary && (args.length = ary), this && this !== root && this instanceof wrapper && (fn = Ctor || createCtorWrapper(fn)), fn.apply(thisBinding, args)
                    }
                    var isAry = bitmask & ARY_FLAG,
                        isBind = bitmask & BIND_FLAG,
                        isBindKey = bitmask & BIND_KEY_FLAG,
                        isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG),
                        isFlip = bitmask & FLIP_FLAG,
                        Ctor = isBindKey ? undefined : createCtorWrapper(func);
                    return wrapper
                }

                function createInverter(setter, toIteratee) {
                    return function(object, iteratee) {
                        return baseInverter(object, setter, toIteratee(iteratee), {})
                    }
                }

                function createMathOperation(operator) {
                    return function(value, other) {
                        var result;
                        if (value === undefined && other === undefined) return 0;
                        if (value !== undefined && (result = value), other !== undefined) {
                            if (result === undefined) return other;
                            "string" == typeof value || "string" == typeof other ? (value = baseToString(value), other = baseToString(other)) : (value = baseToNumber(value), other = baseToNumber(other)), result = operator(value, other)
                        }
                        return result
                    }
                }

                function createOver(arrayFunc) {
                    return rest(function(iteratees) {
                        return iteratees = 1 == iteratees.length && isArray(iteratees[0]) ? arrayMap(iteratees[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(iteratees, 1, isFlattenableIteratee), baseUnary(getIteratee())), rest(function(args) {
                            var thisArg = this;
                            return arrayFunc(iteratees, function(iteratee) {
                                return apply(iteratee, thisArg, args)
                            })
                        })
                    })
                }

                function createPadding(length, chars) {
                    chars = chars === undefined ? " " : baseToString(chars);
                    var charsLength = chars.length;
                    if (2 > charsLength) return charsLength ? baseRepeat(chars, length) : chars;
                    var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
                    return reHasComplexSymbol.test(chars) ? castSlice(stringToArray(result), 0, length).join("") : result.slice(0, length)
                }

                function createPartialWrapper(func, bitmask, thisArg, partials) {
                    function wrapper() {
                        for (var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func; ++leftIndex < leftLength;) args[leftIndex] = partials[leftIndex];
                        for (; argsLength--;) args[leftIndex++] = arguments[++argsIndex];
                        return apply(fn, isBind ? thisArg : this, args)
                    }
                    var isBind = bitmask & BIND_FLAG,
                        Ctor = createCtorWrapper(func);
                    return wrapper
                }

                function createRange(fromRight) {
                    return function(start, end, step) {
                        return step && "number" != typeof step && isIterateeCall(start, end, step) && (end = step = undefined), start = toNumber(start), start = start === start ? start : 0, end === undefined ? (end = start, start = 0) : end = toNumber(end) || 0, step = step === undefined ? end > start ? 1 : -1 : toNumber(step) || 0, baseRange(start, end, step, fromRight)
                    }
                }

                function createRelationalOperation(operator) {
                    return function(value, other) {
                        return "string" == typeof value && "string" == typeof other || (value = toNumber(value), other = toNumber(other)), operator(value, other)
                    }
                }

                function createRecurryWrapper(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
                    var isCurry = bitmask & CURRY_FLAG,
                        newHolders = isCurry ? holders : undefined,
                        newHoldersRight = isCurry ? undefined : holders,
                        newPartials = isCurry ? partials : undefined,
                        newPartialsRight = isCurry ? undefined : partials;
                    bitmask |= isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG, bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG), bitmask & CURRY_BOUND_FLAG || (bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG));
                    var newData = [func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity],
                        result = wrapFunc.apply(undefined, newData);
                    return isLaziable(func) && setData(result, newData), result.placeholder = placeholder, result
                }

                function createRound(methodName) {
                    var func = Math[methodName];
                    return function(number, precision) {
                        if (number = toNumber(number), precision = toInteger(precision)) {
                            var pair = (toString(number) + "e").split("e"),
                                value = func(pair[0] + "e" + (+pair[1] + precision));
                            return pair = (toString(value) + "e").split("e"), +(pair[0] + "e" + (+pair[1] - precision))
                        }
                        return func(number)
                    }
                }

                function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
                    var isBindKey = bitmask & BIND_KEY_FLAG;
                    if (!isBindKey && "function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    var length = partials ? partials.length : 0;
                    if (length || (bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG), partials = holders = undefined), ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0), arity = arity === undefined ? arity : toInteger(arity), length -= holders ? holders.length : 0, bitmask & PARTIAL_RIGHT_FLAG) {
                        var partialsRight = partials,
                            holdersRight = holders;
                        partials = holders = undefined
                    }
                    var data = isBindKey ? undefined : getData(func),
                        newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];
                    if (data && mergeData(newData, data), func = newData[0], bitmask = newData[1], thisArg = newData[2], partials = newData[3], holders = newData[4], arity = newData[9] = null == newData[9] ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0), !arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG) && (bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG)), bitmask && bitmask != BIND_FLAG) result = bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG ? createCurryWrapper(func, bitmask, arity) : bitmask != PARTIAL_FLAG && bitmask != (BIND_FLAG | PARTIAL_FLAG) || holders.length ? createHybridWrapper.apply(undefined, newData) : createPartialWrapper(func, bitmask, thisArg, partials);
                    else var result = createBaseWrapper(func, bitmask, thisArg);
                    var setter = data ? baseSetData : setData;
                    return setter(result, newData)
                }

                function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
                    var index = -1,
                        isPartial = bitmask & PARTIAL_COMPARE_FLAG,
                        isUnordered = bitmask & UNORDERED_COMPARE_FLAG,
                        arrLength = array.length,
                        othLength = other.length;
                    if (arrLength != othLength && !(isPartial && othLength > arrLength)) return !1;
                    var stacked = stack.get(array);
                    if (stacked) return stacked == other;
                    var result = !0;
                    for (stack.set(array, other); ++index < arrLength;) {
                        var arrValue = array[index],
                            othValue = other[index];
                        if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
                        if (compared !== undefined) {
                            if (compared) continue;
                            result = !1;
                            break
                        }
                        if (isUnordered) {
                            if (!arraySome(other, function(othValue) {
                                    return arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack)
                                })) {
                                result = !1;
                                break
                            }
                        } else if (arrValue !== othValue && !equalFunc(arrValue, othValue, customizer, bitmask, stack)) {
                            result = !1;
                            break
                        }
                    }
                    return stack["delete"](array), result
                }

                function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
                    switch (tag) {
                        case dataViewTag:
                            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return !1;
                            object = object.buffer, other = other.buffer;
                        case arrayBufferTag:
                            return !(object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other)));
                        case boolTag:
                        case dateTag:
                            return +object == +other;
                        case errorTag:
                            return object.name == other.name && object.message == other.message;
                        case numberTag:
                            return object != +object ? other != +other : object == +other;
                        case regexpTag:
                        case stringTag:
                            return object == other + "";
                        case mapTag:
                            var convert = mapToArray;
                        case setTag:
                            var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
                            if (convert || (convert = setToArray), object.size != other.size && !isPartial) return !1;
                            var stacked = stack.get(object);
                            return stacked ? stacked == other : (bitmask |= UNORDERED_COMPARE_FLAG, stack.set(object, other), equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack));
                        case symbolTag:
                            if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other)
                    }
                    return !1
                }

                function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
                    var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
                        objProps = keys(object),
                        objLength = objProps.length,
                        othProps = keys(other),
                        othLength = othProps.length;
                    if (objLength != othLength && !isPartial) return !1;
                    for (var index = objLength; index--;) {
                        var key = objProps[index];
                        if (!(isPartial ? key in other : baseHas(other, key))) return !1
                    }
                    var stacked = stack.get(object);
                    if (stacked) return stacked == other;
                    var result = !0;
                    stack.set(object, other);
                    for (var skipCtor = isPartial; ++index < objLength;) {
                        key = objProps[index];
                        var objValue = object[key],
                            othValue = other[key];
                        if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
                        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
                            result = !1;
                            break
                        }
                        skipCtor || (skipCtor = "constructor" == key)
                    }
                    if (result && !skipCtor) {
                        var objCtor = object.constructor,
                            othCtor = other.constructor;
                        objCtor != othCtor && "constructor" in object && "constructor" in other && !("function" == typeof objCtor && objCtor instanceof objCtor && "function" == typeof othCtor && othCtor instanceof othCtor) && (result = !1)
                    }
                    return stack["delete"](object), result
                }

                function getAllKeys(object) {
                    return baseGetAllKeys(object, keys, getSymbols)
                }

                function getAllKeysIn(object) {
                    return baseGetAllKeys(object, keysIn, getSymbolsIn)
                }

                function getFuncName(func) {
                    for (var result = func.name + "", array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0; length--;) {
                        var data = array[length],
                            otherFunc = data.func;
                        if (null == otherFunc || otherFunc == func) return data.name
                    }
                    return result
                }

                function getIteratee() {
                    var result = lodash.iteratee || iteratee;
                    return result = result === iteratee ? baseIteratee : result, arguments.length ? result(arguments[0], arguments[1]) : result
                }

                function getMatchData(object) {
                    for (var result = toPairs(object), length = result.length; length--;) result[length][2] = isStrictComparable(result[length][1]);
                    return result
                }

                function getNative(object, key) {
                    var value = object[key];
                    return isNative(value) ? value : undefined
                }

                function getPlaceholder(func) {
                    var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
                    return object.placeholder
                }

                function getPrototype(value) {
                    return nativeGetPrototype(Object(value))
                }

                function getSymbols(object) {
                    return getOwnPropertySymbols(Object(object))
                }

                function getTag(value) {
                    return objectToString.call(value)
                }

                function getView(start, end, transforms) {
                    for (var index = -1, length = transforms.length; ++index < length;) {
                        var data = transforms[index],
                            size = data.size;
                        switch (data.type) {
                            case "drop":
                                start += size;
                                break;
                            case "dropRight":
                                end -= size;
                                break;
                            case "take":
                                end = nativeMin(end, start + size);
                                break;
                            case "takeRight":
                                start = nativeMax(start, end - size)
                        }
                    }
                    return {
                        start: start,
                        end: end
                    }
                }

                function hasPath(object, path, hasFunc) {
                    path = isKey(path, object) ? [path] : castPath(path);
                    for (var result, index = -1, length = path.length; ++index < length;) {
                        var key = toKey(path[index]);
                        if (!(result = null != object && hasFunc(object, key))) break;
                        object = object[key]
                    }
                    if (result) return result;
                    var length = object ? object.length : 0;
                    return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isString(object) || isArguments(object))
                }

                function initCloneArray(array) {
                    var length = array.length,
                        result = array.constructor(length);
                    return length && "string" == typeof array[0] && hasOwnProperty.call(array, "index") && (result.index = array.index, result.input = array.input), result
                }

                function initCloneObject(object) {
                    return "function" != typeof object.constructor || isPrototype(object) ? {} : baseCreate(getPrototype(object))
                }

                function initCloneByTag(object, tag, cloneFunc, isDeep) {
                    var Ctor = object.constructor;
                    switch (tag) {
                        case arrayBufferTag:
                            return cloneArrayBuffer(object);
                        case boolTag:
                        case dateTag:
                            return new Ctor(+object);
                        case dataViewTag:
                            return cloneDataView(object, isDeep);
                        case float32Tag:
                        case float64Tag:
                        case int8Tag:
                        case int16Tag:
                        case int32Tag:
                        case uint8Tag:
                        case uint8ClampedTag:
                        case uint16Tag:
                        case uint32Tag:
                            return cloneTypedArray(object, isDeep);
                        case mapTag:
                            return cloneMap(object, isDeep, cloneFunc);
                        case numberTag:
                        case stringTag:
                            return new Ctor(object);
                        case regexpTag:
                            return cloneRegExp(object);
                        case setTag:
                            return cloneSet(object, isDeep, cloneFunc);
                        case symbolTag:
                            return cloneSymbol(object)
                    }
                }

                function indexKeys(object) {
                    var length = object ? object.length : undefined;
                    return isLength(length) && (isArray(object) || isString(object) || isArguments(object)) ? baseTimes(length, String) : null
                }

                function isFlattenable(value) {
                    return isArrayLikeObject(value) && (isArray(value) || isArguments(value))
                }

                function isFlattenableIteratee(value) {
                    return isArray(value) && !(2 == value.length && !isFunction(value[0]))
                }

                function isIndex(value, length) {
                    return length = null == length ? MAX_SAFE_INTEGER : length, !!length && ("number" == typeof value || reIsUint.test(value)) && value > -1 && value % 1 == 0 && length > value
                }

                function isIterateeCall(value, index, object) {
                    if (!isObject(object)) return !1;
                    var type = typeof index;
                    return ("number" == type ? isArrayLike(object) && isIndex(index, object.length) : "string" == type && index in object) ? eq(object[index], value) : !1
                }

                function isKey(value, object) {
                    if (isArray(value)) return !1;
                    var type = typeof value;
                    return "number" == type || "symbol" == type || "boolean" == type || null == value || isSymbol(value) ? !0 : reIsPlainProp.test(value) || !reIsDeepProp.test(value) || null != object && value in Object(object)
                }

                function isKeyable(value) {
                    var type = typeof value;
                    return "string" == type || "number" == type || "symbol" == type || "boolean" == type ? "__proto__" !== value : null === value
                }

                function isLaziable(func) {
                    var funcName = getFuncName(func),
                        other = lodash[funcName];
                    if ("function" != typeof other || !(funcName in LazyWrapper.prototype)) return !1;
                    if (func === other) return !0;
                    var data = getData(other);
                    return !!data && func === data[0]
                }

                function isPrototype(value) {
                    var Ctor = value && value.constructor,
                        proto = "function" == typeof Ctor && Ctor.prototype || objectProto;
                    return value === proto
                }

                function isStrictComparable(value) {
                    return value === value && !isObject(value)
                }

                function matchesStrictComparable(key, srcValue) {
                    return function(object) {
                        return null == object ? !1 : object[key] === srcValue && (srcValue !== undefined || key in Object(object))
                    }
                }

                function mergeData(data, source) {
                    var bitmask = data[1],
                        srcBitmask = source[1],
                        newBitmask = bitmask | srcBitmask,
                        isCommon = (BIND_FLAG | BIND_KEY_FLAG | ARY_FLAG) > newBitmask,
                        isCombo = srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG || srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8] || srcBitmask == (ARY_FLAG | REARG_FLAG) && source[7].length <= source[8] && bitmask == CURRY_FLAG;
                    if (!isCommon && !isCombo) return data;
                    srcBitmask & BIND_FLAG && (data[2] = source[2], newBitmask |= bitmask & BIND_FLAG ? 0 : CURRY_BOUND_FLAG);
                    var value = source[3];
                    if (value) {
                        var partials = data[3];
                        data[3] = partials ? composeArgs(partials, value, source[4]) : value, data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4]
                    }
                    return value = source[5], value && (partials = data[5], data[5] = partials ? composeArgsRight(partials, value, source[6]) : value, data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6]), value = source[7], value && (data[7] = value), srcBitmask & ARY_FLAG && (data[8] = null == data[8] ? source[8] : nativeMin(data[8], source[8])), null == data[9] && (data[9] = source[9]), data[0] = source[0], data[1] = newBitmask, data
                }

                function mergeDefaults(objValue, srcValue, key, object, source, stack) {
                    return isObject(objValue) && isObject(srcValue) && baseMerge(objValue, srcValue, undefined, mergeDefaults, stack.set(srcValue, objValue)), objValue
                }

                function parent(object, path) {
                    return 1 == path.length ? object : baseGet(object, baseSlice(path, 0, -1))
                }

                function reorder(array, indexes) {
                    for (var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array); length--;) {
                        var index = indexes[length];
                        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined
                    }
                    return array
                }

                function toKey(value) {
                    if ("string" == typeof value || isSymbol(value)) return value;
                    var result = value + "";
                    return "0" == result && 1 / value == -INFINITY ? "-0" : result
                }

                function toSource(func) {
                    if (null != func) {
                        try {
                            return funcToString.call(func)
                        } catch (e) {}
                        try {
                            return func + ""
                        } catch (e) {}
                    }
                    return ""
                }

                function wrapperClone(wrapper) {
                    if (wrapper instanceof LazyWrapper) return wrapper.clone();
                    var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
                    return result.__actions__ = copyArray(wrapper.__actions__), result.__index__ = wrapper.__index__, result.__values__ = wrapper.__values__, result
                }

                function chunk(array, size, guard) {
                    size = (guard ? isIterateeCall(array, size, guard) : size === undefined) ? 1 : nativeMax(toInteger(size), 0);
                    var length = array ? array.length : 0;
                    if (!length || 1 > size) return [];
                    for (var index = 0, resIndex = 0, result = Array(nativeCeil(length / size)); length > index;) result[resIndex++] = baseSlice(array, index, index += size);
                    return result
                }

                function compact(array) {
                    for (var index = -1, length = array ? array.length : 0, resIndex = 0, result = []; ++index < length;) {
                        var value = array[index];
                        value && (result[resIndex++] = value)
                    }
                    return result
                }

                function concat() {
                    var length = arguments.length,
                        array = castArray(arguments[0]);
                    if (2 > length) return length ? copyArray(array) : [];
                    for (var args = Array(length - 1); length--;) args[length - 1] = arguments[length];
                    return arrayConcat(array, baseFlatten(args, 1))
                }

                function drop(array, n, guard) {
                    var length = array ? array.length : 0;
                    return length ? (n = guard || n === undefined ? 1 : toInteger(n), baseSlice(array, 0 > n ? 0 : n, length)) : []
                }

                function dropRight(array, n, guard) {
                    var length = array ? array.length : 0;
                    return length ? (n = guard || n === undefined ? 1 : toInteger(n), n = length - n, baseSlice(array, 0, 0 > n ? 0 : n)) : []
                }

                function dropRightWhile(array, predicate) {
                    return array && array.length ? baseWhile(array, getIteratee(predicate, 3), !0, !0) : []
                }

                function dropWhile(array, predicate) {
                    return array && array.length ? baseWhile(array, getIteratee(predicate, 3), !0) : []
                }

                function fill(array, value, start, end) {
                    var length = array ? array.length : 0;
                    return length ? (start && "number" != typeof start && isIterateeCall(array, value, start) && (start = 0, end = length), baseFill(array, value, start, end)) : []
                }

                function findIndex(array, predicate) {
                    return array && array.length ? baseFindIndex(array, getIteratee(predicate, 3)) : -1
                }

                function findLastIndex(array, predicate) {
                    return array && array.length ? baseFindIndex(array, getIteratee(predicate, 3), !0) : -1
                }

                function flatten(array) {
                    var length = array ? array.length : 0;
                    return length ? baseFlatten(array, 1) : []
                }

                function flattenDeep(array) {
                    var length = array ? array.length : 0;
                    return length ? baseFlatten(array, INFINITY) : []
                }

                function flattenDepth(array, depth) {
                    var length = array ? array.length : 0;
                    return length ? (depth = depth === undefined ? 1 : toInteger(depth), baseFlatten(array, depth)) : []
                }

                function fromPairs(pairs) {
                    for (var index = -1, length = pairs ? pairs.length : 0, result = {}; ++index < length;) {
                        var pair = pairs[index];
                        result[pair[0]] = pair[1]
                    }
                    return result
                }

                function head(array) {
                    return array && array.length ? array[0] : undefined
                }

                function indexOf(array, value, fromIndex) {
                    var length = array ? array.length : 0;
                    return length ? (fromIndex = toInteger(fromIndex), 0 > fromIndex && (fromIndex = nativeMax(length + fromIndex, 0)), baseIndexOf(array, value, fromIndex)) : -1
                }

                function initial(array) {
                    return dropRight(array, 1)
                }

                function join(array, separator) {
                    return array ? nativeJoin.call(array, separator) : ""
                }

                function last(array) {
                    var length = array ? array.length : 0;
                    return length ? array[length - 1] : undefined
                }

                function lastIndexOf(array, value, fromIndex) {
                    var length = array ? array.length : 0;
                    if (!length) return -1;
                    var index = length;
                    if (fromIndex !== undefined && (index = toInteger(fromIndex), index = (0 > index ? nativeMax(length + index, 0) : nativeMin(index, length - 1)) + 1), value !== value) return indexOfNaN(array, index, !0);
                    for (; index--;)
                        if (array[index] === value) return index;
                    return -1
                }

                function nth(array, n) {
                    return array && array.length ? baseNth(array, toInteger(n)) : undefined
                }

                function pullAll(array, values) {
                    return array && array.length && values && values.length ? basePullAll(array, values) : array
                }

                function pullAllBy(array, values, iteratee) {
                    return array && array.length && values && values.length ? basePullAll(array, values, getIteratee(iteratee)) : array
                }

                function pullAllWith(array, values, comparator) {
                    return array && array.length && values && values.length ? basePullAll(array, values, undefined, comparator) : array
                }

                function remove(array, predicate) {
                    var result = [];
                    if (!array || !array.length) return result;
                    var index = -1,
                        indexes = [],
                        length = array.length;
                    for (predicate = getIteratee(predicate, 3); ++index < length;) {
                        var value = array[index];
                        predicate(value, index, array) && (result.push(value), indexes.push(index))
                    }
                    return basePullAt(array, indexes), result
                }

                function reverse(array) {
                    return array ? nativeReverse.call(array) : array
                }

                function slice(array, start, end) {
                    var length = array ? array.length : 0;
                    return length ? (end && "number" != typeof end && isIterateeCall(array, start, end) ? (start = 0, end = length) : (start = null == start ? 0 : toInteger(start), end = end === undefined ? length : toInteger(end)), baseSlice(array, start, end)) : []
                }

                function sortedIndex(array, value) {
                    return baseSortedIndex(array, value)
                }

                function sortedIndexBy(array, value, iteratee) {
                    return baseSortedIndexBy(array, value, getIteratee(iteratee))
                }

                function sortedIndexOf(array, value) {
                    var length = array ? array.length : 0;
                    if (length) {
                        var index = baseSortedIndex(array, value);
                        if (length > index && eq(array[index], value)) return index
                    }
                    return -1
                }

                function sortedLastIndex(array, value) {
                    return baseSortedIndex(array, value, !0)
                }

                function sortedLastIndexBy(array, value, iteratee) {
                    return baseSortedIndexBy(array, value, getIteratee(iteratee), !0)
                }

                function sortedLastIndexOf(array, value) {
                    var length = array ? array.length : 0;
                    if (length) {
                        var index = baseSortedIndex(array, value, !0) - 1;
                        if (eq(array[index], value)) return index
                    }
                    return -1
                }

                function sortedUniq(array) {
                    return array && array.length ? baseSortedUniq(array) : []
                }

                function sortedUniqBy(array, iteratee) {
                    return array && array.length ? baseSortedUniq(array, getIteratee(iteratee)) : []
                }

                function tail(array) {
                    return drop(array, 1)
                }

                function take(array, n, guard) {
                    return array && array.length ? (n = guard || n === undefined ? 1 : toInteger(n), baseSlice(array, 0, 0 > n ? 0 : n)) : []
                }

                function takeRight(array, n, guard) {
                    var length = array ? array.length : 0;
                    return length ? (n = guard || n === undefined ? 1 : toInteger(n), n = length - n, baseSlice(array, 0 > n ? 0 : n, length)) : []
                }

                function takeRightWhile(array, predicate) {
                    return array && array.length ? baseWhile(array, getIteratee(predicate, 3), !1, !0) : []
                }

                function takeWhile(array, predicate) {
                    return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : []
                }

                function uniq(array) {
                    return array && array.length ? baseUniq(array) : []
                }

                function uniqBy(array, iteratee) {
                    return array && array.length ? baseUniq(array, getIteratee(iteratee)) : []
                }

                function uniqWith(array, comparator) {
                    return array && array.length ? baseUniq(array, undefined, comparator) : []
                }

                function unzip(array) {
                    if (!array || !array.length) return [];
                    var length = 0;
                    return array = arrayFilter(array, function(group) {
                        return isArrayLikeObject(group) ? (length = nativeMax(group.length, length), !0) : void 0
                    }), baseTimes(length, function(index) {
                        return arrayMap(array, baseProperty(index))
                    })
                }

                function unzipWith(array, iteratee) {
                    if (!array || !array.length) return [];
                    var result = unzip(array);
                    return null == iteratee ? result : arrayMap(result, function(group) {
                        return apply(iteratee, undefined, group)
                    })
                }

                function zipObject(props, values) {
                    return baseZipObject(props || [], values || [], assignValue)
                }

                function zipObjectDeep(props, values) {
                    return baseZipObject(props || [], values || [], baseSet)
                }

                function chain(value) {
                    var result = lodash(value);
                    return result.__chain__ = !0, result
                }

                function tap(value, interceptor) {
                    return interceptor(value), value
                }

                function thru(value, interceptor) {
                    return interceptor(value)
                }

                function wrapperChain() {
                    return chain(this)
                }

                function wrapperCommit() {
                    return new LodashWrapper(this.value(), this.__chain__)
                }

                function wrapperNext() {
                    this.__values__ === undefined && (this.__values__ = toArray(this.value()));
                    var done = this.__index__ >= this.__values__.length,
                        value = done ? undefined : this.__values__[this.__index__++];
                    return {
                        done: done,
                        value: value
                    }
                }

                function wrapperToIterator() {
                    return this
                }

                function wrapperPlant(value) {
                    for (var result, parent = this; parent instanceof baseLodash;) {
                        var clone = wrapperClone(parent);
                        clone.__index__ = 0, clone.__values__ = undefined, result ? previous.__wrapped__ = clone : result = clone;
                        var previous = clone;
                        parent = parent.__wrapped__
                    }
                    return previous.__wrapped__ = value, result
                }

                function wrapperReverse() {
                    var value = this.__wrapped__;
                    if (value instanceof LazyWrapper) {
                        var wrapped = value;
                        return this.__actions__.length && (wrapped = new LazyWrapper(this)), wrapped = wrapped.reverse(), wrapped.__actions__.push({
                            func: thru,
                            args: [reverse],
                            thisArg: undefined
                        }), new LodashWrapper(wrapped, this.__chain__)
                    }
                    return this.thru(reverse)
                }

                function wrapperValue() {
                    return baseWrapperValue(this.__wrapped__, this.__actions__)
                }

                function every(collection, predicate, guard) {
                    var func = isArray(collection) ? arrayEvery : baseEvery;
                    return guard && isIterateeCall(collection, predicate, guard) && (predicate = undefined), func(collection, getIteratee(predicate, 3))
                }

                function filter(collection, predicate) {
                    var func = isArray(collection) ? arrayFilter : baseFilter;
                    return func(collection, getIteratee(predicate, 3))
                }

                function find(collection, predicate) {
                    if (predicate = getIteratee(predicate, 3), isArray(collection)) {
                        var index = baseFindIndex(collection, predicate);
                        return index > -1 ? collection[index] : undefined
                    }
                    return baseFind(collection, predicate, baseEach)
                }

                function findLast(collection, predicate) {
                    if (predicate = getIteratee(predicate, 3), isArray(collection)) {
                        var index = baseFindIndex(collection, predicate, !0);
                        return index > -1 ? collection[index] : undefined
                    }
                    return baseFind(collection, predicate, baseEachRight)
                }

                function flatMap(collection, iteratee) {
                    return baseFlatten(map(collection, iteratee), 1)
                }

                function flatMapDeep(collection, iteratee) {
                    return baseFlatten(map(collection, iteratee), INFINITY)
                }

                function flatMapDepth(collection, iteratee, depth) {
                    return depth = depth === undefined ? 1 : toInteger(depth), baseFlatten(map(collection, iteratee), depth)
                }

                function forEach(collection, iteratee) {
                    return "function" == typeof iteratee && isArray(collection) ? arrayEach(collection, iteratee) : baseEach(collection, getIteratee(iteratee))
                }

                function forEachRight(collection, iteratee) {
                    return "function" == typeof iteratee && isArray(collection) ? arrayEachRight(collection, iteratee) : baseEachRight(collection, getIteratee(iteratee))
                }

                function includes(collection, value, fromIndex, guard) {
                    collection = isArrayLike(collection) ? collection : values(collection), fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
                    var length = collection.length;
                    return 0 > fromIndex && (fromIndex = nativeMax(length + fromIndex, 0)), isString(collection) ? length >= fromIndex && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1
                }

                function map(collection, iteratee) {
                    var func = isArray(collection) ? arrayMap : baseMap;
                    return func(collection, getIteratee(iteratee, 3))
                }

                function orderBy(collection, iteratees, orders, guard) {
                    return null == collection ? [] : (isArray(iteratees) || (iteratees = null == iteratees ? [] : [iteratees]), orders = guard ? undefined : orders, isArray(orders) || (orders = null == orders ? [] : [orders]), baseOrderBy(collection, iteratees, orders))
                }

                function reduce(collection, iteratee, accumulator) {
                    var func = isArray(collection) ? arrayReduce : baseReduce,
                        initAccum = arguments.length < 3;
                    return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach)
                }

                function reduceRight(collection, iteratee, accumulator) {
                    var func = isArray(collection) ? arrayReduceRight : baseReduce,
                        initAccum = arguments.length < 3;
                    return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight)
                }

                function reject(collection, predicate) {
                    var func = isArray(collection) ? arrayFilter : baseFilter;
                    return predicate = getIteratee(predicate, 3), func(collection, function(value, index, collection) {
                        return !predicate(value, index, collection)
                    })
                }

                function sample(collection) {
                    var array = isArrayLike(collection) ? collection : values(collection),
                        length = array.length;
                    return length > 0 ? array[baseRandom(0, length - 1)] : undefined
                }

                function sampleSize(collection, n, guard) {
                    var index = -1,
                        result = toArray(collection),
                        length = result.length,
                        lastIndex = length - 1;
                    for (n = (guard ? isIterateeCall(collection, n, guard) : n === undefined) ? 1 : baseClamp(toInteger(n), 0, length); ++index < n;) {
                        var rand = baseRandom(index, lastIndex),
                            value = result[rand];
                        result[rand] = result[index], result[index] = value
                    }
                    return result.length = n, result
                }

                function shuffle(collection) {
                    return sampleSize(collection, MAX_ARRAY_LENGTH)
                }

                function size(collection) {
                    if (null == collection) return 0;
                    if (isArrayLike(collection)) {
                        var result = collection.length;
                        return result && isString(collection) ? stringSize(collection) : result
                    }
                    if (isObjectLike(collection)) {
                        var tag = getTag(collection);
                        if (tag == mapTag || tag == setTag) return collection.size
                    }
                    return keys(collection).length
                }

                function some(collection, predicate, guard) {
                    var func = isArray(collection) ? arraySome : baseSome;
                    return guard && isIterateeCall(collection, predicate, guard) && (predicate = undefined), func(collection, getIteratee(predicate, 3))
                }

                function after(n, func) {
                    if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    return n = toInteger(n),
                        function() {
                            return --n < 1 ? func.apply(this, arguments) : void 0
                        }
                }

                function ary(func, n, guard) {
                    return n = guard ? undefined : n, n = func && null == n ? func.length : n, createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n)
                }

                function before(n, func) {
                    var result;
                    if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    return n = toInteger(n),
                        function() {
                            return --n > 0 && (result = func.apply(this, arguments)), 1 >= n && (func = undefined), result
                        }
                }

                function curry(func, arity, guard) {
                    arity = guard ? undefined : arity;
                    var result = createWrapper(func, CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
                    return result.placeholder = curry.placeholder, result
                }

                function curryRight(func, arity, guard) {
                    arity = guard ? undefined : arity;
                    var result = createWrapper(func, CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
                    return result.placeholder = curryRight.placeholder, result
                }

                function debounce(func, wait, options) {
                    function invokeFunc(time) {
                        var args = lastArgs,
                            thisArg = lastThis;
                        return lastArgs = lastThis = undefined, lastInvokeTime = time, result = func.apply(thisArg, args)
                    }

                    function leadingEdge(time) {
                        return lastInvokeTime = time, timerId = setTimeout(timerExpired, wait), leading ? invokeFunc(time) : result
                    }

                    function remainingWait(time) {
                        var timeSinceLastCall = time - lastCallTime,
                            timeSinceLastInvoke = time - lastInvokeTime,
                            result = wait - timeSinceLastCall;
                        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result
                    }

                    function shouldInvoke(time) {
                        var timeSinceLastCall = time - lastCallTime,
                            timeSinceLastInvoke = time - lastInvokeTime;
                        return !lastCallTime || timeSinceLastCall >= wait || 0 > timeSinceLastCall || maxing && timeSinceLastInvoke >= maxWait
                    }

                    function timerExpired() {
                        var time = now();
                        return shouldInvoke(time) ? trailingEdge(time) : void(timerId = setTimeout(timerExpired, remainingWait(time)))
                    }

                    function trailingEdge(time) {
                        return clearTimeout(timerId), timerId = undefined, trailing && lastArgs ? invokeFunc(time) : (lastArgs = lastThis = undefined, result)
                    }

                    function cancel() {
                        timerId !== undefined && clearTimeout(timerId), lastCallTime = lastInvokeTime = 0, lastArgs = lastThis = timerId = undefined
                    }

                    function flush() {
                        return timerId === undefined ? result : trailingEdge(now())
                    }

                    function debounced() {
                        var time = now(),
                            isInvoking = shouldInvoke(time);
                        if (lastArgs = arguments, lastThis = this, lastCallTime = time, isInvoking) {
                            if (timerId === undefined) return leadingEdge(lastCallTime);
                            if (maxing) return clearTimeout(timerId), timerId = setTimeout(timerExpired, wait), invokeFunc(lastCallTime)
                        }
                        return timerId === undefined && (timerId = setTimeout(timerExpired, wait)), result
                    }
                    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime = 0,
                        lastInvokeTime = 0,
                        leading = !1,
                        maxing = !1,
                        trailing = !0;
                    if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    return wait = toNumber(wait) || 0, isObject(options) && (leading = !!options.leading, maxing = "maxWait" in options, maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait, trailing = "trailing" in options ? !!options.trailing : trailing), debounced.cancel = cancel, debounced.flush = flush, debounced
                }

                function flip(func) {
                    return createWrapper(func, FLIP_FLAG)
                }

                function memoize(func, resolver) {
                    if ("function" != typeof func || resolver && "function" != typeof resolver) throw new TypeError(FUNC_ERROR_TEXT);
                    var memoized = function() {
                        var args = arguments,
                            key = resolver ? resolver.apply(this, args) : args[0],
                            cache = memoized.cache;
                        if (cache.has(key)) return cache.get(key);
                        var result = func.apply(this, args);
                        return memoized.cache = cache.set(key, result), result
                    };
                    return memoized.cache = new(memoize.Cache || MapCache), memoized
                }

                function negate(predicate) {
                    if ("function" != typeof predicate) throw new TypeError(FUNC_ERROR_TEXT);
                    return function() {
                        return !predicate.apply(this, arguments)
                    }
                }

                function once(func) {
                    return before(2, func)
                }

                function rest(func, start) {
                    if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    return start = nativeMax(start === undefined ? func.length - 1 : toInteger(start), 0),
                        function() {
                            for (var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length); ++index < length;) array[index] = args[start + index];
                            switch (start) {
                                case 0:
                                    return func.call(this, array);
                                case 1:
                                    return func.call(this, args[0], array);
                                case 2:
                                    return func.call(this, args[0], args[1], array)
                            }
                            var otherArgs = Array(start + 1);
                            for (index = -1; ++index < start;) otherArgs[index] = args[index];
                            return otherArgs[start] = array, apply(func, this, otherArgs)
                        }
                }

                function spread(func, start) {
                    if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    return start = start === undefined ? 0 : nativeMax(toInteger(start), 0), rest(function(args) {
                        var array = args[start],
                            otherArgs = castSlice(args, 0, start);
                        return array && arrayPush(otherArgs, array), apply(func, this, otherArgs)
                    })
                }

                function throttle(func, wait, options) {
                    var leading = !0,
                        trailing = !0;
                    if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    return isObject(options) && (leading = "leading" in options ? !!options.leading : leading, trailing = "trailing" in options ? !!options.trailing : trailing), debounce(func, wait, {
                        leading: leading,
                        maxWait: wait,
                        trailing: trailing
                    })
                }

                function unary(func) {
                    return ary(func, 1)
                }

                function wrap(value, wrapper) {
                    return wrapper = null == wrapper ? identity : wrapper, partial(wrapper, value)
                }

                function castArray() {
                    if (!arguments.length) return [];
                    var value = arguments[0];
                    return isArray(value) ? value : [value]
                }

                function clone(value) {
                    return baseClone(value, !1, !0)
                }

                function cloneWith(value, customizer) {
                    return baseClone(value, !1, !0, customizer)
                }

                function cloneDeep(value) {
                    return baseClone(value, !0, !0)
                }

                function cloneDeepWith(value, customizer) {
                    return baseClone(value, !0, !0, customizer)
                }

                function eq(value, other) {
                    return value === other || value !== value && other !== other
                }

                function isArguments(value) {
                    return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag)
                }

                function isArrayBuffer(value) {
                    return isObjectLike(value) && objectToString.call(value) == arrayBufferTag
                }

                function isArrayLike(value) {
                    return null != value && isLength(getLength(value)) && !isFunction(value)
                }

                function isArrayLikeObject(value) {
                    return isObjectLike(value) && isArrayLike(value)
                }

                function isBoolean(value) {
                    return value === !0 || value === !1 || isObjectLike(value) && objectToString.call(value) == boolTag
                }

                function isDate(value) {
                    return isObjectLike(value) && objectToString.call(value) == dateTag
                }

                function isElement(value) {
                    return !!value && 1 === value.nodeType && isObjectLike(value) && !isPlainObject(value)
                }

                function isEmpty(value) {
                    if (isArrayLike(value) && (isArray(value) || isString(value) || isFunction(value.splice) || isArguments(value) || isBuffer(value))) return !value.length;
                    if (isObjectLike(value)) {
                        var tag = getTag(value);
                        if (tag == mapTag || tag == setTag) return !value.size
                    }
                    for (var key in value)
                        if (hasOwnProperty.call(value, key)) return !1;
                    return !(nonEnumShadows && keys(value).length)
                }

                function isEqual(value, other) {
                    return baseIsEqual(value, other)
                }

                function isEqualWith(value, other, customizer) {
                    customizer = "function" == typeof customizer ? customizer : undefined;
                    var result = customizer ? customizer(value, other) : undefined;
                    return result === undefined ? baseIsEqual(value, other, customizer) : !!result
                }

                function isError(value) {
                    return isObjectLike(value) ? objectToString.call(value) == errorTag || "string" == typeof value.message && "string" == typeof value.name : !1
                }

                function isFinite(value) {
                    return "number" == typeof value && nativeIsFinite(value)
                }

                function isFunction(value) {
                    var tag = isObject(value) ? objectToString.call(value) : "";
                    return tag == funcTag || tag == genTag
                }

                function isInteger(value) {
                    return "number" == typeof value && value == toInteger(value)
                }

                function isLength(value) {
                    return "number" == typeof value && value > -1 && value % 1 == 0 && MAX_SAFE_INTEGER >= value
                }

                function isObject(value) {
                    var type = typeof value;
                    return !!value && ("object" == type || "function" == type)
                }

                function isObjectLike(value) {
                    return !!value && "object" == typeof value
                }

                function isMap(value) {
                    return isObjectLike(value) && getTag(value) == mapTag
                }

                function isMatch(object, source) {
                    return object === source || baseIsMatch(object, source, getMatchData(source))
                }

                function isMatchWith(object, source, customizer) {
                    return customizer = "function" == typeof customizer ? customizer : undefined, baseIsMatch(object, source, getMatchData(source), customizer)
                }

                function isNaN(value) {
                    return isNumber(value) && value != +value
                }

                function isNative(value) {
                    if (!isObject(value)) return !1;
                    var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
                    return pattern.test(toSource(value))
                }

                function isNull(value) {
                    return null === value
                }

                function isNil(value) {
                    return null == value
                }

                function isNumber(value) {
                    return "number" == typeof value || isObjectLike(value) && objectToString.call(value) == numberTag
                }

                function isPlainObject(value) {
                    if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) return !1;
                    var proto = getPrototype(value);
                    if (null === proto) return !0;
                    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
                    return "function" == typeof Ctor && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString
                }

                function isRegExp(value) {
                    return isObject(value) && objectToString.call(value) == regexpTag
                }

                function isSafeInteger(value) {
                    return isInteger(value) && value >= -MAX_SAFE_INTEGER && MAX_SAFE_INTEGER >= value
                }

                function isSet(value) {
                    return isObjectLike(value) && getTag(value) == setTag
                }

                function isString(value) {
                    return "string" == typeof value || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag
                }

                function isSymbol(value) {
                    return "symbol" == typeof value || isObjectLike(value) && objectToString.call(value) == symbolTag
                }

                function isTypedArray(value) {
                    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)]
                }

                function isUndefined(value) {
                    return value === undefined
                }

                function isWeakMap(value) {
                    return isObjectLike(value) && getTag(value) == weakMapTag
                }

                function isWeakSet(value) {
                    return isObjectLike(value) && objectToString.call(value) == weakSetTag
                }

                function toArray(value) {
                    if (!value) return [];
                    if (isArrayLike(value)) return isString(value) ? stringToArray(value) : copyArray(value);
                    if (iteratorSymbol && value[iteratorSymbol]) return iteratorToArray(value[iteratorSymbol]());
                    var tag = getTag(value),
                        func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
                    return func(value)
                }

                function toInteger(value) {
                    if (!value) return 0 === value ? value : 0;
                    if (value = toNumber(value), value === INFINITY || value === -INFINITY) {
                        var sign = 0 > value ? -1 : 1;
                        return sign * MAX_INTEGER
                    }
                    var remainder = value % 1;
                    return value === value ? remainder ? value - remainder : value : 0
                }

                function toLength(value) {
                    return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0
                }

                function toNumber(value) {
                    if ("number" == typeof value) return value;
                    if (isSymbol(value)) return NAN;
                    if (isObject(value)) {
                        var other = isFunction(value.valueOf) ? value.valueOf() : value;
                        value = isObject(other) ? other + "" : other
                    }
                    if ("string" != typeof value) return 0 === value ? value : +value;
                    value = value.replace(reTrim, "");
                    var isBinary = reIsBinary.test(value);
                    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value
                }

                function toPlainObject(value) {
                    return copyObject(value, keysIn(value))
                }

                function toSafeInteger(value) {
                    return baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
                }

                function toString(value) {
                    return null == value ? "" : baseToString(value)
                }

                function create(prototype, properties) {
                    var result = baseCreate(prototype);
                    return properties ? baseAssign(result, properties) : result
                }

                function findKey(object, predicate) {
                    return baseFind(object, getIteratee(predicate, 3), baseForOwn, !0)
                }

                function findLastKey(object, predicate) {
                    return baseFind(object, getIteratee(predicate, 3), baseForOwnRight, !0)
                }

                function forIn(object, iteratee) {
                    return null == object ? object : baseFor(object, getIteratee(iteratee), keysIn)
                }

                function forInRight(object, iteratee) {
                    return null == object ? object : baseForRight(object, getIteratee(iteratee), keysIn)
                }

                function forOwn(object, iteratee) {
                    return object && baseForOwn(object, getIteratee(iteratee))
                }

                function forOwnRight(object, iteratee) {
                    return object && baseForOwnRight(object, getIteratee(iteratee))
                }

                function functions(object) {
                    return null == object ? [] : baseFunctions(object, keys(object))
                }

                function functionsIn(object) {
                    return null == object ? [] : baseFunctions(object, keysIn(object))
                }

                function get(object, path, defaultValue) {
                    var result = null == object ? undefined : baseGet(object, path);
                    return result === undefined ? defaultValue : result
                }

                function has(object, path) {
                    return null != object && hasPath(object, path, baseHas)
                }

                function hasIn(object, path) {
                    return null != object && hasPath(object, path, baseHasIn)
                }

                function keys(object) {
                    var isProto = isPrototype(object);
                    if (!isProto && !isArrayLike(object)) return baseKeys(object);
                    var indexes = indexKeys(object),
                        skipIndexes = !!indexes,
                        result = indexes || [],
                        length = result.length;
                    for (var key in object) !baseHas(object, key) || skipIndexes && ("length" == key || isIndex(key, length)) || isProto && "constructor" == key || result.push(key);
                    return result
                }

                function keysIn(object) {
                    for (var index = -1, isProto = isPrototype(object), props = baseKeysIn(object), propsLength = props.length, indexes = indexKeys(object), skipIndexes = !!indexes, result = indexes || [], length = result.length; ++index < propsLength;) {
                        var key = props[index];
                        skipIndexes && ("length" == key || isIndex(key, length)) || "constructor" == key && (isProto || !hasOwnProperty.call(object, key)) || result.push(key)
                    }
                    return result
                }

                function mapKeys(object, iteratee) {
                    var result = {};
                    return iteratee = getIteratee(iteratee, 3), baseForOwn(object, function(value, key, object) {
                        result[iteratee(value, key, object)] = value
                    }), result
                }

                function mapValues(object, iteratee) {
                    var result = {};
                    return iteratee = getIteratee(iteratee, 3), baseForOwn(object, function(value, key, object) {
                        result[key] = iteratee(value, key, object)
                    }), result
                }

                function omitBy(object, predicate) {
                    return predicate = getIteratee(predicate), basePickBy(object, function(value, key) {
                        return !predicate(value, key)
                    })
                }

                function pickBy(object, predicate) {
                    return null == object ? {} : basePickBy(object, getIteratee(predicate))
                }

                function result(object, path, defaultValue) {
                    path = isKey(path, object) ? [path] : castPath(path);
                    var index = -1,
                        length = path.length;
                    for (length || (object = undefined, length = 1); ++index < length;) {
                        var value = null == object ? undefined : object[toKey(path[index])];
                        value === undefined && (index = length, value = defaultValue), object = isFunction(value) ? value.call(object) : value
                    }
                    return object
                }

                function set(object, path, value) {
                    return null == object ? object : baseSet(object, path, value)
                }

                function setWith(object, path, value, customizer) {
                    return customizer = "function" == typeof customizer ? customizer : undefined, null == object ? object : baseSet(object, path, value, customizer)
                }

                function toPairs(object) {
                    return baseToPairs(object, keys(object))
                }

                function toPairsIn(object) {
                    return baseToPairs(object, keysIn(object))
                }

                function transform(object, iteratee, accumulator) {
                    var isArr = isArray(object) || isTypedArray(object);
                    if (iteratee = getIteratee(iteratee, 4), null == accumulator)
                        if (isArr || isObject(object)) {
                            var Ctor = object.constructor;
                            accumulator = isArr ? isArray(object) ? new Ctor : [] : isFunction(Ctor) ? baseCreate(getPrototype(object)) : {}
                        } else accumulator = {};
                    return (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
                        return iteratee(accumulator, value, index, object)
                    }), accumulator
                }

                function unset(object, path) {
                    return null == object ? !0 : baseUnset(object, path)
                }

                function update(object, path, updater) {
                    return null == object ? object : baseUpdate(object, path, castFunction(updater))
                }

                function updateWith(object, path, updater, customizer) {
                    return customizer = "function" == typeof customizer ? customizer : undefined, null == object ? object : baseUpdate(object, path, castFunction(updater), customizer)
                }

                function values(object) {
                    return object ? baseValues(object, keys(object)) : []
                }

                function valuesIn(object) {
                    return null == object ? [] : baseValues(object, keysIn(object))
                }

                function clamp(number, lower, upper) {
                    return upper === undefined && (upper = lower, lower = undefined), upper !== undefined && (upper = toNumber(upper), upper = upper === upper ? upper : 0), lower !== undefined && (lower = toNumber(lower), lower = lower === lower ? lower : 0), baseClamp(toNumber(number), lower, upper)
                }

                function inRange(number, start, end) {
                    return start = toNumber(start) || 0, end === undefined ? (end = start, start = 0) : end = toNumber(end) || 0, number = toNumber(number), baseInRange(number, start, end)
                }

                function random(lower, upper, floating) {
                    if (floating && "boolean" != typeof floating && isIterateeCall(lower, upper, floating) && (upper = floating = undefined), floating === undefined && ("boolean" == typeof upper ? (floating = upper, upper = undefined) : "boolean" == typeof lower && (floating = lower, lower = undefined)), lower === undefined && upper === undefined ? (lower = 0, upper = 1) : (lower = toNumber(lower) || 0, upper === undefined ? (upper = lower, lower = 0) : upper = toNumber(upper) || 0), lower > upper) {
                        var temp = lower;
                        lower = upper, upper = temp
                    }
                    if (floating || lower % 1 || upper % 1) {
                        var rand = nativeRandom();
                        return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper)
                    }
                    return baseRandom(lower, upper)
                }

                function capitalize(string) {
                    return upperFirst(toString(string).toLowerCase())
                }

                function deburr(string) {
                    return string = toString(string), string && string.replace(reLatin1, deburrLetter).replace(reComboMark, "")
                }

                function endsWith(string, target, position) {
                    string = toString(string), target = baseToString(target);
                    var length = string.length;
                    return position = position === undefined ? length : baseClamp(toInteger(position), 0, length), position -= target.length, position >= 0 && string.indexOf(target, position) == position
                }

                function escape(string) {
                    return string = toString(string), string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string
                }

                function escapeRegExp(string) {
                    return string = toString(string), string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string
                }

                function pad(string, length, chars) {
                    string = toString(string), length = toInteger(length);
                    var strLength = length ? stringSize(string) : 0;
                    if (!length || strLength >= length) return string;
                    var mid = (length - strLength) / 2;
                    return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars)
                }

                function padEnd(string, length, chars) {
                    string = toString(string), length = toInteger(length);
                    var strLength = length ? stringSize(string) : 0;
                    return length && length > strLength ? string + createPadding(length - strLength, chars) : string
                }

                function padStart(string, length, chars) {
                    string = toString(string), length = toInteger(length);
                    var strLength = length ? stringSize(string) : 0;
                    return length && length > strLength ? createPadding(length - strLength, chars) + string : string
                }

                function parseInt(string, radix, guard) {
                    return guard || null == radix ? radix = 0 : radix && (radix = +radix), string = toString(string).replace(reTrim, ""), nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10))
                }

                function repeat(string, n, guard) {
                    return n = (guard ? isIterateeCall(string, n, guard) : n === undefined) ? 1 : toInteger(n), baseRepeat(toString(string), n)
                }

                function replace() {
                    var args = arguments,
                        string = toString(args[0]);
                    return args.length < 3 ? string : nativeReplace.call(string, args[1], args[2])
                }

                function split(string, separator, limit) {
                    return limit && "number" != typeof limit && isIterateeCall(string, separator, limit) && (separator = limit = undefined), (limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0) ? (string = toString(string), string && ("string" == typeof separator || null != separator && !isRegExp(separator)) && (separator = baseToString(separator), "" == separator && reHasComplexSymbol.test(string)) ? castSlice(stringToArray(string), 0, limit) : nativeSplit.call(string, separator, limit)) : []
                }

                function startsWith(string, target, position) {
                    return string = toString(string), position = baseClamp(toInteger(position), 0, string.length), string.lastIndexOf(baseToString(target), position) == position
                }

                function template(string, options, guard) {
                    var settings = lodash.templateSettings;
                    guard && isIterateeCall(string, options, guard) && (options = undefined), string = toString(string), options = assignInWith({}, options, settings, assignInDefaults);
                    var isEscaping, isEvaluating, imports = assignInWith({}, options.imports, settings.imports, assignInDefaults),
                        importsKeys = keys(imports),
                        importsValues = baseValues(imports, importsKeys),
                        index = 0,
                        interpolate = options.interpolate || reNoMatch,
                        source = "__p += '",
                        reDelimiters = RegExp((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g"),
                        sourceURL = "//# sourceURL=" + ("sourceURL" in options ? options.sourceURL : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
                    string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
                        return interpolateValue || (interpolateValue = esTemplateValue), source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar), escapeValue && (isEscaping = !0, source += "' +\n__e(" + escapeValue + ") +\n'"), evaluateValue && (isEvaluating = !0, source += "';\n" + evaluateValue + ";\n__p += '"), interpolateValue && (source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'"), index = offset + match.length, match
                    }), source += "';\n";
                    var variable = options.variable;
                    variable || (source = "with (obj) {\n" + source + "\n}\n"), source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;"), source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
                    var result = attempt(function() {
                        return Function(importsKeys, sourceURL + "return " + source).apply(undefined, importsValues)
                    });
                    if (result.source = source, isError(result)) throw result;
                    return result
                }

                function toLower(value) {
                    return toString(value).toLowerCase()
                }

                function toUpper(value) {
                    return toString(value).toUpperCase()
                }

                function trim(string, chars, guard) {
                    if (string = toString(string), string && (guard || chars === undefined)) return string.replace(reTrim, "");
                    if (!string || !(chars = baseToString(chars))) return string;
                    var strSymbols = stringToArray(string),
                        chrSymbols = stringToArray(chars),
                        start = charsStartIndex(strSymbols, chrSymbols),
                        end = charsEndIndex(strSymbols, chrSymbols) + 1;
                    return castSlice(strSymbols, start, end).join("")
                }

                function trimEnd(string, chars, guard) {
                    if (string = toString(string), string && (guard || chars === undefined)) return string.replace(reTrimEnd, "");
                    if (!string || !(chars = baseToString(chars))) return string;
                    var strSymbols = stringToArray(string),
                        end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
                    return castSlice(strSymbols, 0, end).join("")
                }

                function trimStart(string, chars, guard) {
                    if (string = toString(string), string && (guard || chars === undefined)) return string.replace(reTrimStart, "");
                    if (!string || !(chars = baseToString(chars))) return string;
                    var strSymbols = stringToArray(string),
                        start = charsStartIndex(strSymbols, stringToArray(chars));
                    return castSlice(strSymbols, start).join("")
                }

                function truncate(string, options) {
                    var length = DEFAULT_TRUNC_LENGTH,
                        omission = DEFAULT_TRUNC_OMISSION;
                    if (isObject(options)) {
                        var separator = "separator" in options ? options.separator : separator;
                        length = "length" in options ? toInteger(options.length) : length, omission = "omission" in options ? baseToString(options.omission) : omission
                    }
                    string = toString(string);
                    var strLength = string.length;
                    if (reHasComplexSymbol.test(string)) {
                        var strSymbols = stringToArray(string);
                        strLength = strSymbols.length
                    }
                    if (length >= strLength) return string;
                    var end = length - stringSize(omission);
                    if (1 > end) return omission;
                    var result = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
                    if (separator === undefined) return result + omission;
                    if (strSymbols && (end += result.length - end), isRegExp(separator)) {
                        if (string.slice(end).search(separator)) {
                            var match, substring = result;
                            for (separator.global || (separator = RegExp(separator.source, toString(reFlags.exec(separator)) + "g")), separator.lastIndex = 0; match = separator.exec(substring);) var newEnd = match.index;
                            result = result.slice(0, newEnd === undefined ? end : newEnd)
                        }
                    } else if (string.indexOf(baseToString(separator), end) != end) {
                        var index = result.lastIndexOf(separator);
                        index > -1 && (result = result.slice(0, index))
                    }
                    return result + omission
                }

                function unescape(string) {
                    return string = toString(string), string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string
                }

                function words(string, pattern, guard) {
                    return string = toString(string), pattern = guard ? undefined : pattern, pattern === undefined && (pattern = reHasComplexWord.test(string) ? reComplexWord : reBasicWord), string.match(pattern) || []
                }

                function cond(pairs) {
                    var length = pairs ? pairs.length : 0,
                        toIteratee = getIteratee();
                    return pairs = length ? arrayMap(pairs, function(pair) {
                        if ("function" != typeof pair[1]) throw new TypeError(FUNC_ERROR_TEXT);
                        return [toIteratee(pair[0]), pair[1]]
                    }) : [], rest(function(args) {
                        for (var index = -1; ++index < length;) {
                            var pair = pairs[index];
                            if (apply(pair[0], this, args)) return apply(pair[1], this, args)
                        }
                    })
                }

                function conforms(source) {
                    return baseConforms(baseClone(source, !0))
                }

                function constant(value) {
                    return function() {
                        return value
                    }
                }

                function identity(value) {
                    return value
                }

                function iteratee(func) {
                    return baseIteratee("function" == typeof func ? func : baseClone(func, !0))
                }

                function matches(source) {
                    return baseMatches(baseClone(source, !0))
                }

                function matchesProperty(path, srcValue) {
                    return baseMatchesProperty(path, baseClone(srcValue, !0))
                }

                function mixin(object, source, options) {
                    var props = keys(source),
                        methodNames = baseFunctions(source, props);
                    null != options || isObject(source) && (methodNames.length || !props.length) || (options = source, source = object, object = this, methodNames = baseFunctions(source, keys(source)));
                    var chain = !(isObject(options) && "chain" in options && !options.chain),
                        isFunc = isFunction(object);
                    return arrayEach(methodNames, function(methodName) {
                        var func = source[methodName];
                        object[methodName] = func, isFunc && (object.prototype[methodName] = function() {
                            var chainAll = this.__chain__;
                            if (chain || chainAll) {
                                var result = object(this.__wrapped__),
                                    actions = result.__actions__ = copyArray(this.__actions__);
                                return actions.push({
                                    func: func,
                                    args: arguments,
                                    thisArg: object
                                }), result.__chain__ = chainAll, result
                            }
                            return func.apply(object, arrayPush([this.value()], arguments))
                        })
                    }), object
                }

                function noConflict() {
                    return root._ === this && (root._ = oldDash), this
                }

                function noop() {}

                function nthArg(n) {
                    return n = toInteger(n), rest(function(args) {
                        return baseNth(args, n)
                    })
                }

                function property(path) {
                    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path)
                }

                function propertyOf(object) {
                    return function(path) {
                        return null == object ? undefined : baseGet(object, path)
                    }
                }

                function times(n, iteratee) {
                    if (n = toInteger(n), 1 > n || n > MAX_SAFE_INTEGER) return [];
                    var index = MAX_ARRAY_LENGTH,
                        length = nativeMin(n, MAX_ARRAY_LENGTH);
                    iteratee = getIteratee(iteratee), n -= MAX_ARRAY_LENGTH;
                    for (var result = baseTimes(length, iteratee); ++index < n;) iteratee(index);
                    return result
                }

                function toPath(value) {
                    return isArray(value) ? arrayMap(value, toKey) : isSymbol(value) ? [value] : copyArray(stringToPath(value))
                }

                function uniqueId(prefix) {
                    var id = ++idCounter;
                    return toString(prefix) + id
                }

                function max(array) {
                    return array && array.length ? baseExtremum(array, identity, baseGt) : undefined
                }

                function maxBy(array, iteratee) {
                    return array && array.length ? baseExtremum(array, getIteratee(iteratee), baseGt) : undefined
                }

                function mean(array) {
                    return baseMean(array, identity)
                }

                function meanBy(array, iteratee) {
                    return baseMean(array, getIteratee(iteratee))
                }

                function min(array) {
                    return array && array.length ? baseExtremum(array, identity, baseLt) : undefined
                }

                function minBy(array, iteratee) {
                    return array && array.length ? baseExtremum(array, getIteratee(iteratee), baseLt) : undefined
                }

                function sum(array) {
                    return array && array.length ? baseSum(array, identity) : 0
                }

                function sumBy(array, iteratee) {
                    return array && array.length ? baseSum(array, getIteratee(iteratee)) : 0
                }
                context = context ? _.defaults({}, context, _.pick(root, contextProps)) : root;
                var Date = context.Date,
                    Error = context.Error,
                    Math = context.Math,
                    RegExp = context.RegExp,
                    TypeError = context.TypeError,
                    arrayProto = context.Array.prototype,
                    objectProto = context.Object.prototype,
                    stringProto = context.String.prototype,
                    funcToString = context.Function.prototype.toString,
                    hasOwnProperty = objectProto.hasOwnProperty,
                    idCounter = 0,
                    objectCtorString = funcToString.call(Object),
                    objectToString = objectProto.toString,
                    oldDash = root._,
                    reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    Buffer = moduleExports ? context.Buffer : undefined,
                    Reflect = context.Reflect,
                    Symbol = context.Symbol,
                    Uint8Array = context.Uint8Array,
                    clearTimeout = context.clearTimeout,
                    enumerate = Reflect ? Reflect.enumerate : undefined,
                    getOwnPropertySymbols = Object.getOwnPropertySymbols,
                    iteratorSymbol = "symbol" == typeof(iteratorSymbol = Symbol && Symbol.iterator) ? iteratorSymbol : undefined,
                    objectCreate = Object.create,
                    propertyIsEnumerable = objectProto.propertyIsEnumerable,
                    setTimeout = context.setTimeout,
                    splice = arrayProto.splice,
                    nativeCeil = Math.ceil,
                    nativeFloor = Math.floor,
                    nativeGetPrototype = Object.getPrototypeOf,
                    nativeIsFinite = context.isFinite,
                    nativeJoin = arrayProto.join,
                    nativeKeys = Object.keys,
                    nativeMax = Math.max,
                    nativeMin = Math.min,
                    nativeParseInt = context.parseInt,
                    nativeRandom = Math.random,
                    nativeReplace = stringProto.replace,
                    nativeReverse = arrayProto.reverse,
                    nativeSplit = stringProto.split,
                    DataView = getNative(context, "DataView"),
                    Map = getNative(context, "Map"),
                    Promise = getNative(context, "Promise"),
                    Set = getNative(context, "Set"),
                    WeakMap = getNative(context, "WeakMap"),
                    nativeCreate = getNative(Object, "create"),
                    metaMap = WeakMap && new WeakMap,
                    nonEnumShadows = !propertyIsEnumerable.call({
                        valueOf: 1
                    }, "valueOf"),
                    realNames = {},
                    dataViewCtorString = toSource(DataView),
                    mapCtorString = toSource(Map),
                    promiseCtorString = toSource(Promise),
                    setCtorString = toSource(Set),
                    weakMapCtorString = toSource(WeakMap),
                    symbolProto = Symbol ? Symbol.prototype : undefined,
                    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
                    symbolToString = symbolProto ? symbolProto.toString : undefined;
                lodash.templateSettings = {
                    escape: reEscape,
                    evaluate: reEvaluate,
                    interpolate: reInterpolate,
                    variable: "",
                    imports: {
                        _: lodash
                    }
                }, lodash.prototype = baseLodash.prototype, lodash.prototype.constructor = lodash, LodashWrapper.prototype = baseCreate(baseLodash.prototype), LodashWrapper.prototype.constructor = LodashWrapper, LazyWrapper.prototype = baseCreate(baseLodash.prototype), LazyWrapper.prototype.constructor = LazyWrapper, Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto, MapCache.prototype.clear = mapClear, MapCache.prototype["delete"] = mapDelete, MapCache.prototype.get = mapGet, MapCache.prototype.has = mapHas, MapCache.prototype.set = mapSet, SetCache.prototype.push = cachePush, Stack.prototype.clear = stackClear, Stack.prototype["delete"] = stackDelete, Stack.prototype.get = stackGet, Stack.prototype.has = stackHas, Stack.prototype.set = stackSet;
                var baseEach = createBaseEach(baseForOwn),
                    baseEachRight = createBaseEach(baseForOwnRight, !0),
                    baseFor = createBaseFor(),
                    baseForRight = createBaseFor(!0);
                enumerate && !propertyIsEnumerable.call({
                    valueOf: 1
                }, "valueOf") && (baseKeysIn = function(object) {
                    return iteratorToArray(enumerate(object))
                });
                var baseSetData = metaMap ? function(func, data) {
                        return metaMap.set(func, data), func
                    } : identity,
                    createSet = Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY ? function(values) {
                        return new Set(values)
                    } : noop,
                    getData = metaMap ? function(func) {
                        return metaMap.get(func)
                    } : noop,
                    getLength = baseProperty("length");
                getOwnPropertySymbols || (getSymbols = function() {
                    return []
                });
                var getSymbolsIn = getOwnPropertySymbols ? function(object) {
                    for (var result = []; object;) arrayPush(result, getSymbols(object)), object = getPrototype(object);
                    return result
                } : getSymbols;
                (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set) != setTag || WeakMap && getTag(new WeakMap) != weakMapTag) && (getTag = function(value) {
                    var result = objectToString.call(value),
                        Ctor = result == objectTag ? value.constructor : undefined,
                        ctorString = Ctor ? toSource(Ctor) : undefined;
                    if (ctorString) switch (ctorString) {
                        case dataViewCtorString:
                            return dataViewTag;
                        case mapCtorString:
                            return mapTag;
                        case promiseCtorString:
                            return promiseTag;
                        case setCtorString:
                            return setTag;
                        case weakMapCtorString:
                            return weakMapTag
                    }
                    return result
                });
                var setData = function() {
                        var count = 0,
                            lastCalled = 0;
                        return function(key, value) {
                            var stamp = now(),
                                remaining = HOT_SPAN - (stamp - lastCalled);
                            if (lastCalled = stamp, remaining > 0) {
                                if (++count >= HOT_COUNT) return key
                            } else count = 0;
                            return baseSetData(key, value)
                        }
                    }(),
                    stringToPath = memoize(function(string) {
                        var result = [];
                        return toString(string).replace(rePropName, function(match, number, quote, string) {
                            result.push(quote ? string.replace(reEscapeChar, "$1") : number || match)
                        }), result
                    }),
                    difference = rest(function(array, values) {
                        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, !0)) : []
                    }),
                    differenceBy = rest(function(array, values) {
                        var iteratee = last(values);
                        return isArrayLikeObject(iteratee) && (iteratee = undefined), isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, !0), getIteratee(iteratee)) : []
                    }),
                    differenceWith = rest(function(array, values) {
                        var comparator = last(values);
                        return isArrayLikeObject(comparator) && (comparator = undefined), isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, !0), undefined, comparator) : []
                    }),
                    intersection = rest(function(arrays) {
                        var mapped = arrayMap(arrays, castArrayLikeObject);
                        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : []
                    }),
                    intersectionBy = rest(function(arrays) {
                        var iteratee = last(arrays),
                            mapped = arrayMap(arrays, castArrayLikeObject);
                        return iteratee === last(mapped) ? iteratee = undefined : mapped.pop(), mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee)) : []
                    }),
                    intersectionWith = rest(function(arrays) {
                        var comparator = last(arrays),
                            mapped = arrayMap(arrays, castArrayLikeObject);
                        return comparator === last(mapped) ? comparator = undefined : mapped.pop(), mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined, comparator) : []
                    }),
                    pull = rest(pullAll),
                    pullAt = rest(function(array, indexes) {
                        indexes = baseFlatten(indexes, 1);
                        var length = array ? array.length : 0,
                            result = baseAt(array, indexes);
                        return basePullAt(array, arrayMap(indexes, function(index) {
                            return isIndex(index, length) ? +index : index
                        }).sort(compareAscending)), result
                    }),
                    union = rest(function(arrays) {
                        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, !0))
                    }),
                    unionBy = rest(function(arrays) {
                        var iteratee = last(arrays);
                        return isArrayLikeObject(iteratee) && (iteratee = undefined), baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, !0), getIteratee(iteratee))
                    }),
                    unionWith = rest(function(arrays) {
                        var comparator = last(arrays);
                        return isArrayLikeObject(comparator) && (comparator = undefined), baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, !0), undefined, comparator)
                    }),
                    without = rest(function(array, values) {
                        return isArrayLikeObject(array) ? baseDifference(array, values) : []
                    }),
                    xor = rest(function(arrays) {
                        return baseXor(arrayFilter(arrays, isArrayLikeObject))
                    }),
                    xorBy = rest(function(arrays) {
                        var iteratee = last(arrays);
                        return isArrayLikeObject(iteratee) && (iteratee = undefined), baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee))
                    }),
                    xorWith = rest(function(arrays) {
                        var comparator = last(arrays);
                        return isArrayLikeObject(comparator) && (comparator = undefined), baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator)
                    }),
                    zip = rest(unzip),
                    zipWith = rest(function(arrays) {
                        var length = arrays.length,
                            iteratee = length > 1 ? arrays[length - 1] : undefined;
                        return iteratee = "function" == typeof iteratee ? (arrays.pop(), iteratee) : undefined, unzipWith(arrays, iteratee)
                    }),
                    wrapperAt = rest(function(paths) {
                        paths = baseFlatten(paths, 1);
                        var length = paths.length,
                            start = length ? paths[0] : 0,
                            value = this.__wrapped__,
                            interceptor = function(object) {
                                return baseAt(object, paths)
                            };
                        return !(length > 1 || this.__actions__.length) && value instanceof LazyWrapper && isIndex(start) ? (value = value.slice(start, +start + (length ? 1 : 0)), value.__actions__.push({
                            func: thru,
                            args: [interceptor],
                            thisArg: undefined
                        }), new LodashWrapper(value, this.__chain__).thru(function(array) {
                            return length && !array.length && array.push(undefined), array
                        })) : this.thru(interceptor)
                    }),
                    countBy = createAggregator(function(result, value, key) {
                        hasOwnProperty.call(result, key) ? ++result[key] : result[key] = 1
                    }),
                    groupBy = createAggregator(function(result, value, key) {
                        hasOwnProperty.call(result, key) ? result[key].push(value) : result[key] = [value]
                    }),
                    invokeMap = rest(function(collection, path, args) {
                        var index = -1,
                            isFunc = "function" == typeof path,
                            isProp = isKey(path),
                            result = isArrayLike(collection) ? Array(collection.length) : [];
                        return baseEach(collection, function(value) {
                            var func = isFunc ? path : isProp && null != value ? value[path] : undefined;
                            result[++index] = func ? apply(func, value, args) : baseInvoke(value, path, args)
                        }), result
                    }),
                    keyBy = createAggregator(function(result, value, key) {
                        result[key] = value
                    }),
                    partition = createAggregator(function(result, value, key) {
                        result[key ? 0 : 1].push(value)
                    }, function() {
                        return [
                            [],
                            []
                        ]
                    }),
                    sortBy = rest(function(collection, iteratees) {
                        if (null == collection) return [];
                        var length = iteratees.length;
                        return length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1]) ? iteratees = [] : length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2]) && (iteratees = [iteratees[0]]), iteratees = 1 == iteratees.length && isArray(iteratees[0]) ? iteratees[0] : baseFlatten(iteratees, 1, isFlattenableIteratee), baseOrderBy(collection, iteratees, [])
                    }),
                    now = Date.now,
                    bind = rest(function(func, thisArg, partials) {
                        var bitmask = BIND_FLAG;
                        if (partials.length) {
                            var holders = replaceHolders(partials, getPlaceholder(bind));
                            bitmask |= PARTIAL_FLAG
                        }
                        return createWrapper(func, bitmask, thisArg, partials, holders)
                    }),
                    bindKey = rest(function(object, key, partials) {
                        var bitmask = BIND_FLAG | BIND_KEY_FLAG;
                        if (partials.length) {
                            var holders = replaceHolders(partials, getPlaceholder(bindKey));
                            bitmask |= PARTIAL_FLAG
                        }
                        return createWrapper(key, bitmask, object, partials, holders)
                    }),
                    defer = rest(function(func, args) {
                        return baseDelay(func, 1, args)
                    }),
                    delay = rest(function(func, wait, args) {
                        return baseDelay(func, toNumber(wait) || 0, args)
                    });
                memoize.Cache = MapCache;
                var overArgs = rest(function(func, transforms) {
                        transforms = 1 == transforms.length && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1, isFlattenableIteratee), baseUnary(getIteratee()));
                        var funcsLength = transforms.length;
                        return rest(function(args) {
                            for (var index = -1, length = nativeMin(args.length, funcsLength); ++index < length;) args[index] = transforms[index].call(this, args[index]);
                            return apply(func, this, args)
                        })
                    }),
                    partial = rest(function(func, partials) {
                        var holders = replaceHolders(partials, getPlaceholder(partial));
                        return createWrapper(func, PARTIAL_FLAG, undefined, partials, holders)
                    }),
                    partialRight = rest(function(func, partials) {
                        var holders = replaceHolders(partials, getPlaceholder(partialRight));
                        return createWrapper(func, PARTIAL_RIGHT_FLAG, undefined, partials, holders)
                    }),
                    rearg = rest(function(func, indexes) {
                        return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes, 1))
                    }),
                    gt = createRelationalOperation(baseGt),
                    gte = createRelationalOperation(function(value, other) {
                        return value >= other
                    }),
                    isArray = Array.isArray,
                    isBuffer = Buffer ? function(value) {
                        return value instanceof Buffer
                    } : constant(!1),
                    lt = createRelationalOperation(baseLt),
                    lte = createRelationalOperation(function(value, other) {
                        return other >= value
                    }),
                    assign = createAssigner(function(object, source) {
                        if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) return void copyObject(source, keys(source), object);
                        for (var key in source) hasOwnProperty.call(source, key) && assignValue(object, key, source[key])
                    }),
                    assignIn = createAssigner(function(object, source) {
                        if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) return void copyObject(source, keysIn(source), object);
                        for (var key in source) assignValue(object, key, source[key])
                    }),
                    assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
                        copyObject(source, keysIn(source), object, customizer)
                    }),
                    assignWith = createAssigner(function(object, source, srcIndex, customizer) {
                        copyObject(source, keys(source), object, customizer)
                    }),
                    at = rest(function(object, paths) {
                        return baseAt(object, baseFlatten(paths, 1))
                    }),
                    defaults = rest(function(args) {
                        return args.push(undefined, assignInDefaults), apply(assignInWith, undefined, args)
                    }),
                    defaultsDeep = rest(function(args) {
                        return args.push(undefined, mergeDefaults), apply(mergeWith, undefined, args)
                    }),
                    invert = createInverter(function(result, value, key) {
                        result[value] = key
                    }, constant(identity)),
                    invertBy = createInverter(function(result, value, key) {
                        hasOwnProperty.call(result, value) ? result[value].push(key) : result[value] = [key]
                    }, getIteratee),
                    invoke = rest(baseInvoke),
                    merge = createAssigner(function(object, source, srcIndex) {
                        baseMerge(object, source, srcIndex)
                    }),
                    mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
                        baseMerge(object, source, srcIndex, customizer)
                    }),
                    omit = rest(function(object, props) {
                        return null == object ? {} : (props = arrayMap(baseFlatten(props, 1), toKey), basePick(object, baseDifference(getAllKeysIn(object), props)))
                    }),
                    pick = rest(function(object, props) {
                        return null == object ? {} : basePick(object, arrayMap(baseFlatten(props, 1), toKey))
                    }),
                    camelCase = createCompounder(function(result, word, index) {
                        return word = word.toLowerCase(), result + (index ? capitalize(word) : word)
                    }),
                    kebabCase = createCompounder(function(result, word, index) {
                        return result + (index ? "-" : "") + word.toLowerCase()
                    }),
                    lowerCase = createCompounder(function(result, word, index) {
                        return result + (index ? " " : "") + word.toLowerCase()
                    }),
                    lowerFirst = createCaseFirst("toLowerCase"),
                    snakeCase = createCompounder(function(result, word, index) {
                        return result + (index ? "_" : "") + word.toLowerCase()
                    }),
                    startCase = createCompounder(function(result, word, index) {
                        return result + (index ? " " : "") + upperFirst(word)
                    }),
                    upperCase = createCompounder(function(result, word, index) {
                        return result + (index ? " " : "") + word.toUpperCase()
                    }),
                    upperFirst = createCaseFirst("toUpperCase"),
                    attempt = rest(function(func, args) {
                        try {
                            return apply(func, undefined, args)
                        } catch (e) {
                            return isError(e) ? e : new Error(e)
                        }
                    }),
                    bindAll = rest(function(object, methodNames) {
                        return arrayEach(baseFlatten(methodNames, 1), function(key) {
                            key = toKey(key), object[key] = bind(object[key], object)
                        }), object
                    }),
                    flow = createFlow(),
                    flowRight = createFlow(!0),
                    method = rest(function(path, args) {
                        return function(object) {
                            return baseInvoke(object, path, args)
                        }
                    }),
                    methodOf = rest(function(object, args) {
                        return function(path) {
                            return baseInvoke(object, path, args)
                        }
                    }),
                    over = createOver(arrayMap),
                    overEvery = createOver(arrayEvery),
                    overSome = createOver(arraySome),
                    range = createRange(),
                    rangeRight = createRange(!0),
                    add = createMathOperation(function(augend, addend) {
                        return augend + addend
                    }),
                    ceil = createRound("ceil"),
                    divide = createMathOperation(function(dividend, divisor) {
                        return dividend / divisor
                    }),
                    floor = createRound("floor"),
                    multiply = createMathOperation(function(multiplier, multiplicand) {
                        return multiplier * multiplicand
                    }),
                    round = createRound("round"),
                    subtract = createMathOperation(function(minuend, subtrahend) {
                        return minuend - subtrahend
                    });
                return lodash.after = after, lodash.ary = ary, lodash.assign = assign, lodash.assignIn = assignIn, lodash.assignInWith = assignInWith, lodash.assignWith = assignWith, lodash.at = at, lodash.before = before, lodash.bind = bind, lodash.bindAll = bindAll, lodash.bindKey = bindKey, lodash.castArray = castArray, lodash.chain = chain, lodash.chunk = chunk, lodash.compact = compact, lodash.concat = concat, lodash.cond = cond, lodash.conforms = conforms, lodash.constant = constant, lodash.countBy = countBy, lodash.create = create, lodash.curry = curry, lodash.curryRight = curryRight, lodash.debounce = debounce, lodash.defaults = defaults, lodash.defaultsDeep = defaultsDeep, lodash.defer = defer, lodash.delay = delay, lodash.difference = difference, lodash.differenceBy = differenceBy, lodash.differenceWith = differenceWith, lodash.drop = drop, lodash.dropRight = dropRight, lodash.dropRightWhile = dropRightWhile, lodash.dropWhile = dropWhile, lodash.fill = fill, lodash.filter = filter, lodash.flatMap = flatMap, lodash.flatMapDeep = flatMapDeep, lodash.flatMapDepth = flatMapDepth, lodash.flatten = flatten, lodash.flattenDeep = flattenDeep, lodash.flattenDepth = flattenDepth, lodash.flip = flip, lodash.flow = flow, lodash.flowRight = flowRight, lodash.fromPairs = fromPairs, lodash.functions = functions, lodash.functionsIn = functionsIn, lodash.groupBy = groupBy, lodash.initial = initial, lodash.intersection = intersection, lodash.intersectionBy = intersectionBy, lodash.intersectionWith = intersectionWith, lodash.invert = invert, lodash.invertBy = invertBy, lodash.invokeMap = invokeMap, lodash.iteratee = iteratee, lodash.keyBy = keyBy, lodash.keys = keys, lodash.keysIn = keysIn, lodash.map = map, lodash.mapKeys = mapKeys, lodash.mapValues = mapValues, lodash.matches = matches, lodash.matchesProperty = matchesProperty, lodash.memoize = memoize, lodash.merge = merge, lodash.mergeWith = mergeWith, lodash.method = method, lodash.methodOf = methodOf, lodash.mixin = mixin, lodash.negate = negate, lodash.nthArg = nthArg, lodash.omit = omit, lodash.omitBy = omitBy, lodash.once = once, lodash.orderBy = orderBy, lodash.over = over, lodash.overArgs = overArgs, lodash.overEvery = overEvery, lodash.overSome = overSome, lodash.partial = partial, lodash.partialRight = partialRight, lodash.partition = partition, lodash.pick = pick, lodash.pickBy = pickBy, lodash.property = property, lodash.propertyOf = propertyOf, lodash.pull = pull, lodash.pullAll = pullAll, lodash.pullAllBy = pullAllBy, lodash.pullAllWith = pullAllWith, lodash.pullAt = pullAt, lodash.range = range, lodash.rangeRight = rangeRight, lodash.rearg = rearg, lodash.reject = reject, lodash.remove = remove, lodash.rest = rest, lodash.reverse = reverse, lodash.sampleSize = sampleSize, lodash.set = set, lodash.setWith = setWith, lodash.shuffle = shuffle, lodash.slice = slice, lodash.sortBy = sortBy, lodash.sortedUniq = sortedUniq, lodash.sortedUniqBy = sortedUniqBy, lodash.split = split, lodash.spread = spread, lodash.tail = tail, lodash.take = take, lodash.takeRight = takeRight, lodash.takeRightWhile = takeRightWhile, lodash.takeWhile = takeWhile, lodash.tap = tap, lodash.throttle = throttle, lodash.thru = thru, lodash.toArray = toArray, lodash.toPairs = toPairs, lodash.toPairsIn = toPairsIn, lodash.toPath = toPath, lodash.toPlainObject = toPlainObject, lodash.transform = transform, lodash.unary = unary, lodash.union = union, lodash.unionBy = unionBy, lodash.unionWith = unionWith, lodash.uniq = uniq, lodash.uniqBy = uniqBy, lodash.uniqWith = uniqWith, lodash.unset = unset, lodash.unzip = unzip, lodash.unzipWith = unzipWith, lodash.update = update, lodash.updateWith = updateWith, lodash.values = values, lodash.valuesIn = valuesIn, lodash.without = without, lodash.words = words, lodash.wrap = wrap, lodash.xor = xor, lodash.xorBy = xorBy, lodash.xorWith = xorWith, lodash.zip = zip, lodash.zipObject = zipObject, lodash.zipObjectDeep = zipObjectDeep, lodash.zipWith = zipWith, lodash.entries = toPairs, lodash.entriesIn = toPairsIn, lodash.extend = assignIn, lodash.extendWith = assignInWith, mixin(lodash, lodash), lodash.add = add, lodash.attempt = attempt, lodash.camelCase = camelCase, lodash.capitalize = capitalize, lodash.ceil = ceil, lodash.clamp = clamp, lodash.clone = clone, lodash.cloneDeep = cloneDeep, lodash.cloneDeepWith = cloneDeepWith, lodash.cloneWith = cloneWith, lodash.deburr = deburr, lodash.divide = divide, lodash.endsWith = endsWith, lodash.eq = eq, lodash.escape = escape, lodash.escapeRegExp = escapeRegExp, lodash.every = every, lodash.find = find, lodash.findIndex = findIndex, lodash.findKey = findKey, lodash.findLast = findLast, lodash.findLastIndex = findLastIndex, lodash.findLastKey = findLastKey, lodash.floor = floor, lodash.forEach = forEach, lodash.forEachRight = forEachRight, lodash.forIn = forIn, lodash.forInRight = forInRight, lodash.forOwn = forOwn, lodash.forOwnRight = forOwnRight, lodash.get = get, lodash.gt = gt, lodash.gte = gte, lodash.has = has, lodash.hasIn = hasIn, lodash.head = head, lodash.identity = identity, lodash.includes = includes, lodash.indexOf = indexOf, lodash.inRange = inRange, lodash.invoke = invoke, lodash.isArguments = isArguments, lodash.isArray = isArray, lodash.isArrayBuffer = isArrayBuffer, lodash.isArrayLike = isArrayLike, lodash.isArrayLikeObject = isArrayLikeObject, lodash.isBoolean = isBoolean, lodash.isBuffer = isBuffer, lodash.isDate = isDate, lodash.isElement = isElement, lodash.isEmpty = isEmpty, lodash.isEqual = isEqual, lodash.isEqualWith = isEqualWith, lodash.isError = isError, lodash.isFinite = isFinite, lodash.isFunction = isFunction, lodash.isInteger = isInteger, lodash.isLength = isLength, lodash.isMap = isMap, lodash.isMatch = isMatch, lodash.isMatchWith = isMatchWith, lodash.isNaN = isNaN, lodash.isNative = isNative, lodash.isNil = isNil, lodash.isNull = isNull, lodash.isNumber = isNumber, lodash.isObject = isObject, lodash.isObjectLike = isObjectLike, lodash.isPlainObject = isPlainObject, lodash.isRegExp = isRegExp, lodash.isSafeInteger = isSafeInteger, lodash.isSet = isSet, lodash.isString = isString, lodash.isSymbol = isSymbol, lodash.isTypedArray = isTypedArray, lodash.isUndefined = isUndefined, lodash.isWeakMap = isWeakMap, lodash.isWeakSet = isWeakSet, lodash.join = join, lodash.kebabCase = kebabCase, lodash.last = last, lodash.lastIndexOf = lastIndexOf, lodash.lowerCase = lowerCase, lodash.lowerFirst = lowerFirst, lodash.lt = lt, lodash.lte = lte, lodash.max = max, lodash.maxBy = maxBy, lodash.mean = mean, lodash.meanBy = meanBy, lodash.min = min, lodash.minBy = minBy, lodash.multiply = multiply, lodash.nth = nth, lodash.noConflict = noConflict, lodash.noop = noop, lodash.now = now, lodash.pad = pad, lodash.padEnd = padEnd, lodash.padStart = padStart, lodash.parseInt = parseInt, lodash.random = random, lodash.reduce = reduce, lodash.reduceRight = reduceRight, lodash.repeat = repeat, lodash.replace = replace, lodash.result = result, lodash.round = round, lodash.runInContext = runInContext, lodash.sample = sample, lodash.size = size, lodash.snakeCase = snakeCase, lodash.some = some, lodash.sortedIndex = sortedIndex, lodash.sortedIndexBy = sortedIndexBy, lodash.sortedIndexOf = sortedIndexOf, lodash.sortedLastIndex = sortedLastIndex, lodash.sortedLastIndexBy = sortedLastIndexBy, lodash.sortedLastIndexOf = sortedLastIndexOf, lodash.startCase = startCase, lodash.startsWith = startsWith, lodash.subtract = subtract, lodash.sum = sum, lodash.sumBy = sumBy, lodash.template = template, lodash.times = times, lodash.toInteger = toInteger, lodash.toLength = toLength, lodash.toLower = toLower, lodash.toNumber = toNumber, lodash.toSafeInteger = toSafeInteger, lodash.toString = toString, lodash.toUpper = toUpper, lodash.trim = trim, lodash.trimEnd = trimEnd, lodash.trimStart = trimStart, lodash.truncate = truncate, lodash.unescape = unescape, lodash.uniqueId = uniqueId, lodash.upperCase = upperCase, lodash.upperFirst = upperFirst, lodash.each = forEach, lodash.eachRight = forEachRight, lodash.first = head, mixin(lodash, function() {
                    var source = {};
                    return baseForOwn(lodash, function(func, methodName) {
                        hasOwnProperty.call(lodash.prototype, methodName) || (source[methodName] = func)
                    }), source
                }(), {
                    chain: !1
                }), lodash.VERSION = VERSION, arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
                    lodash[methodName].placeholder = lodash
                }), arrayEach(["drop", "take"], function(methodName, index) {
                    LazyWrapper.prototype[methodName] = function(n) {
                        var filtered = this.__filtered__;
                        if (filtered && !index) return new LazyWrapper(this);
                        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);
                        var result = this.clone();
                        return filtered ? result.__takeCount__ = nativeMin(n, result.__takeCount__) : result.__views__.push({
                            size: nativeMin(n, MAX_ARRAY_LENGTH),
                            type: methodName + (result.__dir__ < 0 ? "Right" : "")
                        }), result
                    }, LazyWrapper.prototype[methodName + "Right"] = function(n) {
                        return this.reverse()[methodName](n).reverse()
                    }
                }), arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
                    var type = index + 1,
                        isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
                    LazyWrapper.prototype[methodName] = function(iteratee) {
                        var result = this.clone();
                        return result.__iteratees__.push({
                            iteratee: getIteratee(iteratee, 3),
                            type: type
                        }), result.__filtered__ = result.__filtered__ || isFilter, result
                    }
                }), arrayEach(["head", "last"], function(methodName, index) {
                    var takeName = "take" + (index ? "Right" : "");
                    LazyWrapper.prototype[methodName] = function() {
                        return this[takeName](1).value()[0]
                    }
                }), arrayEach(["initial", "tail"], function(methodName, index) {
                    var dropName = "drop" + (index ? "" : "Right");
                    LazyWrapper.prototype[methodName] = function() {
                        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1)
                    }
                }), LazyWrapper.prototype.compact = function() {
                    return this.filter(identity)
                }, LazyWrapper.prototype.find = function(predicate) {
                    return this.filter(predicate).head()
                }, LazyWrapper.prototype.findLast = function(predicate) {
                    return this.reverse().find(predicate)
                }, LazyWrapper.prototype.invokeMap = rest(function(path, args) {
                    return "function" == typeof path ? new LazyWrapper(this) : this.map(function(value) {
                        return baseInvoke(value, path, args)
                    })
                }), LazyWrapper.prototype.reject = function(predicate) {
                    return predicate = getIteratee(predicate, 3), this.filter(function(value) {
                        return !predicate(value)
                    })
                }, LazyWrapper.prototype.slice = function(start, end) {
                    start = toInteger(start);
                    var result = this;
                    return result.__filtered__ && (start > 0 || 0 > end) ? new LazyWrapper(result) : (0 > start ? result = result.takeRight(-start) : start && (result = result.drop(start)), end !== undefined && (end = toInteger(end), result = 0 > end ? result.dropRight(-end) : result.take(end - start)), result)
                }, LazyWrapper.prototype.takeRightWhile = function(predicate) {
                    return this.reverse().takeWhile(predicate).reverse()
                }, LazyWrapper.prototype.toArray = function() {
                    return this.take(MAX_ARRAY_LENGTH)
                }, baseForOwn(LazyWrapper.prototype, function(func, methodName) {
                    var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
                        isTaker = /^(?:head|last)$/.test(methodName),
                        lodashFunc = lodash[isTaker ? "take" + ("last" == methodName ? "Right" : "") : methodName],
                        retUnwrapped = isTaker || /^find/.test(methodName);
                    lodashFunc && (lodash.prototype[methodName] = function() {
                        var value = this.__wrapped__,
                            args = isTaker ? [1] : arguments,
                            isLazy = value instanceof LazyWrapper,
                            iteratee = args[0],
                            useLazy = isLazy || isArray(value),
                            interceptor = function(value) {
                                var result = lodashFunc.apply(lodash, arrayPush([value], args));
                                return isTaker && chainAll ? result[0] : result
                            };
                        useLazy && checkIteratee && "function" == typeof iteratee && 1 != iteratee.length && (isLazy = useLazy = !1);
                        var chainAll = this.__chain__,
                            isHybrid = !!this.__actions__.length,
                            isUnwrapped = retUnwrapped && !chainAll,
                            onlyLazy = isLazy && !isHybrid;
                        if (!retUnwrapped && useLazy) {
                            value = onlyLazy ? value : new LazyWrapper(this);
                            var result = func.apply(value, args);
                            return result.__actions__.push({
                                func: thru,
                                args: [interceptor],
                                thisArg: undefined
                            }), new LodashWrapper(result, chainAll)
                        }
                        return isUnwrapped && onlyLazy ? func.apply(this, args) : (result = this.thru(interceptor), isUnwrapped ? isTaker ? result.value()[0] : result.value() : result)
                    })
                }), arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
                    var func = arrayProto[methodName],
                        chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru",
                        retUnwrapped = /^(?:pop|shift)$/.test(methodName);
                    lodash.prototype[methodName] = function() {
                        var args = arguments;
                        if (retUnwrapped && !this.__chain__) {
                            var value = this.value();
                            return func.apply(isArray(value) ? value : [], args)
                        }
                        return this[chainName](function(value) {
                            return func.apply(isArray(value) ? value : [], args)
                        })
                    }
                }), baseForOwn(LazyWrapper.prototype, function(func, methodName) {
                    var lodashFunc = lodash[methodName];
                    if (lodashFunc) {
                        var key = lodashFunc.name + "",
                            names = realNames[key] || (realNames[key] = []);
                        names.push({
                            name: methodName,
                            func: lodashFunc
                        })
                    }
                }), realNames[createHybridWrapper(undefined, BIND_KEY_FLAG).name] = [{
                    name: "wrapper",
                    func: undefined
                }], LazyWrapper.prototype.clone = lazyClone, LazyWrapper.prototype.reverse = lazyReverse, LazyWrapper.prototype.value = lazyValue, lodash.prototype.at = wrapperAt, lodash.prototype.chain = wrapperChain, lodash.prototype.commit = wrapperCommit, lodash.prototype.next = wrapperNext, lodash.prototype.plant = wrapperPlant, lodash.prototype.reverse = wrapperReverse, lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue, iteratorSymbol && (lodash.prototype[iteratorSymbol] = wrapperToIterator), lodash
            }
            var undefined, VERSION = "4.11.2",
                LARGE_ARRAY_SIZE = 200,
                FUNC_ERROR_TEXT = "Expected a function",
                HASH_UNDEFINED = "__lodash_hash_undefined__",
                PLACEHOLDER = "__lodash_placeholder__",
                BIND_FLAG = 1,
                BIND_KEY_FLAG = 2,
                CURRY_BOUND_FLAG = 4,
                CURRY_FLAG = 8,
                CURRY_RIGHT_FLAG = 16,
                PARTIAL_FLAG = 32,
                PARTIAL_RIGHT_FLAG = 64,
                ARY_FLAG = 128,
                REARG_FLAG = 256,
                FLIP_FLAG = 512,
                UNORDERED_COMPARE_FLAG = 1,
                PARTIAL_COMPARE_FLAG = 2,
                DEFAULT_TRUNC_LENGTH = 30,
                DEFAULT_TRUNC_OMISSION = "...",
                HOT_COUNT = 150,
                HOT_SPAN = 16,
                LAZY_FILTER_FLAG = 1,
                LAZY_MAP_FLAG = 2,
                LAZY_WHILE_FLAG = 3,
                INFINITY = 1 / 0,
                MAX_SAFE_INTEGER = 9007199254740991,
                MAX_INTEGER = 1.7976931348623157e308,
                NAN = NaN,
                MAX_ARRAY_LENGTH = 4294967295,
                MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
                HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1,
                argsTag = "[object Arguments]",
                arrayTag = "[object Array]",
                boolTag = "[object Boolean]",
                dateTag = "[object Date]",
                errorTag = "[object Error]",
                funcTag = "[object Function]",
                genTag = "[object GeneratorFunction]",
                mapTag = "[object Map]",
                numberTag = "[object Number]",
                objectTag = "[object Object]",
                promiseTag = "[object Promise]",
                regexpTag = "[object RegExp]",
                setTag = "[object Set]",
                stringTag = "[object String]",
                symbolTag = "[object Symbol]",
                weakMapTag = "[object WeakMap]",
                weakSetTag = "[object WeakSet]",
                arrayBufferTag = "[object ArrayBuffer]",
                dataViewTag = "[object DataView]",
                float32Tag = "[object Float32Array]",
                float64Tag = "[object Float64Array]",
                int8Tag = "[object Int8Array]",
                int16Tag = "[object Int16Array]",
                int32Tag = "[object Int32Array]",
                uint8Tag = "[object Uint8Array]",
                uint8ClampedTag = "[object Uint8ClampedArray]",
                uint16Tag = "[object Uint16Array]",
                uint32Tag = "[object Uint32Array]",
                reEmptyStringLeading = /\b__p \+= '';/g,
                reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
                reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
                reUnescapedHtml = /[&<>"'`]/g,
                reHasEscapedHtml = RegExp(reEscapedHtml.source),
                reHasUnescapedHtml = RegExp(reUnescapedHtml.source),
                reEscape = /<%-([\s\S]+?)%>/g,
                reEvaluate = /<%([\s\S]+?)%>/g,
                reInterpolate = /<%=([\s\S]+?)%>/g,
                reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                reIsPlainProp = /^\w*$/,
                rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,
                reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
                reHasRegExpChar = RegExp(reRegExpChar.source),
                reTrim = /^\s+|\s+$/g,
                reTrimStart = /^\s+/,
                reTrimEnd = /\s+$/,
                reBasicWord = /[a-zA-Z0-9]+/g,
                reEscapeChar = /\\(\\)?/g,
                reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                reFlags = /\w*$/,
                reHasHexPrefix = /^0x/i,
                reIsBadHex = /^[-+]0x[0-9a-f]+$/i,
                reIsBinary = /^0b[01]+$/i,
                reIsHostCtor = /^\[object .+?Constructor\]$/,
                reIsOctal = /^0o[0-7]+$/i,
                reIsUint = /^(?:0|[1-9]\d*)$/,
                reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
                reNoMatch = /($^)/,
                reUnescapedString = /['\n\r\u2028\u2029\\]/g,
                rsAstralRange = "\\ud800-\\udfff",
                rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23",
                rsComboSymbolsRange = "\\u20d0-\\u20f0",
                rsDingbatRange = "\\u2700-\\u27bf",
                rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff",
                rsMathOpRange = "\\xac\\xb1\\xd7\\xf7",
                rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                rsPunctuationRange = "\\u2000-\\u206f",
                rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                rsVarRange = "\\ufe0e\\ufe0f",
                rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange,
                rsApos = "['’]",
                rsAstral = "[" + rsAstralRange + "]",
                rsBreak = "[" + rsBreakRange + "]",
                rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]",
                rsDigits = "\\d+",
                rsDingbat = "[" + rsDingbatRange + "]",
                rsLower = "[" + rsLowerRange + "]",
                rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]",
                rsFitz = "\\ud83c[\\udffb-\\udfff]",
                rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")",
                rsNonAstral = "[^" + rsAstralRange + "]",
                rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                rsUpper = "[" + rsUpperRange + "]",
                rsZWJ = "\\u200d",
                rsLowerMisc = "(?:" + rsLower + "|" + rsMisc + ")",
                rsUpperMisc = "(?:" + rsUpper + "|" + rsMisc + ")",
                rsOptLowerContr = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?",
                rsOptUpperContr = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?",
                reOptMod = rsModifier + "?",
                rsOptVar = "[" + rsVarRange + "]?",
                rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*",
                rsSeq = rsOptVar + reOptMod + rsOptJoin,
                rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq,
                rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")",
                reApos = RegExp(rsApos, "g"),
                reComboMark = RegExp(rsCombo, "g"),
                reComplexSymbol = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g"),
                reComplexWord = RegExp([rsUpper + "?" + rsLower + "+" + rsOptLowerContr + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")", rsUpperMisc + "+" + rsOptUpperContr + "(?=" + [rsBreak, rsUpper + rsLowerMisc, "$"].join("|") + ")", rsUpper + "?" + rsLowerMisc + "+" + rsOptLowerContr, rsUpper + "+" + rsOptUpperContr, rsDigits, rsEmoji].join("|"), "g"),
                reHasComplexSymbol = RegExp("[" + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + "]"),
                reHasComplexWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                contextProps = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "Reflect", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                templateCounter = -1,
                typedArrayTags = {};
            typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0, typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = !1;
            var cloneableTags = {};
            cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = !0, cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = !1;
            var deburredLetters = {
                    "À": "A",
                    "Á": "A",
                    "Â": "A",
                    "Ã": "A",
                    "Ä": "A",
                    "Å": "A",
                    "à": "a",
                    "á": "a",
                    "â": "a",
                    "ã": "a",
                    "ä": "a",
                    "å": "a",
                    "Ç": "C",
                    "ç": "c",
                    "Ð": "D",
                    "ð": "d",
                    "È": "E",
                    "É": "E",
                    "Ê": "E",
                    "Ë": "E",
                    "è": "e",
                    "é": "e",
                    "ê": "e",
                    "ë": "e",
                    "Ì": "I",
                    "Í": "I",
                    "Î": "I",
                    "Ï": "I",
                    "ì": "i",
                    "í": "i",
                    "î": "i",
                    "ï": "i",
                    "Ñ": "N",
                    "ñ": "n",
                    "Ò": "O",
                    "Ó": "O",
                    "Ô": "O",
                    "Õ": "O",
                    "Ö": "O",
                    "Ø": "O",
                    "ò": "o",
                    "ó": "o",
                    "ô": "o",
                    "õ": "o",
                    "ö": "o",
                    "ø": "o",
                    "Ù": "U",
                    "Ú": "U",
                    "Û": "U",
                    "Ü": "U",
                    "ù": "u",
                    "ú": "u",
                    "û": "u",
                    "ü": "u",
                    "Ý": "Y",
                    "ý": "y",
                    "ÿ": "y",
                    "Æ": "Ae",
                    "æ": "ae",
                    "Þ": "Th",
                    "þ": "th",
                    "ß": "ss"
                },
                htmlEscapes = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "`": "&#96;"
                },
                htmlUnescapes = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'",
                    "&#96;": "`"
                },
                objectTypes = {
                    "function": !0,
                    object: !0
                },
                stringEscapes = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                freeParseFloat = parseFloat,
                freeParseInt = parseInt,
                freeExports = objectTypes[typeof exports] && exports && !exports.nodeType ? exports : undefined,
                freeModule = objectTypes[typeof module] && module && !module.nodeType ? module : undefined,
                moduleExports = freeModule && freeModule.exports === freeExports ? freeExports : undefined,
                freeGlobal = checkGlobal(freeExports && freeModule && "object" == typeof global && global),
                freeSelf = checkGlobal(objectTypes[typeof self] && self),
                freeWindow = checkGlobal(objectTypes[typeof window] && window),
                thisGlobal = checkGlobal(objectTypes[typeof this] && this),
                root = freeGlobal || freeWindow !== (thisGlobal && thisGlobal.window) && freeWindow || freeSelf || thisGlobal || Function("return this")(),
                _ = runInContext();
            (freeWindow || freeSelf || {})._ = _, __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return _
            }.call(exports, __webpack_require__, exports, module), !(__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        }).call(this)
    }).call(exports, __webpack_require__(9)(module), function() {
        return this
    }())
}, function(module, exports) {
    module.exports = function(module) {
        return module.webpackPolyfill || (module.deprecate = function() {}, module.paths = [], module.children = [], module.webpackPolyfill = 1), module
    }
}, function(module, exports) {
    window.cytubeEnhanced = new window.CytubeEnhanced(window.cytubeEnhancedSettings ? window.cytubeEnhancedSettings.language || "ru" : "ru", window.cytubeEnhancedSettings ? window.cytubeEnhancedSettings.modulesSettings || {} : {}, window.cytubeEnhancedSettings ? window.cytubeEnhancedSettings.modulesExtends || {} : {})
}, function(module, exports) {
    window.cytubeEnhanced.addModule("additionalChatCommands", function(app, settings) {
        "use strict";
        var that = this,
            defaultSettings = {
                permittedCommands: ["*"]
            };
        settings = $.extend({}, defaultSettings, settings), settings.permittedCommands = _.isArray(settings.permittedCommands) ? settings.permittedCommands : [], settings.permittedCommands = _.map(settings.permittedCommands, function(value) {
            return _.toLower(value)
        }), this.$chatline = $("#chatline"), this.isCommandPermitted = function(commandName) {
            return that.commandsList[commandName] ? that.commandsList[commandName].canBeOmitted ? -1 !== settings.permittedCommands.indexOf("*") || -1 !== settings.permittedCommands.indexOf(commandName) : !0 : !1
        }, this.askAnswers = ["100%", app.t("qCommands[.]of course"), app.t("qCommands[.]yes"), app.t("qCommands[.]maybe"), app.t("qCommands[.]impossible"), app.t("qCommands[.]no way"), app.t("qCommands[.]don't think so"), app.t("qCommands[.]no"), "50/50", app.t("qCommands[.]cirno is busy"), app.t("qCommands[.]I regret to inform you")], this.randomQuotes = [], this.randomPics = [], this.commandsList = {
            "!pick": {
                description: app.t("chatCommands[.]random option from the list of options (!pick option1, option2, option3)"),
                value: function(msg) {
                    var formattedMsg = _.trim(msg.replace("!pick", ""));
                    if ("" === formattedMsg) return app.t("chatCommands[.]Use !pick variant1, variant2");
                    var variants = formattedMsg.split(",");
                    return _.trim(variants[Math.floor(Math.random() * variants.length)])
                },
                canBeOmitted: !0
            },
            "!pic": {
                description: app.t("chatCommands[.]Показать случайную картинку."),
                value: function(msg) {
                    return msg = 0 === that.randomPics.length ? app.t("chatCommands[.]Картинок нет.") : that.randomPics[Math.floor(Math.random() * (that.randomPics.length - 5))]
                },
                canBeOmitted: !0
            },
            "!ask": {
                description: app.t("chatCommands[.]asking a question with yes/no/... type answer (e.g. <i>!ask Will i be rich?</i>)"),
                value: function() {
                    return that.askAnswers[Math.floor(Math.random() * that.askAnswers.length)]
                },
                canBeOmitted: !0
            },
            "!time": {
                description: app.t("chatCommands[.]show the current time"),
                value: function() {
                    var h = (new Date).getHours();
                    10 > h && (h = "0" + h);
                    var m = (new Date).getMinutes();
                    return 10 > m && (m = "0" + m), app.t("chatCommands[.]current time") + ": " + h + ":" + m
                },
                canBeOmitted: !0
            },
            "!dice": {
                description: app.t("chatCommands[.]throw a dice"),
                value: function() {
                    return Math.floor(5 * Math.random()) + 1
                },
                canBeOmitted: !0
            },
            '!random wa': {
                description: app.t('chatCommands[.]Рандом с сайта World Art'),
                value: function() {
                    var randomNumber = app.t('chatCommands[.]http://www.world-art.ru/animation/animation.php?id=') + Math.floor(Math.random() * 10000);

                    if (randomNumber < 1000) {
                        randomNumber = '000' + randomNumber;
                    } else if (randomNumber < 100) {
                        randomNumber = '00' + randomNumber;
                    } else if (randomNumber < 10) {
                        randomNumber = '0' + randomNumber;
                    }

                    return randomNumber;
                },
                canBeOmitted: true
            },
            "!roll": {
                description: app.t("chatCommands[.]random number between 0 and 999"),
                value: function() {
                    var randomNumber = Math.floor(1e3 * Math.random());
                    return 100 > randomNumber ? randomNumber = "0" + randomNumber : 100 > randomNumber && (randomNumber = "00" + randomNumber), randomNumber
                },
                canBeOmitted: !0
            },
            "!q": {
                description: app.t("chatCommands[.]show the random quote"),
                value: function(msg) {
                    return msg = 0 === that.randomQuotes.length ? app.t("chatCommands[.]there aren't any quotes.") : that.randomQuotes[Math.floor(Math.random() * (that.randomQuotes.length - 1))]
                },
                canBeOmitted: !0
            },
            "!skip": {
                description: app.t("chatCommands[.]vote for the video skip"),
                value: function(msg) {
                    return window.socket.emit("voteskip"), msg = app.t("chatCommands[.]you have been voted for the video skip")
                },
                isAvailable: function() {
                    return window.hasPermission("voteskip")
                },
                canBeOmitted: !0
            },
            "!next": {
                description: app.t("chatCommands[.]play the next video"),
                value: function(msg) {
                    return window.socket.emit("playNext"), msg = app.t("chatCommands[.]the next video is playing")
                },
                isAvailable: function() {
                    return window.hasPermission("playlistjump")
                },
                canBeOmitted: !0
            },
            "!bump": {
                description: app.t("chatCommands[.]bump the last video"),
                value: function(msg) {
                    var $lastEntry = $("#queue").find(".queue_entry").last(),
                        uid = $lastEntry.data("uid"),
                        title = $lastEntry.find(".qe_title").html();
                    return window.socket.emit("moveMedia", {
                        from: uid,
                        after: window.PL_CURRENT
                    }), msg = app.t("chatCommands[.]the last video was bumped") + title
                },
                isAvailable: function() {
                    return window.hasPermission("playlistmove")
                },
                canBeOmitted: !0
            },
            "!add": {
                description: app.t("chatCommands[.]adds the video to the end of the playlist (e.g. <i>!add https://www.youtube.com/watch?v=hh4gpgAZkc8</i>)"),
                value: function(msg) {
                    var parsed = window.parseMediaLink(msg.split("!add ")[1]);
                    return null === parsed.id ? msg = app.t("chatCommands[.]error: the wrong link") : (window.socket.emit("queue", {
                        id: parsed.id,
                        pos: "end",
                        type: parsed.type
                    }), msg = app.t("chatCommands[.]the video was added")), msg
                },
                isAvailable: function() {
                    return window.hasPermission("playlistadd")
                },
                canBeOmitted: !0
            },
            "!now": {
                description: app.t("chatCommands[.]show the current video's name"),
                value: function() {
                    return app.t("chatCommands[.]now: ") + $(".queue_active a").html()
                },
                canBeOmitted: !0
            },
            "!sm": {
                description: app.t("chatCommands[.]show the random emote"),
                value: function() {
                    var smilesArray = window.CHANNEL.emotes.map(function(smile) {
                        return smile.name
                    });
                    return smilesArray[Math.floor(Math.random() * smilesArray.length)] + " "
                },
                canBeOmitted: !0
            },
            "!yoba": {
                description: app.t("chatCommands[.]the secret command"),
                value: function() {
                    var IMBA = new Audio("https://dl.dropboxusercontent.com/s/olpmjho5dfvxho4/11%20Kobaryo%20-%20ヤンデレのハー_cut_192.mp3");
                    return IMBA.volume = .6, IMBA.play(), " http://i.imgur.com/hlT9gPg.gif "
                },
                canBeOmitted: !0
            }
        }, this.IS_COMMAND = !1, this.prepareMessage = function(msg) {
            that.IS_COMMAND = !1;
            for (var command in that.commandsList)
                if (this.commandsList.hasOwnProperty(command) && 0 === _.toLower(_.trim(msg)).indexOf(command)) {
                    that.isCommandPermitted(command) && (that.commandsList[command].isAvailable ? that.commandsList[command].isAvailable() : !0) && (that.IS_COMMAND = !0, msg = that.commandsList[command].value(msg));
                    break
                }
            return msg
        }, this.sendUserChatMessage = function(e) {
            if (13 !== e.keyCode) return 9 === e.keyCode ? (window.chatTabComplete(), e.preventDefault(), !1) : 38 === e.keyCode ? (window.CHATHISTIDX === window.CHATHIST.length && window.CHATHIST.push(that.$chatline.val()), window.CHATHISTIDX > 0 && (window.CHATHISTIDX--, that.$chatline.val(window.CHATHIST[window.CHATHISTIDX])), e.preventDefault(), !1) : 40 === e.keyCode ? (window.CHATHISTIDX < window.CHATHIST.length - 1 && (window.CHATHISTIDX++, that.$chatline.val(window.CHATHIST[window.CHATHISTIDX])), e.preventDefault(), !1) : void 0;
            if (!window.CHATTHROTTLE) {
                var msg = that.$chatline.val().trim();
                if ("" !== msg) {
                    var meta = {};
                    window.USEROPTS.adminhat && window.CLIENT.rank >= 255 ? msg = "/a " + msg : window.USEROPTS.modhat && window.CLIENT.rank >= window.Rank.Moderator && (meta.modflair = window.CLIENT.rank), window.CLIENT.rank >= 2 && 0 === msg.indexOf("/m ") && (meta.modflair = window.CLIENT.rank, msg = msg.substring(3));
                    var msgForCommand = this.prepareMessage(msg);
                    that.IS_COMMAND ? (window.socket.emit("chatMsg", {
                        msg: msg,
                        meta: meta
                    }), window.socket.emit("chatMsg", {
                        msg: "Сырно: " + msgForCommand
                    }), that.IS_COMMAND = !1) : window.socket.emit("chatMsg", {
                        msg: msg,
                        meta: meta
                    }), window.CHATHIST.push(that.$chatline.val()), window.CHATHISTIDX = window.CHATHIST.length, that.$chatline.val("")
                }
            }
        }, that.$chatline.off().on("keydown", function(e) {
            that.sendUserChatMessage(e)
        }), $("#chatbtn").off().on("click", function(e) {
            that.sendUserChatMessage(e)
        })
    })
}, function(module, exports, __webpack_require__) {
    __webpack_require__(13), window.cytubeEnhanced.addModule("bbCodesHelper", function(app, settings) {
        "use strict";
        var that = this,
            defaultSettings = {
                templateButtons: ["b", "i", "sp", "code", "s"],
                templateButtonsAnimationSpeed: 150
            };
        settings = $.extend({}, defaultSettings, settings), 0 === $("#chat-controls").length && $('<div id="chat-controls" class="btn-group">').appendTo("#chatwrap"), this.handleMarkdownHelperBtnClick = function($markdownHelperBtn, $markdownTemplatesWrapper) {
            $markdownHelperBtn.hasClass("btn-default") ? ($markdownHelperBtn.removeClass("btn-default"), $markdownHelperBtn.addClass("btn-success"), $markdownTemplatesWrapper.show(), $markdownTemplatesWrapper.children().animate({
                left: 0
            }, settings.templateButtonsAnimationSpeed)) : ($markdownHelperBtn.removeClass("btn-success"), $markdownHelperBtn.addClass("btn-default"), $markdownTemplatesWrapper.children().animate({
                left: -$markdownTemplatesWrapper.width()
            }, settings.templateButtonsAnimationSpeed, function() {
                $markdownTemplatesWrapper.hide()
            }))
        }, this.$markdownHelperBtn = $('<button id="markdown-helper-btn" type="button" class="btn btn-sm btn-default" title="' + app.t("markdown[.]Markdown helper") + '">').html('<i class="glyphicon glyphicon-font"></i>').on("click", function() {
            that.handleMarkdownHelperBtnClick($(this), that.$markdownTemplatesWrapper), app.storage.toggle("bb-codes-opened")
        }), 0 !== $("#chat-help-btn").length ? this.$markdownHelperBtn.insertBefore("#chat-help-btn") : this.$markdownHelperBtn.appendTo("#chat-controls"), this.$markdownTemplatesWrapper = $('<div class="btn-group markdown-helper-templates-wrapper">').insertAfter(this.$markdownHelperBtn).hide(), app.storage.get("bb-codes-opened") && this.handleMarkdownHelperBtnClick(this.$markdownHelperBtn, this.$markdownTemplatesWrapper), this.markdownTemplates = {
            b: {
                text: "<b>B</b>",
                title: app.t("markdown[.]Bold text")
            },
            i: {
                text: "<i>I</i>",
                title: app.t("markdown[.]Cursive text")
            },
            sp: {
                text: "SP",
                title: app.t("markdown[.]Spoiler")
            },
            code: {
                text: "<code>CODE</code>",
                title: app.t("markdown[.]Monospace")
            },
            s: {
                text: "<s>S</s>",
                title: app.t("markdown[.]Strike")
            }
        };
        for (var template, templateIndex = 0, templatesLength = settings.templateButtons.length; templatesLength > templateIndex; templateIndex++) template = settings.templateButtons[templateIndex], $('<button type="button" class="btn btn-sm btn-default" title="' + this.markdownTemplates[template].title + '">').html(this.markdownTemplates[template].text).data("template", template).appendTo(this.$markdownTemplatesWrapper);
        this.handleMarkdown = function(templateType) {
            this.markdownTemplates.hasOwnProperty(templateType) && $("#chatline").selection("insert", {
                text: "[" + templateType + "]",
                mode: "before"
            }).selection("insert", {
                text: "[/" + templateType + "]",
                mode: "after"
            })
        }, this.$markdownTemplatesWrapper.on("click", "button", function() {
            return that.handleMarkdown($(this).data("template")), !1
        })
    })
}, function(module, exports) {
    ! function($, win, doc) {
        var _getCaretInfo = function(element) {
                var res = {
                    text: "",
                    start: 0,
                    end: 0
                };
                if (!element.value) return res;
                try {
                    if (win.getSelection) res.start = element.selectionStart, res.end = element.selectionEnd, res.text = element.value.slice(res.start, res.end);
                    else if (doc.selection) {
                        element.focus();
                        var range = doc.selection.createRange(),
                            range2 = doc.body.createTextRange();
                        res.text = range.text;
                        try {
                            range2.moveToElementText(element), range2.setEndPoint("StartToStart", range)
                        } catch (e) {
                            range2 = element.createTextRange(), range2.setEndPoint("StartToStart", range)
                        }
                        res.start = element.value.length - range2.text.length, res.end = res.start + range.text.length
                    }
                } catch (e) {}
                return res
            },
            _CaretOperation = {
                getPos: function(element) {
                    var tmp = _getCaretInfo(element);
                    return {
                        start: tmp.start,
                        end: tmp.end
                    }
                },
                setPos: function(element, toRange, caret) {
                    caret = this._caretMode(caret), "start" === caret ? toRange.end = toRange.start : "end" === caret && (toRange.start = toRange.end), element.focus();
                    try {
                        if (element.createTextRange) {
                            var range = element.createTextRange();
                            win.navigator.userAgent.toLowerCase().indexOf("msie") >= 0 && (toRange.start = element.value.substr(0, toRange.start).replace(/\r/g, "").length, toRange.end = element.value.substr(0, toRange.end).replace(/\r/g, "").length), range.collapse(!0), range.moveStart("character", toRange.start), range.moveEnd("character", toRange.end - toRange.start), range.select()
                        } else element.setSelectionRange && element.setSelectionRange(toRange.start, toRange.end)
                    } catch (e) {}
                },
                getText: function(element) {
                    return _getCaretInfo(element).text
                },
                _caretMode: function(caret) {
                    switch (caret = caret || "keep", caret === !1 && (caret = "end"), caret) {
                        case "keep":
                        case "start":
                        case "end":
                            break;
                        default:
                            caret = "keep"
                    }
                    return caret
                },
                replace: function(element, text, caret) {
                    var tmp = _getCaretInfo(element),
                        orig = element.value,
                        pos = $(element).scrollTop(),
                        range = {
                            start: tmp.start,
                            end: tmp.start + text.length
                        };
                    element.value = orig.substr(0, tmp.start) + text + orig.substr(tmp.end), $(element).scrollTop(pos), this.setPos(element, range, caret)
                },
                insertBefore: function(element, text, caret) {
                    var tmp = _getCaretInfo(element),
                        orig = element.value,
                        pos = $(element).scrollTop(),
                        range = {
                            start: tmp.start + text.length,
                            end: tmp.end + text.length
                        };
                    element.value = orig.substr(0, tmp.start) + text + orig.substr(tmp.start), $(element).scrollTop(pos), this.setPos(element, range, caret)
                },
                insertAfter: function(element, text, caret) {
                    var tmp = _getCaretInfo(element),
                        orig = element.value,
                        pos = $(element).scrollTop(),
                        range = {
                            start: tmp.start,
                            end: tmp.end
                        };
                    element.value = orig.substr(0, tmp.end) + text + orig.substr(tmp.end), $(element).scrollTop(pos), this.setPos(element, range, caret)
                }
            };
        $.extend({
            selection: function(mode) {
                var getText = "text" === (mode || "text").toLowerCase();
                try {
                    if (win.getSelection) {
                        if (getText) return win.getSelection().toString();
                        var range, sel = win.getSelection();
                        return sel.getRangeAt ? range = sel.getRangeAt(0) : (range = doc.createRange(), range.setStart(sel.anchorNode, sel.anchorOffset), range.setEnd(sel.focusNode, sel.focusOffset)), $("<div></div>").append(range.cloneContents()).html()
                    }
                    if (doc.selection) return getText ? doc.selection.createRange().text : doc.selection.createRange().htmlText
                } catch (e) {}
                return ""
            }
        }), $.fn.extend({
            selection: function(mode, opts) {
                switch (opts = opts || {}, mode) {
                    case "getPos":
                        return _CaretOperation.getPos(this[0]);
                    case "setPos":
                        return this.each(function() {
                            _CaretOperation.setPos(this, opts)
                        });
                    case "replace":
                        return this.each(function() {
                            _CaretOperation.replace(this, opts.text, opts.caret)
                        });
                    case "insert":
                        return this.each(function() {
                            "before" === opts.mode ? _CaretOperation.insertBefore(this, opts.text, opts.caret) : _CaretOperation.insertAfter(this, opts.text, opts.caret)
                        });
                    case "get":
                    default:
                        return _CaretOperation.getText(this[0])
                }
                return this
            }
        })
    }(jQuery, window, window.document)
}, function(module, exports) {
    window.cytubeEnhanced.addModule("chatAvatars", function(app, settings) {
        "use strict";
        var that = this,
            tab = app.Settings.getTab("general", app.t("general[.]General"), 100),
            userSettings = app.Settings.storage,
            appSettings = app.storage,
            defaultSettings = {
                avatarClass: "chat-avatar",
                smallAvatarClass: "chat-avatar_small",
                bigAvatarClass: "chat-avatar_big"
            };
        settings = $.extend({}, defaultSettings, settings);
        var namespace = "avatars";
        this.scheme = {
            "avatars-mode": {
                title: app.t("chatAvatars[.]Chat avatars"),
                "default": "",
                options: [{
                    value: "",
                    title: app.t("chatAvatars[.]Disabled")
                }, {
                    value: "small",
                    title: app.t("chatAvatars[.]Small")
                }, {
                    value: "big",
                    title: app.t("chatAvatars[.]Big")
                }]
            }
        }, appSettings.setDefault(namespace + ".cache", []), this.cacheAvatar = function(username, avatar) {
            var cachedAvatars = appSettings.get(namespace + ".cache");
            cachedAvatars.length >= 50 && (cachedAvatars = cachedAvatars.slice(0, 49)), cachedAvatars.unshift({
                username: username,
                avatar: avatar
            }), appSettings.set(namespace + ".cache", cachedAvatars)
        }, this.getAvatarFromCache = function(username) {
            var cachedAvatar = _.findLast(appSettings.get(namespace + ".cache"), function(o) {
                return o.username == username
            });
            return cachedAvatar = cachedAvatar ? cachedAvatar.avatar : null
        }, this.getAvatarFromUserlist = function(username) {
            return window.findUserlistItem(username) && window.findUserlistItem(username).data("profile").image ? window.findUserlistItem(username).data("profile").image : null
        }, this.applyAvatar = function($usernameBlock, username, newAvatar) {
            username = username || $usernameBlock.text().replace(/^\s+|[:]?\s+$/g, ""), newAvatar = newAvatar || that.getAvatarFromUserlist(username);
            var cachedAvatar = that.getAvatarFromCache(username),
                $messageBlock = $usernameBlock.parent();
            if ((cachedAvatar || newAvatar) && (cachedAvatar || that.cacheAvatar(username, newAvatar), 0 === $messageBlock.find("." + settings.avatarClass).length)) {
                var $avatar = $("<img>").attr("src", newAvatar || cachedAvatar).addClass(settings.avatarClass + " " + ("big" == userSettings.get(namespace + ".avatars-mode") ? settings.bigAvatarClass : settings.smallAvatarClass)).prependTo($messageBlock);
                "big" == userSettings.get(namespace + ".avatars-mode") && ($(this).css("display", "none"), $avatar.attr("title", username))
            }
        };
        var schemeItem, option, sort = 100;
        for (var itemName in this.scheme) {
            if (schemeItem = this.scheme[itemName], userSettings.setDefault(namespace + "." + itemName, schemeItem["default"]), userSettings.get(namespace + "." + itemName))
                for (option in schemeItem.options) schemeItem.options[option].selected = userSettings.get(namespace + "." + itemName) == schemeItem.options[option].value;
            tab.addControl("select", "horizontal", schemeItem.title, itemName, schemeItem.options, null, sort), sort += 100
        }
        app.Settings.onSave(function(settings) {
            for (var itemName in that.scheme) settings.set(namespace + "." + itemName, $("#" + app.prefix + itemName).val());
            settings.isDirty(namespace + ".avatars-mode") && app.Settings.requestPageReload()
        }), userSettings.get(namespace + ".avatars-mode") && (window.formatChatMessage = function(oldFormatChatMessage) {
            return function(data, last) {
                var $div = oldFormatChatMessage(data, last);
                return that.applyAvatar($div.find(".username"), data.username), $div
            }
        }(window.formatChatMessage), $(".username").each(function() {
            that.applyAvatar($(this))
        }), window.socket.on("addUser", function(data) {
            data.profile && data.profile.image && data.name && $('.username:contains("' + data.name + ':")').each(function() {
                that.applyAvatar($(this), data.name, data.profile.image)
            })
        }))
    })
}, function(module, exports) {
    window.cytubeEnhanced.addModule("chatCommandsHelp", function(app, settings) {
        "use strict";
        var that = this,
            defaultSettings = {
                commands: {
                    "/me": app.t("chatCommands[.]%username% action (e.g: <i>/me is dancing</i>)"),
                    "/sp": app.t("chatCommands[.]spoiler"),
                    "/afk": app.t('chatCommands[.]sets the "AFK" status')
                }
            };
        settings = $.extend({}, defaultSettings, settings), 0 === $("#chat-controls").length && $('<div id="chat-controls" class="btn-group">').appendTo("#chatwrap"), this.commands = {}, this.commands[app.t("Standard commands")] = settings.commands, app.isModulePermitted("additionalChatCommands") && app.getModule("additionalChatCommands").done(function(commandsModule) {
            var additionalCommands = {};
            for (var command in commandsModule.commandsList) commandsModule.commandsList.hasOwnProperty(command) && commandsModule.isCommandPermitted(command) && (commandsModule.commandsList[command].isAvailable ? commandsModule.commandsList[command].isAvailable() : !0) && (additionalCommands[command] = commandsModule.commandsList[command].description || "");
            that.commands[app.t("Extra commands")] = additionalCommands
        }), this.handleChatHelpBtn = function(commands) {
            var $header = $('<h3 class="modal-title">').text(app.t("The list of chat commands")),
                $bodyWrapper = $("<div>");
            for (var commandsPart in commands)
                if (commands.hasOwnProperty(commandsPart)) {
                    $("<h3>").html(commandsPart).appendTo($bodyWrapper);
                    var $ul = $("<ul>");
                    for (var command in commands[commandsPart]) commands[commandsPart].hasOwnProperty(command) && $("<li>").html("<code>" + command + "</code> - " + commands[commandsPart][command] + ".").appendTo($ul);
                    $ul.appendTo($bodyWrapper)
                }
            app.UI.createModalWindow("chat-commands-help", $header, $bodyWrapper)
        }, this.$chatHelpBtn = $('<button id="chat-help-btn" class="btn btn-sm btn-default">').text(app.t("Commands list")).appendTo("#chat-controls").on("click", function() {
            that.handleChatHelpBtn(that.commands)
        })
    })
}, function(module, exports) {
    window.cytubeEnhanced.addModule("chatControls", function(app, settings) {
        "use strict";
        var that = this,
            defaultSettings = {
                afkButton: !0,
                clearChatButton: !0
            };
        settings = $.extend({}, defaultSettings, settings), this.handleAfkBtn = function() {
            window.socket.emit("chatMsg", {
                msg: "/afk"
            })
        }, this.$afkBtn = $('<span id="afk-btn" class="label label-default pull-right pointer">').text(app.t("AFK")).appendTo("#chatheader").on("click", function() {
            that.handleAfkBtn()
        }), this.handleAfk = function(data) {
            data.name === window.CLIENT.name && (data.afk ? (that.$afkBtn.removeClass("label-default"), that.$afkBtn.addClass("label-success")) : (that.$afkBtn.addClass("label-default"), that.$afkBtn.removeClass("label-success")))
        }, settings.afkButton ? window.socket.on("setAFK", function(data) {
            that.handleAfk(data)
        }) : this.$afkBtn.hide(), this.handleClearBtn = function() {
            window.confirm(app.t("Are you sure, that you want to clear the chat?")) && window.socket.emit("chatMsg", {
                msg: "/clear"
            })
        }, this.$clearChatBtn = $('<span id="clear-chat-btn" class="label label-default pull-right pointer">').text(app.t("Clear")).insertAfter(this.$afkBtn).on("click", function() {
            that.handleClearBtn()
        }), window.hasPermission("chatclear") || this.$clearChatBtn.hide(), this.handleChatClear = function() {
            window.hasPermission("chatclear") && settings.clearChatButton ? that.$clearChatBtn.show() : that.$clearChatBtn.hide()
        }, window.socket.on("setUserRank", function() {
            that.handleChatClear()
        })
    })
}, function(module, exports) {
    window.cytubeEnhanced.addModule("chatHistory", function(app, settings) {
        "use strict";
        var that = this,
            defaultSettings = {
                itemsInHistory: 50
            };
        settings = $.extend({}, defaultSettings, settings), app.storage.setDefault("pmHistory", []), window.socket.on("chatMsg", function(data) {
            if (window.CLIENT.name && -1 != data.msg.toLowerCase().indexOf(window.CLIENT.name.toLowerCase())) {
                var pmHistory = app.storage.get("pmHistory");
                $.isArray(pmHistory) || (pmHistory = []), pmHistory.length >= settings.itemsInHistory && (pmHistory = pmHistory.slice(0, settings.itemsInHistory - 1)), pmHistory.unshift({
                    username: data.username,
                    msg: data.msg,
                    time: data.time
                }), app.storage.set("pmHistory", pmHistory)
            }
        }), this.formatHistoryMessage = function(data) {
            var $messageWrapper = $('<div class="pm-history-message">'),
                time = new Date(data.time),
                day = time.getDate();
            day = day < 10 ? "0" + day : day;
            var month = time.getMonth() + 1;
            month = month < 10 ? "0" + month : month;
            var year = time.getFullYear(),
                hours = time.getHours();
            hours = hours < 10 ? "0" + hours : hours;
            var minutes = time.getMinutes();
            minutes = minutes < 10 ? "0" + minutes : minutes;
            var seconds = time.getSeconds();
            seconds = seconds < 10 ? "0" + seconds : seconds;
            var timeString = day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds;
            return "[server]" !== data.username && ($messageWrapper.append($('<div class="pm-history-message-time">[' + timeString + "]</div>")), $messageWrapper.append($('<div class="pm-history-message-username">' + data.username + "</div>")), $messageWrapper.append($('<div class="pm-history-message-content">' + data.msg + "</div>"))), $messageWrapper
        }, this.showChatHistory = function() {
            var pmHistory = app.storage.get("pmHistory");
            $.isArray(pmHistory) || (pmHistory = []);
            var $header = $('<div class="modal-header__inner">');
            $header.append($('<h3 class="modal-title">').text(app.t("pmHistory[.]Chat history"))), $header.append($('<div class="modat-header__description">').text(app.t("pmHistory[.]Your chat messages history.")));
            for (var $wrapper = $('<div class="pm-history-content">'), position = 0, historyLength = pmHistory.length; historyLength > position; position++) $wrapper.append(that.formatHistoryMessage(pmHistory[position]));
            var $resetChatHistoryBtn = $('<button type="button" id="pm-history-reset-btn" class="btn btn-danger" data-dismiss="modal">' + app.t("pmHistory[.]Reset history") + "</button>").on("click", function() {
                    window.confirm(app.t("pmHistory[.]Are you sure, that you want to clear messages history?")) && that.resetChatHistory()
                }),
                $exitChatHistoryBtn = $('<button type="button" id="pm-history-exit-btn" class="btn btn-default" data-dismiss="modal">' + app.t("pmHistory[.]Exit") + "</button>"),
                $footer = $('<div class="pm-history-footer">');
            return $footer.append($resetChatHistoryBtn), $footer.append($exitChatHistoryBtn), app.UI.createModalWindow("chat-history", $header, $wrapper, $footer)
        }, this.$showChatHistoryBtn = $('<span id="pm-history-btn" class="label label-default pull-right pointer">').text(app.t("pmHistory[.]History")).appendTo("#chatheader").on("click", function() {
            that.showChatHistory()
        }), this.resetChatHistory = function() {
            app.storage.set("pmHistory", app.storage.getDefault("pmHistory"))
        }
    })
}, function(module, exports) {
    window.cytubeEnhanced.addModule("common", function(app, settings) {
        "use strict";
        var that = this,
            defaultSettings = {
                insertUsername1OnClick: !0
            };
        settings = $.extend({}, defaultSettings, settings), this.$chatline = $("#chatline"), this.$userlist = $("#userlist"), window.chatTabComplete = function() {
            var i, words = that.$chatline.val().split(" "),
                current = words[words.length - 1].toLowerCase();
            if (current.match(/^[\wа-яА-ЯёЁ-]{1,20}$/)) {
                var __slice = Array.prototype.slice,
                    usersWithCap = __slice.call(that.$userlist.find(".userlist_item")).map(function(elem) {
                        return elem.children[1].innerHTML
                    }),
                    users = __slice.call(usersWithCap).map(function(user) {
                        return user.toLowerCase()
                    }).filter(function(name) {
                        return 0 === name.indexOf(current)
                    });
                if (0 !== users.length) {
                    var min = Math.min.apply(Math, users.map(function(name) {
                        return name.length
                    }));
                    users = users.map(function(name) {
                        return name.substring(0, min)
                    });
                    for (var changed = !0, iter = 21; changed;) {
                        changed = !1;
                        var first = users[0];
                        for (i = 1; i < users.length; i++)
                            if (users[i] !== first) {
                                changed = !0;
                                break
                            }
                        if (changed && (users = users.map(function(name) {
                                return name.substring(0, name.length - 1)
                            })), --iter < 0) break
                    }
                    for (current = users[0].substring(0, min), i = 0; i < usersWithCap.length; i++)
                        if (usersWithCap[i].toLowerCase() === current) {
                            current = usersWithCap[i];
                            break
                        }
                    1 === users.length && (1 === words.length && (current += ":"), current += " "), words[words.length - 1] = current, that.$chatline.val(words.join(" "))
                }
            }
        }, settings.insertUsernameOnClick && $("#messagebuffer").on("click", ".username", function() {
            app.Helpers.addMessageToChatInput($(this).text(), "begin")
        }).on("click", ".chat-avatar", function() {
            app.Helpers.addMessageToChatInput($(this).parent().find(".username").text(), "begin")
        }), $("#wrap").children(".navbar-fixed-top").removeClass("navbar-fixed-top"), $("#footer").children(".container").append('<p class="text-muted credit">CyTube Enhanced (<a href="https://github.com/kaba99/cytube-enhanced" target="_blank">GitHub</a>)</p>'), setTimeout(function() {
            window.handleWindowResize()
        }, 3e3), setTimeout(function() {
            window.handleWindowResize()
        }, 1e4), window.addUserDropdown = function(oldAddUserDropdown) {
            return function(entry) {
                var functionResponse = oldAddUserDropdown(entry);
                return entry.find(".user-dropdown>strong").click(function() {
                    that.$chatline.val($(this).text() + ": " + that.$chatline.val())
                }), functionResponse
            }
        }(window.addUserDropdown), $(".user-dropdown>strong").click(function() {
            that.$chatline.val($(this).text() + ": " + that.$chatline.val()).focus()
        }), $("#queue").sortable("option", "axis", "y")
    })
}, function(module, exports) {
    window.cytubeEnhanced.addModule("customCss", function(app, settings) {
        "use strict";
        var that = this,
            defaultSettings = {
                aceUrl: "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.3/ace.js"
            };
        settings = $.extend({}, defaultSettings, settings);
        var tab = app.Settings.getTab("custom-css", "CSS", 200),
            namespace = "user-code",
            userSettingsFromV1 = app.parseJSON(window.getOrDefault(window.CHANNEL.name + "_config-layout", void 0), {});
        app.Settings.storage.setDefault(namespace + ".css", _.isPlainObject(userSettingsFromV1) && _.isString(userSettingsFromV1["user-css"]) ? userSettingsFromV1["user-css"] : "");
        var aceEditor, $editor = $('<textarea class="' + app.prefix + 'custom-editor-textarea"></textarea>').val(app.Settings.storage.get(namespace + ".css")).appendTo(tab.$content),
            $aceEditor = $('<div class="' + app.prefix + 'custom-editor-ace" id="' + app.prefix + 'css-editor"></div>').text(app.Settings.storage.get(namespace + ".css"));
        tab.onShow(function() {
            "undefined" == typeof aceEditor && ("undefined" == typeof window.ace ? (app.Settings.aceIsLoading || app.Settings.aceLoadingFailed || (app.Settings.aceIsLoading = !0, $.ajax({
                url: settings.aceUrl,
                dataType: "script",
                timeout: 2e4
            }).done(function() {
                that.initializeAceEditor()
            }).always(function() {
                app.Settings.aceIsLoading = !1, app.Settings.aceLoadingFailed = !0, tab.$content.toggleLoader("off")
            })), app.Settings.aceIsLoading && !app.Settings.aceLoadingFailed && tab.$content.toggleLoader("on")) : that.initializeAceEditor())
        }), this.applyUserCss = function(css) {
            $("#" + app.prefix + "user-css").remove(), $("head").append('<style id="' + app.prefix + 'user-css" type="text/css">' + css + "</style>")
        }, this.initializeAceEditor = function() {
            $aceEditor.text($editor.val()), $editor.replaceWith($aceEditor), aceEditor = window.ace.edit(app.prefix + "css-editor"), aceEditor.setTheme("ace/theme/tomorrow_night"), aceEditor.getSession().setMode("ace/mode/css"), aceEditor.getSession().setTabSize(4), aceEditor.getSession().setUseSoftTabs(!0), aceEditor.getSession().setUseWrapMode(!0), aceEditor.getSession().setWrapLimitRange(), aceEditor.setOptions({
                minLines: 30,
                maxLines: 30,
                autoScrollEditorIntoView: !0,
                highlightActiveLine: !0
            })
        }, app.Settings.onSave(function(settings) {
            aceEditor ? settings.set(namespace + ".css", aceEditor.getValue()) : settings.set(namespace + ".css", $editor.val()), that.applyUserCss(settings.get(namespace + ".css"))
        }), this.applyUserCss(app.Settings.storage.get(namespace + ".css"))
    })
}, function(module, exports) {
    window.cytubeEnhanced.addModule("customJs", function(app, settings) {
        "use strict";
        var that = this,
            defaultSettings = {
                aceUrl: "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.3/ace.js"
            };
        settings = $.extend({}, defaultSettings, settings);
        var tab = app.Settings.getTab("custom-js", "JS", 300),
            namespace = "user-code";
        app.Settings.storage.setDefault(namespace + ".js", "");
        var aceEditor, $editor = $('<textarea class="' + app.prefix + 'custom-editor-textarea"></textarea>').val(app.Settings.storage.get(namespace + ".js")).appendTo(tab.$content),
            $aceEditor = $('<div class="' + app.prefix + 'custom-editor-ace" id="' + app.prefix + 'js-editor"></div>').text(app.Settings.storage.get(namespace + ".js"));
        tab.onShow(function() {
            "undefined" == typeof aceEditor && ("undefined" == typeof window.ace ? (app.Settings.aceIsLoading || app.Settings.aceLoadingFailed || (app.Settings.aceIsLoading = !0, $.ajax({
                url: settings.aceUrl,
                dataType: "script",
                timeout: 2e4
            }).done(function() {
                that.initializeAceEditor()
            }).always(function() {
                app.Settings.aceIsLoading = !1, app.Settings.aceLoadingFailed = !0, tab.$content.toggleLoader("off")
            })), app.Settings.aceIsLoading && !app.Settings.aceLoadingFailed && tab.$content.toggleLoader("on")) : that.initializeAceEditor())
        }), this.applyUserJs = function(js) {
            $("#" + app.prefix + "user-js").remove(), $("body").append('<script id="' + app.prefix + 'user-js" type="text/javascript">' + js + "</script>")
        }, this.initializeAceEditor = function() {
            $aceEditor.text($editor.val()), $editor.replaceWith($aceEditor), aceEditor = window.ace.edit(app.prefix + "js-editor"), aceEditor.setTheme("ace/theme/tomorrow_night"), aceEditor.getSession().setMode("ace/mode/javascript"), aceEditor.getSession().setTabSize(4), aceEditor.getSession().setUseSoftTabs(!0), aceEditor.getSession().setUseWrapMode(!0), aceEditor.getSession().setWrapLimitRange(), aceEditor.setOptions({
                minLines: 30,
                maxLines: 30,
                autoScrollEditorIntoView: !0,
                highlightActiveLine: !0
            })
        }, app.Settings.onSave(function(settings) {
            aceEditor ? settings.set(namespace + ".js", aceEditor.getValue()) : settings.set(namespace + ".js", $editor.val()), that.applyUserJs(settings.get(namespace + ".js"))
        }), this.applyUserJs(app.Settings.storage.get(namespace + ".js"))
    })
}, function(module, exports) {
    window.cytubeEnhanced.addModule("extras", function(app, settings) {
        "use strict";
        var that = this,
            defaultSettings = {
                enabledModules: ["anime-quotes", "pirate-quotes", "emotes-panel-old", "snow"]
            };
        settings = $.extend({}, defaultSettings, settings);
        var tab = app.Settings.getTab("extras", app.t("extras[.]Extras"), 400),
            $tabContent = $('<div class="row">').appendTo(tab.$content).wrap('<div class="' + app.prefix + 'extras">'),
            userSettings = app.Settings.storage,
            $modulesInfoMessage = $('<div class="' + app.prefix + 'extras__info-message">').text("Сторонние модули отсутствуют.").prependTo(tab.$content),
            namespace = "extras";
        userSettings.setDefault(namespace + ".enabled", settings.enabledModules), this.enabledModules = userSettings.get(namespace + ".enabled") || [], this.extraModules = {}, this.add = function(config) {
            $modulesInfoMessage.text(app.t("extras[.]Extras for additional functionality")), that.extraModules[config.name] = config, that.extraModules[config.name].$el = that.addMarkup(config).appendTo($tabContent), that.sort(), -1 != that.enabledModules.indexOf(config.name) && $.getScript(that.extraModules[config.name].url + "?ac=" + Date.now())
        }, this.enable = function(name) {
            return that.enabledModules.push(name)
        }, this.disable = function(name) {
            var position = that.enabledModules.indexOf(name);
            return -1 !== position ? that.enabledModules.splice(position, 1) : !1
        }, this.addMarkup = function(config) {
            var $moduleInfo = $('<div class="' + app.prefix + 'extras__item">');
            $moduleInfo.data("name", config.name), config.authorUrl = _.trim(config.authorUrl);
            var $toggleModuleButton = (config.authorUrl ? $('<a class="' + app.prefix + "extras__item__title " + app.prefix + 'extras__item__title_link" target="_blank">').attr("href", config.authorUrl).text(config.title).appendTo($moduleInfo) : $('<div class="' + app.prefix + "extras__item__title " + app.prefix + 'extras__item__title_text">').text(config.title).appendTo($moduleInfo), $('<div class="' + app.prefix + 'extras__item__description">').text(config.description || "Нет описания").appendTo($moduleInfo), $('<div class="' + app.prefix + 'extras__item__button btn btn-xs">').appendTo($moduleInfo).data("enabled", -1 != that.enabledModules.indexOf(config.name)).on("click", function() {
                $(this).data("enabled") ? ($(this).data("enabled", !1), that.disable(config.name), $(this).removeClass("btn-danger").addClass("btn-success").text("Включить")) : ($(this).data("enabled", !0), that.enable(config.name), $(this).removeClass("btn-success").addClass("btn-danger").text("Выключить"))
            }));
            return -1 != that.enabledModules.indexOf(config.name) ? $toggleModuleButton.addClass("btn-danger").text("Выключить") : $toggleModuleButton.addClass("btn-success").text("Включить"), $moduleInfo = $('<div class="col-md-6">').append($moduleInfo)
        }, this.sort = function() {
            var extraModulesArray = [];
            for (var module in that.extraModules) extraModulesArray.push(that.extraModules[module]);
            extraModulesArray = extraModulesArray.sort(function(a, b) {
                var aSort = +(-1 != that.enabledModules.indexOf(a.name)),
                    bSort = +(-1 != that.enabledModules.indexOf(b.name));
                return bSort > aSort ? 1 : aSort > bSort ? -1 : a.title.toLowerCase() > b.title.toLowerCase() ? 1 : a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 0
            });
            for (var extraModuleIndex = 0, extraModulesLength = extraModulesArray.length; extraModulesLength > extraModuleIndex; extraModuleIndex++) extraModulesArray[extraModuleIndex].$el.detach().appendTo($tabContent)
        }, app.Settings.onSave(function(settings) {
            settings.set(namespace + ".enabled", that.enabledModules), settings.isDirty(namespace + ".enabled") && app.Settings.requestPageReload()
        })
    })
}, function(module, exports) {
    window.cytubeEnhanced.addModule("favouritePictures", function(app) {
        "use strict";
        var that = this,
            favouritePicturesFromV1 = app.parseJSON(window.localStorage.getItem("favouritePictures"), []);
        app.storage.setDefault("favouritePictures", _.isArray(favouritePicturesFromV1) ? favouritePicturesFromV1 : []), 0 === $("#chat-panel").length && $('<div id="chat-panel" class="row">').insertAfter("#main"), 0 === $("#chat-controls").length && $('<div id="chat-controls" class="btn-group">').appendTo("#chatwrap"), this.$toggleFavouritePicturesPanelBtn = $('<button id="favourite-pictures-btn" class="btn btn-sm btn-default" title="' + app.t("favPics[.]Show your favorite images") + '">').html('<i class="glyphicon glyphicon-th"></i>'), 0 !== $("#smiles-btn").length ? this.$toggleFavouritePicturesPanelBtn.insertAfter("#smiles-btn") : this.$toggleFavouritePicturesPanelBtn.prependTo("#chat-controls"), this.$favouritePicturesPanel = $('<div id="favourite-pictures-panel">').appendTo("#chat-panel").hide(),
            this.$favouritePicturesPanelRow = $('<div class="favourite-pictures-panel-row">').appendTo(this.$favouritePicturesPanel), this.$favouritePicturesTrash = $('<div id="pictures-trash" title="' + app.t("favPics[.]Drop the picture here to remove it") + '">').append('<i class="pictures-trash-icon glyphicon glyphicon-trash">').appendTo(this.$favouritePicturesPanelRow), this.$favouritePicturesBodyPanel = $('<div id="pictures-body-panel">').appendTo(this.$favouritePicturesPanelRow), this.$favouritePicturesControlPanel = $('<div id="pictures-control-panel" class="row">').appendTo(this.$favouritePicturesPanel), this.$favouritePicturesControlPanelForm = $('<div class="col-md-12">').html('<div class="input-group"><span class="input-group-btn"><button id="help-pictures-btn" class="btn btn-sm btn-default" style="border-radius:0;" type="button">?</button></span><span class="input-group-btn"><button id="export-pictures" class="btn btn-sm btn-default" style="border-radius:0;" type="button">' + app.t("favPics[.]Export pictures") + '</button></span><span class="input-group-btn"><label for="import-pictures" class="btn btn-sm btn-default" style="border-radius:0;">' + app.t("favPics[.]Import pictures") + '</label><input type="file" style="display:none;" id="import-pictures" name="pictures-import"></span><input type="text" id="picture-address" class="form-control input-sm" placeholder="' + app.t("favPics[.]Picture url") + '"><span class="input-group-btn"><button id="add-picture-btn" class="btn btn-sm btn-default" style="border-radius:0;" type="button">' + app.t("favPics[.]Add") + "</button></span></div>").appendTo(this.$favouritePicturesControlPanel), this.makeSmilesAndPicturesTogether = function() {
                that.smilesAndPicturesTogether = !0, that.$toggleFavouritePicturesPanelBtn.hide(), that.$favouritePicturesPanel.hide()
            }, this.entityMap = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }, this.replaceUnsafeSymbol = function(symbol) {
                return that.entityMap[symbol]
            }, this.renderFavouritePictures = function() {
                var favouritePictures = app.storage.get("favouritePictures") || [];
                this.$favouritePicturesBodyPanel.empty();
                for (var n = 0, favouritePicturesLen = favouritePictures.length; favouritePicturesLen > n; n++) {
                    var escapedAddress = favouritePictures[n].replace(/[&<>"']/g, this.replaceUnsafeSymbol);
                    $('<img class="favourite-picture-on-panel">').attr({
                        src: escapedAddress
                    }).appendTo(this.$favouritePicturesBodyPanel)
                }
            }, this.insertFavouritePicture = function(address) {
                app.Helpers.addMessageToChatInput(" " + address + " ", "end")
            }, $(document.body).on("click", ".favourite-picture-on-panel", function() {
                that.insertFavouritePicture($(this).attr("src"))
            }), this.handleFavouritePicturesPanel = function($toggleFavouritePicturesPanelBtn) {
                var smilesAndPicturesTogether = this.smilesAndPicturesTogether || !1;
                0 === $("#smiles-panel").length || smilesAndPicturesTogether || $("#smiles-panel").hide(), this.$favouritePicturesPanel.toggle(), smilesAndPicturesTogether || ($toggleFavouritePicturesPanelBtn.hasClass("btn-default") ? (0 !== $("#smiles-btn").length && $("#smiles-btn").hasClass("btn-success") && ($("#smiles-btn").removeClass("btn-success"), $("#smiles-btn").addClass("btn-default")), $toggleFavouritePicturesPanelBtn.removeClass("btn-default"), $toggleFavouritePicturesPanelBtn.addClass("btn-success")) : ($toggleFavouritePicturesPanelBtn.removeClass("btn-success"), $toggleFavouritePicturesPanelBtn.addClass("btn-default")))
            }, this.$toggleFavouritePicturesPanelBtn.on("click", function() {
                that.handleFavouritePicturesPanel($(this))
            }), this.addFavouritePicture = function(imageUrl) {
                if (imageUrl = _.trim(imageUrl), "" !== imageUrl) {
                    var favouritePictures = app.storage.get("favouritePictures") || [];
                    if (-1 !== favouritePictures.indexOf(imageUrl)) return window.makeAlert(app.t("favPics[.]The image already exists")).prependTo(this.$favouritePicturesBodyPanel), $("#picture-address").val(""), !1;
                    "" !== imageUrl && favouritePictures.push(imageUrl), $("#picture-address").val(""), app.storage.set("favouritePictures", favouritePictures), this.renderFavouritePictures()
                }
            }, $("#add-picture-btn").on("click", function(e) {
                e.preventDefault(), that.addFavouritePicture($("#picture-address").val().trim())
            }), $("#picture-address").on("keypress", function(e) {
                13 == e.which && that.addFavouritePicture($("#picture-address").val().trim())
            }), this.showHelp = function() {
                var $header = $('<div class="modal-header__inner">');
                $header.append($('<h3 class="modal-title">').text(app.t("Help")));
                var $wrapper = $('<div class="help-pictures-content">');
                $wrapper.append($("<p>" + app.t("favPics[.]<p>Favourite pictures feature if for saving favourite pictures like browser bookmarks.</p><p>Features:<ul><li><strong>Only links to images can be saved</strong>, so if image from link was removed, it also removes from your panel.</li><li>Images links are storing in browser. There are export and import buttons to share them between browsers.</li><li>Images are the same for site channels, but <strong>they are different for http:// and https://</strong></li></ul></p>") + "</p>"));
                var $exitPicturesHelpBtn = $('<button type="button" id="help-pictures-exit-btn" class="btn btn-info" data-dismiss="modal">' + app.t("favPics[.]Exit") + "</button>"),
                    $footer = $('<div class="help-pictures-footer">');
                return $footer.append($exitPicturesHelpBtn), app.UI.createModalWindow("chat-history", $header, $wrapper, $footer)
            }, $("#help-pictures-btn").on("click", function(e) {
                e.preventDefault(), that.showHelp()
            }), this.exportPictures = function() {
                var $downloadLink = $("<a>").attr({
                    href: "data:text/plain;charset=utf-8," + encodeURIComponent(app.toJSON(app.storage.get("favouritePictures") || [])),
                    download: "cytube_enhanced_favourite_images.txt"
                }).hide().appendTo($(document.body));
                $downloadLink[0].click(), $downloadLink.remove()
            }, $("#export-pictures").on("click", function() {
                that.exportPictures()
            }), this.importPictures = function(importFile) {
                var favouritePicturesAddressesReader = new FileReader;
                favouritePicturesAddressesReader.addEventListener("load", function(e) {
                    var pictures = app.parseJSON(e.target.result);
                    _.isArray(pictures) ? (app.storage.set("favouritePictures", app.parseJSON(e.target.result)), that.renderFavouritePictures()) : app.UI.createAlertWindow(app.t("favPics[.]Can't detect any pictures in this file."))
                }), favouritePicturesAddressesReader.readAsText(importFile)
            }, $("#import-pictures").on("change", function() {
                var file = $(this)[0].files[0];
                app.UI.createConfirmWindow(app.t("favPics[.]Your old pictures will be removed and replaced with the images from uploaded file (file must correspond to format of the file from export button of this panel).<br>Are you sure you want to continue?"), function(isConfirmed) {
                    isConfirmed && file && that.importPictures(file)
                })
            }), this.renderFavouritePictures(), this.$favouritePicturesBodyPanel.sortable({
                containment: this.$favouritePicturesPanelRow,
                revert: !0,
                update: function(event, ui) {
                    var imagePosition, imageUrl = $(ui.item).attr("src"),
                        nextImageUrl = $(ui.item).next().attr("src"),
                        favouritePictures = app.storage.get("favouritePictures");
                    if (-1 !== (imagePosition = favouritePictures.indexOf(imageUrl))) {
                        if (favouritePictures.splice(imagePosition, 1), "undefined" != typeof nextImageUrl) {
                            var nextImagePosition; - 1 !== (nextImagePosition = favouritePictures.indexOf(nextImageUrl)) && favouritePictures.splice(nextImagePosition, 0, imageUrl)
                        } else favouritePictures.push(imageUrl);
                        app.storage.set("favouritePictures", favouritePictures)
                    }
                }
            }), this.$favouritePicturesTrash.droppable({
                accept: ".favourite-picture-on-panel",
                hoverClass: "favourite-picture-drop-hover",
                drop: function(event, ui) {
                    var imagePosition, imageUrl = ui.draggable.attr("src"),
                        favouritePictures = app.storage.get("favouritePictures"); - 1 !== (imagePosition = favouritePictures.indexOf(imageUrl)) && (favouritePictures.splice(imagePosition, 1), app.storage.set("favouritePictures", favouritePictures)), ui.draggable.remove()
                }
            })
    })
}, function(module, exports, __webpack_require__) {
    __webpack_require__(24)($), __webpack_require__(25), window.cytubeEnhanced.addModule("imagePreview", function(app, settings) {
        "use strict";
        var that = this,
            defaultSettings = {
                selectorsToPreview: ".chat-picture, .motd-tab-content img",
                zoom: .15
            };
        settings = $.extend({}, defaultSettings, settings), this.showPicturePreview = function(pictureToPreview) {
            if ($(pictureToPreview).is(settings.selectorsToPreview)) {
                var $picture = $('<img src="' + $(pictureToPreview).attr("src") + '">');
                $picture.ready(function() {
                    $('<div id="modal-picture-overlay">').appendTo($(document.body));
                    var $modalPicture = $('<div id="modal-picture">').appendTo($(document.body)).draggable(),
                        pictureWidth = $picture.prop("width"),
                        pictureHeight = $picture.prop("height"),
                        $modalPictureOptions = $('<div id="modal-picture-options">');
                    $modalPicture.append($('<div id="modal-picture-options-wrapper">').append($modalPictureOptions)), $('<a href="' + $picture.prop("src") + '" target="_blank" class="btn btn-sm btn-default"><i class="glyphicon glyphicon-eye-open"></i></button>').appendTo($modalPictureOptions), $('<a href="https://www.google.com/searchbyimage?image_url=' + $picture.prop("src") + '" target="_blank" class="btn btn-sm btn-default"><i class="glyphicon glyphicon-search"></i></button>').appendTo($modalPictureOptions);
                    var scaleFactor = 1;
                    pictureWidth > document.documentElement.clientWidth && pictureHeight > document.documentElement.clientHeight ? scaleFactor = pictureHeight - document.documentElement.clientHeight > pictureWidth - document.documentElement.clientWidth ? pictureHeight / (.8 * document.documentElement.clientHeight) : pictureWidth / (.8 * document.documentElement.clientWidth) : pictureHeight > document.documentElement.clientHeight ? scaleFactor = pictureHeight / (.8 * document.documentElement.clientHeight) : pictureWidth > document.documentElement.clientWidth && (scaleFactor = pictureWidth / (.8 * document.documentElement.clientWidth)), pictureHeight /= scaleFactor, pictureWidth /= scaleFactor, $modalPicture.css({
                        width: pictureWidth,
                        height: pictureHeight,
                        marginLeft: -(pictureWidth / 2),
                        marginTop: -(pictureHeight / 2)
                    }), $picture.appendTo($modalPicture)
                })
            }
        }, $(document.body).on("click", function(event) {
            that.showPicturePreview(event.target)
        }), this.handleModalPictureMouseWheel = function(e) {
            var $modalPicture = $("#modal-picture"),
                pictureWidth = parseInt($modalPicture.css("width"), 10),
                pictureHeight = parseInt($modalPicture.css("height"), 10),
                pictureMarginLeft = parseInt($modalPicture.css("marginLeft"), 10),
                pictureMarginTop = parseInt($modalPicture.css("marginTop"), 10);
            e.originalEvent.deltaY < 0 ? $modalPicture.css({
                width: pictureWidth * (1 + settings.zoom),
                height: pictureHeight * (1 + settings.zoom),
                marginLeft: pictureMarginLeft + -pictureWidth * settings.zoom / 2,
                marginTop: pictureMarginTop + -pictureHeight * settings.zoom / 2
            }) : $modalPicture.css({
                width: pictureWidth * (1 - settings.zoom),
                height: pictureHeight * (1 - settings.zoom),
                marginLeft: pictureMarginLeft + pictureWidth * settings.zoom / 2,
                marginTop: pictureMarginTop + pictureHeight * settings.zoom / 2
            })
        }, $(document.body).on("mousewheel", "#modal-picture", function(e) {
            return that.handleModalPictureMouseWheel(e), !1
        }), this.closePictureByClick = function() {
            $("#modal-picture-overlay").remove(), $("#modal-picture").remove()
        }, $(document.body).on("click", "#modal-picture-overlay, #modal-picture", function() {
            that.closePictureByClick()
        }), this.closePictureByEscape = function(e) {
            27 === e.which && 0 !== $("#modal-picture").length && ($("#modal-picture-overlay").remove(), $("#modal-picture").remove())
        }, $(document.body).on("keydown", function(e) {
            that.closePictureByEscape(e)
        })
    })
}, function(module, exports) {
    ! function(factory) {
        "function" == typeof define && define.amd ? define(["jquery"], factory) : "object" == typeof exports ? module.exports = factory : factory(jQuery)
    }(function($) {
        function handler(event) {
            var orgEvent = event || window.event,
                args = slice.call(arguments, 1),
                delta = 0,
                deltaX = 0,
                deltaY = 0,
                absDelta = 0,
                offsetX = 0,
                offsetY = 0;
            if (event = $.event.fix(orgEvent), event.type = "mousewheel", "detail" in orgEvent && (deltaY = -1 * orgEvent.detail), "wheelDelta" in orgEvent && (deltaY = orgEvent.wheelDelta), "wheelDeltaY" in orgEvent && (deltaY = orgEvent.wheelDeltaY), "wheelDeltaX" in orgEvent && (deltaX = -1 * orgEvent.wheelDeltaX), "axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS && (deltaX = -1 * deltaY, deltaY = 0), delta = 0 === deltaY ? deltaX : deltaY, "deltaY" in orgEvent && (deltaY = -1 * orgEvent.deltaY, delta = deltaY), "deltaX" in orgEvent && (deltaX = orgEvent.deltaX, 0 === deltaY && (delta = -1 * deltaX)), 0 !== deltaY || 0 !== deltaX) {
                if (1 === orgEvent.deltaMode) {
                    var lineHeight = $.data(this, "mousewheel-line-height");
                    delta *= lineHeight, deltaY *= lineHeight, deltaX *= lineHeight
                } else if (2 === orgEvent.deltaMode) {
                    var pageHeight = $.data(this, "mousewheel-page-height");
                    delta *= pageHeight, deltaY *= pageHeight, deltaX *= pageHeight
                }
                if (absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX)), (!lowestDelta || lowestDelta > absDelta) && (lowestDelta = absDelta, shouldAdjustOldDeltas(orgEvent, absDelta) && (lowestDelta /= 40)), shouldAdjustOldDeltas(orgEvent, absDelta) && (delta /= 40, deltaX /= 40, deltaY /= 40), delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta), deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta), deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta), special.settings.normalizeOffset && this.getBoundingClientRect) {
                    var boundingRect = this.getBoundingClientRect();
                    offsetX = event.clientX - boundingRect.left, offsetY = event.clientY - boundingRect.top
                }
                return event.deltaX = deltaX, event.deltaY = deltaY, event.deltaFactor = lowestDelta, event.offsetX = offsetX, event.offsetY = offsetY, event.deltaMode = 0, args.unshift(event, delta, deltaX, deltaY), nullLowestDeltaTimeout && clearTimeout(nullLowestDeltaTimeout), nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200), ($.event.dispatch || $.event.handle).apply(this, args)
            }
        }

        function nullLowestDelta() {
            lowestDelta = null
        }

        function shouldAdjustOldDeltas(orgEvent, absDelta) {
            return special.settings.adjustOldDeltas && "mousewheel" === orgEvent.type && absDelta % 120 === 0
        }
        var nullLowestDeltaTimeout, lowestDelta, toFix = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            toBind = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            slice = Array.prototype.slice;
        if ($.event.fixHooks)
            for (var i = toFix.length; i;) $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
        var special = $.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var i = toBind.length; i;) this.addEventListener(toBind[--i], handler, !1);
                else this.onmousewheel = handler;
                $.data(this, "mousewheel-line-height", special.getLineHeight(this)), $.data(this, "mousewheel-page-height", special.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var i = toBind.length; i;) this.removeEventListener(toBind[--i], handler, !1);
                else this.onmousewheel = null;
                $.removeData(this, "mousewheel-line-height"), $.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(elem) {
                var $elem = $(elem),
                    $parent = $elem["offsetParent" in $.fn ? "offsetParent" : "parent"]();
                return $parent.length || ($parent = $("body")), parseInt($parent.css("fontSize"), 10) || parseInt($elem.css("fontSize"), 10) || 16
            },
            getPageHeight: function(elem) {
                return $(elem).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        $.fn.extend({
            mousewheel: function(fn) {
                return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel")
            },
            unmousewheel: function(fn) {
                return this.unbind("mousewheel", fn)
            }
        })
    })
}, function(module, exports) {
    ! function($) {
        function simulateMouseEvent(event, simulatedType) {
            if (!(event.originalEvent.touches.length > 1)) {
                event.preventDefault();
                var touch = event.originalEvent.changedTouches[0],
                    simulatedEvent = document.createEvent("MouseEvents");
                simulatedEvent.initMouseEvent(simulatedType, !0, !0, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, !1, !1, !1, !1, 0, null), event.target.dispatchEvent(simulatedEvent)
            }
        }
        if ($.support.touch = "ontouchend" in document, $.support.touch) {
            var touchHandled, mouseProto = $.ui.mouse.prototype,
                _mouseInit = mouseProto._mouseInit,
                _mouseDestroy = mouseProto._mouseDestroy;
            mouseProto._touchStart = function(event) {
                var self = this;
                !touchHandled && self._mouseCapture(event.originalEvent.changedTouches[0]) && (touchHandled = !0, self._touchMoved = !1, simulateMouseEvent(event, "mouseover"), simulateMouseEvent(event, "mousemove"), simulateMouseEvent(event, "mousedown"))
            }, mouseProto._touchMove = function(event) {
                touchHandled && (this._touchMoved = !0, simulateMouseEvent(event, "mousemove"))
            }, mouseProto._touchEnd = function(event) {
                touchHandled && (simulateMouseEvent(event, "mouseup"), simulateMouseEvent(event, "mouseout"), this._touchMoved || simulateMouseEvent(event, "click"), touchHandled = !1)
            }, mouseProto._mouseInit = function() {
                var self = this;
                self.element.bind({
                    touchstart: $.proxy(self, "_touchStart"),
                    touchmove: $.proxy(self, "_touchMove"),
                    touchend: $.proxy(self, "_touchEnd")
                }), _mouseInit.call(self)
            }, mouseProto._mouseDestroy = function() {
                var self = this;
                self.element.unbind({
                    touchstart: $.proxy(self, "_touchStart"),
                    touchmove: $.proxy(self, "_touchMove"),
                    touchend: $.proxy(self, "_touchEnd")
                }), _mouseDestroy.call(self)
            }
        }
    }(jQuery)
}, function(module, exports) {
    window.cytubeEnhanced.addModule("languageSwitcher", function(app) {
        "use strict";
        var tab = app.Settings.getTab("general", app.t("general[.]General"), 100),
            availableLanguages = ["en"];
        for (var language in app.translations) availableLanguages.push(language);
        var options = [];
        for (var languageIndex in availableLanguages) options.push({
            value: availableLanguages[languageIndex],
            title: app.t(availableLanguages[languageIndex]),
            selected: availableLanguages[languageIndex] == app.storage.get("language")
        });
        tab.addControl("select", "horizontal", app.t("general[.]Interface language"), "language", options, null, 2e4), app.Settings.onSave(function(settings) {
            app.storage.set("language", $("#" + app.prefix + "language").val()), app.storage.isDirty("language") && app.Settings.requestPageReload()
        })
    })
}, function(module, exports) {
    window.cytubeEnhanced.addModule("navMenuTabs", function(app) {
        "use strict";
        var that = this;
        this.addTabInput = function($tabsArea, tabName, tabValue) {
            tabName = tabName || "", tabValue = tabValue || "";
            var $wrapper = $('<div class="row tab-option-wrapper">').appendTo($tabsArea),
                $tabNameWrapperOfWrapper = $('<div class="col-sm-4 col-md-3">').appendTo($wrapper),
                $tabNameWrapper = $('<div class="form-group">').appendTo($tabNameWrapperOfWrapper);
            $('<input name="title" type="text" class="form-control" placeholder="' + app.t("tabs[.]Title") + '">').val(tabName).appendTo($tabNameWrapper);
            var $tabValueWrapperOfWrapper = $('<div class="col-sm-8 col-md-9">').appendTo($wrapper),
                $tabValueWrapper = $('<div class="form-group">').appendTo($tabValueWrapperOfWrapper);
            $('<input name="content" type="text" class="form-control" placeholder="' + app.t("tabs[.]Content") + '">').val(tabValue).appendTo($tabValueWrapper)
        }, this.tabsConfigToHtml = function(channelDescription, tabsConfig) {
            var $virtualMainWrapper = $("<div>");
            if (void 0 !== channelDescription && "" !== channelDescription && $('<div id="motd-channel-description">').html(channelDescription).appendTo($virtualMainWrapper), 0 !== tabsConfig.length)
                for (var TAB_TITLE = 0, TAB_CONTENT = 1, LINK_TITLE = 0, LINK_ADDRESS = 1, $tabsWrapper = $('<div id="motd-tabs-wrapper">').appendTo($virtualMainWrapper), $tabs = $('<div id="motd-tabs">').appendTo($tabsWrapper), $tabsContent = $('<div id="motd-tabs-content">').appendTo($tabsWrapper), tabIndex = 0, tabsLength = tabsConfig.length; tabsLength > tabIndex; tabIndex++)
                    if (0 === tabsConfig[tabIndex][TAB_TITLE].indexOf("!dropdown!")) {
                        var $dropdownWrapper = $('<div class="btn-group">');
                        $('<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">').html(tabsConfig[tabIndex][TAB_TITLE].replace("!dropdown!", "") + ' <span class="caret"></span>').appendTo($dropdownWrapper);
                        for (var $dropdownMenu = $('<ul class="dropdown-menu">').appendTo($dropdownWrapper), linksConfig = tabsConfig[tabIndex][TAB_CONTENT], linkIndex = 0, linksLength = tabsConfig[tabIndex][TAB_CONTENT].length; linksLength > linkIndex; linkIndex++) {
                            var $link = $("<a>").attr({
                                href: linksConfig[linkIndex][LINK_ADDRESS],
                                target: "_blank"
                            }).text(linksConfig[linkIndex][LINK_TITLE]);
                            $("<li>").html($link).appendTo($dropdownMenu)
                        }
                        $dropdownWrapper.appendTo($tabs)
                    } else 0 === tabsConfig[tabIndex][TAB_TITLE].indexOf("!link!") ? $('<a href="' + tabsConfig[tabIndex][TAB_CONTENT] + '" target="_blank" class="btn btn-default btn-link">').html(tabsConfig[tabIndex][TAB_TITLE].replace("!link!", "")).appendTo($tabs) : ($('<button class="btn btn-default motd-tab-btn" data-tab-index="' + tabIndex + '">').html(tabsConfig[tabIndex][TAB_TITLE]).appendTo($tabs), $('<div class="motd-tab-content" data-tab-index="' + tabIndex + '">').hide().html(tabsConfig[tabIndex][TAB_CONTENT]).appendTo($tabsContent));
            return $virtualMainWrapper.html()
        }, this.tabsHtmlToCondig = function(htmlCode) {
            this.$tabsArea.empty();
            var $tabsTree = $("<div>").html(htmlCode),
                $tabsTreeNavBtns = $tabsTree.find("#motd-tabs").children(),
                $tabsTreeTabsContent = $tabsTree.find("#motd-tabs-content");
            $("#channel-description-input").val($tabsTree.find("#motd-channel-description").html()), $tabsTreeNavBtns.each(function() {
                if ($(this).hasClass("btn-group")) {
                    var parsedDropdownItems = "",
                        $dropdownItems = $(this).children("ul").children();
                    $dropdownItems.each(function() {
                        var link = $(this).children("a");
                        parsedDropdownItems += "[n]" + link.text() + "[/n][a]" + link.attr("href") + "[/a], "
                    }), parsedDropdownItems = parsedDropdownItems.slice(0, -2), that.addTabInput(that.$tabsArea, "!dropdown!" + $(this).children("button").html().replace(' <span class="caret"></span>', ""), parsedDropdownItems)
                } else $(this).hasClass("btn-link") ? that.addTabInput(that.$tabsArea, "!link!" + $(this).html(), $(this).attr("href")) : that.addTabInput(that.$tabsArea, $(this).html(), $tabsTreeTabsContent.find('[data-tab-index="' + $(this).data("tabIndex") + '"]').html())
            })
        }, this.motdCutMap = {
            "<iframe $1>$2</iframe>": /\[iframe(.*?)\](.*?)[\/iframe]]/g
        }, this.fixMotdCut = function() {
            $("#motd-tabs-content").find(".motd-tab-content").each(function() {
                for (var tag in that.motdCutMap) that.motdCutMap.hasOwnProperty(tag) && $(this).html($(this).html().replace(that.motdCutMap[tag], tag))
            })
        }, this.$tabsSettings = $('<div id="tabs-settings">').html("<hr><h3>" + app.t("tabs[.]Tabs settings") + "</h3><ul><li>" + app.t("tabs[.]By default tab behaves like simple tab.") + "</li><li>" + app.t('tabs[.]Use !dropdown! prefix to create dropdown list. Example: !dropdown!My dropdown. Value must look like "[n]Link title 1[/n][a]URL 1[/a], [n]Link title 2[/n][a]URL 2[/a], [n]Link title 3[/n][a]URL 3[/a]"') + "</li><li>" + app.t("tabs[.]Use !link! prefix to create link. Example: !link!My link. Value must contain URL.") + "</li></ul>").insertBefore("#cs-motdtext").hide(), this.$tabSettingsBtn = $('<button type="button" class="btn btn-primary motd-bottom-btn" id="show-tabs-settings">').text(app.t("tabs[.]Show tabs settings (cytube enhanced)")).appendTo("#cs-motdeditor").on("click", function() {
            $(this).hasClass("btn-primary") ? (that.$tabsSettings.show(), $(this).removeClass("btn-primary"), $(this).addClass("btn-success")) : (that.$tabsSettings.hide(), $(this).removeClass("btn-success"), $(this).addClass("btn-primary"))
        }), $("#cs-motdtext").before("<hr>"), this.$channelDescriptionInputWrapper = $('<div class="form-group">').appendTo(this.$tabsSettings), this.$channelDescriptionLabel = $('<label for="channel-description-input">' + app.t("tabs[.]Channel description") + "</label>").appendTo(this.$channelDescriptionInputWrapper), this.$channelDescriptionInput = $('<input id="channel-description-input" placeholder="' + app.t("tabs[.]Channel description") + '" class="form-control">').appendTo(this.$channelDescriptionInputWrapper), this.$tabsArea = $('<div id="tabs-settings-area">').appendTo(this.$tabsSettings), $("<p>Вкладки</p>").insertBefore(this.$tabsArea), this.$addTabToTabsSettingsBtn = $('<button type="button" class="btn btn-sm btn-primary" id="tabs-settings-add">').text(app.t("tabs[.]Add tab")).appendTo(this.$tabsSettings).on("click", function() {
            that.addTabInput(that.$tabsArea)
        }), this.$removeLastTabFromTabsSettingsBtn = $('<button type="button" class="btn btn-sm btn-primary" id="tabs-settings-remove">').text(app.t("tabs[.]Remove the last tab")).appendTo(this.$tabsSettings).on("click", function() {
            that.$tabsArea.children(".tab-option-wrapper").last().remove()
        }), this.$tabsToHtml = $('<button type="button" class="btn btn-sm btn-primary" id="tabs-settings-to-html">').text(app.t("tabs[.]Convert to the editor's code")).appendTo(this.$tabsSettings).on("click", function() {
            if (window.confirm(app.t("tabs[.]The code in the editor will be replaced with the new code, continue?"))) {
                $(this).removeClass("btn-success");
                var tabsConfig = [];
                that.$tabsArea.find(".tab-option-wrapper").each(function() {
                    var tabName = $(this).find('input[name="title"]').val().trim(),
                        tabContent = $(this).find('input[name="content"]').val().trim();
                    if (0 === tabName.indexOf("!dropdown!")) {
                        if (!/^(?:\[n\](.+?)\[\/n\]\[a\](.+?)\[\/a\][ ]*,[ ]*)*\[n\](.+?)\[\/n\]\[a\](.+?)\[\/a\]$/.test(tabContent)) return void window.alert(app.t("tabs[.]Wrong content for the dropdown") + tabName.replace("!dropdown!", "") + ".");
                        tabContent = tabContent.split(",").map(function(linkInfo) {
                            return linkInfo = linkInfo.trim().match(/^\[n\](.+?)\[\/n\]\[a\](.+?)\[\/a\]$/), [linkInfo[1].trim(), linkInfo[2].trim()]
                        })
                    } else 0 === tabName.indexOf("!link!");
                    tabsConfig.push([tabName, tabContent])
                }), $("#cs-motdtext").val(that.tabsConfigToHtml(that.$channelDescriptionInput.val(), tabsConfig))
            }
        }), this.$htmlToTabs = $('<button type="button" class="btn btn-sm btn-primary" id="tabs-settings-from-html">').text(app.t("tabs[.]Convert from the editor's code")).appendTo(this.$tabsSettings).on("click", function() {
            window.confirm(app.t("tabs[.]Tabs settings will be replaced with the code from the editor, continue?")) && ($(this).removeClass("btn-success"), that.tabsHtmlToCondig($("#cs-motdtext").val()))
        }), this.showMotdTab = function($tabBtn) {
            var $tabContent = $("#motd-tabs-content").find('[data-tab-index="' + $tabBtn.data("tabIndex") + '"]');
            $tabBtn.hasClass("btn-default") ? ($(".motd-tab-content").hide(), $tabContent.show(), $(".motd-tab-btn").removeClass("btn-success").addClass("btn-default"), $tabBtn.removeClass("btn-default"), $tabBtn.addClass("btn-success")) : ($tabContent.hide(), $tabBtn.removeClass("btn-success"), $tabBtn.addClass("btn-default"))
        }, $(document.body).on("click", "#motd-tabs .motd-tab-btn", function() {
            that.showMotdTab($(this))
        }), this.motdHandleDropdown = function() {
            $(".motd-tab-btn").removeClass("btn-success").addClass("btn-default"), $(".motd-tab-content").hide()
        }, $(document.body).on("click", "#motd-tabs .dropdown-toggle", function() {
            that.motdHandleDropdown()
        }), this.tabsHtmlToCondig($("#cs-motdtext").val()), this.fixMotdCut(), window.socket.on("setMotd", function() {
            that.fixMotdCut()
        }), $(document).on("change keypress", "#tabs-settings-area input, #tabs-settings-area textarea", function() {
            that.$tabsToHtml.addClass("btn-success")
        }), $(document).on("change keypress", "#cs-motdtext", function() {
            that.$htmlToTabs.addClass("btn-success")
        })
    })
}, function(module, exports) {
    window.cytubeEnhanced.addModule("showVideoInfo", function(app) {
        "use strict";
        var that = this;
        this.$titleRow = $('<div id="titlerow" class="row">').insertBefore("#main"), this.$titleRowOuter = $('<div id="titlerow-outer" class="col-md-12" />').html($("#currenttitle").text("" !== $(".queue_active a").text() ? $("#currenttitle").text().replace(/^Currently Playing:/, app.t("videoInfo[.]Now:")) : "").detach()).appendTo(this.$titleRow), this.$mediaInfo = $('<p id="mediainfo">').prependTo("#videowrap"), this.showPlaylistInfo = function() {
            0 !== $(".queue_active").length ? ($("#currenttitle").text($("#currenttitle").text().replace(/^Currently Playing:/, app.t("videoInfo[.]Now:"))), this.$mediaInfo.text($(".queue_active").attr("title").replace("Added by", app.t("videoInfo[.]Added by")))) : ($("#currenttitle").text(""), this.$mediaInfo.text(app.t("videoInfo[.]Nothing is playing now")))
        }, this.showPlaylistInfo(), window.socket.on("changeMedia", function() {
            that.showPlaylistInfo()
        })
    })
}, function(module, exports) {
    window.cytubeEnhanced.addModule("smilesAndFavouritePicturesTogether", function(app) {
        "use strict";
        var that = this,
            tab = app.Settings.getTab("general", app.t("general[.]General"), 100),
            userSettings = app.Settings.storage;
        if (app.isModulePermitted("smiles") && app.isModulePermitted("favouritePictures")) {
            var namespace = "general";
            this.scheme = {
                "smiles-and-favourite-pictures-together": {
                    title: app.t("general[.]Smiles and pictures together"),
                    "default": "no",
                    options: [{
                        value: "yes",
                        title: app.t("settings[.]Yes")
                    }, {
                        value: "no",
                        title: app.t("settings[.]No")
                    }]
                }
            };
            var schemeItem, option, sort = 1e4;
            for (var itemName in this.scheme) {
                if (schemeItem = this.scheme[itemName], userSettings.setDefault(namespace + "." + itemName, schemeItem["default"]), userSettings.get(namespace + "." + itemName))
                    for (option in schemeItem.options) schemeItem.options[option].selected = userSettings.get(namespace + "." + itemName) == schemeItem.options[option].value;
                tab.addControl("select", "horizontal", schemeItem.title, itemName, schemeItem.options, null, sort), sort += 100
            }
            app.Settings.onSave(function(settings) {
                for (var itemName in that.scheme) settings.set(namespace + "." + itemName, $("#" + app.prefix + itemName).val());
                settings.isDirty(namespace + ".smiles-and-favourite-pictures-together") && app.Settings.requestPageReload()
            }), "yes" == userSettings.get(namespace + ".smiles-and-favourite-pictures-together") && (app.getModule("smiles").done(function(smilesModule) {
                smilesModule.makeSmilesAndPicturesTogether()
            }), app.getModule("favouritePictures").done(function(favouritePicturesModule) {
                favouritePicturesModule.makeSmilesAndPicturesTogether()
            }), $('<button id="smiles-and-picture-btn" class="btn btn-sm btn-default" title="' + app.t("general[.]Show emotes and favorite images") + '">').html('<i class="glyphicon glyphicon-th-large"></i>').prependTo($("#chat-controls")).on("click", function() {
                $("#smiles-btn").click(), $("#favourite-pictures-btn").click(), $(this).hasClass("btn-default") ? ($(this).removeClass("btn-default"), $(this).addClass("btn-success")) : ($(this).removeClass("btn-success"), $(this).addClass("btn-default"))
            }))
        }
    })
}, function(module, exports) {
    window.cytubeEnhanced.addModule("smiles", function(app) {
        "use strict";
        var that = this;
        $("#emotelistbtn").hide(), 0 === $("#chat-panel").length && $('<div id="chat-panel" class="row">').insertAfter("#main"), 0 === $("#chat-controls").length && $('<div id="chat-controls" class="btn-group">').appendTo("#chatwrap"), this.$smilesBtn = $('<button id="smiles-btn" class="btn btn-sm btn-default" title="' + app.t("emotes[.]Show emotes") + '">').html('<i class="glyphicon glyphicon-picture"></i>').prependTo("#chat-controls"), this.$smilesPanel = $('<div id="smiles-panel">').prependTo("#chat-panel").hide(), this.renderSmiles = function() {
            for (var smiles = window.CHANNEL.emotes, smileIndex = 0, smilesLen = smiles.length; smilesLen > smileIndex; smileIndex++) $('<img class="smile-on-panel">').attr({
                src: smiles[smileIndex].image
            }).data("name", smiles[smileIndex].name).appendTo(this.$smilesPanel)
        }, this.insertSmile = function(smileName) {
            app.Helpers.addMessageToChatInput(" " + smileName + " ", "end")
        }, $(document.body).on("click", ".smile-on-panel", function() {
            that.insertSmile($(this).data("name"))
        }), $(window).on("resize", function() {
            app.Helpers.getViewportSize().width < 0 && that.$smilesPanel.empty()
        }), this.showSmilesPanel = function() {
            if (app.Helpers.getViewportSize().width < 0) that.$smilesPanel.empty(), $("#emotelistbtn").click();
            else {
                "" === that.$smilesPanel.html() && that.renderSmiles();
                var smilesAndPicturesTogether = this.smilesAndPicturesTogether || !1;
                0 === $("#favourite-pictures-panel").length || smilesAndPicturesTogether || $("#favourite-pictures-panel").hide(), that.$smilesPanel.toggle(), smilesAndPicturesTogether || (that.$smilesBtn.hasClass("btn-default") ? (0 !== $("#favourite-pictures-btn").length && $("#favourite-pictures-btn").hasClass("btn-success") && $("#favourite-pictures-btn").removeClass("btn-success").addClass("btn-default"), that.$smilesBtn.removeClass("btn-default"), that.$smilesBtn.addClass("btn-success")) : (that.$smilesBtn.removeClass("btn-success"), that.$smilesBtn.addClass("btn-default")))
            }
        }, this.$smilesBtn.on("click", function() {
            that.showSmilesPanel()
        }), this.makeSmilesAndPicturesTogether = function() {
            that.smilesAndPicturesTogether = !0, that.$smilesBtn.hide(), that.$smilesPanel.hide()
        }
    })
}, function(module, exports) {
    window.cytubeEnhanced.addModule("themes", function(app, settings) {
        "use strict";
        var that = this,
            defaultSettings = {
                defaultTheme: "clannad",
                themeId: "theme-css"
            };
        settings = $.extend({}, defaultSettings, settings), $("#us-theme").closest(".form-group").hide().val("/css/themes/slate.css"), window.createCookie && window.createCookie("cytube-theme", "/css/themes/slate.css", 1e3);
        var tab = app.Settings.getTab("themes", app.t("themes[.]Themes"), 500),
            $tabContent = $('<div class="' + app.prefix + 'themes">').appendTo(tab.$content),
            userSettings = app.Settings.storage,
            $themesInfoMessage = $('<div class="' + app.prefix + 'themes__info-message">').text("Темы отсутствуют.").prependTo(tab.$content),
            namespace = "themes";
        userSettings.setDefault(namespace + ".selected", settings.defaultTheme), this.themes = {}, this.applyNewDefaultTheme = function() {
            var previousDefaultTheme = userSettings.get(namespace + ".previousDefaultTheme");
            if (userSettings.get(namespace + ".selected") == previousDefaultTheme) userSettings.set(namespace + ".previousDefaultTheme", settings.defaultTheme), that.setTheme(settings.defaultTheme), userSettings.save(), console.log("reloading"), window.location.reload();
            else if ((!previousDefaultTheme || previousDefaultTheme && previousDefaultTheme != settings.defaultTheme) && (userSettings.set(namespace + ".previousDefaultTheme", settings.defaultTheme), userSettings.save(), settings.defaultTheme != userSettings.get(namespace + ".selected"))) {
                var themeTitle = that.themes[settings.defaultTheme].title;
                app.UI.createConfirmWindow(app.t('themes[.]Default theme was changed to "%themeTitle%" by administrator. Do you want to try it? (Don\'t forget, that you can switch your theme in extended settings anytime.)').replace("%themeTitle%", themeTitle), function(isConfirmed) {
                    isConfirmed && (that.setTheme(settings.defaultTheme), userSettings.save(), app.UI.createConfirmWindow(app.t("settings[.]Some settings need to refresh the page to get to work. Do it now?"), function(isConfirmed) {
                        isConfirmed && window.location.reload()
                    }))
                })
            }
        }, this.add = function(config) {
            $themesInfoMessage.remove(), that.themes[config.name] = config, that.themes[config.name].$el = that.addMarkup(config).appendTo($tabContent), that.sort(), config.name === userSettings.get(namespace + ".selected") ? (config.name === settings.defaultTheme && (userSettings.set(namespace + ".previousDefaultTheme", settings.defaultTheme), userSettings.save()), that.setTheme(config.name), that.applyTheme(config.name)) : config.name === settings.defaultTheme && that.applyNewDefaultTheme()
        }, tab.onShow(function() {
            $("." + app.prefix + "themes__item").removeClass("active").filter(function() {
                return $(this).data("name") === userSettings.get(namespace + ".selected")
            }).addClass("active")
        }), this.setTheme = function(name) {
            userSettings.set(namespace + ".selected", name), $("." + app.prefix + "themes__item").removeClass("active").filter(function() {
                return $(this).data("name") === name
            }).addClass("active")
        }, this.applyTheme = function(name) {
            var config = that.themes[name];
            $("#" + settings.themeId).remove(), config.cssUrl ? $('<link rel="stylesheet" id="' + settings.themeId + '">').attr("href", config.cssUrl).appendTo($("head")) : that.setTheme(userSettings.getDefault(namespace + ".selected")), config.jsUrl && $.getScript(config.jsUrl)
        }, this.addMarkup = function(config) {
            var $moduleInfo = $('<div class="' + app.prefix + 'themes__item">').data("name", config.name).on("click", function() {
                var name = $(this).data("name");
                name !== userSettings.get(namespace + ".selected") && app.UI.createConfirmWindow(app.t("themes[.]Apply this theme?"), function(isConfirmed) {
                    isConfirmed && that.setTheme(name)
                })
            });
            $('<div class="' + app.prefix + 'themes__item__title">').text(config.title).appendTo($moduleInfo);
            return "undefined" != typeof config.pictureUrl && "" !== (config.pictureUrl = config.pictureUrl.trim()) && $('<div class="' + app.prefix + 'themes__item__picture">').appendTo($moduleInfo).css("background-image", 'url("' + config.pictureUrl + '")'), $moduleInfo
        }, this.sort = function() {
            var themesArray = [];
            for (var theme in that.themes) themesArray.push(that.themes[theme]);
            themesArray = themesArray.sort(function(a, b) {
                return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 0
            });
            for (var themeIndex = 0, themesLength = themesArray.length; themesLength > themeIndex; themeIndex++) themesArray[themeIndex].$el.detach().appendTo($tabContent)
        }, app.Settings.onSave(function(settings) {
            settings.isDirty(namespace + ".selected") && app.Settings.requestPageReload()
        })
    })
}, function(module, exports) {
    window.cytubeEnhanced.addModule("uiRussianTranslate", function(app) {
        "use strict";
        var that = this;
        if ("ru" === app.storage.get("language")) {
            0 !== $("#newpollbtn").length && $("#newpollbtn").text(app.t("standardUI[.]Create a poll")), 0 !== $("#usercount").length && ($("#usercount").text($("#usercount").text().replace("connected users", app.t("standardUI[.]connected users")).replace("connected user", app.t("standardUI[.]connected user"))), window.socket.on("usercount", function() {
                $("#usercount").text($("#usercount").text().replace("connected users", app.t("standardUI[.]connected users")).replace("connected user", app.t("standardUI[.]connected user")))
            })), window.calcUserBreakdown = function(oldCalcUserBreakdown) {
                return function() {
                    var chatInfo = oldCalcUserBreakdown(),
                        translatedChatInfo = {},
                        chatInfoTranslateMap = {
                            AFK: app.t("standardUI[.]AFK"),
                            Anonymous: app.t("standardUI[.]Anonymous"),
                            "Channel Admins": app.t("standardUI[.]Channel Admins"),
                            Guests: app.t("standardUI[.]Guests"),
                            Moderators: app.t("standardUI[.]Moderators"),
                            "Regular Users": app.t("standardUI[.]Regular Users"),
                            "Site Admins": app.t("standardUI[.]Site Admins")
                        };
                    for (var chatInfoElement in chatInfo) chatInfo.hasOwnProperty(chatInfoElement) && "undefined" != typeof chatInfoTranslateMap[chatInfoElement] && (translatedChatInfo[chatInfoTranslateMap[chatInfoElement]] = chatInfo[chatInfoElement]);
                    return translatedChatInfo
                }
            }(window.calcUserBreakdown), 0 !== $("#welcome").length && $("#welcome").text(app.t("standardUI[.]Welcome, ") + window.CLIENT.name), 0 !== $("#logout").length && $("#logout").text(app.t("standardUI[.]Log out")), 0 !== $("#username").length && $("#username").attr({
                placeholder: app.t("standardUI[.]Login")
            }), 0 !== $("#password").length && $("#password").attr({
                placeholder: app.t("standardUI[.]Password")
            }), 0 !== $("#loginform").find(".checkbox").find(".navbar-text-nofloat").length && $("#loginform").find(".checkbox").find(".navbar-text-nofloat").text(app.t("standardUI[.]Remember me")), 0 !== $("#login").length && $("#login").text(app.t("standardUI[.]Site login"));
            var menuTranslateMap = {
                Home: app.t("standardUI[.]Home"),
                Account: app.t("standardUI[.]Account"),
                Logout: app.t("standardUI[.]Logout"),
                Channels: app.t("standardUI[.]Channels"),
                Profile: app.t("standardUI[.]Profile"),
                "Change Password/Email": app.t("standardUI[.]Change Password/Email"),
                Login: app.t("standardUI[.]Log in"),
                Register: app.t("standardUI[.]Register"),
                Options: app.t("standardUI[.]Options"),
                "Channel Settings": app.t("standardUI[.]Channel Settings"),
                Layout: app.t("standardUI[.]Layout"),
                "Chat Only": app.t("standardUI[.]Chat Only"),
                "Remove Video": app.t("standardUI[.]Remove Video")
            };
            $(".navbar").find(".navbar-nav").children().each(function() {
                $(this).find("a").each(function() {
                    for (var elementToTranslate in menuTranslateMap) menuTranslateMap.hasOwnProperty(elementToTranslate) && $(this).html($(this).html().replace(elementToTranslate, menuTranslateMap[elementToTranslate]))
                })
            }), 0 !== $("#mediaurl").length && $("#mediaurl").attr("placeholder", app.t("standardUI[.]Video url")), 0 !== $("#queue_next").length && $("#queue_next").text(app.t("standardUI[.]Next")), 0 !== $("#queue_end").length && $("#queue_end").text(app.t("standardUI[.]At end")), $(".qbtn-play").each(function() {
                $(this).html($(this).html().replace(/\s*Play/, " " + app.t("standardUI[.]Play")))
            }), $(".qbtn-next").each(function() {
                $(this).html($(this).html().replace(/\s*Queue Next/, " " + app.t("standardUI[.]Queue Next")))
            }), $(".qbtn-tmp").each(function() {
                $(this).html($(this).html().replace(/\s*Make Temporary/, " " + app.t("standardUI[.]Make Temporary")).replace(/\s*Make Permanent/, " " + app.t("standardUI[.]Make Permanent")))
            }), $(".qbtn-delete").each(function() {
                $(this).html($(this).html().replace(/\s*Delete/, " " + app.t("standardUI[.]Delete")))
            }), window.addQueueButtons = function(oldAddQueueButtons) {
                return function(li) {
                    var result = oldAddQueueButtons(li);
                    return 0 !== li.find(".qbtn-play").length && li.find(".qbtn-play").html(li.find(".qbtn-play").html().replace(/\s*Play/, " " + app.t("standardUI[.]Play"))), 0 !== li.find(".qbtn-next").length && li.find(".qbtn-next").html(li.find(".qbtn-next").html().replace(/\s*Queue Next/, " " + app.t("standardUI[.]Queue Next"))), 0 !== li.find(".qbtn-tmp").length && li.find(".qbtn-tmp").html(li.find(".qbtn-tmp").html().replace(/\s*Make Temporary/, " " + app.t("standardUI[.]Make Temporary")).replace(/\s*Make Permanent/, " " + app.t("standardUI[.]Make Permanent"))), 0 !== li.find(".qbtn-delete").length && li.find(".qbtn-delete").html(li.find(".qbtn-delete").html().replace(/\s*Delete/, " " + app.t("standardUI[.]Delete"))), result
                }
            }(window.addQueueButtons), this.handleTemp = function(data) {
                var tmpBtn = $(".pluid-" + data.uid).find(".qbtn-tmp");
                0 !== tmpBtn.length && (data.temp ? tmpBtn.html(tmpBtn.html().replace("Сделать временным", app.t("standardUI[.]Make Temporary"))) : tmpBtn.html(tmpBtn.html().replace("Сделать постоянным", app.t("standardUI[.]Make Permanent"))))
            }, window.socket.on("setTemp", function(data) {
                that.handleTemp(data)
            }), 0 !== $("#guestname").length && $("#guestname").attr("placeholder", app.t("standardUI[.]Name")), $("#guestlogin") && $("#guestlogin").find(".input-group-addon").text(app.t("standardUI[.]Guest login")), 0 !== $("#chatbtn").length && $("#chatbtn").text("Отправить"), 0 !== $("#modflair").length && $("#modflair").text("Цветной ник")
        }
    })
}, function(module, exports) {
    window.cytubeEnhanced.addModule("videoControls", function(app, settings) {
        "use strict";
        var that = this,
            defaultSettings = {
                turnOffVideoOption: !0,
                selectQualityOption: !0,
                expandPlaylistOption: !0,
                showVideoContributorsOption: !0,
                playlistHeight: 500
            };
        settings = $.extend({}, defaultSettings, settings), $("#mediarefresh").hide(), this.$topVideoControls = $('<div id="top-video-controls" class="btn-group">').appendTo("#videowrap"), this.refreshVideo = function() {
            $("#mediarefresh").click()
        }, this.$refreshVideoBtn = $('<button id="refresh-video" class="btn btn-sm btn-default" title="' + app.t("video[.]Refresh video") + '">').html('<i class="glyphicon glyphicon-refresh">').appendTo(this.$topVideoControls).on("click", function() {
            that.refreshVideo()
        }), this.hidePlayer = function($hidePlayerBtn) {
            if ($hidePlayerBtn.hasClass("btn-default")) {
                var $playerWindow = $("#videowrap").find(".embed-responsive");
                $playerWindow.css({
                    position: "relative"
                }), $('<div id="player-overlay">').appendTo($playerWindow), $hidePlayerBtn.html('<i class="glyphicon glyphicon-film">').removeClass("btn-default").addClass("btn-success")
            } else $("#player-overlay").remove(), $hidePlayerBtn.html('<i class="glyphicon glyphicon-ban-circle">').removeClass("btn-success").addClass("btn-default")
        }, this.$hidePlayerBtn = $('<button id="hide-player-btn" class="btn btn-sm btn-default" title="' + app.t("video[.]Hide video") + '">').html('<i class="glyphicon glyphicon-ban-circle">').appendTo(this.$topVideoControls).on("click", function() {
            that.hidePlayer($(this))
        }), settings.turnOffVideoOption || this.$hidePlayerBtn.hide(), this.qualityLabelsTranslate = {
            auto: "авто",
            240: "240p",
            360: "360p",
            480: "480p",
            720: "720p",
            1080: "1080p",
            best: app.t("video[.]best")
        };
        var qualityLabelsTranslateOrder = ["auto", 240, 360, 480, 720, 1080, "best"];
        this.$videoQualityBtnGroup = $('<div class="btn-group">').html('<button type="button" class="btn btn-default btn-sm video-dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + app.t("video[.]Quality") + ": " + this.qualityLabelsTranslate[window.USEROPTS.default_quality || "auto"] + ' <span class="caret"></span></button>').appendTo(this.$topVideoControls), this.$videoQualityList = $('<ul class="dropdown-menu">');
        for (var labelIndex = 0, labelsLength = qualityLabelsTranslateOrder.length; labelsLength > labelIndex; labelIndex++) $("<li>").html('<a href="#" data-quality="' + qualityLabelsTranslateOrder[labelIndex] + '">' + this.qualityLabelsTranslate[qualityLabelsTranslateOrder[labelIndex]] + "</a>").appendTo(this.$videoQualityList);
        this.$videoQualityList.appendTo(this.$videoQualityBtnGroup), this.changeVideoQuality = function($qualityLink) {
            this.settingsFix(), $("#us-default-quality").val($qualityLink.data("quality")), window.saveUserOptions(), this.$refreshVideoBtn.click(), this.$videoQualityBtnGroup.find("button").html(app.t("video[.]Quality") + ": " + $qualityLink.text() + ' <span class="caret"></span>'), $(".video-dropdown-toggle").dropdown()
        }, this.$videoQualityBtnGroup.on("click", "a", function() {
            return that.changeVideoQuality($(this)), !1
        }), $("#us-default-quality").on("change", function() {
            that.$videoQualityBtnGroup.find("button").html(app.t("video[.]Quality") + ": " + that.qualityLabelsTranslate[$(this).val()] + ' <span class="caret"></span>')
        }), settings.selectQualityOption || this.$videoQualityBtnGroup.hide(), this.settingsFix = function() {
            $("#us-theme").val(window.USEROPTS.theme), $("#us-layout").val(window.USEROPTS.layout), $("#us-no-channelcss").prop("checked", window.USEROPTS.ignore_channelcss), $("#us-no-channeljs").prop("checked", window.USEROPTS.ignore_channeljs), $("#us-synch").prop("checked", window.USEROPTS.synch), $("#us-synch-accuracy").val(window.USEROPTS.sync_accuracy), $("#us-wmode-transparent").prop("checked", window.USEROPTS.wmode_transparent), $("#us-hidevideo").prop("checked", window.USEROPTS.hidevid), $("#us-playlistbuttons").prop("checked", window.USEROPTS.qbtn_hide), $("#us-oldbtns").prop("checked", window.USEROPTS.qbtn_idontlikechange), $("#us-default-quality").val(window.USEROPTS.default_quality || "auto"), $("#us-chat-timestamp").prop("checked", window.USEROPTS.show_timestamps), $("#us-sort-rank").prop("checked", window.USEROPTS.sort_rank), $("#us-sort-afk").prop("checked", window.USEROPTS.sort_afk), $("#us-blink-title").val(window.USEROPTS.blink_title), $("#us-ping-sound").val(window.USEROPTS.boop), $("#us-sendbtn").prop("checked", window.USEROPTS.chatbtn), $("#us-no-emotes").prop("checked", window.USEROPTS.no_emotes), $("#us-modflair").prop("checked", window.USEROPTS.modhat), $("#us-joinmessage").prop("checked", window.USEROPTS.joinmessage), $("#us-shadowchat").prop("checked", window.USEROPTS.show_shadowchat)
        }, 0 !== $("#showmediaurl").length && $("#showmediaurl").html(app.t("standardUI[.]Add video")).attr({
            title: app.t("standardUI[.]Add video from url")
        }).detach().insertBefore($("#showsearch")), this.expandPlaylist = function($expandPlaylistBtn) {
            $expandPlaylistBtn.hasClass("btn-success") ? ($("#queue").css("max-height", settings.playlistHeight + "px"), $expandPlaylistBtn.attr("title", app.t("video[.]Expand playlist")), $expandPlaylistBtn.removeClass("btn-success"), $expandPlaylistBtn.addClass("btn-default")) : ($("#queue").css("max-height", "100000px"), $expandPlaylistBtn.attr("title", app.t("video[.]Unexpand playlist")), $expandPlaylistBtn.removeClass("btn-default"), $expandPlaylistBtn.addClass("btn-success"), window.scrollQueue())
        }, this.$expandPlaylistBtn = $('<button id="expand-playlist-btn" class="btn btn-sm btn-default" data-expanded="0" title="' + app.t("video[.]Expand playlist") + '">').append('<span class="glyphicon glyphicon-resize-full">').prependTo("#videocontrols").on("click", function() {
            that.expandPlaylist($(this))
        }), settings.expandPlaylistOption || this.$expandPlaylistBtn.hide(), this.$scrollToCurrentBtn = $('<button id="scroll-to-current-btn" class="btn btn-sm btn-default" title="' + app.t("video[.]Scroll the playlist to the current video") + '">').append('<span class="glyphicon glyphicon-hand-right">').prependTo("#videocontrols").on("click", function() {
            window.scrollQueue()
        }), this.showVideoContributorsList = function() {
            var $header = $('<h3 class="modal-title">').text(app.t("video[.]Contributors' list")),
                $bodyWrapper = $("<div>"),
                contributorsList = {};
            $("#queue").find(".queue_entry").each(function() {
                var username = $(this).attr("title").replace("Added by: ", "");
                void 0 === contributorsList[username] ? contributorsList[username] = 1 : contributorsList[username] += 1
            }), $bodyWrapper.append($("<p>" + app.t("video[.]Video's count") + ": " + ($("#queue").find(".queue_entry").length + 1) + "</p>"));
            var $contributorsListOl = $("<ol>");
            for (var contributor in contributorsList) contributorsList.hasOwnProperty(contributor) && $contributorsListOl.append($("<li>" + contributor + ": " + contributorsList[contributor] + ".</li>"));
            $contributorsListOl.appendTo($bodyWrapper), app.UI.createModalWindow("video-contributors-list", $header, $bodyWrapper)
        }, this.$videoContributorsBtn = $('<button id="video-contributors-btn" class="btn btn-sm btn-default" title="' + app.t("video[.]Contributors' list") + '">').append('<span class="glyphicon glyphicon-user">').prependTo("#videocontrols").on("click", function() {
            that.showVideoContributorsList()
        }), settings.showVideoContributorsOption || this.$videoContributorsBtn.hide()
    })
}, function(module, exports) {
    window.cytubeEnhanced.addModule("videoResize", function(app, settings) {
        "use strict";

        function setWight() {
            var self = this;
            self.ARROW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADZJREFUeNpiYBgFVAfzoZhoeSYsihJwGDIfKkeUK/6jGYJNjGhDSNaMbghZmokN1FFADQAQYACgYhHrEaVEsQAAAABJRU5ErkJggg==", self.COLCOUNT = 12, self.PREFIX = "set-width-", self.AUTHOR = "dfdfg", self.positions = [], self.mode = "show", self.checkPosition = function() {
                var chatwrap = document.getElementById("chatwrap"),
                    videowrap = document.getElementById("videowrap");
                chatwrap.nextSibling == videowrap ? self.positions = [chatwrap, videowrap] : self.positions = [videowrap, chatwrap];
                var pos1 = $(chatwrap).position().top,
                    pos2 = $(videowrap).position().top;
                return pos1 == pos2
            }, self.addHtml = function() {
                var htmlArr = [];
                htmlArr.push('<div id="' + self.PREFIX + 'wrap" style="top: -17px; position: relative; height: 0px;line-height: 0px;">');
                for (var i = 1; i < self.COLCOUNT; i++) htmlArr.push('<div style="left: ' + 100 * i / self.COLCOUNT + '%; position: relative;height: 0px;">'), htmlArr.push('<img id="' + self.PREFIX + "arrow-" + i + '" class="' + self.PREFIX + 'arrow" src="' + self.ARROW + '" style="cursor: pointer; margin-left: -8px; background-color:rgba(255,255,255,0.1); border-radius: 8px;">'), htmlArr.push("</div>");
                htmlArr.push("</div>"), $("#main").prepend(htmlArr.join("\n"))
            }, self.hide = function(num) {
                if (num = num || -1, -1 == num) {
                    var clsName = self.positions[0].getAttribute("class");
                    num = clsName.substr(clsName.lastIndexOf("-") + 1)
                }
                for (var i = 1; i < self.COLCOUNT; i++) i != num && $("#" + self.PREFIX + "arrow-" + i).parent().hide();
                self.mode = "hide"
            }, self.show = function(num) {
                $("." + self.PREFIX + "arrow").parent().show(), self.mode = "show"
            }, self.setHandlers = function() {
                $("." + self.PREFIX + "arrow").click(function(eventObject) {
                    if ("show" == self.mode) {
                        var id = eventObject.currentTarget.id,
                            num = id.substr(id.lastIndexOf("-") + 1),
                            num2 = self.COLCOUNT - num,
                            next = $("#" + self.PREFIX + "wrap").next();
                        return app.storage.set("chatWidthInColumns", num), next.attr("class", "col-lg-" + num + " col-md-" + num), next = next.next(), next.attr("class", "col-lg-" + num2 + " col-md-" + num2), self.hide(num), void window.handleWindowResize()
                    }
                    self.show()
                })
            }, self.loadPosition = function() {
                var columnNumber = app.storage.get("chatWidthInColumns");
                columnNumber && $("#" + q.PREFIX + "arrow-" + columnNumber).trigger("click").load(function() {
                    $(this).trigger("click")
                })
            }, self.create = function() {
                $("#" + self.PREFIX + "wrap").remove(), self.checkPosition() && (self.addHtml(), self.setHandlers(), self.hide(), self.loadPosition())
            }
        }
        var defaultSettings = {
            turnedOn: !0
        };
        if (settings = $.extend({}, defaultSettings, settings), settings.turnedOn) {
            app.storage.setDefault("chatWidthInColumns", 5);
            var q = new setWight;
            q.create()
        }
    })
}, function(module, exports) {
    window.cytubeEnhanced.addModule("videojsProgress", function() {
        "use strict";
        var that = this;
        this.handleProgress = function() {
            if (window.PLAYER instanceof window.VideoJSPlayer && ("Html5" === window.PLAYER.player.techName || "Html5" === window.PLAYER.player.Ua)) {
                var $tipWrapper = $('<div class="vjs-tip">').insertAfter(".vjs-progress-control"),
                    $tipBody = $('<div class="vjs-tip-body">').appendTo($tipWrapper);
                $('<div class="vjs-tip-body-arrow">').appendTo($tipBody);
                var $tipInner = $('<div class="vjs-tip-body-inner">').appendTo($tipBody);
                $(".vjs-progress-control").on("mousemove", function(e) {
                    var $seekBar = $(window.PLAYER.player.controlBar.progressControl.seekBar.el()),
                        pixelsInSecond = $seekBar.outerWidth() / window.PLAYER.player.duration(),
                        mousePositionInPlayer = e.pageX - $seekBar.offset().left,
                        timeInSeconds = mousePositionInPlayer / pixelsInSecond,
                        hours = Math.floor(timeInSeconds / 3600),
                        minutes = hours > 0 ? Math.floor(timeInSeconds % 3600 / 60) : Math.floor(timeInSeconds / 60);
                    10 > minutes && hours > 0 && (minutes = "0" + minutes);
                    var seconds = Math.floor(timeInSeconds % 60);
                    10 > seconds && (seconds = "0" + seconds), hours > 0 ? $tipInner.text(hours + ":" + minutes + ":" + seconds) : $tipInner.text(minutes + ":" + seconds);
                    var $controlBar = $(".vjs-control-bar");
                    $tipWrapper.css("top", -($controlBar.height() + $(".vjs-progress-control").height()) + "px").css("left", e.pageX - $controlBar.offset().left - $tipInner.outerWidth() / 2 + "px").show()
                }), $(".vjs-progress-control, .vjs-play-control").on("mouseout", function() {
                    $tipWrapper.hide()
                })
            }
        }, this.handleProgress(), window.socket.on("changeMedia", function() {
            that.handleProgress()
        })
    })
}, function(module, exports) {
    window.cytubeEnhanced.getModule("extras").done(function(extraModules) {
        extraModules.add({
            title: "Аниме-цитаты",
            name: "anime-quotes",
            description: "Нескучные аниме-цитаты.",
            url: "//cdn.rawgit.com/kaba99/cytube-enhanced/master/extras/anime-quotes/anime-quotes.js"
        })
    })
}, function(module, exports) {
    window.cytubeEnhanced.getModule('extras').done(function(extraModules) {
        extraModules.add({
            title: 'Старая панель смайлов',
            name: 'emotespanel',
            description: 'Панель смайлов с разделением всех смайлов на страницы (уменьшается нагрузка на слабых системах)',
            url: 'https://dl.dropboxusercontent.com/s/3lyq4n9phtwj9cr/emotespanel.js'
        })
    })
}, function(module, exports) {
    window.cytubeEnhanced.getModule("extras").done(function(extraModules) {
        extraModules.add({
            title: "Цитаты пирата",
            name: "pirate-quotes",
            description: "Нескучные цитаты Пирата.",
            url: "//cdn.rawgit.com/kaba99/cytube-enhanced/master/extras/pirate-quotes/pirate-quotes.js"
        })
    })
}, function(module, exports) {
    window.cytubeEnhanced.getModule("extras").done(function(extraModules) {
        extraModules.add({
            title: "Скрипт пирата",
            name: "pirate-script",
            description: "Ну, в общем, скриптец вот, всякие плюшки прикрутил. Теперь можно срать в чат еще эффективнее, раздражать модераторов еще больше и многое другое.",
            authorUrl: "https://github.com/Pirate505/animach-xtra",
            url: "//cdn.rawgit.com/Pirate505/animach-xtra/master/src/animachxtra.user.js"
        })
    })
}]);

(function() {
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://dl.dropboxusercontent.com/s/zw3jggpt99l27xa/favicon.ico?dl=0';
    document.getElementsByTagName('head')[0].appendChild(link);
}());

$(document).ready(function() {
    $("#layout-btn").click();
});

function embedbtnclick() {
    $(document).ready(function() {
        $("#ytapiplayer > div > button.btn.btn-default").click();
    });
}
embedbtnclick();
socket.on("changeMedia", function() {
    embedbtnclick();
});

window.cytubeEnhanced.addModule('animeQuotes', function(app, settings) {

    app.getModule('additionalChatCommands').done(function(chatCommands) {
        chatCommands.randomQuotes = chatCommands.randomQuotes.concat([
            "Не поддавайся сожалениям, о которых тебе напоминает прошлое.",
            "Честно говоря, я всегда думал, что лучше умереть, чем жить в одиночестве...",
            "Прошу прощения, но валите прочь.", "По-настоящему силён лишь тот, кто знает свои слабости.",
            "Быть умным и хорошо учиться — две разные вещи.",
            "Когда я стану главнокомандующим, я заставлю всех девушек носить мини-юбки!",
            "Тот кто правит временем, правит всем миром.",
            "Я должен познакомить тебя с моими друзьями. Они еще те извращенцы, но они хорошие люди.",
            "Победа не важна, если она лишь твоя.",
            "Наркотики убивают в людях человечность.",
            "Если бы меня волновало мнение других людей, то я давно бы уже покрасил волосы в другой цвет.",
            "Слезы — кровотечение души....",
            "Весело создавать что-то вместе.",
            "Как ты не понимаешь, что есть люди, которые умрут от горя, если тебя не станет!",
            "Я частенько слышал, что пары, которые внешне любят друг друга, частенько холодны внутри.",
            "Если хочешь, что бы люди поверили в мечту, сначала поверь в нее сам.",
            "Жизнь, в которой человек имеет всё, что желает, пуста и неинтересна.",
            "Чтобы чего-то достичь, необходимо чем-то пожертвовать.",
            "Я не одинока. Я просто люблю играть соло. Краситься, укорачивать юбку и заигрывать с парнями — это для потаскух.",
            "Очень страшно, когда ты не помнишь, кто ты такая.",
            "Больно помнить о своих слабостях.",
            "Похоже, мудрость и алкоголь несовместимы.",
            "Почему... Почему... Почему со мной вечно происходит какая-то херня?!",
            "Красивое нельзя ненавидеть.",
            "Если ты хочешь написать что-то плохое в комментариях в интернете, пиши, но это будет лишь выражением твоей зависти.",
            "Хочешь сбежать от повседневности — не останавливайся в развитии.",
            "Одинокие женщины ищут утешение в домашних животных.",
            "В эпоху, когда информация правит миром, жить без компьютера совершенно непростительно!",
            "Каждый человек одинок. Звезды в ночном небе тоже вроде бы все вместе, но на самом деле они разделены бездной. Холодной, тёмной, непреодолимой бездной.",
            "Умные люди умны ещё до того, как начинают учиться.",
            "Только те, у кого явные проблемы, говорят, что у них всё хорошо.",
            "Не важно если меня победит другой, но... Себе я не проиграю!",
            "Немногие способны на правильные поступки, когда это необходимо.",
            "Я мечтаю о мире, где все смогут улыбаться и спать, когда им того захочется.",
            "Девушке не обмануть меня… даже если она без трусиков!",
            "Это не мир скучный, это я не выделяюсь.", "С людьми без воображения одни проблемы.",
            "Нечестно это — своей слабостью шантажировать.",
            "То ли я уже не человек, то ли вы еще не люди.",
            "Чего я действительно опасаюсь, так это не потери своей памяти, а исчезновения из памяти остальных.",
            "Даже если небо погружено во тьму, и ничего не видно, где-то обязательно будет светиться звезда. Если она будет сиять ярче и ярче, её обязательно увидят...",
            "Никто не может нырнуть в бездну и вынырнуть прежним.",
            "Когда теряешь всё разом, мир начинает казаться довольно хреновым местечком.",
            "Не хочу видеть, что будет, когда Маяка узнает, что её шоколад украли. Не люблю ужастики.",
            "В мире есть добро потому, что есть кошки.", "Девчата, пойте! Зажигайте свет вашей души!",
            "И что ты собираешься делать, рождённый неизвестно зачем, и умирающий неизвестно за что?",
            "А давай станем с тобой чудовищами, и поставим весь мир на уши?", "Не забывай только, что и доброта может причинить боль.",
            "Тяжело признать плохим то, за что отдал 20 баксов.", "Говорят, в вере спасение… Но мне что-то никогда в это не верилось.",
            "Клубничка — это сердце тортика!",
            "Бабушка мне всегда говорила: «Юи-тян, ты запомнишь всё что угодно, но при этом ты забудешь всё остальное».",
            "Как жаль, что люди начинают ценить что-то только тогда, когда теряют это.", "У людей с холодными руками тёплое сердце.",
            "Я всегда думала, что это здорово: Посмеяться перед серьёзным делом.",
            "Мир не так жесток, как ты думаешь.",
            "Даже отдав все свои силы, не каждый способен стать победителем.",
            "Наше общество — просто стадо баранов.", "Пока сами чего-то не сделаете, это ваше «однажды» никогда не наступит.",
            "Чтобы что-то выбрать, нужно что-то потерять.",
            "За каждой улыбкой, что ты увидишь, будут скрываться чьи-то слёзы.",
            "Приключения — мечта настоящего мужчины!",
            "Твоя хитрость всегда будет оценена по достоинству.",
            "Я гораздо лучше орудую мечами, нежели словами.",
            "Прошлое всегда сияет ярче настоящего.",
            "Становиться взрослой так грустно...",
            "Романтические чувства — всего лишь химическая реакция",
            "Говорят, что в море ты или плывёшь, или тонешь.",
            "Не важно как ты осторожен, всегда есть опасность споткнуться.",
            "Я насилие не люблю, оно у меня само получается.",
            "Когда я смотрю аниме от КёАни, Господь подымает меня над полом и приближает к себе.",
            "Бака, бака, бака!", "Ты так говоришь, будто это что-то плохое.",
            "Мне вас жаль.", "Ваше мнение очень важно для нас.",
            "А в глубине души я всех вас ненавижу, как и весь этот мир.",
            "А разгадка одна — безблагодатность.", "Умерьте пыл.",
            "Меня трудно найти, легко потерять и невозможно забыть....",
            "Не твоя, вот ты и бесишься.", "Ваш ребенок - аниме.", "Здесь все твои друзья.",
            "Мне 20 и я бородат"
        ]);
    });
});