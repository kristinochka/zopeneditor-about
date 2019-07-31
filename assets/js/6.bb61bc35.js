(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{179:function(e,t,s){"use strict";s.r(t);var a=s(0),o=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("The IDE's COBOL language server provides you with all the editing capabilities discussed above and can also utilize its knowledge about COBOL to provide you with statistical counters for COBOL language elements such as Operators and Operands, as well as use those to compute various complexity metrics, such as "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Halstead_complexity_measures",target:"_blank",rel:"noopener noreferrer"}},[e._v("Halstead metrics"),s("OutboundLink")],1),e._v(" (also see "),s("a",{attrs:{href:"https://www.verifysoft.com/en_halstead_metrics.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("[1]"),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://www.geeksforgeeks.org/software-engineering-halsteads-software-metrics/",target:"_blank",rel:"noopener noreferrer"}},[e._v("[2]"),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://www.tutorialspoint.com/software_engineering/software_design_complexity.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("[3]"),s("OutboundLink")],1),e._v("). You can use these metrics to assess the complexity of your COBOL programs as well as set thresholds for various quality metrics that you do not want violate.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("The table is interactive, reacting to your edits as values get recomputed every time you save and showing you change deltas. For example,")]),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("You can also set thresholds for your metrics either in your personal User Preferences or in Workspace Preferences if you want to share these with your team. Follow these steps to set thresholds for your metrics:")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._v(" "),s("p",[s("strong",[e._v("Next step")]),e._v(": "),s("router-link",{attrs:{to:"./git_commitchanges.html"}},[e._v("Committing changes into Git branches")])],1)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"reviewing-your-code-using-cobol-metrics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reviewing-your-code-using-cobol-metrics","aria-hidden":"true"}},[this._v("#")]),this._v(" Reviewing your code using COBOL Metrics")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("When you open a COBOL program file (for example, "),t("code",[this._v("COBOL/SAM1.cbl")]),this._v(") and click inside the editor, you will see some metrics-related annotations for that file in the editor's status bar at the bottom.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To view all of the file's COBOL program metrics, click on the "),t("code",[this._v("View All Metrics")]),this._v(" link in the status bar. This will open the metrics view on the right side of the editor. You can also open this view by right-clicking inside your open COBOL program and selecting "),t("code",[this._v("Program Metrics")]),this._v(" from the context menu. The metrics view shows a table of available metrics that you can scroll through to review. To learn about each metric, click the "),t("code",[this._v("(i)")]),this._v(" icon to access a tooltip.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("In "),s("code",[e._v("SAM1.cbl")]),e._v(", go to Line 243 and cut out the entire "),s("code",[e._v("IF")]),e._v(" block until Line 270 and save.")]),e._v(" "),s("li",[e._v("Check the table again as the "),s("code",[e._v("Your Change")]),e._v(" column was updated, showing relative changes for each metric that was impacted. For example, as nested "),s("code",[e._v("IF-ELSE")]),e._v(" statements were removed, the "),s("code",[e._v("Cyclomatic Complexity")]),e._v(" of the program went down by 5. You can see how many other metrics were also updated. The IDE presents these changes relative to the time you opened the editor. If you close and reopen it the numbers will be reset.")]),e._v(" "),s("li",[e._v("As the code that branches out to other paragraphs was cut out, you can see red squiggles and errors in the Problems view telling you about "),s("code",[e._v("Unreachable Code")]),e._v(" as no other code calls these paragraphs now.")]),e._v(" "),s("li",[e._v("Go back into the editor and press "),s("code",[e._v("Ctrl+Z")]),e._v(" (Windows) or "),s("code",[e._v("Cmd+Z")]),e._v(" (Mac) to restore the code you cut out to get back to a consistent state.")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("Open the Preferences editor with "),s("code",[e._v("File > Settings > Open Preferences")]),e._v(" and select the Workspace Preferences tab.")]),e._v(" "),s("li",[e._v("In the preferences list, expand "),s("code",[e._v("Zde")]),e._v(" and select "),s("code",[e._v("cobol.metrics > Add Value")]),e._v(". This adds an empty "),s("code",[e._v('"zde.cobol.metrics": [],')]),e._v(" entry to your settings on the right.")]),e._v(" "),s("li",[e._v("Put the cursor inside the array's square brackets, type "),s("code",[e._v("{}")]),e._v(", place the cursor inside the braces, and press "),s("code",[e._v("Ctrl+Space")]),e._v(".")]),e._v(" "),s("li",[e._v("The code completion drop down is opened and you can select the "),s("code",[e._v('"metric"')]),e._v(" property.")]),e._v(" "),s("li",[e._v("Select "),s("code",[e._v('"cyclomatic-complexity"')]),e._v(" from the metrics available for threshold that are proposed.")]),e._v(" "),s("li",[e._v("Type a comma and press "),s("code",[e._v("Enter")]),e._v(". Then, press "),s("code",[e._v("Ctrl+Space")]),e._v(" again to select "),s("code",[e._v('"direction": "larger",')]),e._v(" and once more to select "),s("code",[e._v('"value":')]),e._v(". Set the "),s("code",[e._v("value")]),e._v(" to 15.")]),e._v(" "),s("li",[e._v("You can now use code completion to quickly provide complex preference data objects.")]),e._v(" "),s("li",[e._v("Complete the preferences entry to look like this and save:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token property"}},[e._v('"zde.cobol.metrics"')]),s("span",{attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{attrs:{class:"token property"}},[e._v('"metric"')]),s("span",{attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{attrs:{class:"token string"}},[e._v('"comments-percentage"')]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{attrs:{class:"token property"}},[e._v('"direction"')]),s("span",{attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{attrs:{class:"token string"}},[e._v('"smaller"')]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{attrs:{class:"token property"}},[e._v('"value"')]),s("span",{attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{attrs:{class:"token number"}},[e._v("15")]),e._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{attrs:{class:"token property"}},[e._v('"metric"')]),s("span",{attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{attrs:{class:"token string"}},[e._v('"comments-percentage"')]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{attrs:{class:"token property"}},[e._v('"direction"')]),s("span",{attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{attrs:{class:"token string"}},[e._v('"larger"')]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{attrs:{class:"token property"}},[e._v('"value"')]),s("span",{attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{attrs:{class:"token number"}},[e._v("60")]),e._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{attrs:{class:"token property"}},[e._v('"metric"')]),s("span",{attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{attrs:{class:"token string"}},[e._v('"cyclomatic-complexity"')]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{attrs:{class:"token property"}},[e._v('"direction"')]),s("span",{attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{attrs:{class:"token string"}},[e._v('"larger"')]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{attrs:{class:"token property"}},[e._v('"value"')]),s("span",{attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{attrs:{class:"token number"}},[e._v("15")]),e._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you go back to the "),t("code",[this._v("SAM1.cbl")]),this._v(" editor and review the metrics table, you can now see:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Another column in the table called "),s("code",[e._v("Threshold")]),e._v(" that contains the values you just entered.")]),e._v(" "),s("li",[e._v("Messages about threshold violations are displayed on the far right of the table. For example, for "),s("code",[e._v("SAM1")]),e._v(", the Cyclomatic complexity is 29 and therefore larger than the threshold. The comments percentage is smaller than 15% and therefore also shown as a violation.")]),e._v(" "),s("li",[e._v("If you open the "),s("code",[e._v("SAM2.cbl")]),e._v(" program, both metrics are in the acceptable range.")])])}],!1,null,null,null);t.default=o.exports}}]);