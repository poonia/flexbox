(function() {
    'use strict';
    /*
     * Flexbox Playground
     * @Author - Praveen Poonia
     */

    var flexContainer,
        flexboxContainerPropObject = [
            { "flex-direction": ['row', 'row-reverse', 'column', 'column-reverse'] },
            { "flex-wrap": ['nowrap', 'wrap', 'wrap-reverse'] },
            { "justify-content": ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'] },
            { "align-items": ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'] },
            { "align-content": ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'] },
        ],
        flexContainerPropDetails = {
            "flex-direction": "It define the main-axis, according to direction item are placed in container. <br /><ul> <li><b>row</b> (default): left to right in ltr; right to left in rtl</li> <li>	<b>row-reverse</b>: right to left in ltr; left to right in rtl </li> <li><b>column</b>: same as row but top to bottom </li><li> <b>column-reverse</b>: same as row-reverse but bottom to top </li></ul>",
            "flex-wrap": "Define if the flex items will break onto multiple lines if their width are larger than width of container. <br /> <ul> <li> <strong> nowrap </strong>(default): all flex items will be on one line </li> <li> <strong> wrap: </strong> flex items will wrap onto multiple lines, from top to bottom. </li> <li> <strong> wrap - reverse: </strong>flex items will wrap onto multiple lines from bottom to top.</li> </ul>",
            "justify-content": "It control the alignment along the main axis of flex container. <br /> <ul><li><strong>flex-start </strong>(default): items are packed toward the start line. </li><li><strong> flex-end:</strong> items are packed toward to end line. </li><li><strong> center:</strong> items are centered along the line </li><li><strong> space-between:</strong> items are evenly distributed in the line; first item is on the start line, last item on the end line </li><li><strong> space-around:</strong> items are evenly distributed in the line with equal space around them. Note that visually the spaces aren't equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies. </li><li><strong> space-evenly:</strong> items are distributed so that the spacing between any two items (and the space to the edges) is equal.</li></ul>",
            "align-items": "It controls how	the	items are laid out along the cross axis(mainly horizontally), relative to the parent container. <br /> <ul><li><strong>stretch</strong> (default): it fill the container (still follow min-width/max-width)</li><li><strong>flex-start</strong>: cross-start margin edge of the items is placed on the cross-start line</li><li><strong>flex-end</strong>: cross-end margin edge of the items is placed on the cross-end line</li><li><strong>center</strong>: center the items on the cross-axis</li><li><strong>baseline</strong>: items aligned according to their baselines align</li></ul>",
            "align-content": "Align flex items with extra space on the cross-axis, within the flex container when have multiple lines. <br /> <ul><li><strong>flex-start</strong>: lines packed to the start of the container</li><li><strong>flex-end</strong>: lines packed to the end of the container</li><li><strong>center</strong>: lines packed to the center of the container</li><li><strong>space-between</strong>: lines evenly distributed; the first line is at the start of the container while the last one is at the end</li><li><strong>space-around</strong>: lines evenly distributed with equal space around each line</li><li><strong>stretch</strong> (default): lines stretch to take up the remaining space</li></ul>"
        },
        flexItemPropDetails = {
            "order": "It is used to re-arrange the natural order of items <br /><span class='code-style'> order: < integer >; &nbsp; &nbsp; // default is 0 </span>",
            "flex-basis": "Similar to min-width, it will expand item's size based on inner content.otherwise the default basis value will be applied. Length can be in - %, em, rem, px or auto. <br /> <span class='code-style'>  flex-basis: < length > | auto;  &nbsp;  &nbsp;  // default auto </span>",
            "flex-grow": "Define how much the item will take of available space, the value serves as a proportion. <br /> <span class = 'code-style'> flex-grow: < number > ; &nbsp; &nbsp; // default 0 </span>",
            "flex-shrink": "Control how much item will shrink relative to others if there is not enough space (proportion of overflow that gets shaved off)",
            "align-self": "It is used to align individual items in a flex container along the cross axis.",
        },
        containerPropSelector,
        containerValueSelector,
        itemWidthRangeSelector,
        containerStyleSelector,
        flexItems,
        style = [],
        currentSelectedProp = null;


    function updateDropdown(typeObject, typePropSelector) {
        typeObject.map((item, key) => {
            typePropSelector[key] = new Option(Object.keys(item)[0], key);
        })
    }

    function containerPropHandler(event) {
        Object.values(flexboxContainerPropObject[this.selectedIndex])[0].map((item, key) => {
            containerValueSelector[key] = new Option(item, key);
        });
        currentSelectedProp = containerPropSelector.options[this.value].text;
        console.log(event);
        updatePropDetail(currentSelectedProp);
    }

    function updatePropDetail(prop) {
        console.log(prop);
        document.querySelector('.propDetails').innerHTML = flexContainerPropDetails[prop];
    }

    function containerValueHandler() {
        let isUpdated = false;
        if (style.length > 0) {
            style.map((val) => {
                if (Object.keys(val).includes(currentSelectedProp)) {
                    val[currentSelectedProp] = containerValueSelector.options[this.value].text;
                    isUpdated = true;
                }
            })
            if (!isUpdated) {
                style.push({
                    [currentSelectedProp]: containerValueSelector.options[this.value].text
                });
            }
        } else {
            style.push({
                [currentSelectedProp]: containerValueSelector.options[this.value].text
            });
            style.unshift({
                'display': 'flex'
            });
        }
        document.querySelector('.flex-container')
            .setAttribute(`style`, `${currentSelectedProp} : ${containerValueSelector.options[this.value].text}`);

        updateAppliedStyle(containerStyleSelector, style);
    }

    // function itemWidthHandler() {
    //     for (var key in flexItems) {
    //         if (flexItems.hasOwnProperty(key)) {
    //             flexItems[key].style.width = `${this.value}%`;
    //         }
    //     }
    // }

    function updateAppliedStyle(selector, style) {
        let cssStyle = null
        cssStyle = style.map((value) => {
            return `${Object.keys(value)[0]}: ${value[Object.keys(value)[0]]}; \n`;
        });
        // console.log('cssStyle', cssStyle);
        selector.innerHTML = cssStyle.join('<br>');
    }

    function updateItemInfo(prop) {
        prop = decamelize(prop, "-");
        document.querySelector('.itemPropInfo').innerHTML = flexItemPropDetails[prop];
    }

    /**
     * Decamelizes a string with/without a custom separator (underscore by default).
     * 
     * @param str String in camelcase
     * @param separator Separator for the new decamelized string.
     */
    function decamelize(str, separator) {
        separator = typeof separator === 'undefined' ? '_' : separator;

        return str
            .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
            .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
            .toLowerCase();
    }

    function onChangeHandler(event) {
        let prop = event.target.getAttribute("data-prop");
        event.target.closest('.flex-item').style[prop] = `${event.target.value}`;
        // updateItemInfo(prop);
    };

    function onMouseOverHandler(event) {
        let prop = event.target.getAttribute("data-prop");
        if (prop) {
            updateItemInfo(prop);
        }
    };

    function bindEvents() {
        containerPropSelector.onchange = containerPropHandler;
        containerValueSelector.onchange = containerValueHandler;
        // itemWidthRangeSelector.onchange = itemWidthHandler;
        flexContainer.onchange = onChangeHandler;
        flexContainer.onmouseover = onMouseOverHandler;
    }

    function _init() {
        flexContainer = document.querySelector('.flex-container');
        containerPropSelector = document.getElementById('containerPropSelect');
        containerValueSelector = document.getElementById('containerValueSelect');
        // itemWidthRangeSelector = document.getElementById('itemWidthRange');
        containerStyleSelector = document.getElementById('containerStyle');
        flexItems = document.querySelectorAll('.flex-item');

        updateDropdown(flexboxContainerPropObject, containerPropSelector);
        bindEvents()
        var event = new Event('change');
        containerPropSelector.dispatchEvent(event);
        containerValueSelector.dispatchEvent(event);
    }

    _init();

    console.log('@@@@@@')
}());