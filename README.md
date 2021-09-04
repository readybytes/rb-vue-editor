# rb-vue-editor

## Demo

![Demo](./src/assets/demo.gif)

#### [Codesandbox Example](https://codesandbox.io/s/rb-vue-editor-demo-k159b)
## Installation

```
npm install --save rb-vue-editor
```

or

```
yarn add rb-vue-editor
```

## Declaration

```
<script>
import RBVueEditor from "rb-vue-editor";

export default {
  name: "HelloWorld"
  components: {
    RBVueEditor
  }
}
<script>
```

## Basic Usage

#### Example-1

```
<RBVueEditor v-model="text"></RBVueEditor>
```
#### Example-2

```
<RBVueEditor
  v-model="text"
  :config="{
    placeholder: 'Type...',
    background: '#1A76D2',
  }"
  @on-update="onUpdate"
></RBVueEditor>
```
#### Example-3

```
<RBVueEditor
  v-model="text"
  type="textarea",
  :config="{
    placeholder: 'Type...',
    background: '#1A76D2',
    family: 'sans-serif',
    size: 'large',
    color: '#000000',
    bold: true,
    italic: true,
    width: 300,
    borderColor: '#1A76D2'
  }"
  @on-update="onUpdate"
></RBVueEditor>
```

## Properties
- `type`
  - **Type** - String
  - **Required** - No
  - **Default**- 'input'
  - **Description** - This prop is to create the requested type's input field.
  - **Support Values**- 'input', 'textarea'

- `config`

  - **Type** - Object
  - **Required** - No
  - **Description** - This prop is going to have all values of edit properties.
  - **Properties** -
    | Name | Type | Required | Description | Support Values |
    | ---- | ---- |--------- |------------ |--------------- |
    | placeholder | String/Null | No | The placeholder for the text box. | any string|
    | bold | Boolean | No | To bold the text. | true/false |
    | italic | Boolean | No | To italic the text. | true/false |
    | color | String/Null | No | To change the color of the text. | any hex color value |
    | background | String/Null | No | To change the color of the text box. | any hex color value |
    | size | String/Null | No | To change the font size of the text. | "xx-small","x-small","small","medium","large","x-large","xx-large","xxx-large","smaller","larger","inherit","initial","unset", |
    | family | String/Null | No | To change the font family of the text. | "serif","sans-serif","monospace","cursive","fantasy","system-ui","ui-serif","ui-sans-serif","ui-monospace","ui-rounded","emoji","math","fangsong" |
    | width | String/Number | No | To change the width of the text box. | 300 or "300" |
    | borderColor | String | No | To change the border color of the text box. | any hex color value |

## Events-

- `on-update`

    This event will fire when any style will be updated. i.e-

  ```
   <template>
    <RBVueEditor
      v-model="text"
      type="textarea",
      :config="{
        placeholder: 'Type...',
        background: '#1A76D2',
        family: 'sans-serif',
        size: 'large',
        color: '#000000',
        bold: true,
        italic: true,
        width: 300,
        borderColor: '#1A76D2'
      }"
      @on-update="onUpdate"
    >
    </RBVueEditor>
   </template>

   <script>
    export default {
      data() {
        return {
          text: "Hello World",
        }
      }
      methods:{
        onUpdate(event) {
          console.log(event)
        }
      }
    }
   </script>


