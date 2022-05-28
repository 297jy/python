<template>
    <div>
      <div style="border-bottom: 1px solid #e8e8e8;">
        <Toolbar
            id="editor-toolbar"
            style="border-bottom: 1px solid #ccc"
            :editor="editor"
            :defaultConfig="toolbarConfig"
        />
      </div>
      <div id="content">
        <div id="editor-container">
          <div id="title-container">
            <label>
              <input placeholder="请输入标题">
            </label>
          </div>
          <!-- 编辑器 -->
          <Editor
              id="editor-text-area"
              :defaultConfig="editorConfig"
              v-model="html"
              ref="test"
              @onChange="onChange"
              @onCreated="onCreated"
          />
        </div>
      </div>
    </div>
</template>

<script>
import {Editor, Toolbar} from '@wangeditor/editor-for-vue'

/**
 import { DomEditor } from '@wangeditor/editor'
 //获取toolbar对象
 const toolbar = DomEditor.getToolbar(this.editor)
 console.log(toolbar.getConfig().toolbarKeys)
 **/

export default {
  name: 'TencentEditor',
  components: {Editor, Toolbar},
  data() {
    return {
      lastHeight: null,
      editor: null,
      html: '',
      toolbarConfig: {
        /* 显示哪些菜单，如何排序、分组 */
        toolbarKeys: [
          'undo', 'redo', 'clearStyle', '|', 'headerSelect', 'fontSize', 'bold', 'italic', 'through',
          {
            key: 'group-more-style', // 必填，要以 group 开头
            title: '更多文本样式', // 必填
            iconSvg: '<svg viewBox="0 0 1024 1024"><path d="M204.8 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path><path d="M505.6 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path><path d="M806.4 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path></svg>', // 可选
            menuKeys: ['sup', 'sub', 'code'] // 下级菜单 key ，必填
          }, '|',
          'color', 'bgColor', '|',
          {
            key: 'group-justify', // 必填，要以 group 开头
            title: '对齐方式', // 必填
            iconSvg: '<svg viewBox="0 0 1024 1024"><path d="M768 793.6v102.4H51.2v-102.4h716.8z m204.8-230.4v102.4H51.2v-102.4h921.6z m-204.8-230.4v102.4H51.2v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z"></path></svg>', // 可选
            menuKeys: ['justifyLeft', 'justifyRight', 'justifyCenter', 'justifyJustify'] // 下级菜单 key ，必填
          },
          'bulletedList', 'numberedList',
          {
            key: 'group-indent', // 必填，要以 group 开头
            title: '缩进', // 必填
            iconSvg: '<svg viewBox="0 0 1024 1024"><path d="M0 64h1024v128H0z m384 192h640v128H384z m0 192h640v128H384z m0 192h640v128H384zM0 832h1024v128H0z m0-128V320l256 192z"></path></svg>', // 可选
            menuKeys: ['indent', 'delIndent'] // 下级菜单 key ，必填
          },
          'lineHeight', '|', 'todo', 'emotion', 'insertLink', 'blockquote', 'divider',
          {
            key: 'group-insert-more', // 必填，要以 group 开头
            title: '插入', // 必填
            menuKeys: ['codeBlock', 'insertTable'] // 下级菜单 key ，必填
          },
        ],
        // excludeKeys: [ /* 隐藏哪些菜单 */ ],
      },
      editorConfig: {
        placeholder: '请输入内容...',
        scroll: true,
        // 所有的菜单配置，都要在 MENU_CONF 属性下
        /**
         MENU_CONF: {
          uploadImage: {
            fieldName: 'your-fileName',
            base64LimitSize: 10 * 1024 * 1024 // 10M 以下插入 base64
          }
        }**/
      }
    }
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor) // 【注意】一定要用 Object.seal() 否则会报错
    },
    onChange(editor) {
      let demoObj = document.getElementById("editor-text-area")
      if (this.lastHeight !== null) {
        let heightDiff = demoObj.offsetHeight - this.lastHeight
        if (heightDiff > 0) {
          window.scrollTo(0, document.documentElement.scrollTop + heightDiff)
        }
      }
      this.lastHeight = demoObj.offsetHeight;
      //alert(document.documentElement.scrollTop)
      //alert(document.documentElement.clientHeight)
      //window.scrollTo(0, document.documentElement.scrollHeight)
      console.log('onChange', editor.getHtml()) // onChange 时获取编辑器最新内容
    }
  },
  mounted() {
    document.getElementById('editor-text-area').addEventListener('click', e => {
      if (e.target.id === 'editor-text-area') {
        this.editor.focus(true) // focus 到末尾
      }
    })
  },
  beforeDestroy() {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁 editor ，重要！！！
  },
}
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>

<style>
#top-container {
  border-bottom: 1px solid #e8e8e8;
  padding-left: 30px;
}

#editor-toolbar {
  background-color: #FCFCFC;
  margin: 0 auto;
}

#content {
  height: calc(100% - 40px);
  position: relative;
}

#editor-container {
  width: 850px;
  margin: 30px auto 150px auto;
  background-color: #fff;
  padding: 20px 50px 50px 50px;
  border: 1px solid #e8e8e8;
  box-shadow: 0 2px 10px rgb(0 0 0 /12%);
}

#title-container {
  padding: 20px 0;
  border-bottom: 1px solid #e8e8e8;
}

#title-container input {
  font-size: 30px;
  border: 0;
  outline: none;
  width: 100%;
  line-height: 1;
}

#editor-text-area {
  min-height: 800px;
  margin-top: 20px;
}
</style>
