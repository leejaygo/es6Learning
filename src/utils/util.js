import Prism from 'prismjs'
function repalceDot(str){
    return str.replace(/;<\/span>/g, ';</span>\n')
}
export const getFormateCode = (code)=>{
    var codeHtml  = Prism.highlight(code, Prism.languages.javascript, 'javascript');
    return repalceDot(codeHtml)
}