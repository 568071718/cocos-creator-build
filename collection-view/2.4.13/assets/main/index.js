window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  "common-cell": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "870c3ZiLUZKgoiDNKC+V1ua", "common-cell");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    function randomRangeInt(a, b) {
      var value = Math.random() * (b - a) + a;
      return Math.floor(value);
    }
    var CommonCell = function(_super) {
      __extends(CommonCell, _super);
      function CommonCell() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.icon = null;
        _this.levelSign = null;
        _this.icons = [];
        _this.signs = [];
        return _this;
      }
      CommonCell.prototype.randomIcon = function() {
        if (this.icons.length > 0) {
          var idx = randomRangeInt(0, this.icons.length);
          this.icon.spriteFrame = this.icons[idx];
        }
      };
      CommonCell.prototype.randomShapeColor = function() {
        var r = randomRangeInt(50, 200);
        var g = randomRangeInt(50, 200);
        var b = randomRangeInt(50, 200);
        this.node.getChildByName("shape").color = new cc.Color(r, g, b);
      };
      CommonCell.prototype.randomStar = function() {
        var star = randomRangeInt(1, 6);
        var content = this.node.getChildByName("content");
        var starNodes = content.getChildByName("star").children;
        for (var index = 0; index < starNodes.length; index++) {
          var element = starNodes[index];
          element.opacity = index < star ? 255 : 0;
        }
      };
      CommonCell.prototype.randomLevelSign = function() {
        if (this.signs.length > 0) {
          var idx = randomRangeInt(0, this.signs.length);
          this.levelSign.spriteFrame = this.signs[idx];
        }
      };
      __decorate([ property(cc.Label) ], CommonCell.prototype, "label", void 0);
      __decorate([ property(cc.Sprite) ], CommonCell.prototype, "icon", void 0);
      __decorate([ property(cc.Sprite) ], CommonCell.prototype, "levelSign", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], CommonCell.prototype, "icons", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], CommonCell.prototype, "signs", void 0);
      CommonCell = __decorate([ ccclass ], CommonCell);
      return CommonCell;
    }(cc.Component);
    exports.default = CommonCell;
    cc._RF.pop();
  }, {} ],
  demo1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fe1b7fkG1xI7Lw162EypC3t", "demo1");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var common_cell_1 = require("../cells/common-cell");
    var yx_collection_view_1 = require("../lib/yx-collection-view");
    var yx_flow_layout_1 = require("../lib/yx-flow-layout");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var demo1 = function(_super) {
      __extends(demo1, _super);
      function demo1() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listComp = null;
        _this.testData = [];
        _this.column = 3;
        return _this;
      }
      demo1.prototype.onLoad = function() {
        this.node.getChildByName("back").once(cc.Node.EventType.TOUCH_END, this.back, this);
      };
      demo1.prototype.back = function() {
        cc.director.loadScene("home");
      };
      demo1.prototype.receivedData = function() {
        this.testData = [];
        for (var index = 0; index < 1e4; index++) this.testData.push(index);
        this.listComp.reloadData();
      };
      demo1.prototype.start = function() {
        var _this = this;
        this.listComp.numberOfItems = function() {
          return _this.testData.length;
        };
        this.listComp.cellForItemAt = function(indexPath, collectionView) {
          var data = _this.testData[indexPath.item];
          var cell = collectionView.dequeueReusableCell("cell");
          var comp = cell.getComponent(common_cell_1.default);
          comp.label.string = "" + indexPath;
          comp.randomIcon();
          comp.randomShapeColor();
          comp.randomStar();
          comp.randomLevelSign();
          return cell;
        };
        this.listComp.onTouchItemAt = function(indexPath, collectionView) {
          var data = _this.testData[indexPath.item];
          var cell = collectionView.getVisibleNode(indexPath);
          cc.tween(cell).set({
            scale: 1
          }).to(.1, {
            scale: 1.1
          }).to(.1, {
            scale: 1
          }).start();
        };
        this.updateFlowLayout();
        this.receivedData();
      };
      demo1.prototype.updateFlowLayout = function(column) {
        void 0 === column && (column = this.column);
        var layout = new yx_flow_layout_1.YXFlowLayout();
        layout.horizontalSpacing = 10;
        layout.verticalSpacing = 10;
        var width = (this.listComp.node.width - layout.horizontalSpacing * (column - 1)) / column;
        layout.itemSize = new cc.Size(width, 200);
        this.listComp.layout = layout;
      };
      demo1.prototype.addColumn = function() {
        this.column++;
        if (this.column > 7) {
          this.column = 7;
          return;
        }
        this.updateFlowLayout();
        this.listComp.reloadData();
      };
      demo1.prototype.subColumn = function() {
        this.column--;
        if (this.column < 1) {
          this.column = 1;
          return;
        }
        this.updateFlowLayout();
        this.listComp.reloadData();
      };
      __decorate([ property(yx_collection_view_1.YXCollectionView) ], demo1.prototype, "listComp", void 0);
      demo1 = __decorate([ ccclass ], demo1);
      return demo1;
    }(cc.Component);
    exports.default = demo1;
    cc._RF.pop();
  }, {
    "../cells/common-cell": "common-cell",
    "../lib/yx-collection-view": "yx-collection-view",
    "../lib/yx-flow-layout": "yx-flow-layout"
  } ],
  demo2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "779d0QmJjJDo40kOnvbqmF6", "demo2");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var common_cell_1 = require("../cells/common-cell");
    var yx_collection_view_1 = require("../lib/yx-collection-view");
    var yx_flow_layout_1 = require("../lib/yx-flow-layout");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    function randomRangeInt(a, b) {
      var value = Math.random() * (b - a) + a;
      return Math.floor(value);
    }
    var demo2 = function(_super) {
      __extends(demo2, _super);
      function demo2() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listComp = null;
        _this.testData = [];
        return _this;
      }
      demo2.prototype.onLoad = function() {
        this.node.getChildByName("back").once(cc.Node.EventType.TOUCH_END, this.back, this);
        this.node.getChildByName("reload").on(cc.Node.EventType.TOUCH_END, this.receivedData, this);
      };
      demo2.prototype.back = function() {
        cc.director.loadScene("home");
      };
      demo2.prototype.receivedData = function() {
        this.testData = [];
        var array = [];
        var length = randomRangeInt(1, 21);
        for (var index = 0; index < length; index++) array.push(index);
        this.testData.push(array);
        var array = [];
        var length = randomRangeInt(1, 5);
        for (var index = 0; index < length; index++) array.push(index);
        this.testData.push(array);
        var array = [];
        var length = randomRangeInt(3, 11);
        for (var index = 0; index < length; index++) array.push(index);
        this.testData.push(array);
        var array = [];
        for (var index = 0; index < 1e4; index++) array.push(index);
        this.testData.push(array);
        this.listComp.reloadData();
      };
      demo2.prototype.start = function() {
        var _this = this;
        this.listComp.numberOfSections = function() {
          return _this.testData.length;
        };
        this.listComp.numberOfItems = function(section) {
          return _this.testData[section].length;
        };
        this.listComp.cellForItemAt = function(indexPath, collectionView) {
          var data = _this.testData[indexPath.section][indexPath.item];
          var cell = collectionView.dequeueReusableCell("cell");
          var comp = cell.getComponent(common_cell_1.default);
          comp.label.string = "" + indexPath;
          comp.randomIcon();
          comp.randomShapeColor();
          comp.randomStar();
          comp.randomLevelSign();
          return cell;
        };
        this.listComp.onTouchItemAt = function(indexPath) {
          cc.log("" + indexPath);
        };
        var listWidth = this.listComp.node.width;
        var layout = new yx_flow_layout_1.YXFlowLayout();
        layout.horizontalSpacing = function(section) {
          if (0 == section) return 10;
          if (1 == section) return 10;
          if (2 == section) return 10;
          return 10;
        };
        layout.verticalSpacing = function(section) {
          if (0 == section) return 10;
          if (1 == section) return 10;
          if (2 == section) return 10;
          return 10;
        };
        layout.sectionInset = function(section) {
          if (1 == section) return new yx_collection_view_1.YXEdgeInsets(10, 0, 0, 0);
          if (2 == section) return new yx_collection_view_1.YXEdgeInsets(10, 0, 0, 0);
          if (3 == section) return new yx_collection_view_1.YXEdgeInsets(10, 0, 0, 0);
          return new yx_collection_view_1.YXEdgeInsets(0, 0, 0, 0);
        };
        layout.itemSize = function(indexPath, flowLayout) {
          var horizontalSpacing = _this.getFlowLayoutHorizontalSpacing(flowLayout, indexPath.section);
          var verticalSpacing = _this.getFlowLayoutVerticalSpacing(flowLayout, indexPath.section);
          var sectionInsets = _this.getFlowLayoutSectionInset(flowLayout, indexPath.section);
          if (0 == indexPath.section) {
            var width_1 = (listWidth - sectionInsets.left - sectionInsets.right - 3 * horizontalSpacing) / 4;
            return new cc.Size(width_1, 200);
          }
          if (1 == indexPath.section) {
            var width_2 = (listWidth - sectionInsets.left - sectionInsets.right - 0 * horizontalSpacing) / 1;
            return new cc.Size(width_2, 200);
          }
          if (2 == indexPath.section) {
            var width_3 = (listWidth - sectionInsets.left - sectionInsets.right - 1 * horizontalSpacing) / 2;
            return new cc.Size(width_3, 200);
          }
          var width = (listWidth - sectionInsets.left - sectionInsets.right - 4 * horizontalSpacing) / 5;
          return new cc.Size(width, 200);
        };
        this.listComp.layout = layout;
        this.receivedData();
      };
      demo2.prototype.getFlowLayoutHorizontalSpacing = function(flowLayout, section) {
        if (flowLayout.horizontalSpacing instanceof Function) return flowLayout.horizontalSpacing(section, flowLayout, this.listComp);
        return flowLayout.horizontalSpacing;
      };
      demo2.prototype.getFlowLayoutVerticalSpacing = function(flowLayout, section) {
        if (flowLayout.verticalSpacing instanceof Function) return flowLayout.verticalSpacing(section, flowLayout, this.listComp);
        return flowLayout.verticalSpacing;
      };
      demo2.prototype.getFlowLayoutSectionInset = function(flowLayout, section) {
        if (flowLayout.sectionInset instanceof Function) return flowLayout.sectionInset(section, flowLayout, this.listComp);
        return flowLayout.sectionInset;
      };
      __decorate([ property(yx_collection_view_1.YXCollectionView) ], demo2.prototype, "listComp", void 0);
      demo2 = __decorate([ ccclass ], demo2);
      return demo2;
    }(cc.Component);
    exports.default = demo2;
    cc._RF.pop();
  }, {
    "../cells/common-cell": "common-cell",
    "../lib/yx-collection-view": "yx-collection-view",
    "../lib/yx-flow-layout": "yx-flow-layout"
  } ],
  demo3: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29efeniZ+xNSY1NdA66vpTt", "demo3");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var horizontal_list_cell_1 = require("../cells/horizontal-list-cell");
    var yx_collection_view_1 = require("../lib/yx-collection-view");
    var yx_flow_layout_1 = require("../lib/yx-flow-layout");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    function randomRangeInt(a, b) {
      var value = Math.random() * (b - a) + a;
      return Math.floor(value);
    }
    var demo3 = function(_super) {
      __extends(demo3, _super);
      function demo3() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listComp = null;
        _this.testData = [];
        return _this;
      }
      demo3.prototype.onLoad = function() {
        this.node.getChildByName("back").once(cc.Node.EventType.TOUCH_END, this.back, this);
      };
      demo3.prototype.back = function() {
        cc.director.loadScene("home");
      };
      demo3.prototype.receivedData = function() {
        this.testData = [];
        for (var index = 0; index < 1e3; index++) {
          var array = [];
          var length = randomRangeInt(1, 20);
          for (var j = 0; j < length; j++) array.push(j);
          this.testData.push(array);
        }
        this.listComp.reloadData();
      };
      demo3.prototype.start = function() {
        var _this = this;
        this.listComp.numberOfItems = function() {
          return _this.testData.length;
        };
        this.listComp.cellForItemAt = function(indexPath, collectionView) {
          var data = _this.testData[indexPath.item];
          var cell = collectionView.dequeueReusableCell("cell");
          var comp = cell.getComponent(horizontal_list_cell_1.default);
          comp.dataArray = data;
          comp.list.reloadData();
          comp.list.scrollView.scrollToLeft();
          return cell;
        };
        var layout = new yx_flow_layout_1.YXFlowLayout();
        layout.verticalSpacing = 20;
        layout.horizontalSpacing;
        layout.itemSize = new cc.Size(700, 200);
        this.listComp.layout = layout;
        this.receivedData();
      };
      __decorate([ property(yx_collection_view_1.YXCollectionView) ], demo3.prototype, "listComp", void 0);
      demo3 = __decorate([ ccclass ], demo3);
      return demo3;
    }(cc.Component);
    exports.default = demo3;
    cc._RF.pop();
  }, {
    "../cells/horizontal-list-cell": "horizontal-list-cell",
    "../lib/yx-collection-view": "yx-collection-view",
    "../lib/yx-flow-layout": "yx-flow-layout"
  } ],
  home: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "024d9K7/e5ChaqYUXANa58B", "home");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var common_cell_1 = require("../cells/common-cell");
    var yx_collection_view_1 = require("../lib/yx-collection-view");
    var yx_flow_layout_1 = require("../lib/yx-flow-layout");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var home = function(_super) {
      __extends(home, _super);
      function home() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listComp = null;
        return _this;
      }
      home_1 = home;
      home.prototype.start = function() {
        var array = [ {
          name: "Flow Layout",
          is_header: true
        }, {
          name: "\u57fa\u672c\u5217\u8868",
          scene: "demo1"
        }, {
          name: "\u5206\u533a\u6392\u5217",
          scene: "demo2"
        }, {
          name: "\u5782\u76f4\u5217\u8868\u5d4c\u5957\u6c34\u5e73\u5217\u8868",
          scene: "demo3"
        } ];
        this.listComp.numberOfItems = function() {
          return array.length;
        };
        this.listComp.cellForItemAt = function(indexPath, collectionView) {
          var rowData = array[indexPath.item];
          if (rowData.is_header) {
            var cell_1 = collectionView.dequeueReusableCell("header");
            var content = cell_1.getChildByName("content");
            var label = content.getChildByName("label").getComponent(cc.Label);
            label.string = rowData.name;
            return cell_1;
          }
          var cell = collectionView.dequeueReusableCell("cell");
          var comp = cell.getComponent(common_cell_1.default);
          comp.label.string = rowData.name;
          return cell;
        };
        this.listComp.onTouchItemAt = function(indexPath, collectionView) {
          var rowData = array[indexPath.item];
          if (rowData.is_header) return;
          home_1.LAST_OFFSET = collectionView.scrollView.getScrollOffset();
          home_1.LAST_OFFSET.x = -home_1.LAST_OFFSET.x;
          cc.director.loadScene(rowData.scene);
        };
        var layout = new yx_flow_layout_1.YXFlowLayout();
        layout.verticalSpacing = 20;
        layout.horizontalSpacing = 20;
        var listWidth = this.listComp.node.width;
        var itemWidth = (listWidth - 1 * layout.horizontalSpacing) / 2;
        layout.itemSize = function(indexPath) {
          var rowData = array[indexPath.item];
          if (rowData.is_header) return new cc.Size(listWidth, 100);
          return new cc.Size(itemWidth, 200);
        };
        this.listComp.layout = layout;
        this.listComp.reloadData();
        if (home_1.LAST_OFFSET) {
          this.listComp.scrollView.scrollToOffset(home_1.LAST_OFFSET);
          this.listComp.markForUpdateVisibleData();
        }
      };
      var home_1;
      home.LAST_OFFSET = null;
      __decorate([ property(yx_collection_view_1.YXCollectionView) ], home.prototype, "listComp", void 0);
      home = home_1 = __decorate([ ccclass ], home);
      return home;
    }(cc.Component);
    exports.default = home;
    cc._RF.pop();
  }, {
    "../cells/common-cell": "common-cell",
    "../lib/yx-collection-view": "yx-collection-view",
    "../lib/yx-flow-layout": "yx-flow-layout"
  } ],
  "horizontal-list-cell": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0632gpXVBJ4YEpVCcZDO/6", "horizontal-list-cell");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var yx_collection_view_1 = require("../lib/yx-collection-view");
    var yx_flow_layout_1 = require("../lib/yx-flow-layout");
    var common_cell_1 = require("./common-cell");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HorizontalListCell = function(_super) {
      __extends(HorizontalListCell, _super);
      function HorizontalListCell() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.list = null;
        _this.dataArray = [];
        return _this;
      }
      HorizontalListCell.prototype.onLoad = function() {
        var _this = this;
        this.list.numberOfItems = function() {
          return _this.dataArray.length;
        };
        this.list.cellForItemAt = function(indexPath, collectionView) {
          var cell = collectionView.dequeueReusableCell("cell");
          var comp = cell.getComponent(common_cell_1.default);
          comp.label.string = "" + indexPath;
          comp.randomIcon();
          comp.randomStar();
          comp.randomLevelSign();
          comp.randomShapeColor();
          return cell;
        };
        this.list.onTouchItemAt = function(indexPath) {
          cc.log("" + indexPath);
        };
        var layout = new yx_flow_layout_1.YXFlowLayout();
        layout.itemSize = new cc.Size(130, 200);
        layout.horizontalSpacing = 20;
        this.list.layout = layout;
      };
      __decorate([ property(yx_collection_view_1.YXCollectionView) ], HorizontalListCell.prototype, "list", void 0);
      HorizontalListCell = __decorate([ ccclass ], HorizontalListCell);
      return HorizontalListCell;
    }(cc.Component);
    exports.default = HorizontalListCell;
    cc._RF.pop();
  }, {
    "../lib/yx-collection-view": "yx-collection-view",
    "../lib/yx-flow-layout": "yx-flow-layout",
    "./common-cell": "common-cell"
  } ],
  "yx-collection-view": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8e9771bWxlJwrmWW9kc3ksX", "yx-collection-view");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.YXCollectionView = exports.YXLayout = exports.YXLayoutAttributes = exports.YXEdgeInsets = exports.YXIndexPath = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, executionOrder = _a.executionOrder, disallowMultiple = _a.disallowMultiple, help = _a.help;
    var Enum = cc.Enum;
    var Node = cc.Node;
    var Prefab = cc.Prefab;
    var ValueType = cc.ValueType;
    var NodePool = cc.NodePool;
    var Component = cc.Component;
    var ScrollView = cc.ScrollView;
    var EventMouse = cc.Event.EventMouse;
    var EventTouch = cc.Event.EventTouch;
    var Mask = cc.Mask;
    var NodeEventType = cc.Node.EventType;
    var _vec3Out = new cc.Vec3();
    var _scroll_view_visible_rect = new cc.Rect();
    var _recycleInvisibleNodes_realFrame = new cc.Rect();
    var _yx_collection_view_scroll_direction;
    (function(_yx_collection_view_scroll_direction) {
      _yx_collection_view_scroll_direction[_yx_collection_view_scroll_direction["HORIZONTAL"] = 0] = "HORIZONTAL";
      _yx_collection_view_scroll_direction[_yx_collection_view_scroll_direction["VERTICAL"] = 1] = "VERTICAL";
    })(_yx_collection_view_scroll_direction || (_yx_collection_view_scroll_direction = {}));
    Enum(_yx_collection_view_scroll_direction);
    var _yx_collection_view_list_mode;
    (function(_yx_collection_view_list_mode) {
      _yx_collection_view_list_mode[_yx_collection_view_list_mode["RECYCLE"] = 0] = "RECYCLE";
      _yx_collection_view_list_mode[_yx_collection_view_list_mode["PRELOAD"] = 1] = "PRELOAD";
    })(_yx_collection_view_list_mode || (_yx_collection_view_list_mode = {}));
    Enum(_yx_collection_view_list_mode);
    var _yx_editor_register_cell_info = function() {
      function _yx_editor_register_cell_info() {
        this.prefab = null;
        this.identifier = "";
        this.comp = "";
      }
      __decorate([ property({
        type: Prefab,
        tooltip: "cell \u8282\u70b9\u9884\u5236\u4f53\uff0c\u5fc5\u987b\u914d\u7f6e"
      }) ], _yx_editor_register_cell_info.prototype, "prefab", void 0);
      __decorate([ property({
        tooltip: "\u8282\u70b9\u91cd\u7528\u6807\u8bc6\u7b26\n\u5982\u679c\u786e\u5b9a\u6b64\u5217\u8868\u4ec5\u4f7f\u7528\u4e00\u79cd\u8282\u70b9\u7c7b\u578b\uff0c\u53ef\u4ee5\u5ffd\u7565\u6b64\u914d\u7f6e"
      }) ], _yx_editor_register_cell_info.prototype, "identifier", void 0);
      __decorate([ property({
        tooltip: "\u8282\u70b9\u6302\u8f7d\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\n\u5982\u679c\u9700\u8981\u76d1\u542c NodePool \u7684\u91cd\u7528/\u56de\u6536\u4e8b\u4ef6\uff0c\u786e\u4fdd\u4f60\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5df2\u7ecf\u5b9e\u73b0\u4e86 YXCollectionViewCell \u63a5\u53e3\u5e76\u914d\u7f6e\u6b64\u5c5e\u6027\u4e3a\u4f60\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u540d\n\u5982\u679c\u4e0d\u9700\u8981\uff0c\u53ef\u4ee5\u5ffd\u7565\u6b64\u914d\u7f6e"
      }) ], _yx_editor_register_cell_info.prototype, "comp", void 0);
      _yx_editor_register_cell_info = __decorate([ ccclass("_yx_editor_register_cell_info") ], _yx_editor_register_cell_info);
      return _yx_editor_register_cell_info;
    }();
    var YXIndexPath = function(_super) {
      __extends(YXIndexPath, _super);
      function YXIndexPath(section, item) {
        var _this = _super.call(this) || this;
        _this.section = 0;
        _this.item = 0;
        _this.section = section;
        _this.item = item;
        return _this;
      }
      Object.defineProperty(YXIndexPath.prototype, "row", {
        get: function() {
          return this.item;
        },
        set: function(value) {
          this.item = value;
        },
        enumerable: false,
        configurable: true
      });
      YXIndexPath.prototype.clone = function() {
        return new YXIndexPath(this.section, this.item);
      };
      YXIndexPath.prototype.equals = function(other) {
        return this.section == other.section && this.item == other.item;
      };
      YXIndexPath.prototype.set = function(other) {
        this.section = other.section;
        this.item = other.item;
      };
      YXIndexPath.prototype.toString = function() {
        return this.section + " - " + this.item;
      };
      YXIndexPath.ZERO = new YXIndexPath(0, 0);
      return YXIndexPath;
    }(ValueType);
    exports.YXIndexPath = YXIndexPath;
    var YXEdgeInsets = function(_super) {
      __extends(YXEdgeInsets, _super);
      function YXEdgeInsets(top, left, bottom, right) {
        var _this = _super.call(this) || this;
        _this.top = top;
        _this.left = left;
        _this.bottom = bottom;
        _this.right = right;
        return _this;
      }
      YXEdgeInsets.prototype.clone = function() {
        return new YXEdgeInsets(this.top, this.left, this.bottom, this.right);
      };
      YXEdgeInsets.prototype.equals = function(other) {
        return this.top == other.top && this.left == other.left && this.bottom == other.bottom && this.right == other.right;
      };
      YXEdgeInsets.prototype.set = function(other) {
        this.top = other.top;
        this.left = other.left;
        this.bottom = other.bottom;
        this.right = other.right;
      };
      YXEdgeInsets.prototype.toString = function() {
        return "[ " + this.top + ", " + this.left + ", " + this.bottom + ", " + this.right + " ]";
      };
      YXEdgeInsets.ZERO = new YXEdgeInsets(0, 0, 0, 0);
      return YXEdgeInsets;
    }(ValueType);
    exports.YXEdgeInsets = YXEdgeInsets;
    var _cell_ = function(_super) {
      __extends(_cell_, _super);
      function _cell_() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return _cell_;
    }(Component);
    var _scroll_view = function(_super) {
      __extends(_scroll_view, _super);
      function _scroll_view() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      _scroll_view.prototype._onMouseWheel = function(event, captureListeners) {};
      _scroll_view.prototype._startInertiaScroll = function(touchMoveVelocity) {
        _super.prototype["_startInertiaScroll"].call(this, touchMoveVelocity);
        this._yxOnStartInertiaScroll && this._yxOnStartInertiaScroll(touchMoveVelocity);
      };
      _scroll_view.prototype._onTouchBegan = function(event, captureListeners) {
        if (false == this.node.getComponent(YXCollectionView).scrollEnabled) return;
        var nodes = [ event.target ];
        captureListeners && (nodes = nodes.concat(captureListeners));
        for (var index = 0; index < nodes.length; index++) {
          var element = nodes[index];
          element["_yx_scroll_target"] = null;
          var collectionView = element.getComponent(YXCollectionView);
          if (collectionView) {
            var offset = collectionView.scrollView.getScrollOffset();
            offset.x = -offset.x;
            collectionView["_scroll_offset_on_touch_start"] = offset;
          }
        }
        _super.prototype["_onTouchBegan"].call(this, event, captureListeners);
      };
      _scroll_view.prototype._onTouchMoved = function(event, captureListeners) {
        if (false == this.node.getComponent(YXCollectionView).scrollEnabled) return;
        var scrollTarget = this._yxGetScrollTarget(event, captureListeners);
        this.node === scrollTarget && _super.prototype["_onTouchMoved"].call(this, event, captureListeners);
      };
      _scroll_view.prototype.hasNestedViewGroup = function(event, captureListeners) {
        return false;
      };
      _scroll_view.prototype._stopPropagationIfTargetIsMe = function(event) {
        if (true == this["_touchMoved"]) {
          event.stopPropagation();
          return;
        }
        _super.prototype["_stopPropagationIfTargetIsMe"].call(this, event);
      };
      _scroll_view.prototype._yxGetScrollTarget = function(event, captureListeners) {
        var cache = event.target["_yx_scroll_target"];
        if (cache) return cache;
        var nodes = [ event.target ];
        captureListeners && (nodes = nodes.concat(captureListeners));
        if (1 == nodes.length) return nodes[0];
        var touch = event.touch;
        var deltaMove = touch.getLocation().subtract(touch.getStartLocation());
        var x = Math.abs(deltaMove.x);
        var y = Math.abs(deltaMove.y);
        var distance = Math.abs(x - y);
        if (distance < 5) return null;
        var result = null;
        for (var index = 0; index < nodes.length; index++) {
          var element = nodes[index];
          var scrollComp = element.getComponent(_scroll_view);
          if (scrollComp) {
            var collectionView = element.getComponent(YXCollectionView);
            if (collectionView && false == collectionView.scrollEnabled) continue;
            null == result && (result = element);
            if (scrollComp.horizontal && scrollComp.vertical) continue;
            if (!scrollComp.horizontal && !scrollComp.vertical) continue;
            if (scrollComp.horizontal && x > y) {
              result = element;
              break;
            }
            if (scrollComp.vertical && y > x) {
              result = element;
              break;
            }
          }
        }
        if (result) for (var index = 0; index < nodes.length; index++) {
          var element = nodes[index];
          element["_yx_scroll_target"] = result;
        }
        return result;
      };
      return _scroll_view;
    }(ScrollView);
    var YXLayoutAttributes = function() {
      function YXLayoutAttributes() {
        this.indexPath = null;
        this.frame = null;
        this.zIndex = 0;
        this.opacity = null;
        this.scale = null;
        this.offset = null;
        this.eulerAngles = null;
      }
      return YXLayoutAttributes;
    }();
    exports.YXLayoutAttributes = YXLayoutAttributes;
    var YXLayout = function() {
      function YXLayout() {
        this.contentSize = cc.Size.ZERO;
        this.attributes = [];
      }
      YXLayout.prototype.initOffset = function(collectionView) {};
      YXLayout.prototype.targetOffset = function(collectionView, touchMoveVelocity, startOffset) {
        return null;
      };
      YXLayout.prototype.onScrollEnded = function(collectionView) {};
      YXLayout.prototype.layoutAttributesForElementsInRect = function(rect, collectionView) {
        var result = [];
        for (var index = 0; index < this.attributes.length; index++) {
          var attr = this.attributes[index];
          true == rect.intersects(attr.frame) && result.push(attr);
        }
        return result;
      };
      YXLayout.prototype.layoutAttributesForItemAtIndexPath = function(indexPath, collectionView) {
        return this.attributes.find(function(a) {
          return a.indexPath.equals(indexPath);
        });
      };
      YXLayout.prototype.scrollTo = function(indexPath, collectionView) {
        return null;
      };
      YXLayout.prototype.shouldUpdateAttributesZIndex = function() {
        return false;
      };
      YXLayout.prototype.shouldUpdateAttributesOpacity = function() {
        return false;
      };
      YXLayout.prototype.shouldUpdateAttributesForBoundsChange = function() {
        return false;
      };
      return YXLayout;
    }();
    exports.YXLayout = YXLayout;
    var YXCollectionView = function(_super) {
      __extends(YXCollectionView, _super);
      function YXCollectionView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mask = true;
        _this.scrollEnabled = true;
        _this.scrollDirection = YXCollectionView_1.ScrollDirection.VERTICAL;
        _this.mode = YXCollectionView_1.Mode.RECYCLE;
        _this.preloadNodesLimitPerFrame = 2;
        _this.preloadProgress = null;
        _this.frameInterval = 1;
        _this.recycleInterval = 1;
        _this.registerCellForEditor = [];
        _this.pools = new Map();
        _this.makers = new Map();
        _this.numberOfSections = 1;
        _this.numberOfItems = 0;
        _this.cellForItemAt = null;
        _this.onCellDisplay = null;
        _this.onCellEndDisplay = null;
        _this.onTouchItemAt = null;
        _this.layout = null;
        _this.visibleNodesMap = new Map();
        _this.preloadNodesMap = new Map();
        _this._late_reload_data = false;
        _this.reloadDataCounter = 0;
        _this._frameIdx = 0;
        _this._late_update_visible_data = false;
        _this._late_recycle_invisible_node = false;
        _this.preloadIdx = null;
        _this._scroll_offset_on_touch_start = null;
        return _this;
      }
      YXCollectionView_1 = YXCollectionView;
      Object.defineProperty(YXCollectionView.prototype, "scrollView", {
        get: function() {
          var result = this.node.getComponent(_scroll_view);
          null == result && (result = this.node.addComponent(_scroll_view));
          if (null == result.content) {
            var content = new Node("com.yx.scroll.content");
            content.parent = result.node;
            content.setContentSize(this.node.getContentSize());
            result.content = content;
          }
          if (this.mask) {
            var mask = result.node.getComponent(Mask);
            if (null == mask) {
              mask = result.node.addComponent(Mask);
              mask.type = Mask.Type.RECT;
            }
          }
          return result;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(YXCollectionView.prototype, "_scrollView", {
        get: function() {
          return this.scrollView;
        },
        enumerable: false,
        configurable: true
      });
      YXCollectionView.prototype.register = function(identifier, maker, poolComp) {
        void 0 === poolComp && (poolComp = null);
        var pool = new NodePool(poolComp);
        this.pools.set(identifier, pool);
        this.makers.set(identifier, maker);
      };
      YXCollectionView.prototype.dequeueReusableCell = function(identifier) {
        var pool = this.pools.get(identifier);
        if (null == pool) throw new Error("YXCollectionView: \u672a\u6ce8\u518c\u6807\u8bc6\u7b26\u4e3a `" + identifier + "` \u7684 cell\uff0c\u8bf7\u5148\u8c03\u7528 YXCollectionView \u7684 register() \u65b9\u6cd5\u6ce8\u518c cell \u8282\u70b9");
        var result = null;
        null == result && (result = pool.get());
        if (null == result) {
          var maker = this.makers.get(identifier);
          result = maker();
          var cell = result.getComponent(_cell_) || result.addComponent(_cell_);
          cell.identifier = identifier;
          result.on(NodeEventType.TOUCH_END, this.onTouchItem, this);
        }
        return result;
      };
      YXCollectionView.prototype.onTouchItem = function(ev) {
        if (this.onTouchItemAt) {
          var cell = ev.target.getComponent(_cell_);
          this.onTouchItemAt(cell.attributes.indexPath, this);
        }
      };
      Object.defineProperty(YXCollectionView.prototype, "visibleRect", {
        get: function() {
          var visibleRect = _scroll_view_visible_rect;
          visibleRect.origin = this.scrollView.getScrollOffset();
          visibleRect.x = -visibleRect.x;
          visibleRect.size = this.scrollView.node.getContentSize();
          return visibleRect;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(YXCollectionView.prototype, "visibleNodes", {
        get: function() {
          var result = [];
          this.visibleNodesMap.forEach(function(value) {
            result.push(value);
          });
          return result;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(YXCollectionView.prototype, "visibleCells", {
        get: function() {
          var result = [];
          this.visibleNodesMap.forEach(function(value) {
            result.push(value.getComponent(_cell_));
          });
          return result;
        },
        enumerable: false,
        configurable: true
      });
      YXCollectionView.prototype.getVisibleNode = function(indexPath) {
        return this.visibleNodesMap.get(indexPath.toString());
      };
      YXCollectionView.prototype.getVisibleCell = function(indexPath) {
        var node = this.getVisibleNode(indexPath);
        if (null == node) return null;
        return node.getComponent(_cell_);
      };
      YXCollectionView.prototype.getCellComp = function(node) {
        if (null == node) return null;
        return node.getComponent(_cell_);
      };
      YXCollectionView.prototype.reloadData = function() {
        this.node.activeInHierarchy && this.node.parent ? this._reloadData() : this._late_reload_data = true;
      };
      YXCollectionView.prototype.update_reloadDataIfNeeds = function(dt) {
        if (false == this._late_reload_data) return;
        this._reloadData();
      };
      YXCollectionView.prototype._reloadData = function() {
        var _this = this;
        this._late_reload_data = false;
        if (null == this.layout) throw new Error("YXCollectionView: \u53c2\u6570\u9519\u8bef\uff0c\u8bf7\u6b63\u786e\u914d\u7f6e layout \u4ee5\u786e\u5b9a\u5e03\u5c40\u65b9\u6848");
        this.scrollView.stopAutoScroll();
        this.pools.forEach(function(element) {
          element.clear();
        });
        if (this.mode == _yx_collection_view_list_mode.RECYCLE) {
          this.visibleNodesMap.forEach(function(value, key) {
            var cell = value.getComponent(_cell_);
            _this.pools.get(cell.identifier).put(value);
            _this.visibleNodesMap.delete(key);
            _this.onCellEndDisplay && _this.onCellEndDisplay(cell.node, cell.attributes.indexPath, _this);
          });
          this.visibleNodesMap.clear();
        }
        if (this.mode == _yx_collection_view_list_mode.PRELOAD) {
          this.visibleNodesMap.forEach(function(value, key) {
            if (value) {
              value.removeFromParent();
              value.destroy();
            }
          });
          this.visibleNodesMap.clear();
          this.preloadNodesMap.forEach(function(value, key) {
            if (value) {
              value.removeFromParent();
              value.destroy();
            }
          });
          this.preloadNodesMap.clear();
          this.preloadIdx = 0;
        }
        var offset = this.scrollView.getScrollOffset();
        offset.x = -offset.x;
        this.layout.prepare(this);
        this.scrollView.content.setContentSize(this.layout.contentSize);
        if (this.reloadDataCounter <= 0) this.layout.initOffset(this); else {
          var maxOffset = this.scrollView.getMaxScrollOffset();
          cc.Vec2.min(offset, offset, maxOffset);
          this.scrollView.scrollToOffset(offset);
        }
        this.markForUpdateVisibleData(true);
        this.reloadDataCounter++;
      };
      YXCollectionView.prototype.reloadVisibleCells = function(rect) {
        void 0 === rect && (rect = null);
        null == rect && (rect = this.visibleRect);
        var layoutAttributes = this.layout.layoutAttributesForElementsInRect(rect, this);
        var shouldUpdateAttributesZIndex = this.layout.shouldUpdateAttributesZIndex();
        if (shouldUpdateAttributesZIndex) {
          null != layoutAttributes && layoutAttributes != this.layout.attributes || (layoutAttributes = this.layout.attributes.slice());
          layoutAttributes.sort(function(a, b) {
            return a.zIndex - b.zIndex;
          });
        }
        for (var index = 0; index < layoutAttributes.length; index++) {
          var element = layoutAttributes[index];
          var cellNode = null;
          null == cellNode && (cellNode = this.preloadNodesMap.get(element.indexPath.toString()));
          null == cellNode && (cellNode = this.getVisibleNode(element.indexPath));
          null == cellNode && (cellNode = this.cellForItemAt(element.indexPath, this));
          if (null == cellNode) throw new Error("\u9700\u8981\u5b9e\u73b0 cellForItemAt \u65b9\u6cd5\u5e76\u786e\u4fdd\u6b63\u786e\u7684\u8fd4\u56de\u4e86\u8282\u70b9");
          var restoreStatus = this.restoreCellNodeIfNeeds(cellNode);
          this.applyLayoutAttributes(cellNode, element);
          shouldUpdateAttributesZIndex && cellNode.setSiblingIndex(-1);
          this.visibleNodesMap.set(element.indexPath.toString(), cellNode);
          1 == restoreStatus && this.onCellDisplay && this.onCellDisplay(cellNode, element.indexPath, this);
        }
        layoutAttributes = [];
      };
      YXCollectionView.prototype.restoreCellNodeIfNeeds = function(node) {
        var restoreStatus = 0;
        if (node.parent != this.scrollView.content) {
          node.parent = this.scrollView.content;
          restoreStatus = 1;
        }
        if (this.mode == _yx_collection_view_list_mode.PRELOAD && 255 !== node.opacity) {
          node.opacity = 255;
          restoreStatus = 1;
        }
        return restoreStatus;
      };
      YXCollectionView.prototype.recycleInvisibleNodes = function(visibleRect) {
        var _this = this;
        void 0 === visibleRect && (visibleRect = null);
        null == visibleRect && (visibleRect = this.visibleRect);
        var _realFrame = _recycleInvisibleNodes_realFrame;
        var _contentSize = this.scrollView.content.getContentSize();
        this.visibleNodesMap.forEach(function(value, key) {
          var cell = value.getComponent(_cell_);
          var boundingBox = value.getBoundingBox();
          _realFrame.size = boundingBox.size;
          _realFrame.x = .5 * (_contentSize.width - _realFrame.width) + value.position.x;
          _realFrame.y = .5 * (_contentSize.height - _realFrame.height) - value.position.y;
          if (false == visibleRect.intersects(_realFrame)) {
            if (_this.mode == _yx_collection_view_list_mode.PRELOAD) {
              value.opacity = 0;
              _this.preloadNodesMap.set(cell.attributes.indexPath.toString(), value);
            } else _this.pools.get(cell.identifier).put(value);
            _this.visibleNodesMap.delete(key);
            _this.onCellEndDisplay && _this.onCellEndDisplay(cell.node, cell.attributes.indexPath, _this);
          }
        });
      };
      YXCollectionView.prototype.applyLayoutAttributes = function(node, attributes) {
        var cell = node.getComponent(_cell_);
        cell.attributes = attributes;
        node.setContentSize(attributes.frame.size);
        _vec3Out.x = .5 * -(this.layout.contentSize.width - attributes.frame.width) + attributes.frame.x;
        _vec3Out.y = .5 * +(this.layout.contentSize.height - attributes.frame.height) - attributes.frame.y;
        _vec3Out.z = node.position.z;
        attributes.offset && cc.Vec3.add(_vec3Out, _vec3Out, attributes.offset);
        node.position = _vec3Out;
        if (attributes.scale) {
          node.scaleX = attributes.scale.x;
          node.scaleY = attributes.scale.y;
          node.scaleZ = attributes.scale.z;
        }
        attributes.eulerAngles && (node.eulerAngles = attributes.eulerAngles);
        this.layout.shouldUpdateAttributesOpacity() && attributes.opacity && (node.opacity = attributes.opacity);
      };
      YXCollectionView.prototype.scrollTo = function(indexPath, timeInSecond, attenuated) {
        var _a;
        void 0 === timeInSecond && (timeInSecond = 0);
        void 0 === attenuated && (attenuated = true);
        var toOffSet = this.layout.scrollTo(indexPath, this);
        null == toOffSet && (toOffSet = null === (_a = this.layout.layoutAttributesForItemAtIndexPath(indexPath, this)) || void 0 === _a ? void 0 : _a.frame.origin);
        if (toOffSet) {
          this.scrollView.stopAutoScroll();
          this.scrollView.scrollToOffset(toOffSet, timeInSecond, attenuated);
          this.markForUpdateVisibleData();
        }
      };
      YXCollectionView.prototype.onLoad = function() {
        var _loop_1 = function(index) {
          var element = this_1.registerCellForEditor[index];
          this_1.register(element.identifier, function() {
            return cc.instantiate(element.prefab);
          }, element.comp);
        };
        var this_1 = this;
        for (var index = 0; index < this.registerCellForEditor.length; index++) _loop_1(index);
        this.node.on("scroll-began", this.onScrollBegan, this);
        this.node.on("scrolling", this.onScrolling, this);
        this.node.on("touch-up", this.onScrollTouchUp, this);
        this.node.on("scroll-ended", this.onScrollEnded, this);
        this._scrollView._yxOnStartInertiaScroll = this.onStartInertiaScroll.bind(this);
      };
      YXCollectionView.prototype.onDestroy = function() {
        this.node.off("scroll-began", this.onScrollBegan, this);
        this.node.off("scrolling", this.onScrolling, this);
        this.node.off("touch-up", this.onScrollTouchUp, this);
        this.node.off("scroll-ended", this.onScrollEnded, this);
        this.visibleNodesMap.forEach(function(value, key) {
          if (value) {
            value.removeFromParent();
            value.destroy();
          }
        });
        this.visibleNodesMap.clear();
        this.visibleNodesMap = null;
        this.preloadNodesMap.forEach(function(value, key) {
          if (value) {
            value.removeFromParent();
            value.destroy();
          }
        });
        this.preloadNodesMap.clear();
        this.preloadNodesMap = null;
        this.pools.forEach(function(element) {
          element.clear();
        });
        this.pools.clear();
        this.pools = null;
        this.makers.clear();
        this.makers = null;
        this.layout && (this.layout.attributes = []);
      };
      YXCollectionView.prototype.update = function(dt) {
        this._frameIdx++;
        this.update_reloadVisibleCellsIfNeeds(dt);
        this.update_recycleInvisibleNodesIfNeeds(dt);
        this.update_reloadDataIfNeeds(dt);
        this.update_preloadNodeIfNeeds(dt);
      };
      YXCollectionView.prototype.markForUpdateVisibleData = function(force) {
        void 0 === force && (force = false);
        if (force) {
          var visibleRect = this.visibleRect;
          this.reloadVisibleCells(visibleRect);
          this.recycleInvisibleNodes(visibleRect);
          return;
        }
        this._late_update_visible_data = true;
        this._late_recycle_invisible_node = true;
      };
      YXCollectionView.prototype.update_reloadVisibleCellsIfNeeds = function(dt) {
        if ((this.frameInterval <= 1 || this._frameIdx % this.frameInterval == 0) && this._late_update_visible_data) {
          this._late_update_visible_data = false;
          this.reloadVisibleCells();
        }
      };
      YXCollectionView.prototype.update_recycleInvisibleNodesIfNeeds = function(dt) {
        if (this.recycleInterval >= 1 && this._frameIdx % this.recycleInterval == 0 && this._late_recycle_invisible_node) {
          this._late_recycle_invisible_node = false;
          this.recycleInvisibleNodes();
        }
      };
      YXCollectionView.prototype.update_preloadNodeIfNeeds = function(dt) {
        if (this.mode !== _yx_collection_view_list_mode.PRELOAD) return;
        if (null == this.preloadIdx) return;
        if (this.preloadIdx >= this.layout.attributes.length) return;
        if (this.preloadNodesLimitPerFrame <= 0) return;
        var index = 0;
        var stop = false;
        while (!stop && index < this.preloadNodesLimitPerFrame) {
          var attr = this.layout.attributes[this.preloadIdx];
          var key = attr.indexPath.toString();
          var node = null;
          null == node && (node = this.getVisibleNode(attr.indexPath));
          null == node && (node = this.preloadNodesMap.get(key));
          if (null == node) {
            node = this.cellForItemAt(attr.indexPath, this);
            this.restoreCellNodeIfNeeds(node);
            this.applyLayoutAttributes(node, attr);
            this.visibleNodesMap.set(key, node);
            this._late_recycle_invisible_node = true;
          }
          this.preloadNodesMap.set(key, node);
          this.preloadIdx++;
          index++;
          this.preloadProgress && this.preloadProgress(this.preloadIdx, this.layout.attributes.length);
          stop = this.preloadIdx >= this.layout.attributes.length;
        }
      };
      YXCollectionView.prototype.onScrollBegan = function() {};
      YXCollectionView.prototype.onScrolling = function() {
        this.markForUpdateVisibleData(this.layout.shouldUpdateAttributesForBoundsChange());
        this._late_recycle_invisible_node = true;
      };
      YXCollectionView.prototype.onScrollTouchUp = function() {
        this.recycleInvisibleNodes();
      };
      YXCollectionView.prototype.onScrollEnded = function() {
        this.markForUpdateVisibleData();
        this.recycleInvisibleNodes();
        this.layout.onScrollEnded(this);
      };
      YXCollectionView.prototype.onStartInertiaScroll = function(touchMoveVelocity) {
        var endValue = this.layout.targetOffset(this, touchMoveVelocity, this._scroll_offset_on_touch_start);
        if (endValue) {
          this.scrollView.scrollToOffset(endValue.offset, endValue.time);
          this.markForUpdateVisibleData();
        }
      };
      Object.defineProperty(YXCollectionView.prototype, "visibleIndexPaths", {
        get: function() {
          var result = [];
          this.visibleNodesMap.forEach(function(value) {
            var cell = value.getComponent(_cell_);
            result.push(cell.attributes.indexPath.clone());
          });
          return result;
        },
        enumerable: false,
        configurable: true
      });
      YXCollectionView.prototype.getVisibleNodeIndexPath = function(node) {
        var comp = this.getCellComp(node);
        if (comp) return comp.attributes.indexPath;
        return null;
      };
      var YXCollectionView_1;
      YXCollectionView.ScrollDirection = _yx_collection_view_scroll_direction;
      YXCollectionView.Mode = _yx_collection_view_list_mode;
      __decorate([ property({
        tooltip: "\u81ea\u52a8\u7ed9\u6302\u8f7d\u8282\u70b9\u6dfb\u52a0 mask \u7ec4\u4ef6",
        visible: true
      }) ], YXCollectionView.prototype, "mask", void 0);
      __decorate([ property({
        tooltip: "\u5141\u8bb8\u624b\u52bf\u6eda\u52a8"
      }) ], YXCollectionView.prototype, "scrollEnabled", void 0);
      __decorate([ property({
        type: _yx_collection_view_scroll_direction,
        tooltip: "\u5217\u8868\u6eda\u52a8\u65b9\u5411"
      }) ], YXCollectionView.prototype, "scrollDirection", void 0);
      __decorate([ property({
        type: _yx_collection_view_list_mode,
        tooltip: "\u5217\u8868\u5355\u5143\u8282\u70b9\u52a0\u8f7d\u6a21\u5f0f (\u8be6\u7ec6\u533a\u522b\u67e5\u770b\u679a\u4e3e\u6ce8\u91ca)\nRECYCLE: \u6839\u636e\u5217\u8868\u663e\u793a\u8303\u56f4\u52a0\u8f7d\u9700\u8981\u7684\u8282\u70b9\uff0c\u540c\u7c7b\u578b\u7684\u8282\u70b9\u4f1a\u8fdb\u884c\u590d\u7528\nPRELOAD: \u4f1a\u5b9e\u4f8b\u5316\u6240\u6709\u8282\u70b9\uff0c\u5e76\u975e\u771f\u6b63\u7684\u865a\u62df\u5217\u8868\uff0c\u4ec5\u4ec5\u662f\u628a\u663e\u793a\u8303\u56f4\u5916\u7684\u8282\u70b9\u900f\u660e\u4e86\uff0c\u5982\u679c\u5217\u8868\u6570\u636e\u91cf\u5f88\u5927\u4ecd\u7136\u4f1a\u5361"
      }) ], YXCollectionView.prototype, "mode", void 0);
      __decorate([ property({
        tooltip: "\u9884\u52a0\u8f7d\u6a21\u5f0f\u4e0b\u6bcf\u5e27\u52a0\u8f7d\u591a\u5c11\u4e2a\u8282\u70b9",
        visible: function() {
          return this.mode == _yx_collection_view_list_mode.PRELOAD;
        }
      }) ], YXCollectionView.prototype, "preloadNodesLimitPerFrame", void 0);
      __decorate([ property({
        tooltip: "\u6bcf\u591a\u5c11\u5e27\u5237\u65b0\u4e00\u6b21\u53ef\u89c1\u8282\u70b9\uff0c1 \u8868\u793a\u6bcf\u5e27\u90fd\u5237"
      }) ], YXCollectionView.prototype, "frameInterval", void 0);
      __decorate([ property({
        tooltip: "\u6eda\u52a8\u8fc7\u7a0b\u4e2d\uff0c\u6bcf\u591a\u5c11\u5e27\u56de\u6536\u4e00\u6b21\u4e0d\u53ef\u89c1\u8282\u70b9\uff0c1\u8868\u793a\u6bcf\u5e27\u90fd\u56de\u6536\uff0c0\u8868\u793a\u4e0d\u5728\u6eda\u52a8\u8fc7\u7a0b\u4e2d\u56de\u6536\u4e0d\u53ef\u89c1\u8282\u70b9"
      }) ], YXCollectionView.prototype, "recycleInterval", void 0);
      __decorate([ property({
        type: [ _yx_editor_register_cell_info ],
        visible: true,
        displayName: "Register Cells",
        tooltip: "\u914d\u7f6e\u6b64\u5217\u8868\u5185\u9700\u8981\u7528\u5230\u7684 cell \u8282\u70b9\u7c7b\u578b"
      }) ], YXCollectionView.prototype, "registerCellForEditor", void 0);
      YXCollectionView = YXCollectionView_1 = __decorate([ ccclass, disallowMultiple, executionOrder(-1), help("https://gitee.com/568071718/creator-collection-view-doc") ], YXCollectionView);
      return YXCollectionView;
    }(Component);
    exports.YXCollectionView = YXCollectionView;
    cc._RF.pop();
  }, {} ],
  "yx-flow-layout": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "adc0fIsbcBBT5HBLlK5iMR4", "yx-flow-layout");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.YXFlowLayout = void 0;
    var yx_collection_view_1 = require("./yx-collection-view");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var YXFlowLayout = function(_super) {
      __extends(YXFlowLayout, _super);
      function YXFlowLayout() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pagingEnabled = false;
        _this.extraVisibleCount = 0;
        _this.itemSize = new cc.Size(100, 100);
        _this.verticalSpacing = 0;
        _this.horizontalSpacing = 0;
        _this.sectionInset = yx_collection_view_1.YXEdgeInsets.ZERO;
        return _this;
      }
      YXFlowLayout.prototype.getItemSize = function() {
        if (this.itemSize instanceof Function == false) return this.itemSize;
        throw new Error("YXFlowLayout: \u52a8\u6001\u914d\u7f6e\u7684\u5e03\u5c40\u53c2\u6570\u4e0d\u652f\u6301\u76f4\u63a5\u83b7\u53d6\uff0c\u8bf7\u68c0\u67e5\u81ea\u5df1\u7684\u5e03\u5c40\u903b\u8f91\u5e76\u8c28\u614e\u7684\u901a\u8fc7\u52a8\u6001\u914d\u7f6e\u81ea\u5df1\u83b7\u53d6\uff0c\u6ce8\u610f\u907f\u514d\u6b7b\u5faa\u73af");
      };
      YXFlowLayout.prototype.getVerticalSpacing = function() {
        if (this.verticalSpacing instanceof Function == false) return this.verticalSpacing;
        throw new Error("YXFlowLayout: \u52a8\u6001\u914d\u7f6e\u7684\u5e03\u5c40\u53c2\u6570\u4e0d\u652f\u6301\u76f4\u63a5\u83b7\u53d6\uff0c\u8bf7\u68c0\u67e5\u81ea\u5df1\u7684\u5e03\u5c40\u903b\u8f91\u5e76\u8c28\u614e\u7684\u901a\u8fc7\u52a8\u6001\u914d\u7f6e\u81ea\u5df1\u83b7\u53d6\uff0c\u6ce8\u610f\u907f\u514d\u6b7b\u5faa\u73af");
      };
      YXFlowLayout.prototype.getHorizontalSpacing = function() {
        if (this.horizontalSpacing instanceof Function == false) return this.horizontalSpacing;
        throw new Error("YXFlowLayout: \u52a8\u6001\u914d\u7f6e\u7684\u5e03\u5c40\u53c2\u6570\u4e0d\u652f\u6301\u76f4\u63a5\u83b7\u53d6\uff0c\u8bf7\u68c0\u67e5\u81ea\u5df1\u7684\u5e03\u5c40\u903b\u8f91\u5e76\u8c28\u614e\u7684\u901a\u8fc7\u52a8\u6001\u914d\u7f6e\u81ea\u5df1\u83b7\u53d6\uff0c\u6ce8\u610f\u907f\u514d\u6b7b\u5faa\u73af");
      };
      YXFlowLayout.prototype.getSectionInset = function() {
        if (this.sectionInset instanceof Function == false) return this.sectionInset;
        throw new Error("YXFlowLayout: \u52a8\u6001\u914d\u7f6e\u7684\u5e03\u5c40\u53c2\u6570\u4e0d\u652f\u6301\u76f4\u63a5\u83b7\u53d6\uff0c\u8bf7\u68c0\u67e5\u81ea\u5df1\u7684\u5e03\u5c40\u903b\u8f91\u5e76\u8c28\u614e\u7684\u901a\u8fc7\u52a8\u6001\u914d\u7f6e\u81ea\u5df1\u83b7\u53d6\uff0c\u6ce8\u610f\u907f\u514d\u6b7b\u5faa\u73af");
      };
      YXFlowLayout.prototype.prepare = function(collectionView) {
        if (collectionView.scrollDirection == yx_collection_view_1.YXCollectionView.ScrollDirection.HORIZONTAL) {
          this._horizontal(collectionView);
          return;
        }
        if (collectionView.scrollDirection == yx_collection_view_1.YXCollectionView.ScrollDirection.VERTICAL) {
          this._vertical(collectionView);
          return;
        }
      };
      YXFlowLayout.prototype.initOffset = function(collectionView) {
        if (collectionView.scrollDirection == yx_collection_view_1.YXCollectionView.ScrollDirection.HORIZONTAL) {
          collectionView.scrollView.scrollToLeft(0);
          return;
        }
        if (collectionView.scrollDirection == yx_collection_view_1.YXCollectionView.ScrollDirection.VERTICAL) {
          collectionView.scrollView.scrollToTop(0);
          return;
        }
      };
      YXFlowLayout.prototype.targetOffset = function(collectionView, touchMoveVelocity, startOffset) {
        if (false == this.pagingEnabled) return null;
        var offset = collectionView.scrollView.getScrollOffset();
        offset.x = -offset.x;
        var threshold = .2;
        if (collectionView.scrollDirection == yx_collection_view_1.YXCollectionView.ScrollDirection.HORIZONTAL) {
          var idx = Math.round(offset.x / collectionView.scrollView.node.width);
          var r = touchMoveVelocity.x / collectionView.scrollView.node.width;
          startOffset && Math.abs(r) >= threshold && (idx = Math.round(startOffset.x / collectionView.scrollView.node.width) + (r > 0 ? -1 : 1));
          offset.x = idx * collectionView.scrollView.node.width;
        }
        if (collectionView.scrollDirection == yx_collection_view_1.YXCollectionView.ScrollDirection.VERTICAL) {
          var idx = Math.round(offset.y / collectionView.scrollView.node.height);
          var r = touchMoveVelocity.y / collectionView.scrollView.node.height;
          startOffset && Math.abs(r) >= threshold && (idx = Math.round(startOffset.y / collectionView.scrollView.node.height) + (r > 0 ? 1 : -1));
          offset.y = idx * collectionView.scrollView.node.height;
        }
        return {
          offset: offset,
          time: .25
        };
      };
      YXFlowLayout.prototype.layoutAttributesForElementsInRect = function(rect, collectionView) {
        if (this.extraVisibleCount < 0) return _super.prototype.layoutAttributesForElementsInRect.call(this, rect, collectionView);
        var midIdx = -1;
        var left = 0;
        var right = this.attributes.length - 1;
        while (left <= right && right >= 0) {
          var mid = left + (right - left) / 2;
          mid = Math.floor(mid);
          var attr = this.attributes[mid];
          if (rect.intersects(attr.frame)) {
            midIdx = mid;
            break;
          }
          rect.yMax < attr.frame.yMin || rect.xMax < attr.frame.xMin ? right = mid - 1 : left = mid + 1;
        }
        if (midIdx < 0) return _super.prototype.layoutAttributesForElementsInRect.call(this, rect, collectionView);
        var result = [];
        result.push(this.attributes[midIdx]);
        var startIdx = midIdx;
        while (startIdx > 0) {
          var idx = startIdx - 1;
          var attr = this.attributes[idx];
          if (false == rect.intersects(attr.frame)) break;
          result.push(attr);
          startIdx = idx;
        }
        var extra_left = this.extraVisibleCount;
        while (extra_left > 0) {
          var idx = startIdx - 1;
          if (idx < 0) break;
          var attr = this.attributes[idx];
          rect.intersects(attr.frame) && result.push(attr);
          startIdx = idx;
          extra_left--;
        }
        var endIdx = midIdx;
        while (endIdx < this.attributes.length - 1) {
          var idx = endIdx + 1;
          var attr = this.attributes[idx];
          if (false == rect.intersects(attr.frame)) break;
          result.push(attr);
          endIdx = idx;
        }
        var extra_right = this.extraVisibleCount;
        while (extra_right > 0) {
          var idx = endIdx + 1;
          if (idx >= this.attributes.length) break;
          var attr = this.attributes[idx];
          rect.intersects(attr.frame) && result.push(attr);
          endIdx = idx;
          extra_right--;
        }
        return result;
      };
      YXFlowLayout.prototype.layoutAttributesForItemAtIndexPath = function(indexPath, collectionView) {
        var left = 0;
        var right = this.attributes.length - 1;
        while (left <= right && right >= 0) {
          var mid = left + (right - left) / 2;
          mid = Math.floor(mid);
          var attr = this.attributes[mid];
          if (attr.indexPath.equals(indexPath)) return attr;
          attr.indexPath.section < indexPath.section || attr.indexPath.section == indexPath.section && attr.indexPath.item < indexPath.item ? left = mid + 1 : right = mid - 1;
        }
        return _super.prototype.layoutAttributesForItemAtIndexPath.call(this, indexPath, collectionView);
      };
      YXFlowLayout.prototype._horizontal = function(collectionView) {
        collectionView.scrollView.horizontal = true;
        collectionView.scrollView.vertical = false;
        var contentSize = collectionView.node.getContentSize().clone();
        var allAttributes = [];
        var numberOfSections = collectionView.numberOfSections instanceof Function ? collectionView.numberOfSections(collectionView) : collectionView.numberOfSections;
        var sectionMaxX = 0;
        for (var section = 0; section < numberOfSections; section++) {
          var numberOfItems = collectionView.numberOfItems instanceof Function ? collectionView.numberOfItems(section, collectionView) : collectionView.numberOfItems;
          var verticalSpacing = this.verticalSpacing instanceof Function ? this.verticalSpacing(section, this, collectionView) : this.verticalSpacing;
          var horizontalSpacing = this.horizontalSpacing instanceof Function ? this.horizontalSpacing(section, this, collectionView) : this.horizontalSpacing;
          var sectionInset = this.sectionInset instanceof Function ? this.sectionInset(section, this, collectionView) : this.sectionInset;
          sectionMaxX += sectionInset.left;
          var whole = new _yx_flow_layout_whole();
          whole.verticalSpacing = verticalSpacing;
          whole.horizontalSpacing = horizontalSpacing;
          whole.sectionInset = sectionInset;
          whole.offset = sectionMaxX;
          whole.attrs = [];
          whole.containerWidth = 0;
          whole.containerHeight = contentSize.height;
          for (var item = 0; item < numberOfItems; item++) {
            var indexPath = new yx_collection_view_1.YXIndexPath(section, item);
            var itemSize = this.itemSize instanceof Function ? this.itemSize(indexPath, this, collectionView) : this.itemSize;
            var attr = whole.layout_horizontal_item(indexPath, itemSize);
            if (null == attr) {
              whole.offset = whole.offset + whole.containerWidth + horizontalSpacing;
              whole.containerWidth = 0;
              whole.attrs = [];
              attr = whole.layout_horizontal_item(indexPath, itemSize);
            }
            attr && allAttributes.push(attr);
            sectionMaxX = Math.max(sectionMaxX, whole.offset + whole.containerWidth);
          }
          sectionMaxX += sectionInset.right;
        }
        this.attributes = allAttributes;
        contentSize.width = Math.max(contentSize.width, sectionMaxX);
        this.contentSize = contentSize;
      };
      YXFlowLayout.prototype._vertical = function(collectionView) {
        collectionView.scrollView.horizontal = false;
        collectionView.scrollView.vertical = true;
        var contentSize = collectionView.node.getContentSize().clone();
        var allAttributes = [];
        var numberOfSections = collectionView.numberOfSections instanceof Function ? collectionView.numberOfSections(collectionView) : collectionView.numberOfSections;
        var sectionMaxY = 0;
        for (var section = 0; section < numberOfSections; section++) {
          var numberOfItems = collectionView.numberOfItems instanceof Function ? collectionView.numberOfItems(section, collectionView) : collectionView.numberOfItems;
          var verticalSpacing = this.verticalSpacing instanceof Function ? this.verticalSpacing(section, this, collectionView) : this.verticalSpacing;
          var horizontalSpacing = this.horizontalSpacing instanceof Function ? this.horizontalSpacing(section, this, collectionView) : this.horizontalSpacing;
          var sectionInset = this.sectionInset instanceof Function ? this.sectionInset(section, this, collectionView) : this.sectionInset;
          sectionMaxY += sectionInset.top;
          var whole = new _yx_flow_layout_whole();
          whole.verticalSpacing = verticalSpacing;
          whole.horizontalSpacing = horizontalSpacing;
          whole.sectionInset = sectionInset;
          whole.offset = sectionMaxY;
          whole.attrs = [];
          whole.containerWidth = contentSize.width;
          whole.containerHeight = 0;
          for (var item = 0; item < numberOfItems; item++) {
            var indexPath = new yx_collection_view_1.YXIndexPath(section, item);
            var itemSize = this.itemSize instanceof Function ? this.itemSize(indexPath, this, collectionView) : this.itemSize;
            var attr = whole.layout_vertical_item(indexPath, itemSize);
            if (null == attr) {
              whole.offset = whole.offset + whole.containerHeight + verticalSpacing;
              whole.containerHeight = 0;
              whole.attrs = [];
              attr = whole.layout_vertical_item(indexPath, itemSize);
            }
            attr && allAttributes.push(attr);
            sectionMaxY = Math.max(sectionMaxY, whole.offset + whole.containerHeight);
          }
          sectionMaxY += sectionInset.bottom;
        }
        this.attributes = allAttributes;
        contentSize.height = Math.max(contentSize.height, sectionMaxY);
        this.contentSize = contentSize;
      };
      return YXFlowLayout;
    }(yx_collection_view_1.YXLayout);
    exports.YXFlowLayout = YXFlowLayout;
    var _yx_flow_layout_whole = function() {
      function _yx_flow_layout_whole() {
        this.attrs = [];
      }
      _yx_flow_layout_whole.prototype.intersects = function(rect) {
        for (var index = 0; index < this.attrs.length; index++) {
          var element = this.attrs[index];
          var intersection = new cc.Rect();
          element.frame.intersection(intersection, rect);
          var s = intersection.width * intersection.height;
          if (s > 0) return true;
        }
        return false;
      };
      _yx_flow_layout_whole.prototype.layout_vertical_item = function(indexPath, itemSize) {
        if (this.attrs.length <= 0) {
          var attributes = new yx_collection_view_1.YXLayoutAttributes();
          attributes.indexPath = indexPath;
          attributes.frame = new cc.Rect(this.sectionInset.left, this.offset, itemSize.width, itemSize.height);
          this.attrs.push(attributes);
          this.containerHeight = Math.max(this.containerHeight, attributes.frame.height);
          return attributes;
        }
        var frame = new cc.Rect();
        frame.size = itemSize;
        for (var index = 0; index < this.attrs.length; index++) {
          var element = this.attrs[index];
          frame.x = element.frame.xMax + this.horizontalSpacing;
          frame.y = element.frame.y;
          if (frame.xMax <= this.containerWidth - this.sectionInset.right && false == this.intersects(frame)) {
            var attributes = new yx_collection_view_1.YXLayoutAttributes();
            attributes.indexPath = indexPath;
            attributes.frame = frame;
            this.attrs.push(attributes);
            this.containerHeight = Math.max(this.containerHeight, attributes.frame.yMax - this.offset);
            return attributes;
          }
        }
        for (var index = 0; index < this.attrs.length; index++) {
          var element = this.attrs[index];
          frame.x = element.frame.x;
          frame.y = element.frame.yMax + this.verticalSpacing;
          if (frame.yMax <= this.offset + this.containerHeight && false == this.intersects(frame)) {
            var attributes = new yx_collection_view_1.YXLayoutAttributes();
            attributes.indexPath = indexPath;
            attributes.frame = frame;
            this.attrs.push(attributes);
            this.containerHeight = Math.max(this.containerHeight, attributes.frame.height);
            return attributes;
          }
        }
        return null;
      };
      _yx_flow_layout_whole.prototype.layout_horizontal_item = function(indexPath, itemSize) {
        if (this.attrs.length <= 0) {
          var attributes = new yx_collection_view_1.YXLayoutAttributes();
          attributes.indexPath = indexPath;
          attributes.frame = new cc.Rect(this.offset, this.sectionInset.top, itemSize.width, itemSize.height);
          this.attrs.push(attributes);
          this.containerWidth = Math.max(this.containerWidth, attributes.frame.width);
          return attributes;
        }
        var frame = new cc.Rect();
        frame.size = itemSize;
        for (var index = 0; index < this.attrs.length; index++) {
          var element = this.attrs[index];
          frame.x = element.frame.x;
          frame.y = element.frame.yMax + this.verticalSpacing;
          if (frame.yMax <= this.containerHeight - this.sectionInset.bottom && false == this.intersects(frame)) {
            var attributes = new yx_collection_view_1.YXLayoutAttributes();
            attributes.indexPath = indexPath;
            attributes.frame = frame;
            this.attrs.push(attributes);
            this.containerWidth = Math.max(this.containerWidth, attributes.frame.xMax - this.offset);
            return attributes;
          }
        }
        for (var index = 0; index < this.attrs.length; index++) {
          var element = this.attrs[index];
          frame.x = element.frame.xMax + this.horizontalSpacing;
          frame.y = element.frame.y;
          if (frame.xMax <= this.offset + this.containerWidth && false == this.intersects(frame)) {
            var attributes = new yx_collection_view_1.YXLayoutAttributes();
            attributes.indexPath = indexPath;
            attributes.frame = frame;
            this.attrs.push(attributes);
            this.containerWidth = Math.max(this.containerWidth, attributes.frame.width);
            return attributes;
          }
        }
        return null;
      };
      return _yx_flow_layout_whole;
    }();
    cc._RF.pop();
  }, {
    "./yx-collection-view": "yx-collection-view"
  } ]
}, {}, [ "common-cell", "horizontal-list-cell", "demo1", "demo2", "demo3", "home", "yx-collection-view", "yx-flow-layout" ]);