function customRender(reactElement,container){
//  it works but not optimized

// const domElement=document.createElement(reactElement.type)
// domElement.innerHTML=reactElement.children
// domElement.setAttribute('href',reactElement.props.href)
// domElement.setAttribute('target',reactElement.props.target)
// container.appendChild(domElement)

// more optimized than previous one
const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children
for (const prop in reactElement.props) {
        domElement.setAttribute(prop,reactElement.props[prop])
}
container.appendChild(domElement)

}
const reactElement= {
    type: 'a',
    props: {
        href:'https://google.com',
        target: "_blank"
    },
    children: 'Click me to visit google'
}
const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)// inject