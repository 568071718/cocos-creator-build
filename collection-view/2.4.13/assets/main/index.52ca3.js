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
  home: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6981e/BbO9E77GCRUs990AD", "home");
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
    var yx_masonry_flow_layout_1 = require("../lib/yx-masonry-flow-layout");
    var yx_types_1 = require("../lib/yx-types");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var home = function(_super) {
      __extends(home, _super);
      function home() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.list = null;
        _this.commonPrefab = null;
        return _this;
      }
      home.prototype.start = function() {
        var _this = this;
        this.list.register("demo1", function() {
          return _this.demo1Cell();
        });
        this.list.register("demo2", function() {
          return _this.demo2Cell();
        });
        this.list.register("demo3", function() {
          return _this.demo3Cell();
        });
        this.list.numberOfItems = 3;
        this.list.cellForItemAt = function(indexPath, collectionView) {
          if (0 == indexPath.item) return collectionView.dequeueReusableCell("demo1");
          if (1 == indexPath.item) return collectionView.dequeueReusableCell("demo2");
          if (2 == indexPath.item) return collectionView.dequeueReusableCell("demo3");
          return null;
        };
        this.list.onCellDisplay = function(cell, indexPath, collectionView) {
          var list = cell.getComponent(yx_collection_view_1.YXCollectionView);
          list.reloadData();
        };
        var layout = new yx_flow_layout_1.YXFlowLayout();
        layout.scrollDirection = yx_flow_layout_1.YXFlowLayout.ScrollDirection.HORIZONTAL;
        layout.itemSize = new cc.Size(600, 600);
        layout.horizontalSpacing = 40;
        layout.sectionInset = new yx_types_1.YXEdgeInsets(0, 40, 0, 40);
        this.list.layout = layout;
        this.list.reloadData();
      };
      home.prototype.demo1Cell = function() {
        var _this = this;
        var result = new cc.Node().addComponent(yx_collection_view_1.YXCollectionView);
        result.numberOfItems = 1e4;
        result.register("cell", function() {
          return cc.instantiate(_this.commonPrefab);
        });
        result.cellForItemAt = function() {
          return result.dequeueReusableCell("cell");
        };
        result.onCellDisplay = function(cell, indexPath) {
          var r = 100 * Math.random() + 50;
          var g = 100 * Math.random() + 50;
          var b = 100 * Math.random() + 50;
          cell.getChildByName("background").color = new cc.Color(r, g, b);
          cell.getChildByName("label").getComponent(cc.Label).string = "" + indexPath;
        };
        var layout = new yx_masonry_flow_layout_1.YXMasonryFlowLayout();
        layout.scrollDirection = yx_flow_layout_1.YXFlowLayout.ScrollDirection.VERTICAL;
        layout.itemSize = function() {
          return new cc.Size(0, 300 * Math.random() + 200);
        };
        layout.verticalSpacing = 20;
        layout.horizontalSpacing = 20;
        result.layout = layout;
        layout.divide = 3;
        return result.node;
      };
      home.prototype.demo2Cell = function() {
        var _this = this;
        var result = new cc.Node().addComponent(yx_collection_view_1.YXCollectionView);
        result.numberOfItems = 1e4;
        result.register("cell", function() {
          return cc.instantiate(_this.commonPrefab);
        });
        result.cellForItemAt = function() {
          return result.dequeueReusableCell("cell");
        };
        result.onCellDisplay = function(cell, indexPath) {
          var r = 100 * Math.random() + 50;
          var g = 100 * Math.random() + 50;
          var b = 100 * Math.random() + 50;
          cell.getChildByName("background").color = new cc.Color(r, g, b);
          cell.getChildByName("label").getComponent(cc.Label).string = "" + indexPath;
        };
        var layout = new yx_flow_layout_1.YXFlowLayout();
        layout.scrollDirection = yx_flow_layout_1.YXFlowLayout.ScrollDirection.VERTICAL;
        layout.itemSize = new cc.Size(600, 200);
        layout.verticalSpacing = 20;
        result.layout = layout;
        return result.node;
      };
      home.prototype.demo3Cell = function() {
        var _this = this;
        var result = new cc.Node().addComponent(yx_collection_view_1.YXCollectionView);
        result.numberOfSections = 4;
        result.numberOfItems = function(section) {
          if (0 == section) return 1;
          if (1 == section) return 7;
          if (2 == section) return 5;
          return 1e4;
        };
        result.register("cell", function() {
          return cc.instantiate(_this.commonPrefab);
        });
        result.cellForItemAt = function() {
          return result.dequeueReusableCell("cell");
        };
        result.onCellDisplay = function(cell, indexPath) {
          var r = 100 * Math.random() + 50;
          var g = 100 * Math.random() + 50;
          var b = 100 * Math.random() + 50;
          cell.getChildByName("background").color = new cc.Color(r, g, b);
          cell.getChildByName("label").getComponent(cc.Label).string = "" + indexPath;
        };
        var layout = new yx_flow_layout_1.YXFlowLayout();
        layout.scrollDirection = yx_flow_layout_1.YXFlowLayout.ScrollDirection.VERTICAL;
        layout.itemSize = function(indexPath) {
          if (0 == indexPath.section) return new cc.Size(600, 400);
          if (1 == indexPath.section) return new cc.Size(186.65, 186.65);
          if (2 == indexPath.section) return new cc.Size(290, 300);
          return new cc.Size(600, 180);
        };
        layout.sectionInset = new yx_types_1.YXEdgeInsets(20, 0, 0, 0);
        layout.verticalSpacing = 20;
        layout.horizontalSpacing = 20;
        result.layout = layout;
        return result.node;
      };
      __decorate([ property(yx_collection_view_1.YXCollectionView) ], home.prototype, "list", void 0);
      __decorate([ property(cc.Prefab) ], home.prototype, "commonPrefab", void 0);
      home = __decorate([ ccclass ], home);
      return home;
    }(cc.Component);
    exports.default = home;
    cc._RF.pop();
  }, {
    "../lib/yx-collection-view": "yx-collection-view",
    "../lib/yx-flow-layout": "yx-flow-layout",
    "../lib/yx-masonry-flow-layout": "yx-masonry-flow-layout",
    "../lib/yx-types": "yx-types"
  } ],
  "yx-collection-view": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "76a61xuOOBLSbf7fMkXYF3B", "yx-collection-view");
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
    exports.YXCollectionView = exports.YXLayout = exports.YXLayoutAttributes = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, disallowMultiple = _a.disallowMultiple, help = _a.help;
    var _cell_ = function(_super) {
      __extends(_cell_, _super);
      function _cell_() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return _cell_;
    }(cc.Component);
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
      _scroll_view.prototype._onTouchCancelled = function(event, captureListeners) {
        _super.prototype["_onTouchCancelled"].call(this, event, captureListeners);
      };
      _scroll_view.prototype._onTouchEnded = function(event, captureListeners) {
        _super.prototype["_onTouchEnded"].call(this, event, captureListeners);
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
    }(cc.ScrollView);
    var YXLayoutAttributes = function() {
      function YXLayoutAttributes() {
        this.indexPath = null;
        this.frame = null;
        this.zIndex = 0;
        this.scale = null;
        this.offset = null;
        this.eulerAngles = null;
      }
      YXLayoutAttributes.prototype.clone = function() {
        var _a, _b, _c, _d, _e;
        var result = new YXLayoutAttributes();
        result.indexPath = null === (_a = this.indexPath) || void 0 === _a ? void 0 : _a.clone();
        result.frame = null === (_b = this.frame) || void 0 === _b ? void 0 : _b.clone();
        result.scale = null === (_c = this.scale) || void 0 === _c ? void 0 : _c.clone();
        result.offset = null === (_d = this.offset) || void 0 === _d ? void 0 : _d.clone();
        result.eulerAngles = null === (_e = this.eulerAngles) || void 0 === _e ? void 0 : _e.clone();
        return result;
      };
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
      YXLayout.prototype.layoutAttributesForElementsInRect = function(rect, collectionView) {
        return this.attributes;
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
      return YXLayout;
    }();
    exports.YXLayout = YXLayout;
    var YXCollectionView = function(_super) {
      __extends(YXCollectionView, _super);
      function YXCollectionView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mask = true;
        _this.scrollEnabled = true;
        _this.frameInterval = 1;
        _this._frameIdx = 0;
        _this.immediateAutoRecycleInvisibleNodes = true;
        _this.numberOfSections = 1;
        _this.numberOfItems = 0;
        _this.pools = new Map();
        _this.makers = new Map();
        _this.cellForItemAt = null;
        _this.onCellDisplay = null;
        _this.onTouchItemAt = null;
        _this.layout = null;
        _this.visibleNodes = [];
        _this.reloadDataCounter = 0;
        _this._late_update_visible_data = false;
        _this._scroll_offset_on_touch_start = null;
        return _this;
      }
      Object.defineProperty(YXCollectionView, "VERSION", {
        get: function() {
          return "1.0.0";
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(YXCollectionView.prototype, "scrollView", {
        get: function() {
          var result = this.node.getComponent(_scroll_view);
          if (null == result) {
            result = this.node.addComponent(_scroll_view);
            result.brake = .6;
          }
          if (null == result.content) {
            var content = new cc.Node("com.yx.scroll.content");
            content.parent = result.node;
            content.setContentSize(this.node.getContentSize());
            result.content = content;
          }
          if (this.mask) {
            var mask = result.node.getComponent(cc.Mask);
            if (null == mask) {
              mask = result.node.addComponent(cc.Mask);
              mask.type = cc.Mask.Type.RECT;
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
        var pool = new cc.NodePool(poolComp);
        this.pools.set(identifier, pool);
        this.makers.set(identifier, maker);
      };
      YXCollectionView.prototype.dequeueReusableCell = function(identifier) {
        var pool = this.pools.get(identifier);
        if (null == pool) throw new Error("YXCollectionView: \u672a\u6ce8\u518c\u6807\u8bc6\u7b26\u4e3a `" + identifier + "` \u7684 cell\uff0c\u8bf7\u5148\u8c03\u7528 YXCollectionView \u7684 register() \u65b9\u6cd5\u6ce8\u518c cell \u8282\u70b9");
        var result = pool.get();
        if (null == result) {
          var maker = this.makers.get(identifier);
          if (maker instanceof Function == false) throw new Error("YXCollectionView: register() \u53c2\u6570\u9519\u8bef\uff0c\u8bf7\u6b63\u786e\u914d\u7f6e maker \u56de\u8c03\u51fd\u6570\u4ee5\u751f\u6210\u6807\u8bc6\u5bf9\u5e94\u7684\u8282\u70b9");
          result = this.makers.get(identifier)();
          result instanceof cc.Node && pool.poolHandlerComp instanceof Function && (result.getComponent(pool.poolHandlerComp) || result.addComponent(pool.poolHandlerComp));
          var cell = result.getComponent(_cell_) || result.addComponent(_cell_);
          cell.identifier = identifier;
          result.on(cc.Node.EventType.TOUCH_END, this.onTouchItem, this);
        }
        return result;
      };
      YXCollectionView.prototype.onTouchItem = function(ev) {
        if (this.onTouchItemAt) {
          var cell = ev.target.getComponent(_cell_);
          this.onTouchItemAt(cell.attributes.indexPath, this);
        }
      };
      Object.defineProperty(YXCollectionView.prototype, "visibleIndexPaths", {
        get: function() {
          var result = [];
          for (var index = 0; index < this.visibleNodes.length; index++) {
            var element = this.visibleNodes[index];
            var cell = element.getComponent(_cell_);
            result.push(cell.attributes.indexPath.clone());
          }
          return result;
        },
        enumerable: false,
        configurable: true
      });
      YXCollectionView.prototype.getVisibleNode = function(indexPath) {
        return this.visibleNodes.find(function(element) {
          var cell = element.getComponent(_cell_);
          return cell.attributes.indexPath.equals(indexPath);
        });
      };
      YXCollectionView.prototype.getVisibleNodeIndexPath = function(node) {
        var cell = node.getComponent(_cell_);
        if (cell) return cell.attributes.indexPath.clone();
        return null;
      };
      YXCollectionView.prototype.reloadData = function() {
        if (null == this.layout) throw new Error("YXCollectionView: \u53c2\u6570\u9519\u8bef\uff0c\u8bf7\u6b63\u786e\u914d\u7f6e layout \u4ee5\u786e\u5b9a\u5e03\u5c40\u65b9\u6848");
        this.scrollView.stopAutoScroll();
        for (var index = 0; index < this.visibleNodes.length; index++) {
          var element = this.visibleNodes[index];
          this.pools.get(element.getComponent(_cell_).identifier).put(element);
        }
        this.visibleNodes = [];
        var offset = this.scrollView.getScrollOffset();
        offset.x = -offset.x;
        this.layout.prepare(this);
        this.scrollView.content.setContentSize(this.layout.contentSize);
        if (this.reloadDataCounter <= 0) this.layout.initOffset(this); else {
          var maxOffset = this.scrollView.getMaxScrollOffset();
          cc.Vec2.min(offset, offset, maxOffset);
          this.scrollView.scrollToOffset(offset, 0);
        }
        this.reloadVisibleCells();
        this.reloadDataCounter++;
      };
      YXCollectionView.prototype.reloadVisibleCells = function() {
        var visibleRect = new cc.Rect();
        visibleRect.origin = this.scrollView.getScrollOffset();
        visibleRect.x = -visibleRect.x;
        visibleRect.size = this.scrollView.node.getContentSize();
        var layoutAttributes = this.layout.layoutAttributesForElementsInRect(visibleRect, this);
        null != layoutAttributes && layoutAttributes != this.layout.attributes || (layoutAttributes = this.layout.attributes.slice());
        var shouldUpdateAttributesZIndex = this.layout.shouldUpdateAttributesZIndex();
        shouldUpdateAttributesZIndex && layoutAttributes.sort(function(a, b) {
          return a.zIndex - b.zIndex;
        });
        this.immediateAutoRecycleInvisibleNodes && this.recycleInvisibleNodes(visibleRect);
        for (var index = 0; index < layoutAttributes.length; index++) {
          var element = layoutAttributes[index];
          if (false == visibleRect.intersects(element.frame)) continue;
          var visibleNode = this.getVisibleNode(element.indexPath);
          if (visibleNode) {
            this.applyLayoutAttributes(visibleNode, element, shouldUpdateAttributesZIndex);
            continue;
          }
          var node = this.cellForItemAt(element.indexPath, this);
          node.parent = this.scrollView.content;
          this.applyLayoutAttributes(node, element, shouldUpdateAttributesZIndex);
          this.visibleNodes.push(node);
          this.onCellDisplay && this.onCellDisplay(node, element.indexPath, this);
        }
      };
      YXCollectionView.prototype.recycleInvisibleNodes = function(visibleRect) {
        var _this = this;
        void 0 === visibleRect && (visibleRect = null);
        if (null == visibleRect) {
          visibleRect = new cc.Rect();
          visibleRect.origin = this.scrollView.getScrollOffset();
          visibleRect.x = -visibleRect.x;
          visibleRect.size = this.scrollView.node.getContentSize();
        }
        this.visibleNodes = this.visibleNodes.filter(function(element) {
          var cell = element.getComponent(_cell_);
          if (false == visibleRect.intersects(cell.attributes.frame)) {
            _this.pools.get(cell.identifier).put(element);
            return false;
          }
          return true;
        });
      };
      YXCollectionView.prototype.markForUpdateVisibleData = function(force) {
        void 0 === force && (force = false);
        if (force) {
          this.reloadVisibleCells();
          return;
        }
        this._late_update_visible_data = true;
      };
      YXCollectionView.prototype.applyLayoutAttributes = function(node, attributes, bringToFront) {
        var cell = node.getComponent(_cell_);
        cell.attributes = attributes;
        node.setContentSize(attributes.frame.size);
        var pos = attributes["_in_collection_view_pos"];
        if (null == pos) {
          pos = node.position.clone();
          pos.x = .5 * -(this.layout.contentSize.width - attributes.frame.width) + attributes.frame.x;
          pos.y = .5 * +(this.layout.contentSize.height - attributes.frame.height) - attributes.frame.y;
          attributes["_in_collection_view_pos"] = pos;
        }
        attributes.offset && pos.add(attributes.offset);
        node.position = pos;
        if (attributes.scale) {
          node.scaleX = attributes.scale.x;
          node.scaleY = attributes.scale.y;
        }
        attributes.eulerAngles && (node.eulerAngles = attributes.eulerAngles);
        bringToFront && node.setSiblingIndex(-1);
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
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on("scroll-began", this.onScrollBegan, this);
        this.node.on("scrolling", this.onScrolling, this);
        this.node.on("touch-up", this.onScrollTouchUp, this);
        this.node.on("scroll-ended", this.onScrollEnded, this);
        this._scrollView._yxOnStartInertiaScroll = this.onStartInertiaScroll.bind(this);
      };
      YXCollectionView.prototype.onDestroy = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off("scroll-began", this.onScrollBegan, this);
        this.node.off("scrolling", this.onScrolling, this);
        this.node.off("touch-up", this.onScrollTouchUp, this);
        this.node.off("scroll-ended", this.onScrollEnded, this);
        this.visibleNodes = [];
        this.pools.forEach(function(element) {
          element.clear();
        });
        this.pools.clear();
        this.makers.clear();
        this.layout && (this.layout.attributes = []);
      };
      YXCollectionView.prototype.update = function(dt) {
        this.updateVisibleDataIfNeeds(dt);
      };
      YXCollectionView.prototype.updateVisibleDataIfNeeds = function(dt) {
        if (this._late_update_visible_data) {
          this._late_update_visible_data = false;
          this.reloadVisibleCells();
        }
      };
      YXCollectionView.prototype.onTouchStart = function() {};
      YXCollectionView.prototype.onScrollBegan = function() {};
      YXCollectionView.prototype.onScrolling = function() {
        if (this.frameInterval <= 1) {
          this.reloadVisibleCells();
          return;
        }
        this._frameIdx++;
        this._frameIdx % this.frameInterval == 0 && this.reloadVisibleCells();
      };
      YXCollectionView.prototype.onScrollTouchUp = function() {
        this.recycleInvisibleNodes();
      };
      YXCollectionView.prototype.onScrollEnded = function() {
        this.recycleInvisibleNodes();
      };
      YXCollectionView.prototype.onStartInertiaScroll = function(touchMoveVelocity) {
        var endValue = this.layout.targetOffset(this, touchMoveVelocity, this._scroll_offset_on_touch_start);
        if (endValue) {
          this.scrollView.scrollToOffset(endValue.offset, endValue.time);
          this.markForUpdateVisibleData();
        }
      };
      __decorate([ property({
        tooltip: "\u81ea\u52a8\u7ed9\u6302\u8f7d\u8282\u70b9\u6dfb\u52a0 mask \u7ec4\u4ef6"
      }) ], YXCollectionView.prototype, "mask", void 0);
      __decorate([ property({
        tooltip: "\u5141\u8bb8\u624b\u52bf\u6eda\u52a8"
      }) ], YXCollectionView.prototype, "scrollEnabled", void 0);
      __decorate([ property({
        tooltip: "\u6bcf\u591a\u5c11\u5e27\u5237\u65b0\u4e00\u6b21\u53ef\u89c1\u8282\u70b9\uff0c1 \u8868\u793a\u6bcf\u5e27\u90fd\u5237"
      }) ], YXCollectionView.prototype, "frameInterval", void 0);
      YXCollectionView = __decorate([ ccclass, disallowMultiple ], YXCollectionView);
      return YXCollectionView;
    }(cc.Component);
    exports.YXCollectionView = YXCollectionView;
    cc._RF.pop();
  }, {} ],
  "yx-cover-layout": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0b848p8iV9Jh4/Ht7oBJxJt", "yx-cover-layout");
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
    exports.YXCoverLayout = void 0;
    var yx_types_1 = require("./yx-types");
    var yx_flow_layout_1 = require("./yx-flow-layout");
    var YXCoverLayout = function(_super) {
      __extends(YXCoverLayout, _super);
      function YXCoverLayout(itemSize) {
        var _this = _super.call(this) || this;
        _this.mode = YXCoverLayout.Mode.DEFAULT;
        _this.itemSize = null;
        _this.scaleValue = .8;
        _this.itemSize = itemSize;
        return _this;
      }
      YXCoverLayout.prototype.getSectionInset = function() {
        return this.sectionInset;
      };
      YXCoverLayout.prototype.getItemSize = function() {
        return this.itemSize;
      };
      YXCoverLayout.prototype.prepare = function(collectionView) {
        var pad_horizontal = .5 * (collectionView.scrollView.node.width - this.itemSize.width);
        var pad_vertical = .5 * (collectionView.scrollView.node.height - this.itemSize.height);
        this.sectionInset = new yx_types_1.YXEdgeInsets(pad_vertical, pad_horizontal, pad_vertical, pad_horizontal);
        _super.prototype.prepare.call(this, collectionView);
      };
      YXCoverLayout.prototype.targetOffset = function(collectionView, touchMoveVelocity, startOffset) {
        if (false == this.pagingEnabled) return null;
        var offset = collectionView.scrollView.getScrollOffset();
        offset.x = -offset.x;
        var visibleRect = new cc.Rect();
        visibleRect.origin = collectionView.scrollView.getScrollOffset();
        visibleRect.x = -visibleRect.x;
        visibleRect.size = collectionView.scrollView.node.getContentSize();
        var result = this.layoutAttributesForElementsInRect(visibleRect, collectionView);
        var target = null;
        if (this.scrollDirection == yx_flow_layout_1.YXFlowLayout.ScrollDirection.HORIZONTAL) {
          var mid_1 = offset.x + .5 * collectionView.scrollView.node.width;
          result.forEach(function(element) {
            var distance1 = Math.abs(element.frame.center.x - mid_1);
            var distance2 = target ? Math.abs(target.frame.center.x - mid_1) : null;
            (null == distance2 || distance1 < distance2) && (target = element);
          });
          offset.x = target.frame.center.x - .5 * collectionView.scrollView.node.width;
        }
        if (this.scrollDirection == yx_flow_layout_1.YXFlowLayout.ScrollDirection.VERTICAL) {
          var mid_2 = offset.y + .5 * collectionView.scrollView.node.height;
          result.forEach(function(element) {
            var distance1 = Math.abs(element.frame.center.y - mid_2);
            var distance2 = target ? Math.abs(target.frame.center.y - mid_2) : null;
            (null == distance2 || distance1 < distance2) && (target = element);
          });
          offset.y = target.frame.center.y - .5 * collectionView.scrollView.node.height;
        }
        return {
          offset: offset,
          time: .25
        };
      };
      YXCoverLayout.prototype.scrollTo = function(indexPath, collectionView) {
        var attr = this.layoutAttributesForItemAtIndexPath(indexPath, collectionView);
        if (attr) {
          var offset = attr.frame.origin;
          this.scrollDirection == yx_flow_layout_1.YXFlowLayout.ScrollDirection.HORIZONTAL && (offset.x = offset.x - .5 * (collectionView.scrollView.node.width - attr.frame.width));
          this.scrollDirection == yx_flow_layout_1.YXFlowLayout.ScrollDirection.VERTICAL && (offset.y = offset.y - .5 * (collectionView.scrollView.node.height - attr.frame.height));
          return offset;
        }
        return null;
      };
      YXCoverLayout.prototype.layoutAttributesForElementsInRect = function(rect, collectionView) {
        var _this = this;
        var result = _super.prototype.layoutAttributesForElementsInRect.call(this, rect, collectionView);
        var offset = collectionView.scrollView.getScrollOffset();
        offset.x = -offset.x;
        var scale = this.scaleValue;
        if (this.scrollDirection == yx_flow_layout_1.YXFlowLayout.ScrollDirection.HORIZONTAL) {
          var mid_3 = offset.x + .5 * collectionView.scrollView.node.width;
          result.forEach(function(element) {
            var distance = Math.abs(element.frame.center.x - mid_3);
            var progress = distance / _this.itemSize.width;
            progress = Math.min(1, progress);
            var scaleValue = 1 - (1 - scale) * progress;
            element.scale = cc.v3(scaleValue, scaleValue, 1);
            element.zIndex = 1 - progress;
          });
        }
        if (this.scrollDirection == yx_flow_layout_1.YXFlowLayout.ScrollDirection.VERTICAL) {
          var mid_4 = offset.y + .5 * collectionView.scrollView.node.height;
          result.forEach(function(element) {
            var distance = Math.abs(element.frame.center.y - mid_4);
            var progress = distance / _this.itemSize.height;
            progress = Math.min(1, progress);
            var scaleValue = 1 - (1 - scale) * progress;
            element.scale = cc.v3(scaleValue, scaleValue, 1);
            element.zIndex = 1 - progress;
          });
        }
        return result;
      };
      YXCoverLayout.prototype.shouldUpdateAttributesZIndex = function() {
        return true;
      };
      return YXCoverLayout;
    }(yx_flow_layout_1.YXFlowLayout);
    exports.YXCoverLayout = YXCoverLayout;
    (function(YXCoverLayout) {
      var Mode;
      (function(Mode) {
        Mode[Mode["DEFAULT"] = 0] = "DEFAULT";
      })(Mode = YXCoverLayout.Mode || (YXCoverLayout.Mode = {}));
    })(YXCoverLayout = exports.YXCoverLayout || (exports.YXCoverLayout = {}));
    exports.YXCoverLayout = YXCoverLayout;
    cc._RF.pop();
  }, {
    "./yx-flow-layout": "yx-flow-layout",
    "./yx-types": "yx-types"
  } ],
  "yx-flow-layout": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2713eyGtERLOpa3WQuA2iqR", "yx-flow-layout");
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
    var yx_types_1 = require("./yx-types");
    var YXFlowLayout = function(_super) {
      __extends(YXFlowLayout, _super);
      function YXFlowLayout() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.scrollDirection = YXFlowLayout.ScrollDirection.VERTICAL;
        _this.pagingEnabled = false;
        _this.extraVisibleCount = 0;
        _this.itemSize = new cc.Size(100, 100);
        _this.verticalSpacing = 0;
        _this.horizontalSpacing = 0;
        _this.sectionInset = yx_types_1.YXEdgeInsets.ZERO;
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
        if (this.scrollDirection == YXFlowLayout.ScrollDirection.HORIZONTAL) {
          this._horizontal(collectionView);
          return;
        }
        if (this.scrollDirection == YXFlowLayout.ScrollDirection.VERTICAL) {
          this._vertical(collectionView);
          return;
        }
      };
      YXFlowLayout.prototype.initOffset = function(collectionView) {
        if (this.scrollDirection == YXFlowLayout.ScrollDirection.HORIZONTAL) {
          collectionView.scrollView.scrollToLeft(0);
          return;
        }
        if (this.scrollDirection == YXFlowLayout.ScrollDirection.VERTICAL) {
          collectionView.scrollView.scrollToTop(0);
          return;
        }
      };
      YXFlowLayout.prototype.targetOffset = function(collectionView, touchMoveVelocity, startOffset) {
        if (false == this.pagingEnabled) return null;
        var offset = collectionView.scrollView.getScrollOffset();
        offset.x = -offset.x;
        var threshold = .2;
        if (this.scrollDirection == YXFlowLayout.ScrollDirection.HORIZONTAL) {
          var idx = Math.round(offset.x / collectionView.scrollView.node.width);
          var r = touchMoveVelocity.x / collectionView.scrollView.node.width;
          startOffset && Math.abs(r) >= threshold && (idx = Math.round(startOffset.x / collectionView.scrollView.node.width) + (r > 0 ? -1 : 1));
          offset.x = idx * collectionView.scrollView.node.width;
        }
        if (this.scrollDirection == YXFlowLayout.ScrollDirection.VERTICAL) {
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
        var contentSize = collectionView.node.getContentSize();
        var allAttributes = [];
        var numberOfSections = collectionView.numberOfSections instanceof Function ? collectionView.numberOfSections(collectionView) : collectionView.numberOfSections;
        var sectionMaxX = 0;
        for (var section = 0; section < numberOfSections; section++) {
          var numberOfItems = collectionView.numberOfItems instanceof Function ? collectionView.numberOfItems(section, collectionView) : collectionView.numberOfItems;
          var verticalSpacing = this.verticalSpacing instanceof Function ? this.verticalSpacing(section, this, collectionView) : this.verticalSpacing;
          var horizontalSpacing = this.horizontalSpacing instanceof Function ? this.horizontalSpacing(section, this, collectionView) : this.horizontalSpacing;
          var sectionInset = this.sectionInset instanceof Function ? this.sectionInset(section, this, collectionView) : this.sectionInset;
          sectionMaxX += sectionInset.left;
          var currentX = sectionMaxX;
          var currentY = sectionInset.top;
          var maxWidthInRow = 0;
          for (var item = 0; item < numberOfItems; item++) {
            var indexPath = new yx_types_1.YXIndexPath(section, item);
            var itemSize = this.itemSize instanceof Function ? this.itemSize(indexPath, this, collectionView) : this.itemSize;
            var attributes = new yx_collection_view_1.YXLayoutAttributes();
            attributes.indexPath = indexPath;
            if (currentY + itemSize.height <= contentSize.height - sectionInset.bottom) {
              attributes.frame = new cc.Rect(currentX, currentY, itemSize.width, itemSize.height);
              currentY = currentY + itemSize.height + verticalSpacing;
              maxWidthInRow = Math.max(maxWidthInRow, itemSize.width);
            } else {
              currentX = currentX + maxWidthInRow + horizontalSpacing;
              currentY = sectionInset.top;
              attributes.frame = new cc.Rect(currentX, currentY, itemSize.width, itemSize.height);
              currentY = currentY + itemSize.height + verticalSpacing;
              maxWidthInRow = itemSize.width;
            }
            allAttributes.push(attributes);
            sectionMaxX = Math.max(sectionMaxX, attributes.frame.xMax);
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
        var contentSize = collectionView.node.getContentSize();
        var allAttributes = [];
        var numberOfSections = collectionView.numberOfSections instanceof Function ? collectionView.numberOfSections(collectionView) : collectionView.numberOfSections;
        var sectionMaxY = 0;
        for (var section = 0; section < numberOfSections; section++) {
          var numberOfItems = collectionView.numberOfItems instanceof Function ? collectionView.numberOfItems(section, collectionView) : collectionView.numberOfItems;
          var verticalSpacing = this.verticalSpacing instanceof Function ? this.verticalSpacing(section, this, collectionView) : this.verticalSpacing;
          var horizontalSpacing = this.horizontalSpacing instanceof Function ? this.horizontalSpacing(section, this, collectionView) : this.horizontalSpacing;
          var sectionInset = this.sectionInset instanceof Function ? this.sectionInset(section, this, collectionView) : this.sectionInset;
          sectionMaxY += sectionInset.top;
          var currentX = sectionInset.left;
          var currentY = sectionMaxY;
          var maxHeightInRow = 0;
          for (var item = 0; item < numberOfItems; item++) {
            var indexPath = new yx_types_1.YXIndexPath(section, item);
            var itemSize = this.itemSize instanceof Function ? this.itemSize(indexPath, this, collectionView) : this.itemSize;
            var attributes = new yx_collection_view_1.YXLayoutAttributes();
            attributes.indexPath = indexPath;
            if (currentX + itemSize.width <= contentSize.width - sectionInset.right) {
              attributes.frame = new cc.Rect(currentX, currentY, itemSize.width, itemSize.height);
              currentX = currentX + itemSize.width + horizontalSpacing;
              maxHeightInRow = Math.max(maxHeightInRow, itemSize.height);
            } else {
              currentX = sectionInset.left;
              currentY = currentY + maxHeightInRow + verticalSpacing;
              attributes.frame = new cc.Rect(currentX, currentY, itemSize.width, itemSize.height);
              currentX = currentX + itemSize.width + horizontalSpacing;
              maxHeightInRow = itemSize.height;
            }
            allAttributes.push(attributes);
            sectionMaxY = Math.max(sectionMaxY, attributes.frame.yMax);
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
    (function(YXFlowLayout) {
      var ScrollDirection;
      (function(ScrollDirection) {
        ScrollDirection[ScrollDirection["HORIZONTAL"] = 0] = "HORIZONTAL";
        ScrollDirection[ScrollDirection["VERTICAL"] = 1] = "VERTICAL";
      })(ScrollDirection = YXFlowLayout.ScrollDirection || (YXFlowLayout.ScrollDirection = {}));
    })(YXFlowLayout = exports.YXFlowLayout || (exports.YXFlowLayout = {}));
    exports.YXFlowLayout = YXFlowLayout;
    cc._RF.pop();
  }, {
    "./yx-collection-view": "yx-collection-view",
    "./yx-types": "yx-types"
  } ],
  "yx-masonry-flow-layout": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "84f6bxbjMpHbI7GzDZHc3G4", "yx-masonry-flow-layout");
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
    exports.YXMasonryFlowLayout = void 0;
    var yx_collection_view_1 = require("./yx-collection-view");
    var yx_types_1 = require("./yx-types");
    var yx_flow_layout_1 = require("./yx-flow-layout");
    var YXMasonryFlowLayout = function(_super) {
      __extends(YXMasonryFlowLayout, _super);
      function YXMasonryFlowLayout() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.divide = 1;
        _this.extraVisibleCount = 10;
        _this.itemSize = new cc.Size(100, 100);
        return _this;
      }
      YXMasonryFlowLayout.prototype.prepare = function(collectionView) {
        if (this.scrollDirection == YXMasonryFlowLayout.ScrollDirection.HORIZONTAL) {
          this._masonry_horizontal(collectionView);
          return;
        }
        if (this.scrollDirection == YXMasonryFlowLayout.ScrollDirection.VERTICAL) {
          this._masonry_vertical(collectionView);
          return;
        }
      };
      YXMasonryFlowLayout.prototype._masonry_horizontal = function(collectionView) {
        collectionView.scrollView.horizontal = true;
        collectionView.scrollView.vertical = false;
        var contentSize = collectionView.node.getContentSize();
        var allAttributes = [];
        var numberOfSections = collectionView.numberOfSections instanceof Function ? collectionView.numberOfSections(collectionView) : collectionView.numberOfSections;
        var sectionMaxX = 0;
        for (var section = 0; section < numberOfSections; section++) {
          var numberOfItems = collectionView.numberOfItems instanceof Function ? collectionView.numberOfItems(section, collectionView) : collectionView.numberOfItems;
          var verticalSpacing = this.verticalSpacing instanceof Function ? this.verticalSpacing(section, this, collectionView) : this.verticalSpacing;
          var horizontalSpacing = this.horizontalSpacing instanceof Function ? this.horizontalSpacing(section, this, collectionView) : this.horizontalSpacing;
          var sectionInset = this.sectionInset instanceof Function ? this.sectionInset(section, this, collectionView) : this.sectionInset;
          var divide = this.divide instanceof Function ? this.divide(section, this, collectionView) : this.divide;
          var itemHeight = (contentSize.height - sectionInset.top - sectionInset.bottom - (divide - 1) * verticalSpacing) / divide;
          sectionMaxX += sectionInset.left;
          var sectionInfos = {};
          for (var divideIdx = 0; divideIdx < divide; divideIdx++) sectionInfos["" + divideIdx] = sectionMaxX;
          for (var item = 0; item < numberOfItems; item++) {
            var indexPath = new yx_types_1.YXIndexPath(section, item);
            var itemSize = this.itemSize instanceof Function ? this.itemSize(indexPath, this, collectionView) : this.itemSize;
            itemSize.height = itemHeight;
            var x = null;
            var y = null;
            var idx = null;
            for (var divideIdx = 0; divideIdx < divide; divideIdx++) {
              var max = sectionInfos["" + divideIdx];
              if (null == x || max < x) {
                idx = divideIdx;
                x = max;
                y = sectionInset.top + (itemHeight + verticalSpacing) * divideIdx;
              }
            }
            var attributes = new yx_collection_view_1.YXLayoutAttributes();
            attributes.indexPath = indexPath;
            attributes.frame = new cc.Rect(x + horizontalSpacing, y, itemSize.width, itemSize.height);
            allAttributes.push(attributes);
            sectionInfos["" + idx] = attributes.frame.xMax;
            sectionMaxX = Math.max(sectionMaxX, attributes.frame.xMax);
          }
          sectionMaxX += sectionInset.right;
        }
        this.attributes = allAttributes;
        contentSize.width = Math.max(contentSize.width, sectionMaxX);
        this.contentSize = contentSize;
      };
      YXMasonryFlowLayout.prototype._masonry_vertical = function(collectionView) {
        collectionView.scrollView.horizontal = false;
        collectionView.scrollView.vertical = true;
        var contentSize = collectionView.node.getContentSize();
        var allAttributes = [];
        var numberOfSections = collectionView.numberOfSections instanceof Function ? collectionView.numberOfSections(collectionView) : collectionView.numberOfSections;
        var sectionMaxY = 0;
        for (var section = 0; section < numberOfSections; section++) {
          var numberOfItems = collectionView.numberOfItems instanceof Function ? collectionView.numberOfItems(section, collectionView) : collectionView.numberOfItems;
          var verticalSpacing = this.verticalSpacing instanceof Function ? this.verticalSpacing(section, this, collectionView) : this.verticalSpacing;
          var horizontalSpacing = this.horizontalSpacing instanceof Function ? this.horizontalSpacing(section, this, collectionView) : this.horizontalSpacing;
          var sectionInset = this.sectionInset instanceof Function ? this.sectionInset(section, this, collectionView) : this.sectionInset;
          var divide = this.divide instanceof Function ? this.divide(section, this, collectionView) : this.divide;
          var itemWidth = (contentSize.width - sectionInset.left - sectionInset.right - (divide - 1) * horizontalSpacing) / divide;
          sectionMaxY += sectionInset.top;
          var sectionInfos = {};
          for (var divideIdx = 0; divideIdx < divide; divideIdx++) sectionInfos["" + divideIdx] = sectionMaxY;
          for (var item = 0; item < numberOfItems; item++) {
            var indexPath = new yx_types_1.YXIndexPath(section, item);
            var itemSize = this.itemSize instanceof Function ? this.itemSize(indexPath, this, collectionView) : this.itemSize;
            itemSize.width = itemWidth;
            var x = null;
            var y = null;
            var idx = null;
            for (var divideIdx = 0; divideIdx < divide; divideIdx++) {
              var max = sectionInfos["" + divideIdx];
              if (null == y || max < y) {
                idx = divideIdx;
                y = max;
                x = sectionInset.left + (itemWidth + horizontalSpacing) * divideIdx;
              }
            }
            var attributes = new yx_collection_view_1.YXLayoutAttributes();
            attributes.indexPath = indexPath;
            attributes.frame = new cc.Rect(x, y + verticalSpacing, itemSize.width, itemSize.height);
            allAttributes.push(attributes);
            sectionInfos["" + idx] = attributes.frame.yMax;
            sectionMaxY = Math.max(sectionMaxY, attributes.frame.yMax);
          }
          sectionMaxY += sectionInset.bottom;
        }
        this.attributes = allAttributes;
        contentSize.height = Math.max(contentSize.height, sectionMaxY);
        this.contentSize = contentSize;
      };
      return YXMasonryFlowLayout;
    }(yx_flow_layout_1.YXFlowLayout);
    exports.YXMasonryFlowLayout = YXMasonryFlowLayout;
    cc._RF.pop();
  }, {
    "./yx-collection-view": "yx-collection-view",
    "./yx-flow-layout": "yx-flow-layout",
    "./yx-types": "yx-types"
  } ],
  "yx-types": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "70769izZ4JPaaRTaj3lURGg", "yx-types");
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
    exports.YXEdgeInsets = exports.YXIndexPath = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
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
    }(cc.ValueType);
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
    }(cc.ValueType);
    exports.YXEdgeInsets = YXEdgeInsets;
    cc._RF.pop();
  }, {} ]
}, {}, [ "home", "yx-collection-view", "yx-cover-layout", "yx-flow-layout", "yx-masonry-flow-layout", "yx-types" ]);