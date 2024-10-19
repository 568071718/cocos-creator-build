System.register("chunks:///_virtual/chat-cell.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Sprite, Node, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Sprite = module.Sprite;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "409e4pl4hpHk5dwiC0nhyJm", "chat-cell", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ChatCell = exports('ChatCell', (_dec = ccclass('ChatCell'), _dec2 = property(Label), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ChatCell, _Component);

        function ChatCell() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "textLabel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "headIconSprite", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bubbleSprite", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "headNode", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "contentNode", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        return ChatCell;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "textLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "headIconSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bubbleSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "headNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/common-cell.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Sprite, SpriteFrame, randomRangeInt, math, UIOpacity, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      randomRangeInt = module.randomRangeInt;
      math = module.math;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "65f7cWi0w9IB71vtCkwTtHU", "common-cell", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CommonCell = exports('CommonCell', (_dec = ccclass('CommonCell'), _dec2 = property(Label), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property([SpriteFrame]), _dec6 = property([SpriteFrame]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CommonCell, _Component);

        function CommonCell() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "icon", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "levelSign", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "icons", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "signs", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = CommonCell.prototype;

        _proto.randomIcon = function randomIcon() {
          if (this.icons.length > 0) {
            var idx = randomRangeInt(0, this.icons.length);
            this.icon.spriteFrame = this.icons[idx];
          }
        };

        _proto.randomShapeColor = function randomShapeColor() {
          var shape = this.node.getChildByName("shape").getComponent(Sprite);
          var r = randomRangeInt(50, 200);
          var g = randomRangeInt(50, 200);
          var b = randomRangeInt(50, 200);
          shape.color = new math.Color(r, g, b);
        };

        _proto.randomStar = function randomStar() {
          var star = randomRangeInt(1, 6);
          var starNodes = this.node.getChildByPath("content/star").children;

          for (var index = 0; index < starNodes.length; index++) {
            var element = starNodes[index];
            var comp = element.getComponent(UIOpacity) || element.addComponent(UIOpacity);
            comp.opacity = index < star ? 255 : 0;
          }
        };

        _proto.randomLevelSign = function randomLevelSign() {
          if (this.signs.length > 0) {
            var idx = randomRangeInt(0, this.signs.length);
            this.levelSign.spriteFrame = this.signs[idx];
          }
        };

        return CommonCell;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "levelSign", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "icons", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "signs", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/custom-grid-flow-layout.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './yx-collection-view.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, UITransform, math, YXIndexPath, YXLayoutAttributes, YXLayout;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      math = module.math;
    }, function (module) {
      YXIndexPath = module.YXIndexPath;
      YXLayoutAttributes = module.YXLayoutAttributes;
      YXLayout = module.YXLayout;
    }],
    execute: function () {
      cclegacy._RF.push({}, "05c07ihQKtC34UTy6YIXtFI", "custom-grid-flow-layout", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * 需求: 垂直多列布局，当最后一排节点排列不满一行的时候居中排列
       */

      var CustomGridFlowLayout = exports('CustomGridFlowLayout', /*#__PURE__*/function (_YXLayout) {
        _inheritsLoose(CustomGridFlowLayout, _YXLayout);

        function CustomGridFlowLayout() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _YXLayout.call.apply(_YXLayout, [this].concat(args)) || this;
          _this.itemSize = new math.Size(100, 100);
          _this.verticalSpacing = 0;
          _this.horizontalSpacing = 0;
          _this.alignment = 1;
          return _this;
        }

        var _proto = CustomGridFlowLayout.prototype; // 0靠左 1居中 2靠右

        _proto.prepare = function prepare(collectionView) {
          this._vertical(collectionView);
        };

        _proto._vertical = function _vertical(collectionView) {
          collectionView.scrollView.horizontal = false;
          collectionView.scrollView.vertical = true;
          var attrs = [];
          var contentSize = collectionView.node.getComponent(UITransform).contentSize.clone(); // 计算每行最多可以放多少个节点

          var top = 0; // 上边距

          var width = collectionView.node.getComponent(UITransform).width;
          var num = 1;

          while (num * this.itemSize.width + (num - 1) * this.horizontalSpacing <= width) {
            num++;
          }

          num = Math.max(1, num - 1); // 根据设置的对齐方式计算左边距

          var left = 0;

          if (this.alignment == 1) {
            var maxWidth = num * this.itemSize.width + (num - 1) * this.horizontalSpacing; // 每行节点宽度

            left = (width - maxWidth) * 0.5;
          }

          if (this.alignment == 2) {
            var _maxWidth = num * this.itemSize.width + (num - 1) * this.horizontalSpacing; // 每行节点宽度


            left = width - _maxWidth;
          }

          var rowAttrs = []; // 保存每行的节点布局属性

          var total = collectionView.numberOfItems instanceof Function ? collectionView.numberOfItems(0, collectionView) : collectionView.numberOfItems;

          for (var index = 0; index < total; index++) {
            // 计算这个节点是第几行
            var row = Math.floor(index / num); // 计算这个节点是第几列

            var column = index % num; // 计算节点 origin

            var x = left + (this.itemSize.width + this.horizontalSpacing) * column;
            var y = top + (this.itemSize.height + this.verticalSpacing) * row;
            var attr = new YXLayoutAttributes();
            attr.indexPath = new YXIndexPath(0, index);
            attr.frame = new math.Rect();
            attr.frame.x = x;
            attr.frame.y = y;
            attr.frame.width = this.itemSize.width;
            attr.frame.height = this.itemSize.height;
            attrs.push(attr);
            var tmpArray = rowAttrs[row];

            if (tmpArray == null) {
              tmpArray = [];
              rowAttrs[row] = tmpArray;
            }

            tmpArray.push(attr);
            contentSize.height = Math.max(contentSize.height, attr.frame.yMax);
          }

          if (rowAttrs.length > 0) {
            // 检查最后一行节点数量，调整对齐逻辑
            var lastRowAttrs = rowAttrs[rowAttrs.length - 1];

            if (lastRowAttrs.length < num) {
              var _left = 0;

              if (this.alignment == 1) {
                var _maxWidth2 = lastRowAttrs.length * this.itemSize.width + (lastRowAttrs.length - 1) * this.horizontalSpacing; // 最后这行节点宽度


                _left = (width - _maxWidth2) * 0.5;
              }

              if (this.alignment == 2) {
                var _maxWidth3 = lastRowAttrs.length * this.itemSize.width + (lastRowAttrs.length - 1) * this.horizontalSpacing; // 最后这行节点宽度


                _left = width - _maxWidth3;
              }

              for (var _index = 0; _index < lastRowAttrs.length; _index++) {
                var element = lastRowAttrs[_index];
                element.frame.x = _left + (this.itemSize.width + this.horizontalSpacing) * _index;
              }
            }
          }

          this.attributes = attrs;
          this.contentSize = contentSize;
          rowAttrs = [];
        };

        _proto.initOffset = function initOffset(collectionView) {
          collectionView.scrollView.scrollToTop();
        };

        return CustomGridFlowLayout;
      }(YXLayout));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);

        function DebugViewRuntimeControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));

          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }

        var _proto = DebugViewRuntimeControl.prototype;

        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);

          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }

          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
              y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
              height = 20; // new nodes

          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles'; // title

          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;

            var _labelComponent = newLabel.getComponent(Label);

            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }

          y -= height; // single

          var currentRow = 0;

          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }

            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }

          x += width; // buttons

          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent; // misc

          y -= 40;

          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);

            _newNode.setPosition(x, y - height * _i2, 0.0);

            _newNode.setScale(0.5, 0.5, 0.5);

            _newNode.parent = miscNode;

            var _textComponent = _newNode.getComponentInChildren(RichText);

            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;

            var toggleComponent = _newNode.getComponent(Toggle);

            toggleComponent.isChecked = _i2 ? true : false;

            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);

            this.miscModeToggleList[_i2] = _newNode;
          } // composite


          y -= 150;

          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;

            _newNode2.setPosition(x, y - height * _i3, 0.0);

            _newNode2.setScale(0.5, 0.5, 0.5);

            _newNode2.parent = this.compositeModeToggle.parent;

            var _textComponent2 = _newNode2.getComponentInChildren(RichText);

            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;

            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);

            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };

        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');

          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };

        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };

        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };

        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };

        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };

        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);

          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);

            _toggleComponent.isChecked = true;
          }

          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };

        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };

        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;

          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }

          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }

          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };

        _proto.onLoad = function onLoad() {};

        _proto.update = function update(deltaTime) {};

        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/demo1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './common-cell.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, NodeEventType, director, tween, UITransform, math, Component, CommonCell, YXCollectionView, YXFlowLayout;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      NodeEventType = module.NodeEventType;
      director = module.director;
      tween = module.tween;
      UITransform = module.UITransform;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      CommonCell = module.CommonCell;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "91881uB4TRD7JtmQtEoU3XB", "demo1", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var demo1 = exports('demo1', (_dec = ccclass('demo1'), _dec2 = property(YXCollectionView), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo1, _Component);

        function demo1() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * 列表组件
           */

          _initializerDefineProperty(_this, "listComp", _descriptor, _assertThisInitialized(_this));
          /**
           * 测试数据源
           */


          _this.testData = [];
          _this.column = 3;
          return _this;
        }

        var _proto = demo1.prototype;

        _proto.onLoad = function onLoad() {
          this.node.getChildByName("back").once(NodeEventType.TOUCH_END, this.back, this);
        };

        _proto.back = function back() {
          director.loadScene("home");
        };
        /**
         * 模拟收到数据
         */


        _proto.receivedData = function receivedData() {
          this.testData = [];

          for (var index = 0; index < 10000; index++) {
            this.testData.push(index);
          } // 更新列表


          this.listComp.reloadData();
        };

        _proto.start = function start() {
          var _this2 = this; // 注册列表内需要使用的 cell 节点类型
          // 这个演示是通过编辑器绑定的，可以查看场景内 list 节点里的 register cells 配置
          // this.listComp.register(`cell`, () => instantiate('your cell prefab'))
          // 确定列表内一共需要显示多少条内容   


          this.listComp.numberOfItems = function () {
            return _this2.testData.length;
          };

          this.listComp.cellForItemAt = function (indexPath, collectionView) {
            // 通过下标可以获取到对应的数据
            var data = _this2.testData[indexPath.item]; // 通过标识符获取重用池内的节点

            var cell = collectionView.dequeueReusableCell("cell", indexPath); // 更新数据显示

            var comp = cell.getComponent(CommonCell);
            comp.label.string = "" + indexPath;
            comp.randomIcon();
            comp.randomShapeColor();
            comp.randomStar();
            comp.randomLevelSign();
            return cell; // 返回这个节点给列表显示
          };

          this.listComp.onTouchItemAt = function (indexPath, collectionView) {
            // 同样的通过下标可以获取到对应的数据
            var data = _this2.testData[indexPath.item]; // 通过 getVisibleNode 获取到点击的节点

            var cell = collectionView.getVisibleNode(indexPath);
            var scale = cell.scale.clone();
            scale.x = 1;
            scale.y = 1;
            var toScale = cell.scale.clone();
            toScale.x = 1.1;
            toScale.y = 1.1;
            tween(cell).set({
              scale: scale
            }).to(0.1, {
              scale: toScale
            }).to(0.1, {
              scale: scale
            }).start();
          };

          this.listComp.onCellDisplay = function (cell, indexPath) {// log(`onCellDisplay ${indexPath}`)
          };

          this.listComp.onCellEndDisplay = function (cell, indexPath) {// log(`onCellEndDisplay ${indexPath}`)
          }; // 配置 layout 布局规则


          this.updateFlowLayout(); // 模拟获取数据

          this.receivedData();
        };

        _proto.updateFlowLayout = function updateFlowLayout(column) {
          if (column === void 0) {
            column = this.column;
          }

          var layout = new YXFlowLayout();
          layout.horizontalSpacing = 10;
          layout.verticalSpacing = 10;
          var width = (this.listComp.node.getComponent(UITransform).width - layout.horizontalSpacing * (column - 1)) / column;
          layout.itemSize = new math.Size(width, 200);
          this.listComp.layout = layout;
        };

        _proto.addColumn = function addColumn() {
          this.column++;

          if (this.column > 7) {
            this.column = 7;
            return;
          }

          this.updateFlowLayout();
          this.listComp.reloadData();
        };

        _proto.subColumn = function subColumn() {
          this.column--;

          if (this.column < 1) {
            this.column = 1;
            return;
          }

          this.updateFlowLayout();
          this.listComp.reloadData();
        };

        return demo1;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "listComp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/demo10.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './chat-cell.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, math, SpriteFrame, Prefab, NodeEventType, director, UITransform, instantiate, log, Component, Label, randomRangeInt, ChatCell, YXCollectionView, YXFlowLayout;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      math = module.math;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
      NodeEventType = module.NodeEventType;
      director = module.director;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      log = module.log;
      Component = module.Component;
      Label = module.Label;
      randomRangeInt = module.randomRangeInt;
    }, null, function (module) {
      ChatCell = module.ChatCell;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "793d5EHdv5KqoUNqnGn6QA2", "demo10", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var _posOut = new math.Vec3();
      /**
       * label 跟气泡的上下边距
       */


      var spacing1 = 10;
      /**
       * label 跟气泡的左右边距
       */

      var spacing2 = 20;
      /**
       * 头像跟气泡间距
       */

      var spacing3 = 10;
      /**
       * 限制文本最大宽度  
       */

      var maxTextWidth = 380;
      /**
       * 限制文本最小高度
       */

      var minTextHeight = 70;
      /**
       * 模拟数据
       */

      var Data = function Data() {
        this.id = Data.ID++;
        this.isSelf = Math.random() < 0.3;
        this.content = randomChatMessage();
      };

      Data.ID = 0;
      var demo10 = exports('demo10', (_dec = ccclass('demo10'), _dec2 = property(YXCollectionView), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo10, _Component);

        function demo10() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * 列表组件
           */

          _initializerDefineProperty(_this, "listComp", _descriptor, _assertThisInitialized(_this));
          /**
           * 气泡
           */


          _initializerDefineProperty(_this, "leftBubble", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rightBubble", _descriptor3, _assertThisInitialized(_this));
          /**
           * 测试数据源
           */


          _this.testData = [];
          /**
           * ===============================================================================================
           * ===============================================================================================
           * 计算高度相关的业务  
           * 思路: 提前创建一个 cell 节点，提前赋值一遍数据然后计算出合适的大小  
           * 缓存: 由于高度是要动态计算的，考虑到性能，在高度计算好之后可以做一个缓存避免刷新列表时多次计算，正常来说实际开发中的数据都应该都会有一个唯一标识字段，可以用唯一标识当做 key 把计算好的结果缓存起来  
           * ===============================================================================================
           * =============================================================================================== 
           */

          _initializerDefineProperty(_this, "cellPrefab", _descriptor4, _assertThisInitialized(_this)); // 列表用到的 cell 预制体，用来实例化计算高度的 cell


          _this.templateCell = null; // 用来计算高度的 cell 实例

          _this.labelStatusCache = new Map();
          return _this;
        }

        var _proto = demo10.prototype;

        _proto.onLoad = function onLoad() {
          this.node.getChildByName("back").once(NodeEventType.TOUCH_END, this.back, this);
        };

        _proto.back = function back() {
          director.loadScene("home");
        };
        /**
         * 模拟收到数据
         */


        _proto.receivedData = function receivedData() {
          this.testData = [];

          for (var index = 0; index < 10; index++) {
            this.testData.push(new Data());
          } // 更新列表


          this.listComp.reloadData();
          this.listComp.scrollView.scrollToBottom();
          this.listComp.markForUpdateVisibleData();
        }
        /**
         * 随机插入一条新数据
         */
        ;

        _proto.randomNewMessage = function randomNewMessage() {
          this.testData.push(new Data());
          this.listComp.reloadData();
          this.listComp.scrollView.scrollToBottom(0.5);
          this.listComp.markForUpdateVisibleData();
        };

        _proto.start = function start() {
          var _this2 = this; // 注册列表内需要使用的 cell 节点类型
          // 这个演示是通过编辑器绑定的，可以查看场景内 list 节点里的 register cells 配置
          // this.listComp.register(`cell`, () => instantiate('your cell prefab'))
          // 确定列表内一共需要显示多少条内容   


          this.listComp.numberOfItems = function () {
            return _this2.testData.length;
          };

          this.listComp.cellForItemAt = function (indexPath, collectionView) {
            // 通过下标可以获取到对应的数据
            var rowData = _this2.testData[indexPath.item]; // 通过标识符获取重用池内的节点

            var cell = collectionView.dequeueReusableCell("cell", indexPath); // 更新数据

            var comp = cell.getComponent(ChatCell);
            comp.textLabel.string = rowData.content;

            if (rowData.isSelf) {
              comp.bubbleSprite.color = new math.Color("87AA60");
              comp.bubbleSprite.spriteFrame = _this2.rightBubble;
            } else {
              comp.bubbleSprite.color = new math.Color("63A6C0");
              comp.bubbleSprite.spriteFrame = _this2.leftBubble;
            }

            return cell; // 返回这个节点给列表显示
          };

          this.listComp.onCellDisplay = function (cell, indexPath) {
            // 在这里调整子节点的位置
            var rowData = _this2.testData[indexPath.item];
            var key = "" + rowData.id;

            var labelStatus = _this2.labelStatusCache.get(key);

            var cellUITrans = cell.getComponent(UITransform);
            var comp = cell.getComponent(ChatCell);
            var senderHeadUITrans = comp.headNode.getComponent(UITransform); // 更新 label 大小

            comp.textLabel.overflow = labelStatus.overflow;
            comp.textLabel.node.getComponent(UITransform).contentSize = labelStatus.size; // 更新气泡大小

            var contentUITrans = comp.contentNode.getComponent(UITransform);
            contentUITrans.height = cellUITrans.height;
            contentUITrans.width = labelStatus.size.width + spacing2 + spacing2; // 左右气泡边距
            // 更新气泡位置

            _posOut.set(comp.contentNode.position);

            _posOut.x = -cellUITrans.width * 0.5 + contentUITrans.width * 0.5 + senderHeadUITrans.width + spacing3;

            if (rowData.isSelf) {
              _posOut.x = -_posOut.x;
            }

            comp.contentNode.position = _posOut; // 更新头像的位置

            _posOut.set(comp.headNode.position);

            _posOut.x = -cellUITrans.width * 0.5 + senderHeadUITrans.width * 0.5;

            if (rowData.isSelf) {
              _posOut.x = -_posOut.x;
            }

            _posOut.y = cellUITrans.height * 0.5 - senderHeadUITrans.height * 0.5;
            comp.headNode.position = _posOut;
          }; // 配置 layout 布局规则


          var layout = new YXFlowLayout();
          layout.verticalSpacing = 20;
          var width = this.listComp.node.getComponent(UITransform).width;

          layout.itemSize = function (indexPath) {
            var rowData = _this2.testData[indexPath.item];

            var rowHeight = _this2.getRowHeight(rowData);

            return new math.Size(width, rowHeight);
          };

          this.listComp.layout = layout; // 模拟获取数据

          this.receivedData();
        };

        _proto.onDestroy = function onDestroy() {
          this.labelStatusCache.clear();
          this.labelStatusCache = null;
          this.templateCell.destroy();
          this.templateCell = null;
        }; // 缓存


        _proto.getRowHeight = function getRowHeight(rowData) {
          var key = "" + rowData.id;
          var labelStatus = this.labelStatusCache.get(key);

          if (labelStatus == null) {
            // 用来计算高度的 cell 创建一次就好，可以反复用
            if (this.templateCell == null) {
              this.templateCell = instantiate(this.cellPrefab);
            }

            var comp = this.templateCell.getComponent(ChatCell);
            comp.textLabel.string = rowData.content;

            try {
              labelStatus = calculateLabelSize(comp.textLabel, maxTextWidth);
            } catch (error) {
              log(error);
            } // 缓存起来


            this.labelStatusCache.set(key, labelStatus);
          } // 到这里拿到的是文本大小，还需要加上气泡上下边距


          var result = labelStatus.size.height + spacing1 + spacing1; // 限定一个最低高度

          result = Math.max(result, minTextHeight);
          return result;
        };

        return demo10;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listComp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "leftBubble", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rightBubble", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * 计算 label 实际大小
       * @param label 
       * @param maxWidth 文本最大宽度
       * @returns 
       */

      function calculateLabelSize(label, maxWidth) {
        var uiTrans = label.getComponent(UITransform);
        label.overflow = Label.Overflow.NONE;
        label.updateRenderData(true);

        if (uiTrans.width <= maxWidth) {
          return {
            overflow: label.overflow,
            size: uiTrans.contentSize.clone()
          };
        }

        label.overflow = Label.Overflow.RESIZE_HEIGHT;
        uiTrans.width = maxWidth;
        label.updateRenderData(true);
        return {
          overflow: label.overflow,
          size: uiTrans.contentSize.clone()
        };
      }

      var _chat_message = ["只因你太美", "哇真的是你呀", "你干嘛，哎呦", "哈哈", "你好，我叫萧黑梓", "你好，我叫吕诗涵", "你好，我叫姬泰美", "如果你也可以像我一样会打篮球，那我觉得这件事情，泰裤辣！", "唱，跳，rap，🏀，谬zk...", "迎面走来的你让我如此蠢蠢欲动", "这种感觉我从未有 Cause I got a crush on you", "再多一眼看一眼就会爆炸", "再近一点靠近点快被融化", "食不食油饼", "🌹🌹", "一天，邹忌照了照镜子，对着他的妻子说：“吾熟与城北蔡徐坤美？”其妻曰“忌你太美。”", "虞姬的皮肤好好看啊，忍不住我想作诗一首：既有歌舞惊云霄，霓裳羽衣漫窈窕。抬指一挥转天籁，美酒佳肴共逍遥。", "不能让恶俗的网络烂梗毒害孩子。网络时代，出现网言网语很正常。但是，网言网语不等于奇言怪语，也不等于胡言乱语，更不等于污言秽语。", "恶俗烂梗并非“无足轻重”，更不可“放任自由”。"];

      function randomChatMessage() {
        return _chat_message[randomRangeInt(0, _chat_message.length)];
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/demo11.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './common-cell.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, NodeEventType, director, log, UITransform, ScrollView, Component, CommonCell, YXCollectionView, YXIndexPath, YXFlowLayout;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      NodeEventType = module.NodeEventType;
      director = module.director;
      log = module.log;
      UITransform = module.UITransform;
      ScrollView = module.ScrollView;
      Component = module.Component;
    }, null, function (module) {
      CommonCell = module.CommonCell;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
      YXIndexPath = module.YXIndexPath;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "1cca85+M29MvotX2BQpaB3c", "demo11", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var demo11 = exports('demo11', (_dec = ccclass('demo11'), _dec2 = property(YXCollectionView), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo11, _Component);

        function demo11() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * 列表组件
           */

          _initializerDefineProperty(_this, "listComp", _descriptor, _assertThisInitialized(_this));
          /**
           * 分页指示器
           */


          _initializerDefineProperty(_this, "pageLabel", _descriptor2, _assertThisInitialized(_this));
          /**
           * 测试数据源
           */


          _this.testData = [];
          /**
           * 记录当前页面
           */

          _this.pageIdx = -1;
          /**
           * 默认选中的页面
           */

          _this.defaltPageIdx = 0;
          /**
           * 实现自动滚动逻辑  
           */

          _this.timer = 0;
          _this.autoScrollTimeInterval = 3;
          return _this;
        }

        var _proto = demo11.prototype;

        _proto.onLoad = function onLoad() {
          this.node.getChildByName("back").once(NodeEventType.TOUCH_END, this.back, this);
        };

        _proto.back = function back() {
          director.loadScene("home");
        };
        /**
         * 转换为真实索引  
         * 列表数量大小为 3 倍实际数据数量，需要通过求余方式获取数据，避免数组越界
         */


        _proto.originIndex = function originIndex(index) {
          return index % this.testData.length;
        };
        /**
         * 模拟收到数据
         */


        _proto.receivedData = function receivedData() {
          this.testData = [];
          this.testData.push("第 1 条数据");
          this.testData.push("第 2 条数据");
          this.testData.push("第 3 条数据");
          this.testData.push("第 4 条数据");
          this.testData.push("第 5 条数据"); // 更新列表

          this.listComp.reloadData(); // 默认显示某个页面

          if (this.defaltPageIdx && this.defaltPageIdx < this.testData.length) {
            this.listComp.scrollTo(new YXIndexPath(0, this.defaltPageIdx));
            this.defaltPageIdx = null;
          } // 复位到中间区域


          this.resetOffset(); // 数据源更新，手动通知一下通知页面变化

          this.checkPageChange();
        };

        _proto.start = function start() {
          var _this2 = this;
          /**
           * 无限轮播实现思路
           * 列表容器总体大小为 数据条数 * 3 的大小，每次在滚动结束的时候，偏移量总是复位到中间的位置，以此来实现无限滚动  
           * 比如原始数据 [ 0,1,2 ]，实际上在列表中为 [ 0,1,2, 0,1,2, 0,1,2 ]，每次滑动结束之后位置总是复位到中间区域  
           */
          // 注册列表内需要使用的 cell 节点类型
          // 这个演示是通过编辑器绑定的，可以查看场景内 list 节点里的 register cells 配置
          // this.listComp.register(`cell`, () => instantiate('your cell prefab'))
          // 确定列表内一共需要显示多少条内容   


          this.listComp.numberOfItems = function () {
            return _this2.testData.length * 3;
          };

          this.listComp.cellForItemAt = function (indexPath, collectionView) {
            // 通过下标可以获取到对应的数据
            var data = _this2.testData[_this2.originIndex(indexPath.item)]; // 通过标识符获取重用池内的节点


            var cell = collectionView.dequeueReusableCell("cell", indexPath);
            var comp = cell.getComponent(CommonCell);
            comp.label.string = data;
            return cell;
          };

          this.listComp.onTouchItemAt = function (indexPath) {
            log(indexPath);

            var data = _this2.testData[_this2.originIndex(indexPath.item)];
          }; // 配置 layout 布局规则


          var layout = new YXFlowLayout();
          layout.verticalSpacing = 20;
          layout.pagingEnabled = true;
          layout.itemSize = this.listComp.node.getComponent(UITransform).contentSize;
          this.listComp.layout = layout;
          this.listComp.recycleInterval = 0;
          this.listComp.scrollView.node.on(ScrollView.EventType.SCROLLING, this.checkPageChange, this);
          this.listComp.scrollView.node.on(ScrollView.EventType.SCROLL_ENDED, this.resetOffset, this); // 模拟获取数据

          this.receivedData();
        };

        _proto.update = function update(dt) {
          this.update_autoScroll(dt);
        }
        /**
         * 获取当前页面索引
         * @returns 
         */
        ;

        _proto.getCurrentPageIndex = function getCurrentPageIndex() {
          var offset = this.listComp.scrollView.getScrollOffset();
          offset.x = -offset.x;
          var idx = Math.round(offset.x / this.listComp.scrollView.view.width);
          return idx;
        }
        /**
         * 检查页面变化
         */
        ;

        _proto.checkPageChange = function checkPageChange() {
          var idx = this.getCurrentPageIndex();

          if (this.pageIdx !== idx) {
            this.pageIdx = idx; // 走到这里表示页面发生变化，可以处理需要处理的逻辑

            this.pageLabel.string = this.originIndex(this.pageIdx) + 1 + "/" + this.testData.length;
          }
        }
        /**
         * 使列表复位到中间区域
         */
        ;

        _proto.resetOffset = function resetOffset() {
          var offset = this.listComp.scrollView.getScrollOffset();
          offset.x = -offset.x;
          var idx = Math.round(offset.x / this.listComp.scrollView.view.width) % this.testData.length;
          offset.x = this.listComp.scrollView.view.width * (this.testData.length + idx);
          this.listComp.scrollView.scrollToOffset(offset); // 直接设置滚动位置不会触发刷新，这里强制刷新一下

          this.listComp.markForUpdateVisibleData(true);
        };

        _proto.update_autoScroll = function update_autoScroll(dt) {
          if (this.listComp.scrollView.isScrolling()) {
            return;
          }

          this.timer += dt;

          if (this.timer >= this.autoScrollTimeInterval) {
            this.timer = 0;
            var offset = this.listComp.scrollView.getScrollOffset();
            offset.x = -offset.x;
            var idx = Math.round(offset.x / this.listComp.scrollView.view.width) + 1;
            offset.x = this.listComp.scrollView.view.width * idx;
            this.listComp.scrollView.scrollToOffset(offset, 0.5);
          }
        };

        return demo11;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listComp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pageLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/demo2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './common-cell.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, NodeEventType, director, randomRangeInt, UITransform, math, Component, CommonCell, YXCollectionView, YXEdgeInsets, YXFlowLayout;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      NodeEventType = module.NodeEventType;
      director = module.director;
      randomRangeInt = module.randomRangeInt;
      UITransform = module.UITransform;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      CommonCell = module.CommonCell;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
      YXEdgeInsets = module.YXEdgeInsets;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "0af8f0XjvJBR7xeY5HjdZeR", "demo2", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var demo2 = exports('demo2', (_dec = ccclass('demo2'), _dec2 = property(YXCollectionView), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo2, _Component);

        function demo2() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * 列表组件
           */

          _initializerDefineProperty(_this, "listComp", _descriptor, _assertThisInitialized(_this));
          /**
           * 测试数据源
           */


          _this.testData = [];
          return _this;
        }

        var _proto = demo2.prototype;

        _proto.onLoad = function onLoad() {
          this.node.getChildByName("back").once(NodeEventType.TOUCH_END, this.back, this);
          this.node.getChildByName("reload").on(NodeEventType.TOUCH_END, this.receivedData, this);
        };

        _proto.back = function back() {
          director.loadScene("home");
        };
        /**
         * 模拟收到数据
         */


        _proto.receivedData = function receivedData() {
          this.testData = []; // 第 1 个区的数据

          {
            var array = [];
            var length = randomRangeInt(1, 21);

            for (var index = 0; index < length; index++) {
              array.push(index);
            }

            this.testData.push(array);
          } // 第 2 个区的数据

          {
            var _array = [];

            var _length = randomRangeInt(1, 5);

            for (var _index = 0; _index < _length; _index++) {
              _array.push(_index);
            }

            this.testData.push(_array);
          } // 第 3 个区的数据

          {
            var _array2 = [];

            var _length2 = randomRangeInt(3, 11);

            for (var _index2 = 0; _index2 < _length2; _index2++) {
              _array2.push(_index2);
            }

            this.testData.push(_array2);
          } // 第 4 个区的数据

          {
            var _array3 = [];

            for (var _index3 = 0; _index3 < 10000; _index3++) {
              _array3.push(_index3);
            }

            this.testData.push(_array3);
          } // 更新列表

          this.listComp.reloadData();
        };

        _proto.start = function start() {
          var _this2 = this; // 注册列表内需要使用的 cell 节点类型
          // 这个演示是通过编辑器绑定的，可以查看场景内 list 节点里的 register cells 配置
          // this.listComp.register(`cell`, () => instantiate('your cell prefab'))
          // 确定分几个区布局


          this.listComp.numberOfSections = function () {
            return _this2.testData.length;
          }; // 确定每个区里需要显示多少条内容   


          this.listComp.numberOfItems = function (section) {
            return _this2.testData[section].length;
          };

          this.listComp.cellForItemAt = function (indexPath, collectionView) {
            // 通过下标可以获取到对应的数据 (先通过区索引读，再通过元素索引读)
            var data = _this2.testData[indexPath.section][indexPath.item]; // 通过标识符获取重用池内的节点

            var cell = collectionView.dequeueReusableCell("cell", indexPath); // 更新数据显示

            var comp = cell.getComponent(CommonCell);
            comp.label.string = "" + indexPath;
            comp.randomIcon();
            comp.randomShapeColor();
            comp.randomStar();
            comp.randomLevelSign();
            return cell; // 返回这个节点给列表显示
          };

          var listWidth = this.listComp.node.getComponent(UITransform).width;
          var layout = new YXFlowLayout();
          /**
           * 可以直接设置布局参数 或者 选择根据区来调整布局参数  
           * 这里是演示了稍微复杂点的使用情况，实际使用的时候，可以根据自己的需求，直接写死 size/边距/间距 也是可以的  
           * 可以尝试一下自己随便写一些参数了解具体表现  
           */

          layout.horizontalSpacing = function (section) {
            if (section == 0) {
              return 10;
            }

            if (section == 1) {
              return 10;
            }

            if (section == 2) {
              return 10;
            }

            return 10;
          };

          layout.verticalSpacing = function (section) {
            if (section == 0) {
              return 10;
            }

            if (section == 1) {
              return 10;
            }

            if (section == 2) {
              return 10;
            }

            return 10;
          };

          layout.sectionInset = function (section) {
            if (section == 1) {
              return new YXEdgeInsets(10, 0, 0, 0);
            }

            if (section == 2) {
              return new YXEdgeInsets(10, 0, 0, 0);
            }

            if (section == 3) {
              return new YXEdgeInsets(10, 0, 0, 0);
            }

            return new YXEdgeInsets(0, 0, 0, 0);
          };

          layout.itemSize = function (indexPath, flowLayout) {
            /**
             * 获取其他布局参数 
             * 这些参数也不是必须要获取的，根据自己的实际需求，能正确的返回节点大小就好  
             * 实际开发中的情况可能比这个简单，也可能比这个复杂，总之具体如何写还是要看实际的需求  
             */
            var horizontalSpacing = _this2.getFlowLayoutHorizontalSpacing(flowLayout, indexPath.section);

            var verticalSpacing = _this2.getFlowLayoutVerticalSpacing(flowLayout, indexPath.section);

            var sectionInsets = _this2.getFlowLayoutSectionInset(flowLayout, indexPath.section);

            if (indexPath.section == 0) {
              var _width = (listWidth - sectionInsets.left - sectionInsets.right - horizontalSpacing * 3) / 4;

              return new math.Size(_width, 200);
            }

            if (indexPath.section == 1) {
              var _width2 = (listWidth - sectionInsets.left - sectionInsets.right - horizontalSpacing * 0) / 1;

              return new math.Size(_width2, 200);
            }

            if (indexPath.section == 2) {
              var _width3 = (listWidth - sectionInsets.left - sectionInsets.right - horizontalSpacing * 1) / 2;

              return new math.Size(_width3, 200);
            }

            var width = (listWidth - sectionInsets.left - sectionInsets.right - horizontalSpacing * 4) / 5;
            return new math.Size(width, 200);
          };

          this.listComp.layout = layout; // 模拟获取数据

          this.receivedData();
        };

        _proto.getFlowLayoutHorizontalSpacing = function getFlowLayoutHorizontalSpacing(flowLayout, section) {
          if (flowLayout.horizontalSpacing instanceof Function) {
            return flowLayout.horizontalSpacing(section, flowLayout, this.listComp);
          }

          return flowLayout.horizontalSpacing;
        };

        _proto.getFlowLayoutVerticalSpacing = function getFlowLayoutVerticalSpacing(flowLayout, section) {
          if (flowLayout.verticalSpacing instanceof Function) {
            return flowLayout.verticalSpacing(section, flowLayout, this.listComp);
          }

          return flowLayout.verticalSpacing;
        };

        _proto.getFlowLayoutSectionInset = function getFlowLayoutSectionInset(flowLayout, section) {
          if (flowLayout.sectionInset instanceof Function) {
            return flowLayout.sectionInset(section, flowLayout, this.listComp);
          }

          return flowLayout.sectionInset;
        };

        return demo2;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "listComp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/demo3.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './horizontal-list-cell.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, NodeEventType, director, randomRangeInt, math, Component, HorizontalListCell, YXCollectionView, YXFlowLayout;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      NodeEventType = module.NodeEventType;
      director = module.director;
      randomRangeInt = module.randomRangeInt;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      HorizontalListCell = module.HorizontalListCell;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "8bd5cT52z1OeZCkIunV9uKN", "demo3", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var demo3 = exports('demo3', (_dec = ccclass('demo3'), _dec2 = property(YXCollectionView), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo3, _Component);

        function demo3() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * 列表组件
           */

          _initializerDefineProperty(_this, "listComp", _descriptor, _assertThisInitialized(_this));
          /**
           * 测试数据源
           */


          _this.testData = [];
          return _this;
        }

        var _proto = demo3.prototype;

        _proto.onLoad = function onLoad() {
          this.node.getChildByName("back").once(NodeEventType.TOUCH_END, this.back, this);
        };

        _proto.back = function back() {
          director.loadScene("home");
        };
        /**
         * 模拟收到数据
         */


        _proto.receivedData = function receivedData() {
          this.testData = [];

          for (var index = 0; index < 1000; index++) {
            var array = [];
            var length = randomRangeInt(1, 20);

            for (var j = 0; j < length; j++) {
              array.push(j);
            }

            this.testData.push(array);
          } // 更新列表


          this.listComp.reloadData();
        };

        _proto.start = function start() {
          var _this2 = this; // 注册列表内需要使用的 cell 节点类型
          // 这个演示是通过编辑器绑定的，可以查看场景内 list 节点里的 register cells 配置
          // this.listComp.register(`cell`, () => instantiate('your cell prefab'))
          // 确定列表内一共需要显示多少条内容   


          this.listComp.numberOfItems = function () {
            return _this2.testData.length;
          };

          this.listComp.cellForItemAt = function (indexPath, collectionView) {
            // 通过下标可以获取到对应的数据
            var data = _this2.testData[indexPath.item]; // 通过标识符获取重用池内的节点

            var cell = collectionView.dequeueReusableCell("cell", indexPath);
            var comp = cell.getComponent(HorizontalListCell);
            comp.dataArray = data;
            comp.list.reloadData();
            comp.list.scrollView.scrollToLeft(); // 恢复到最左边，因为有复用逻辑，位置会错乱

            comp.list.markForUpdateVisibleData();
            return cell;
          }; // 配置 layout 布局规则


          var layout = new YXFlowLayout();
          layout.verticalSpacing = 20;
          layout.itemSize = new math.Size(700, 200);
          this.listComp.layout = layout; // 模拟获取数据

          this.receivedData();
        };

        return demo3;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "listComp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/demo4.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './vertical-list-cell.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, NodeEventType, director, randomRangeInt, UITransform, ScrollView, Component, VerticalListCell, YXCollectionView, YXIndexPath, YXFlowLayout;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      NodeEventType = module.NodeEventType;
      director = module.director;
      randomRangeInt = module.randomRangeInt;
      UITransform = module.UITransform;
      ScrollView = module.ScrollView;
      Component = module.Component;
    }, null, function (module) {
      VerticalListCell = module.VerticalListCell;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
      YXIndexPath = module.YXIndexPath;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "836f99keWFOSbXDUWQ+t6Rb", "demo4", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var demo4 = exports('demo4', (_dec = ccclass('demo4'), _dec2 = property(YXCollectionView), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo4, _Component);

        function demo4() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * 列表组件
           */

          _initializerDefineProperty(_this, "listComp", _descriptor, _assertThisInitialized(_this));
          /**
           * 分页指示器
           */


          _initializerDefineProperty(_this, "pageLabel", _descriptor2, _assertThisInitialized(_this));
          /**
           * 测试数据源
           */


          _this.testData = [];
          /**
           * 默认选中的页面
           */

          _this.defaltPageIdx = 10;
          /**
           * 记录当前页面
           */

          _this.pageIdx = -1;
          return _this;
        }

        var _proto = demo4.prototype;

        _proto.onLoad = function onLoad() {
          this.node.getChildByName("back").once(NodeEventType.TOUCH_END, this.back, this);
        };

        _proto.back = function back() {
          director.loadScene("home");
        };
        /**
         * 模拟收到数据
         */


        _proto.receivedData = function receivedData() {
          this.testData = [];

          for (var index = 0; index < 100; index++) {
            var array = [];
            var length = randomRangeInt(100, 1000);

            for (var j = 0; j < length; j++) {
              array.push(j);
            }

            this.testData.push(array);
          } // 更新列表


          this.listComp.reloadData(); // 默认显示某个页面

          if (this.defaltPageIdx && this.defaltPageIdx < this.testData.length) {
            this.listComp.scrollTo(new YXIndexPath(0, this.defaltPageIdx));
            this.defaltPageIdx = null;
          } // 数据源更新，手动通知一下通知页面变化


          this.checkPageChange();
        };

        _proto.start = function start() {
          var _this2 = this; // 注册列表内需要使用的 cell 节点类型
          // 这个演示是通过编辑器绑定的，可以查看场景内 list 节点里的 register cells 配置
          // this.listComp.register(`cell`, () => instantiate('your cell prefab'))
          // 确定列表内一共需要显示多少条内容   


          this.listComp.numberOfItems = function () {
            return _this2.testData.length;
          };

          this.listComp.cellForItemAt = function (indexPath, collectionView) {
            // 通过下标可以获取到对应的数据
            var data = _this2.testData[indexPath.item]; // 通过标识符获取重用池内的节点

            var cell = collectionView.dequeueReusableCell("cell", indexPath);
            var comp = cell.getComponent(VerticalListCell);
            comp.dataArray = data;
            comp.list.reloadData();
            comp.list.scrollView.scrollToTop(); // 恢复到最上边，因为有复用逻辑，位置会错乱

            comp.list.markForUpdateVisibleData();
            return cell;
          }; // 配置 layout 布局规则


          var layout = new YXFlowLayout();
          layout.verticalSpacing = 20;
          layout.pagingEnabled = true;
          layout.itemSize = this.listComp.node.getComponent(UITransform).contentSize;
          this.listComp.layout = layout;
          this.listComp.recycleInterval = 0;
          /**
           * 二选一，一个是滑动过程中检查，一个是仅在滑动结束的时候检查
           */

          this.listComp.scrollView.node.on(ScrollView.EventType.SCROLLING, this.checkPageChange, this); // this.listComp.scrollView.node.on(ScrollView.EventType.SCROLL_ENDED, this.checkPageChange, this)
          // 模拟获取数据

          this.receivedData();
        };
        /**
         * 获取当前页面索引
         * @returns 
         */


        _proto.getCurrentPageIndex = function getCurrentPageIndex() {
          var offset = this.listComp.scrollView.getScrollOffset();
          offset.x = -offset.x;
          var idx = Math.round(offset.x / this.listComp.scrollView.view.width);
          return idx;
        }
        /**
         * 检查页面变化
         */
        ;

        _proto.checkPageChange = function checkPageChange() {
          var idx = this.getCurrentPageIndex();

          if (this.pageIdx !== idx) {
            this.pageIdx = idx; // 走到这里表示页面发生变化，可以处理需要处理的逻辑

            this.pageLabel.string = this.pageIdx + 1 + "/" + this.testData.length;
          }
        };

        return demo4;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listComp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pageLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/demo5.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './common-cell.ts', './horizontal-list-cell.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, NodeEventType, director, Label, math, Component, randomRangeInt, CommonCell, HorizontalListCell, YXCollectionView, YXFlowLayout;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      NodeEventType = module.NodeEventType;
      director = module.director;
      Label = module.Label;
      math = module.math;
      Component = module.Component;
      randomRangeInt = module.randomRangeInt;
    }, null, function (module) {
      CommonCell = module.CommonCell;
    }, function (module) {
      HorizontalListCell = module.HorizontalListCell;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "a048fYnLLVIqbzXUakosw+l", "demo5", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var Data = function Data() {
        this.id = Data.ID++;
        /**
         * 假设根据这个 type 来区分使用 cell 类型
         */

        this.type = randomRangeInt(0, 4);
      };

      Data.ID = 0;
      var demo5 = exports('demo5', (_dec = ccclass('demo5'), _dec2 = property(YXCollectionView), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo5, _Component);

        function demo5() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * 列表组件
           */

          _initializerDefineProperty(_this, "listComp", _descriptor, _assertThisInitialized(_this));
          /**
           * 测试数据源
           */


          _this.testData = [];
          return _this;
        }

        var _proto = demo5.prototype;

        _proto.onLoad = function onLoad() {
          this.node.getChildByName("back").once(NodeEventType.TOUCH_END, this.back, this);
          this.node.getChildByName("reload").on(NodeEventType.TOUCH_END, this.receivedData, this);
        };

        _proto.back = function back() {
          director.loadScene("home");
        };
        /**
         * 模拟收到数据
         */


        _proto.receivedData = function receivedData() {
          this.testData = [];

          for (var index = 0; index < 10000; index++) {
            var data = new Data();
            this.testData.push(data);
          } // 更新列表


          this.listComp.reloadData();
        };

        _proto.start = function start() {
          var _this2 = this; // 注册列表内需要使用的 cell 节点类型
          // 这个演示是通过编辑器绑定的，可以查看场景内 list 节点里的 register cells 配置
          // this.listComp.register(`cell`, () => instantiate('your cell prefab'))
          // 确定列表内一共需要显示多少条内容   


          this.listComp.numberOfItems = function () {
            return _this2.testData.length;
          };

          this.listComp.cellForItemAt = function (indexPath, collectionView) {
            // 通过下标可以获取到对应的数据
            var data = _this2.testData[indexPath.item]; // 通过标识符获取重用池内的节点

            if (data.type == 0) {
              var cell = collectionView.dequeueReusableCell("hor-cell", indexPath);
              var comp = cell.getComponent(HorizontalListCell);
              comp.dataArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              comp.list.reloadData();
              comp.list.scrollView.scrollToLeft();
              comp.list.markForUpdateVisibleData();
              return cell;
            }

            if (data.type == 1) {
              var _cell = collectionView.dequeueReusableCell("cell", indexPath);

              var _comp = _cell.getComponent(CommonCell);

              _comp.label.string = "" + indexPath;

              _comp.randomIcon();

              _comp.randomShapeColor();

              _comp.randomLevelSign();

              _comp.randomStar();

              return _cell;
            }

            if (data.type == 2) {
              var _cell2 = collectionView.dequeueReusableCell("empty-1", indexPath);

              var label = _cell2.getChildByPath("content/label").getComponent(Label);

              label.string = "" + indexPath;
              return _cell2;
            }

            if (data.type == 3) {
              var _cell3 = collectionView.dequeueReusableCell("empty-2", indexPath);

              return _cell3;
            }

            return null;
          }; // 配置 layout 布局规则


          var layout = new YXFlowLayout();
          layout.verticalSpacing = 20;

          layout.itemSize = function (indexPath) {
            // 通过下标可以获取到对应的数据
            var data = _this2.testData[indexPath.item];

            if (data.type == 2) {
              return new math.Size(700, 220);
            }

            return new math.Size(700, 200);
          };

          this.listComp.layout = layout; // 模拟获取数据

          this.receivedData();
        };

        return demo5;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "listComp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/demo6.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './common-cell.ts', './yx-masonry-flow-layout.ts', './yx-collection-view.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, NodeEventType, director, math, Component, randomRangeInt, CommonCell, YXMasonryFlowLayout, YXCollectionView;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      NodeEventType = module.NodeEventType;
      director = module.director;
      math = module.math;
      Component = module.Component;
      randomRangeInt = module.randomRangeInt;
    }, null, function (module) {
      CommonCell = module.CommonCell;
    }, function (module) {
      YXMasonryFlowLayout = module.YXMasonryFlowLayout;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "69e53492jBPJaXyq3HdIiUy", "demo6", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var Data = function Data() {
        this.id = Data.ID++;
        this.height = randomRangeInt(200, 500);
      };

      Data.ID = 0;
      var demo6 = exports('demo6', (_dec = ccclass('demo6'), _dec2 = property(YXCollectionView), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo6, _Component);

        function demo6() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * 列表组件
           */

          _initializerDefineProperty(_this, "listComp", _descriptor, _assertThisInitialized(_this));
          /**
           * 测试数据源
           */


          _this.testData = [];
          _this.column = 3;
          return _this;
        }

        var _proto = demo6.prototype;

        _proto.onLoad = function onLoad() {
          this.node.getChildByName("back").once(NodeEventType.TOUCH_END, this.back, this);
        };

        _proto.back = function back() {
          director.loadScene("home");
        };
        /**
         * 模拟收到数据
         */


        _proto.receivedData = function receivedData() {
          this.testData = [];

          for (var index = 0; index < 10000; index++) {
            this.testData.push(new Data());
          } // 更新列表


          this.listComp.reloadData();
        };

        _proto.start = function start() {
          var _this2 = this; // 注册列表内需要使用的 cell 节点类型
          // 这个演示是通过编辑器绑定的，可以查看场景内 list 节点里的 register cells 配置
          // this.listComp.register(`cell`, () => instantiate('your cell prefab'))
          // 确定列表内一共需要显示多少条内容   


          this.listComp.numberOfItems = function () {
            return _this2.testData.length;
          };

          this.listComp.cellForItemAt = function (indexPath, collectionView) {
            // 通过下标可以获取到对应的数据
            var data = _this2.testData[indexPath.item]; // 通过标识符获取重用池内的节点

            var cell = collectionView.dequeueReusableCell("cell", indexPath); // 更新数据显示

            var comp = cell.getComponent(CommonCell);
            comp.label.string = "" + indexPath;
            comp.randomIcon();
            comp.randomShapeColor();
            comp.randomStar();
            comp.randomLevelSign();
            return cell; // 返回这个节点给列表显示
          }; // 配置 layout 布局规则


          this.updateFlowLayout(); // 模拟获取数据

          this.receivedData();
        };

        _proto.updateFlowLayout = function updateFlowLayout(column) {
          var _this3 = this;

          if (column === void 0) {
            column = this.column;
          }

          var layout = new YXMasonryFlowLayout();
          layout.horizontalSpacing = 10;
          layout.verticalSpacing = 10;
          layout.divide = column;

          layout.itemSize = function (indexPath) {
            // 通过下标可以获取到对应的数据
            var data = _this3.testData[indexPath.item];
            return new math.Size(0, data.height);
          };

          this.listComp.layout = layout;
        };

        _proto.addColumn = function addColumn() {
          this.column++;

          if (this.column > 7) {
            this.column = 7;
            return;
          }

          this.updateFlowLayout();
          this.listComp.reloadData();
        };

        _proto.subColumn = function subColumn() {
          this.column--;

          if (this.column < 1) {
            this.column = 1;
            return;
          }

          this.updateFlowLayout();
          this.listComp.reloadData();
        };

        return demo6;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "listComp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/demo7.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './common-cell.ts', './custom-grid-flow-layout.ts', './yx-collection-view.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, NodeEventType, director, UITransform, math, Component, CommonCell, CustomGridFlowLayout, YXCollectionView;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      NodeEventType = module.NodeEventType;
      director = module.director;
      UITransform = module.UITransform;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      CommonCell = module.CommonCell;
    }, function (module) {
      CustomGridFlowLayout = module.CustomGridFlowLayout;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "31648NNhoFNR6HoU+lE9AsR", "demo7", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var demo7 = exports('demo7', (_dec = ccclass('demo7'), _dec2 = property(YXCollectionView), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo7, _Component);

        function demo7() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * 列表组件
           */

          _initializerDefineProperty(_this, "listComp", _descriptor, _assertThisInitialized(_this));
          /**
           * 测试数据源
           */


          _this.testData = [];
          _this.column = 5;
          _this.alignment = 0;
          return _this;
        }

        var _proto = demo7.prototype;

        _proto.onLoad = function onLoad() {
          this.node.getChildByName("back").once(NodeEventType.TOUCH_END, this.back, this);
        };

        _proto.back = function back() {
          director.loadScene("home");
        };
        /**
         * 模拟收到数据
         */


        _proto.receivedData = function receivedData() {
          this.testData = [];

          for (var index = 0; index < 17; index++) {
            this.testData.push(index);
          } // 更新列表


          this.listComp.reloadData();
        };

        _proto.start = function start() {
          var _this2 = this; // 注册列表内需要使用的 cell 节点类型
          // 这个演示是通过编辑器绑定的，可以查看场景内 list 节点里的 register cells 配置
          // this.listComp.register(`cell`, () => instantiate('your cell prefab'))
          // 确定列表内一共需要显示多少条内容   


          this.listComp.numberOfItems = function () {
            return _this2.testData.length;
          };

          this.listComp.cellForItemAt = function (indexPath, collectionView) {
            // 通过下标可以获取到对应的数据
            var data = _this2.testData[indexPath.item]; // 通过标识符获取重用池内的节点

            var cell = collectionView.dequeueReusableCell("cell", indexPath); // 更新数据显示

            var comp = cell.getComponent(CommonCell);
            comp.label.string = "" + indexPath;
            comp.randomIcon();
            comp.randomShapeColor();
            comp.randomStar();
            comp.randomLevelSign();
            return cell; // 返回这个节点给列表显示
          }; // 配置 layout 布局规则


          this.updateFlowLayout(); // 模拟获取数据

          this.receivedData();
        };

        _proto.updateFlowLayout = function updateFlowLayout(column, alignment) {
          if (column === void 0) {
            column = this.column;
          }

          if (alignment === void 0) {
            alignment = this.alignment;
          }

          var layout = new CustomGridFlowLayout();
          layout.horizontalSpacing = 10;
          layout.verticalSpacing = 10;
          layout.alignment = alignment;
          var width = (this.listComp.node.getComponent(UITransform).width - layout.horizontalSpacing * (column - 1)) / column;
          layout.itemSize = new math.Size(width, 200);
          this.listComp.layout = layout;
        };

        _proto.addColumn = function addColumn() {
          this.column++;

          if (this.column > 7) {
            this.column = 7;
            return;
          }

          this.updateFlowLayout();
          this.listComp.reloadData();
        };

        _proto.subColumn = function subColumn() {
          this.column--;

          if (this.column < 1) {
            this.column = 1;
            return;
          }

          this.updateFlowLayout();
          this.listComp.reloadData();
        };

        _proto.alignmentLeft = function alignmentLeft() {
          if (this.alignment == 0) {
            return;
          }

          this.alignment = 0;
          this.updateFlowLayout();
          this.listComp.reloadData();
        };

        _proto.alignmentCenter = function alignmentCenter() {
          if (this.alignment == 1) {
            return;
          }

          this.alignment = 1;
          this.updateFlowLayout();
          this.listComp.reloadData();
        };

        _proto.alignmentRight = function alignmentRight() {
          if (this.alignment == 2) {
            return;
          }

          this.alignment = 2;
          this.updateFlowLayout();
          this.listComp.reloadData();
        };

        return demo7;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "listComp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/demo8.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './common-cell.ts', './yx-cover-layout.ts', './yx-collection-view.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, NodeEventType, director, math, Component, CommonCell, YXCoverLayout, YXCollectionView;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      NodeEventType = module.NodeEventType;
      director = module.director;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      CommonCell = module.CommonCell;
    }, function (module) {
      YXCoverLayout = module.YXCoverLayout;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "2c17eTA769Dyru4Ln17DOaO", "demo8", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var Data = function Data() {
        this.id = Data.ID++;
      };

      Data.ID = 0;
      var demo8 = exports('demo8', (_dec = ccclass('demo8'), _dec2 = property(YXCollectionView), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo8, _Component);

        function demo8() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * 列表组件
           */

          _initializerDefineProperty(_this, "listComp", _descriptor, _assertThisInitialized(_this));
          /**
           * 测试数据源
           */


          _this.testData = [];
          return _this;
        }

        var _proto = demo8.prototype;

        _proto.onLoad = function onLoad() {
          this.node.getChildByName("back").once(NodeEventType.TOUCH_END, this.back, this);
        };

        _proto.back = function back() {
          director.loadScene("home");
        };
        /**
         * 模拟收到数据
         */


        _proto.receivedData = function receivedData() {
          this.testData = [];

          for (var index = 0; index < 10000; index++) {
            this.testData.push(new Data());
          } // 更新列表


          this.listComp.reloadData();
        };

        _proto.start = function start() {
          var _this2 = this; // 注册列表内需要使用的 cell 节点类型
          // 这个演示是通过编辑器绑定的，可以查看场景内 list 节点里的 register cells 配置
          // this.listComp.register(`cell`, () => instantiate('your cell prefab'))
          // 确定列表内一共需要显示多少条内容   


          this.listComp.numberOfItems = function () {
            return _this2.testData.length;
          };

          this.listComp.cellForItemAt = function (indexPath, collectionView) {
            // 通过下标可以获取到对应的数据
            var data = _this2.testData[indexPath.item]; // 通过标识符获取重用池内的节点

            var cell = collectionView.dequeueReusableCell("cell", indexPath); // 更新数据显示

            var comp = cell.getComponent(CommonCell);
            comp.label.string = "" + indexPath;
            comp.randomIcon();
            comp.randomShapeColor();
            comp.randomStar();
            comp.randomLevelSign();
            return cell; // 返回这个节点给列表显示
          };

          this.listComp.onTouchItemAt = function (indexPath, collectionView) {
            collectionView.scrollTo(indexPath, 0.5);
          }; // 配置 layout 布局规则


          var layout = new YXCoverLayout(new math.Size(500, 400));
          layout.pagingEnabled = true;
          this.listComp.layout = layout; // 模拟获取数据

          this.receivedData();
        };

        _proto.verticalScroll = function verticalScroll() {
          if (this.listComp.scrollDirection == YXCollectionView.ScrollDirection.VERTICAL) {
            return;
          }

          this.listComp.scrollDirection = YXCollectionView.ScrollDirection.VERTICAL;
          this.listComp.reloadData();
        };

        _proto.horizontalScroll = function horizontalScroll() {
          if (this.listComp.scrollDirection == YXCollectionView.ScrollDirection.HORIZONTAL) {
            return;
          }

          this.listComp.scrollDirection = YXCollectionView.ScrollDirection.HORIZONTAL;
          this.listComp.reloadData();
        };

        return demo8;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "listComp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/demo9.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './common-cell.ts', './yx-carousel-layout.ts', './yx-collection-view.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Slider, NodeEventType, director, math, Component, CommonCell, YXCarouselLayout, YXCollectionView;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Slider = module.Slider;
      NodeEventType = module.NodeEventType;
      director = module.director;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      CommonCell = module.CommonCell;
    }, function (module) {
      YXCarouselLayout = module.YXCarouselLayout;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "f475379iXpMj7KpastbJTsE", "demo9", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var Data = function Data() {
        this.id = Data.ID++;
      };

      Data.ID = 0;
      var demo9 = exports('demo9', (_dec = ccclass('demo9'), _dec2 = property(YXCollectionView), _dec3 = property(Slider), _dec4 = property(Slider), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo9, _Component);

        function demo9() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * 列表组件
           */

          _initializerDefineProperty(_this, "listComp", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "angleSlider", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "radiusSlider", _descriptor3, _assertThisInitialized(_this));
          /**
           * 测试数据源
           */


          _this.testData = [];
          return _this;
        }

        var _proto = demo9.prototype;

        _proto.onLoad = function onLoad() {
          this.node.getChildByName("back").once(NodeEventType.TOUCH_END, this.back, this);
        };

        _proto.back = function back() {
          director.loadScene("home");
        };
        /**
         * 模拟收到数据
         */


        _proto.receivedData = function receivedData() {
          this.testData = [];

          for (var index = 0; index < 10; index++) {
            this.testData.push(new Data());
          } // 更新列表


          this.listComp.reloadData();
        };

        _proto.start = function start() {
          var _this2 = this; // 注册列表内需要使用的 cell 节点类型
          // 这个演示是通过编辑器绑定的，可以查看场景内 list 节点里的 register cells 配置
          // this.listComp.register(`cell`, () => instantiate('your cell prefab'))
          // 确定列表内一共需要显示多少条内容   


          this.listComp.numberOfItems = function () {
            return _this2.testData.length;
          };

          this.listComp.cellForItemAt = function (indexPath, collectionView) {
            // 通过下标可以获取到对应的数据
            var data = _this2.testData[indexPath.item]; // 通过标识符获取重用池内的节点

            var cell = collectionView.dequeueReusableCell("cell", indexPath); // 更新数据显示

            var comp = cell.getComponent(CommonCell);
            comp.label.string = "" + indexPath;
            return cell; // 返回这个节点给列表显示
          };

          this.listComp.onTouchItemAt = function (indexPath, collectionView) {
            collectionView.scrollTo(indexPath, 0.5);
          }; // 配置 layout 布局规则


          this.updateLayout(); // 模拟获取数据

          this.receivedData();
        };

        _proto.updateLayout = function updateLayout() {
          var layout = new YXCarouselLayout();
          layout.itemSize = new math.Size(200, 260);
          layout.radius = this.radiusSlider.progress * 380;
          layout.angleX = this.angleSlider.progress * 360;
          this.listComp.layout = layout;
        };

        _proto.sliderChange = function sliderChange(slider, custom) {
          this.updateLayout();
          this.listComp.reloadData();
        };

        return demo9;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listComp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "angleSlider", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "radiusSlider", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/home.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './common-cell.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, ProgressBar, director, log, UITransform, math, ScrollBar, NodeEventType, Component, CommonCell, YXCollectionView, YXFlowLayout;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
      director = module.director;
      log = module.log;
      UITransform = module.UITransform;
      math = module.math;
      ScrollBar = module.ScrollBar;
      NodeEventType = module.NodeEventType;
      Component = module.Component;
    }, null, function (module) {
      CommonCell = module.CommonCell;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;

      cclegacy._RF.push({}, "42072y8/W9KRIphpDOiO7OH", "home", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var home = exports('home', (_dec = ccclass('home'), _dec2 = property(YXCollectionView), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(home, _Component);

        function home() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * 列表组件
           */

          _initializerDefineProperty(_this, "listComp", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = home.prototype;

        _proto.onLoad = function onLoad() {
          this.node.getChildByName("loading").active = false;
        };

        _proto.start = function start() {
          var _this2 = this;
          /**
           * scroll bar 使用演示
           */


          this.setupScrollBar();
          var array = [{
            name: 'Flow Layout',
            is_header: true
          }, {
            name: '基本列表',
            scene: 'demo1'
          }, {
            name: '分区排列',
            scene: 'demo2'
          }, {
            name: '垂直列表嵌套水平列表',
            scene: 'demo3'
          }, {
            name: '水平列表嵌套垂直列表',
            scene: 'demo4'
          }, {
            name: '同列表多种 cell 类型',
            scene: 'demo5'
          }, {
            name: '计算高度(简易聊天页面)',
            scene: 'demo10'
          }, {
            name: '无限轮播',
            scene: 'demo11'
          }, {
            name: '自定义 Layout',
            is_header: true
          }, {
            name: '瀑布流',
            scene: 'demo6'
          }, {
            name: '垂直多列节点对齐',
            scene: 'demo7'
          }, {
            name: 'Cover',
            scene: 'demo8'
          }, {
            name: '旋转木马',
            scene: 'demo9'
          }];

          this.listComp.numberOfItems = function () {
            return array.length;
          };

          this.listComp.cellForItemAt = function (indexPath, collectionView) {
            var rowData = array[indexPath.item];

            if (rowData.is_header) {
              var _cell = collectionView.dequeueReusableCell("header", indexPath);

              var label = _cell.getChildByPath("content/label").getComponent(Label);

              label.string = rowData.name;
              return _cell;
            }

            var cell = collectionView.dequeueReusableCell("cell", indexPath);
            var comp = cell.getComponent(CommonCell);
            comp.label.string = rowData.name;
            return cell;
          };

          this.listComp.onTouchItemAt = function (indexPath, collectionView) {
            var rowData = array[indexPath.item];

            if (rowData.is_header) {
              return;
            }

            home.LAST_OFFSET = collectionView.scrollView.getScrollOffset();
            home.LAST_OFFSET.x = -home.LAST_OFFSET.x;

            var loading = _this2.node.getChildByName("loading");

            var progressBar = loading.getChildByName("progressBar").getComponent(ProgressBar);
            loading.active = true;
            var progress = 0;
            director.preloadScene(rowData.scene, function (a, b) {
              progress = Math.max(progress, a / b);
              progressBar.progress = progress;
            }, function (err) {
              if (err == null) {
                director.loadScene(rowData.scene);
              } else {
                loading.active = false;
                progressBar.progress = 0;
                log(err);
              }
            });
          };

          var layout = new YXFlowLayout();
          layout.verticalSpacing = 20;
          layout.horizontalSpacing = 20;
          var listWidth = this.listComp.node.getComponent(UITransform).width;
          var itemWidth = (listWidth - layout.horizontalSpacing * 1) / 2.0;

          layout.itemSize = function (indexPath) {
            var rowData = array[indexPath.item];

            if (rowData.is_header) {
              return new math.Size(listWidth, 100);
            }

            return new math.Size(itemWidth, 200);
          };

          this.listComp.layout = layout;
          this.listComp.reloadData();

          if (home.LAST_OFFSET) {
            this.listComp.scrollView.scrollToOffset(home.LAST_OFFSET);
            this.listComp.markForUpdateVisibleData(true);
          }
        }
        /**
         * 关联滑动条  
         * 可以通过 YXCollectionView 的 scrollView 方法获取列表的 ScrollView 组件，配合 ScrollView 组件实现滑动条的交互逻辑
         */
        ;

        _proto.setupScrollBar = function setupScrollBar() {
          var _this3 = this;
          /**
           * 关联 ScrollBar 节点  
           * 这个 ScrollBar 节点完全交给使用者自己管理，内部不会封装这个 (毕竟这个位置/样式自由度太高了)  
           * 也就是在需要滑动条的时候要自己创建一个，然后通过 ScrollView 组件关联起来就好 ( ScrollBar 这个组件是区分方向的，需要注意方向配置统一)  
           */


          var scrollBar = this.node.getChildByName("scrollBar").getComponent(ScrollBar);
          this.listComp.scrollView.verticalScrollBar = scrollBar;
          /**
           * 另外如果滑动条还需要交互，也是需要自己来实现交互逻辑  
           */

          scrollBar.node.on(NodeEventType.TOUCH_END, function (ev) {
            var touchWorldPos = ev.getUILocation();
            var nodeWorldPos = scrollBar.node.worldPosition;
            var nodeSize = scrollBar.node.getComponent(UITransform).contentSize;
            var y = nodeWorldPos.y + nodeSize.height * 0.5;
            var progress = (y - touchWorldPos.y) / nodeSize.height;

            if (progress < 0) {
              progress = 0;
            }

            if (progress > 1) {
              progress = 1;
            }

            _this3.listComp.scrollView.stopAutoScroll();

            _this3.listComp.scrollView.scrollToPercentVertical(1 - progress);

            _this3.listComp.markForUpdateVisibleData(true); // 更新当前可见节点

          });
          scrollBar.node.on(NodeEventType.TOUCH_MOVE, function (ev) {
            var touchWorldPos = ev.getUILocation();
            var nodeWorldPos = scrollBar.node.worldPosition;
            var nodeSize = scrollBar.node.getComponent(UITransform).contentSize;
            var y = nodeWorldPos.y + nodeSize.height * 0.5;
            var progress = (y - touchWorldPos.y) / nodeSize.height;

            if (progress < 0) {
              progress = 0;
            }

            if (progress > 1) {
              progress = 1;
            }

            _this3.listComp.scrollView.stopAutoScroll();

            _this3.listComp.scrollView.scrollToPercentVertical(1 - progress);

            _this3.listComp.markForUpdateVisibleData(); // 更新当前可见节点

          });
        };

        return home;
      }(Component), _class3.LAST_OFFSET = null, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "listComp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/horizontal-list-cell.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './common-cell.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, log, math, Component, CommonCell, YXCollectionView, YXFlowLayout;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      log = module.log;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      CommonCell = module.CommonCell;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "5e1e4Iug/xLaLiXVZSjkBFq", "horizontal-list-cell", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var HorizontalListCell = exports('HorizontalListCell', (_dec = ccclass('HorizontalListCell'), _dec2 = property(YXCollectionView), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HorizontalListCell, _Component);

        function HorizontalListCell() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "list", _descriptor, _assertThisInitialized(_this));

          _this.dataArray = [];
          return _this;
        }

        var _proto = HorizontalListCell.prototype;

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          this.list.numberOfItems = function () {
            return _this2.dataArray.length;
          };

          this.list.cellForItemAt = function (indexPath, collectionView) {
            var cell = collectionView.dequeueReusableCell("cell", indexPath);
            var comp = cell.getComponent(CommonCell);
            comp.label.string = "" + indexPath;
            comp.randomIcon();
            comp.randomStar();
            comp.randomLevelSign();
            comp.randomShapeColor();
            return cell;
          };

          this.list.onTouchItemAt = function (indexPath) {
            log("" + indexPath);
          };

          var layout = new YXFlowLayout();
          layout.itemSize = new math.Size(130, 200);
          layout.horizontalSpacing = 20;
          this.list.layout = layout;
        };

        return HorizontalListCell;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "list", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index.ts", ['cc', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      var _setter = {};
      _setter.YXCollectionView = module.YXCollectionView;
      _setter.YXEdgeInsets = module.YXEdgeInsets;
      _setter.YXIndexPath = module.YXIndexPath;
      _setter.YXLayout = module.YXLayout;
      _setter.YXLayoutAttributes = module.YXLayoutAttributes;
      exports(_setter);
    }, function (module) {
      exports('YXFlowLayout', module.YXFlowLayout);
    }],
    execute: function () {
      cclegacy._RF.push({}, "1e299YNYrBBRo6Zh9p5Ik3Z", "index", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './chat-cell.ts', './common-cell.ts', './horizontal-list-cell.ts', './vertical-list-cell.ts', './demo1.ts', './demo10.ts', './demo11.ts', './demo2.ts', './demo3.ts', './demo4.ts', './demo5.ts', './demo6.ts', './demo7.ts', './demo8.ts', './demo9.ts', './home.ts', './custom-grid-flow-layout.ts', './yx-card-page-layout.ts', './yx-carousel-layout.ts', './yx-cover-layout.ts', './yx-masonry-flow-layout.ts', './yx-page-view.ts', './yx-table-view.ts', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/vertical-list-cell.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './common-cell.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, log, UITransform, math, Component, CommonCell, YXCollectionView, YXFlowLayout;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      log = module.log;
      UITransform = module.UITransform;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      CommonCell = module.CommonCell;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "f82d6rxpthK6bIkOXrmTgy8", "vertical-list-cell", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var VerticalListCell = exports('VerticalListCell', (_dec = ccclass('VerticalListCell'), _dec2 = property(YXCollectionView), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(VerticalListCell, _Component);

        function VerticalListCell() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "list", _descriptor, _assertThisInitialized(_this));

          _this.dataArray = [];
          return _this;
        }

        var _proto = VerticalListCell.prototype;

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          this.list.numberOfItems = function () {
            return _this2.dataArray.length;
          };

          this.list.cellForItemAt = function (indexPath, collectionView) {
            var cell = collectionView.dequeueReusableCell("cell", indexPath);
            var comp = cell.getComponent(CommonCell);
            comp.label.string = "" + indexPath;
            comp.randomIcon();
            comp.randomStar();
            comp.randomLevelSign();
            return cell;
          };

          this.list.onTouchItemAt = function (indexPath) {
            log("" + indexPath);
          };

          var layout = new YXFlowLayout();
          layout.horizontalSpacing = 10;
          layout.verticalSpacing = 10;
          var width = (this.list.node.getComponent(UITransform).width - layout.horizontalSpacing * 4) / 5;
          layout.itemSize = new math.Size(width, 200);
          this.list.layout = layout;
        };

        return VerticalListCell;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "list", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/yx-card-page-layout.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, math, YXIndexPath, YXLayoutAttributes, YXLayout;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      math = module.math;
    }, null, function (module) {
      YXIndexPath = module.YXIndexPath;
      YXLayoutAttributes = module.YXLayoutAttributes;
      YXLayout = module.YXLayout;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "51c36a+NyxNtLM46tNAiT8t", "yx-card-page-layout", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var YXCardPageLayout = exports('YXCardPageLayout', (_dec = ccclass('yx_card_page_layout'), _dec(_class = /*#__PURE__*/function (_YXLayout) {
        _inheritsLoose(YXCardPageLayout, _YXLayout);
        /**
         * 此类布局必须确定节点大小
         */


        function YXCardPageLayout(itemSize) {
          var _this;

          _this = _YXLayout.call(this) || this;
          /**
           * 节点大小
           */

          _this.itemSize = null;
          /**
           * 最多同时显示多少个节点
           */

          _this.maxVisibleItemCount = 4;
          /**
           * 每个节点之间的缩放差距
           */

          _this.eachScale = 0.1;
          /**
           * 每个节点之间间距
           */

          _this.eachSpacing = 50;
          /**
           * 整体内容偏移
           */

          _this.contentOffset = null;
          _this.itemSize = itemSize;
          return _this;
        }

        var _proto = YXCardPageLayout.prototype;

        _proto.prepare = function prepare(collectionView) {
          collectionView.scrollView.horizontal = true;
          collectionView.scrollView.vertical = false;
          var allAttributes = [];
          var total = collectionView.numberOfItems instanceof Function ? collectionView.numberOfItems(0, collectionView) : collectionView.numberOfItems;
          total = Math.min(total, this.maxVisibleItemCount);

          for (var index = 0; index < total; index++) {
            var attr = new YXLayoutAttributes();
            attr.indexPath = new YXIndexPath(0, index);
            attr.frame = new math.Rect();
            attr.frame.size = this.itemSize;
            allAttributes.push(attr);
          }

          this.attributes = allAttributes;
          var contentSize = collectionView.scrollView.view.contentSize.clone();
          contentSize.width = contentSize.width * 3;
          this.contentSize = contentSize;
        };

        _proto.layoutAttributesForElementsInRect = function layoutAttributesForElementsInRect(rect, collectionView) {
          var offset = collectionView.scrollView.getScrollOffset();
          offset.x = -offset.x;
          var progress = (offset.x - collectionView.scrollView.view.width) / collectionView.scrollView.view.width; // [ -1 0 1 ]

          for (var index = 0; index < this.attributes.length; index++) {
            var attr = this.attributes[index]; // 调整层级

            attr.zIndex = -index; // 调整位置

            var startOffsetY = index * this.eachSpacing;
            attr.frame.x = offset.x + (collectionView.scrollView.view.width - attr.frame.width) * 0.5;
            attr.frame.y = offset.y + (collectionView.scrollView.view.height - attr.frame.height) * 0.5 + startOffsetY;
            attr.frame.y = attr.frame.y - this.eachSpacing * Math.abs(progress);
            attr.frame.y = Math.max(attr.frame.y, offset.y + (collectionView.scrollView.view.height - attr.frame.height) * 0.5);

            if (index == 0) {
              attr.frame.x = attr.frame.x - progress * collectionView.scrollView.view.width;
            } // 调整缩放


            var startScale = 1 - index * this.eachScale;
            var scale = startScale;
            scale = scale + this.eachScale * Math.abs(progress);
            scale = Math.min(scale, 1);
            attr.scale = new math.Vec3(scale, scale, 1); // 偏移

            if (this.contentOffset) {
              attr.offset = this.contentOffset;
            }
          }

          return this.attributes;
        };

        _proto.initOffset = function initOffset(collectionView) {
          var offset = new math.Vec2();
          offset.x = collectionView.scrollView.view.width;
          offset.y = 0;
          collectionView.scrollView.scrollToOffset(offset);
        }
        /**
         * 分页逻辑
         */
        ;

        _proto.targetOffset = function targetOffset(collectionView, touchMoveVelocity, startOffset) {
          var offset = collectionView.scrollView.getScrollOffset();
          offset.x = -offset.x;
          var threshold = 0.2;
          var idx = Math.round(offset.x / collectionView.scrollView.view.width);
          var r = touchMoveVelocity.x / collectionView.scrollView.view.width;

          if (startOffset && Math.abs(r) >= threshold) {
            idx = Math.round(startOffset.x / collectionView.scrollView.view.width) + (r > 0 ? -1 : 1);
          }

          offset.x = idx * collectionView.scrollView.view.width;
          return {
            offset: offset,
            time: 0.5
          };
        }
        /**
         * 标记此布局需要实时更新
         */
        ;

        _proto.shouldUpdateAttributesForBoundsChange = function shouldUpdateAttributesForBoundsChange() {
          return true;
        }
        /**
         * 标记此布局需要调整节点层级
         */
        ;

        _proto.shouldUpdateAttributesZIndex = function shouldUpdateAttributesZIndex() {
          return true;
        };

        return YXCardPageLayout;
      }(YXLayout)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/yx-carousel-layout.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './yx-collection-view.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, math, misc, YXIndexPath, YXLayoutAttributes, YXLayout;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      math = module.math;
      misc = module.misc;
    }, function (module) {
      YXIndexPath = module.YXIndexPath;
      YXLayoutAttributes = module.YXLayoutAttributes;
      YXLayout = module.YXLayout;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d8470S9Op1E+7I5HJuYi3P/", "yx-carousel-layout", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var _vec2Out = new math.Vec2();
      /**
       * 旋转木马，会加载所有节点，适合少量数据
       * 仅支持了水平方向滚动
       */


      var YXCarouselLayout = exports('YXCarouselLayout', /*#__PURE__*/function (_YXLayout) {
        _inheritsLoose(YXCarouselLayout, _YXLayout);

        function YXCarouselLayout() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _YXLayout.call.apply(_YXLayout, [this].concat(args)) || this;
          /**
           * 节点大小
           */

          _this.itemSize = null;
          /**
           * 是否开启循环滚动
           */

          _this.loop = true;
          /**
           * 半径
           */

          _this.radius = 300;
          /**
           * 最远节点的缩放比例，取值范围 [ 0 ~ 1 ]
           * 模拟近大远小的视觉效果
           */

          _this.minScale = 0.9;
          /**
           * 最远节点的透明度变化，取值范围 [ 0 ~ 1 ]
           */

          _this.minAlpha = null;
          /**
           * 整体绕 x 轴旋转角度  
           * 备注: 只是影响节点的 y 坐标位置，并不会有 3d 旋转效果
           */

          _this.angleX = 20;
          return _this;
        }

        var _proto = YXCarouselLayout.prototype;

        _proto.prepare = function prepare(collectionView) {
          collectionView.scrollView.horizontal = true;
          collectionView.scrollView.vertical = false;
          var array = [];
          var contentSize = collectionView.scrollView.view.contentSize.clone();
          var numberOfItems = collectionView.numberOfItems instanceof Function ? collectionView.numberOfItems(0, collectionView) : collectionView.numberOfItems;

          for (var item = 0; item < numberOfItems; item++) {
            var indexPath = new YXIndexPath(0, item);
            var attr = new YXLayoutAttributes();
            attr.indexPath = indexPath; // 此类布局主要布局业务是在 layoutAttributesForElementsInRect ，这里只是创建出来确定一下节点大小，去 layoutAttributesForElementsInRect 里实时的调整变换效果

            attr.frame = new math.Rect();
            attr.frame.size = this.itemSize;
            array.push(attr);
          }

          this.attributes = array;
          contentSize.width = contentSize.width * numberOfItems * (this.loop ? 3 : 1);
          this.contentSize = contentSize;
        };

        _proto.layoutAttributesForElementsInRect = function layoutAttributesForElementsInRect(rect, collectionView) {
          // 获取当前滚动视图偏移位置
          var offset = rect.origin; // 圆点

          var contentSize = collectionView.scrollView.view.contentSize.clone();
          var center = new math.Vec2(contentSize.width * 0.5, contentSize.height * 0.5); // 节点分布间隔

          var angleIncrement = 360 / this.attributes.length;

          for (var index = 0; index < this.attributes.length; index++) {
            var element = this.attributes[index]; // 当前节点角度

            var itemAngle = 360 - element.indexPath.item * angleIncrement; // 从 90 度的位置开始排列

            itemAngle = itemAngle + 90; // 根据当前滚动位置计算节点的偏移角度

            var angleOffset = offset.x * 1 / contentSize.width * angleIncrement;
            itemAngle = itemAngle + angleOffset; // 将角度转换为弧度

            itemAngle = itemAngle % 360;
            var angle = misc.degreesToRadians(itemAngle); // 计算节点变换

            var x = center.x + this.radius * Math.cos(angle);
            var z = 0 + this.radius * Math.sin(angle);
            var y = center.y + z * Math.sin(misc.degreesToRadians(this.angleX));
            _vec2Out.x = offset.x + x;
            _vec2Out.y = y;
            element.frame.center = _vec2Out;
            element.zIndex = z; // 通过缩放来补充近大远小的效果

            var progress = Math.floor(Math.sin(angle) * 10000) / 10000;

            if (this.minScale) {
              var scaleValue = this.minScale + (1 - this.minScale) * progress;
              element.scale = new math.Vec3(scaleValue, scaleValue, 1);
            }

            if (this.minAlpha) {
              var opacity = this.minAlpha + (1 - this.minAlpha) * progress;
              element.opacity = opacity * 255;
            }
          }

          return this.attributes;
        };

        _proto.initOffset = function initOffset(collectionView) {
          var x = (this.loop ? 1 : 0) * collectionView.scrollView.view.width * this.attributes.length;
          _vec2Out.x = x;
          _vec2Out.y = 0;
          collectionView.scrollView.scrollToOffset(_vec2Out);
        };

        _proto.shouldUpdateAttributesZIndex = function shouldUpdateAttributesZIndex() {
          return true;
        };

        _proto.shouldUpdateAttributesOpacity = function shouldUpdateAttributesOpacity() {
          return true;
        };

        _proto.shouldUpdateAttributesForBoundsChange = function shouldUpdateAttributesForBoundsChange() {
          return true;
        };

        _proto.scrollTo = function scrollTo(indexPath, collectionView) {
          var leftX = (this.attributes.length * 0 + indexPath.item) * collectionView.scrollView.view.width;
          var midX = (this.attributes.length * 1 + indexPath.item) * collectionView.scrollView.view.width;
          var rightX = (this.attributes.length * 2 + indexPath.item) * collectionView.scrollView.view.width;
          var currentX = -collectionView.scrollView.getScrollOffset().x; // 挑出移动距离最短的一个位置

          var array = [{
            flag: 0,
            value: leftX
          }, {
            flag: 1,
            value: midX
          }, {
            flag: 2,
            value: rightX
          }];
          var flag = array.sort(function (a, b) {
            return Math.abs(currentX - a.value) - Math.abs(currentX - b.value);
          }).shift().flag;

          do {
            if (flag == 0) {
              _vec2Out.x = leftX;
              break;
            }

            if (flag == 1) {
              _vec2Out.x = midX;
              break;
            }

            if (flag == 2) {
              _vec2Out.x = rightX;
              break;
            }
          } while (false);

          _vec2Out.y = 0;
          return _vec2Out;
        };

        _proto.onScrollEnded = function onScrollEnded(collectionView) {
          if (this.loop) {
            var offset = collectionView.scrollView.getScrollOffset();
            offset.x = -offset.x;
            var fullWidth = collectionView.scrollView.view.width * this.attributes.length;
            var x = offset.x % fullWidth + fullWidth;
            _vec2Out.x = x;
            _vec2Out.y = 0;
            collectionView.scrollView.scrollToOffset(_vec2Out);
            collectionView.markForUpdateVisibleData(true);
          }
        };

        return YXCarouselLayout;
      }(YXLayout));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/yx-collection-view.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _createClass, _assertThisInitialized, cclegacy, _decorator, math, Enum, Prefab, ValueType, NodePool, NodeEventType, UITransform, UIOpacity, ScrollView, Component, instantiate, Node, Mask;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      math = module.math;
      Enum = module.Enum;
      Prefab = module.Prefab;
      ValueType = module.ValueType;
      NodePool = module.NodePool;
      NodeEventType = module.NodeEventType;
      UITransform = module.UITransform;
      UIOpacity = module.UIOpacity;
      ScrollView = module.ScrollView;
      Component = module.Component;
      instantiate = module.instantiate;
      Node = module.Node;
      Mask = module.Mask;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _dec5, _class4, _class5, _dec6, _class6, _class7, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class8, _class9, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _class10;

      cclegacy._RF.push({}, "f2c14q0UedOp7pnWIKia8C+", "yx-collection-view", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          executionOrder = _decorator.executionOrder,
          disallowMultiple = _decorator.disallowMultiple,
          help = _decorator.help;

      var _vec3Out = new math.Vec3();

      var _scroll_view_visible_rect = new math.Rect();

      var _recycleInvisibleNodes_realFrame = new math.Rect();
      /**
       * 定义列表的滚动方向  
       */


      var _yx_collection_view_scroll_direction = /*#__PURE__*/function (_yx_collection_view_scroll_direction) {
        _yx_collection_view_scroll_direction[_yx_collection_view_scroll_direction["HORIZONTAL"] = 0] = "HORIZONTAL";
        _yx_collection_view_scroll_direction[_yx_collection_view_scroll_direction["VERTICAL"] = 1] = "VERTICAL";
        return _yx_collection_view_scroll_direction;
      }(_yx_collection_view_scroll_direction || {});

      Enum(_yx_collection_view_scroll_direction);
      /**
       * 列表节点加载模式
       */

      var _yx_collection_view_list_mode = /*#__PURE__*/function (_yx_collection_view_list_mode) {
        _yx_collection_view_list_mode[_yx_collection_view_list_mode["RECYCLE"] = 0] = "RECYCLE";
        _yx_collection_view_list_mode[_yx_collection_view_list_mode["PRELOAD"] = 1] = "PRELOAD";
        return _yx_collection_view_list_mode;
      }(_yx_collection_view_list_mode || {});

      Enum(_yx_collection_view_list_mode);
      /**
       * 定义通过编辑器注册节点时的结构体
       */

      var _yx_editor_register_cell_info = (_dec = ccclass("_yx_editor_register_cell_info"), _dec2 = property({
        type: Prefab,
        tooltip: "cell \u8282\u70B9\u9884\u5236\u4F53\uFF0C\u5FC5\u987B\u914D\u7F6E"
      }), _dec3 = property({
        tooltip: "\u8282\u70B9\u91CD\u7528\u6807\u8BC6\u7B26\n\u5982\u679C\u786E\u5B9A\u6B64\u5217\u8868\u4EC5\u4F7F\u7528\u4E00\u79CD\u8282\u70B9\u7C7B\u578B\uFF0C\u53EF\u4EE5\u5FFD\u7565\u6B64\u914D\u7F6E"
      }), _dec4 = property({
        tooltip: "\u8282\u70B9\u6302\u8F7D\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\n\u5982\u679C\u9700\u8981\u76D1\u542C NodePool \u7684\u91CD\u7528/\u56DE\u6536\u4E8B\u4EF6\uFF0C\u786E\u4FDD\u4F60\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5DF2\u7ECF\u5B9E\u73B0\u4E86 YXCollectionViewCell \u63A5\u53E3\u5E76\u914D\u7F6E\u6B64\u5C5E\u6027\u4E3A\u4F60\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u540D\n\u5982\u679C\u4E0D\u9700\u8981\uFF0C\u53EF\u4EE5\u5FFD\u7565\u6B64\u914D\u7F6E"
      }), _dec(_class = (_class2 = function _yx_editor_register_cell_info() {
        _initializerDefineProperty(this, "prefab", _descriptor, this);

        _initializerDefineProperty(this, "identifier", _descriptor2, this);

        _initializerDefineProperty(this, "comp", _descriptor3, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "identifier", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "comp", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class);
      /**
       * 表示索引的对象
       */


      var YXIndexPath = exports('YXIndexPath', (_dec5 = ccclass("YXIndexPath"), _dec5(_class4 = (_class5 = /*#__PURE__*/function (_ValueType) {
        _inheritsLoose(YXIndexPath, _ValueType);

        function YXIndexPath(section, item) {
          var _this;

          _this = _ValueType.call(this) || this;
          /**
           * 区索引
           */

          _this.section = 0;
          /**
           * 单元格在区内的位置
           */

          _this.item = 0;
          _this.section = section;
          _this.item = item;
          return _this;
        }

        var _proto = YXIndexPath.prototype;

        _proto.clone = function clone() {
          return new YXIndexPath(this.section, this.item);
        };

        _proto.equals = function equals(other) {
          return this.section == other.section && this.item == other.item;
        };

        _proto.set = function set(other) {
          this.section = other.section;
          this.item = other.item;
        };

        _proto.toString = function toString() {
          return this.section + " - " + this.item;
        };

        _createClass(YXIndexPath, [{
          key: "row",
          get: function get() {
            return this.item;
          },
          set: function set(value) {
            this.item = value;
          }
        }]);

        return YXIndexPath;
      }(ValueType), _class5.ZERO = new _class5(0, 0), _class5)) || _class4));
      /**
       * 表示边距的对象
       */

      var YXEdgeInsets = exports('YXEdgeInsets', (_dec6 = ccclass("YXEdgeInsets"), _dec6(_class6 = (_class7 = /*#__PURE__*/function (_ValueType2) {
        _inheritsLoose(YXEdgeInsets, _ValueType2);

        function YXEdgeInsets(top, left, bottom, right) {
          var _this2;

          _this2 = _ValueType2.call(this) || this;
          _this2.top = void 0;
          _this2.left = void 0;
          _this2.bottom = void 0;
          _this2.right = void 0;
          _this2.top = top;
          _this2.left = left;
          _this2.bottom = bottom;
          _this2.right = right;
          return _this2;
        }

        var _proto2 = YXEdgeInsets.prototype;

        _proto2.clone = function clone() {
          return new YXEdgeInsets(this.top, this.left, this.bottom, this.right);
        };

        _proto2.equals = function equals(other) {
          return this.top == other.top && this.left == other.left && this.bottom == other.bottom && this.right == other.right;
        };

        _proto2.set = function set(other) {
          this.top = other.top;
          this.left = other.left;
          this.bottom = other.bottom;
          this.right = other.right;
        };

        _proto2.toString = function toString() {
          return "[ " + this.top + ", " + this.left + ", " + this.bottom + ", " + this.right + " ]";
        };

        return YXEdgeInsets;
      }(ValueType), _class7.ZERO = new _class7(0, 0, 0, 0), _class7)) || _class6));
      /**
       * 私有组件
       * cell 节点添加到 YXCollectionView 上时，自动挂载此组件，用来记录一些实时参数
       */

      var _cell_ = /*#__PURE__*/function (_Component) {
        _inheritsLoose(_cell_, _Component);

        function _cell_() {
          var _this3;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this3 = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * 此节点是通过哪个标识符创建的
           */

          _this3.identifier = void 0;
          /**
           * 此节点目前绑定的布局属性
           */

          _this3.attributes = void 0;
          return _this3;
        }

        return _cell_;
      }(Component);
      /**
       * 私有组件
       * 内部滚动视图组件
       * https://github.com/cocos/cocos-engine/blob/v3.8.0/cocos/ui/scroll-view.ts
       */


      var _scroll_view = /*#__PURE__*/function (_ScrollView) {
        _inheritsLoose(_scroll_view, _ScrollView);

        function _scroll_view() {
          var _this4;

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          _this4 = _ScrollView.call.apply(_ScrollView, [this].concat(args)) || this;
          _this4._yxOnStartInertiaScroll = void 0;
          return _this4;
        }

        var _proto3 = _scroll_view.prototype;
        /**
         * 禁掉鼠标滚轮
         */

        _proto3._onMouseWheel = function _onMouseWheel(event, captureListeners) {}
        /**
         * 准备开始惯性滚动
         * @param touchMoveVelocity 手势速度
         */
        ;

        _proto3._startInertiaScroll = function _startInertiaScroll(touchMoveVelocity) {
          _ScrollView.prototype._startInertiaScroll.call(this, touchMoveVelocity);

          if (this._yxOnStartInertiaScroll) {
            this._yxOnStartInertiaScroll(touchMoveVelocity);
          }
        };

        _proto3._onTouchBegan = function _onTouchBegan(event, captureListeners) {
          if (this.node.getComponent(YXCollectionView).scrollEnabled == false) {
            return;
          }

          var nodes = [event.target];

          if (captureListeners) {
            nodes = nodes.concat(captureListeners);
          }

          for (var index = 0; index < nodes.length; index++) {
            var element = nodes[index]; // 清空滚动节点标记

            element["_yx_scroll_target"] = null; // 记录开始滚动时的偏移量，如果这是个 YXCollectionView 节点的话

            var _collectionView = element.getComponent(YXCollectionView);

            if (_collectionView) {
              var offset = _collectionView.scrollView.getScrollOffset();

              offset.x = -offset.x;
              _collectionView["_scroll_offset_on_touch_start"] = offset;
            }
          }

          _ScrollView.prototype._onTouchBegan.call(this, event, captureListeners);
        };

        _proto3._onTouchMoved = function _onTouchMoved(event, captureListeners) {
          if (this.node.getComponent(YXCollectionView).scrollEnabled == false) {
            return;
          } // 处理嵌套冲突，每次只滚动需要滚动的列表


          var scrollTarget = this._yxGetScrollTarget(event, captureListeners);

          if (this.node === scrollTarget) {
            _ScrollView.prototype._onTouchMoved.call(this, event, captureListeners);
          }
        };

        _proto3._onTouchCancelled = function _onTouchCancelled(event, captureListeners) {
          _ScrollView.prototype._onTouchCancelled.call(this, event, captureListeners);
        };

        _proto3._onTouchEnded = function _onTouchEnded(event, captureListeners) {
          _ScrollView.prototype._onTouchEnded.call(this, event, captureListeners);
        };

        _proto3._hasNestedViewGroup = function _hasNestedViewGroup(event, captureListeners) {
          // 直接把所有的列表都标记为可滑动，具体滑动哪一个，去 _onTouchMoved 判断
          return false;
        };

        _proto3._stopPropagationIfTargetIsMe = function _stopPropagationIfTargetIsMe(event) {
          if (this._touchMoved) {
            event.propagationStopped = true;
            return;
          }

          _ScrollView.prototype._stopPropagationIfTargetIsMe.call(this, event);
        }
        /**
         * 获取本次滑动是要滑动哪个列表
         */
        ;

        _proto3._yxGetScrollTarget = function _yxGetScrollTarget(event, captureListeners) {
          // 尝试获取本次已经确定了的滚动节点
          var cache = event.target["_yx_scroll_target"];

          if (cache) {
            return cache;
          }

          var nodes = [event.target];

          if (captureListeners) {
            nodes = nodes.concat(captureListeners);
          }

          if (nodes.length == 1) {
            return nodes[0];
          } // 无需处理冲突


          var touch = event.touch;
          var deltaMove = touch.getLocation().subtract(touch.getStartLocation());
          var x = Math.abs(deltaMove.x);
          var y = Math.abs(deltaMove.y);
          var distance = Math.abs(x - y);

          if (distance < 5) {
            return null; // 不足以计算出方向
          }
          /** @todo 边界检测，滑动到边缘时滑动事件交给其他可滑动列表 */


          var result = null;

          for (var index = 0; index < nodes.length; index++) {
            var element = nodes[index];
            var scrollComp = element.getComponent(_scroll_view);

            if (scrollComp) {
              var _collectionView2 = element.getComponent(YXCollectionView);

              if (_collectionView2 && _collectionView2.scrollEnabled == false) {
                continue;
              } // 不支持滚动


              if (result == null) {
                result = element;
              } // 取第一个滚动组件作为默认响应者


              if (scrollComp.horizontal && scrollComp.vertical) {
                continue;
              } // 全方向滚动暂时不处理


              if (!scrollComp.horizontal && !scrollComp.vertical) {
                continue;
              } // 不支持滚动的也不处理


              if (scrollComp.horizontal && x > y) {
                result = element;
                break;
              }

              if (scrollComp.vertical && y > x) {
                result = element;
                break;
              }
            }
          } // 给所有捕获到的节点都保存一份，方便任意一个节点都可以读到


          if (result) {
            for (var _index = 0; _index < nodes.length; _index++) {
              var _element = nodes[_index];
              _element["_yx_scroll_target"] = result;
            }
          }

          return result;
        };

        return _scroll_view;
      }(ScrollView);
      /**
       * 节点的布局属性
       */


      var YXLayoutAttributes = exports('YXLayoutAttributes', function YXLayoutAttributes() {
        /**
         * 节点索引
         */
        this.indexPath = null;
        /**
         * 节点在滚动视图中的位置和大小属性
         * origin 属性表示节点在父视图坐标系中的左上角的位置，size 属性表示节点的宽度和高度
         */

        this.frame = null;
        /**
         * 节点层级
         * 越小会越早的添加到滚动视图上
         * https://docs.cocos.com/creator/manual/zh/ui-system/components/editor/ui-transform.html?h=uitrans
         * 备注: 内部暂时是通过节点的 siblingIndex 实现的，如果自定义 layout 有修改这个值的需求，需要重写 layout 的 @shouldUpdateAttributesZIndex 方法，默认情况下会忽略这个配置
         */

        this.zIndex = 0;
        /**
         * 节点透明度
         * 备注: 内部通过 UIOpacity 组件实现，会修改节点 UIOpacity 组件的 opacity 值，如果自定义 layout 有修改这个值的需求，需要重写 layout 的 @shouldUpdateAttributesOpacity 方法，默认情况下会忽略这个配置
         */

        this.opacity = null;
        /**
         * 节点变换 - 缩放
         */

        this.scale = null;
        /**
         * 节点变换 - 平移
         */

        this.offset = null;
        /**
         * 节点变换 - 旋转
         * 备注: 3D 变换似乎需要透视相机???
         */

        this.eulerAngles = null;
      });
      /**
       * 布局规则
       * 这里只是约定出了一套接口，内部只是一些基础实现，具体布局方案通过子类重载去实现
       */

      var YXLayout = exports('YXLayout', /*#__PURE__*/function () {
        function YXLayout() {
          /**
           * @required
           * 整个滚动区域大小
           * 需要在 @prepare 内初始化
           */
          this.contentSize = math.Size.ZERO;
          /**
           * @required
           * 所有元素的布局属性
           * 需要在 @prepare 内初始化
           */

          this.attributes = [];
        }

        var _proto4 = YXLayout.prototype;
        /**
         * @optional
         * 列表在首次更新数据后会执行这个方法
         * 在这个方法里设置滚动视图的初始偏移量
         */

        _proto4.initOffset = function initOffset(collectionView) {}
        /**
         * @optional
         * 当一次手势拖动结束后会立即调用此方法
         * 实现这个方法的话滚动视图会自动滚动到此方法返回的位置
         * @param touchMoveVelocity 本次手势拖动速度
         * @param startOffset 本次手势拖动开始时滚动视图的偏移位置
         * @returns null 不处理
         */
        ;

        _proto4.targetOffset = function targetOffset(collectionView, touchMoveVelocity, startOffset) {
          return null;
        }
        /**
         * @optional
         * 列表每次滚动结束后会调用此方法
         * @param collectionView 
         */
        ;

        _proto4.onScrollEnded = function onScrollEnded(collectionView) {}
        /**
         * @optional
         * 返回区域内可见的节点属性，并实时的调整这些节点变换效果 (如果在这个方法里调整了节点变换属性，需要重写 shouldUpdateAttributesForBoundsChange 以支持实时变换)
         * 根据实际的布局情况，计算出当前屏幕内需要显示的布局属性
         * 这个方法会直接影响到列表的性能，如果在自定义的时候对性能要求不高(比如明确知道数据量不多的情况下)，可以忽略此方法 (默认会检查所有的布局属性并返回所有的处于可见范围内的单元格布局属性)
         * @param rect 当前滚动视图的可见区域
         */
        ;

        _proto4.layoutAttributesForElementsInRect = function layoutAttributesForElementsInRect(rect, collectionView) {
          var result = [];

          for (var index = 0; index < this.attributes.length; index++) {
            var attr = this.attributes[index];

            if (rect.intersects(attr.frame) == true) {
              result.push(attr);
            }
          }

          return result;
        }
        /**
         * @optional
         * 通过索引查找布局属性，默认 Array.find()
         * @param indexPath 
         * @param collectionView 
         */
        ;

        _proto4.layoutAttributesForItemAtIndexPath = function layoutAttributesForItemAtIndexPath(indexPath, collectionView) {
          return this.attributes.find(function (a) {
            return a.indexPath.equals(indexPath);
          });
        }
        /**
         * @optional
         * YXCollectionView 在调用 @scrollTo 方法时会触发这个方法，如果实现了这个方法，最终的滚动停止位置以这个方法返回的为准
         * @param indexPath 
         * @returns 滚动视图偏移位置
         */
        ;

        _proto4.scrollTo = function scrollTo(indexPath, collectionView) {
          return null;
        }
        /**
         * @optional
         * @see YXLayoutAttributes.zIndex
         * @returns 
         */
        ;

        _proto4.shouldUpdateAttributesZIndex = function shouldUpdateAttributesZIndex() {
          return false;
        }
        /**
         * @optional
         * @see YXLayoutAttributes.opacity
         * @returns 
         */
        ;

        _proto4.shouldUpdateAttributesOpacity = function shouldUpdateAttributesOpacity() {
          return false;
        }
        /**
         * @optional
         * 此布局下的节点，是否需要实时更新变换效果
         * @returns 返回 true 会忽略 YXCollectionView 的 frameInterval 设置，强制在滚动过程中实时更新节点
         */
        ;

        _proto4.shouldUpdateAttributesForBoundsChange = function shouldUpdateAttributesForBoundsChange() {
          return false;
        };

        return YXLayout;
      }());
      /**
       * @see NodePool.poolHandlerComp
       * 节点的自定义组件可以通过这个接口跟 NodePool 的重用业务关联起来
       */

      /**
       * 列表组件
       */

      var YXCollectionView = exports('YXCollectionView', (_dec7 = ccclass('YXCollectionView'), _dec8 = disallowMultiple(true), _dec9 = executionOrder(-1), _dec10 = help("https://gitee.com/568071718/creator-collection-view-doc"), _dec11 = property({
        tooltip: "\u81EA\u52A8\u7ED9\u6302\u8F7D\u8282\u70B9\u6DFB\u52A0 mask \u7EC4\u4EF6",
        visible: true
      }), _dec12 = property({
        tooltip: "\u5141\u8BB8\u624B\u52BF\u6EDA\u52A8"
      }), _dec13 = property({
        type: _yx_collection_view_scroll_direction,
        tooltip: "\u5217\u8868\u6EDA\u52A8\u65B9\u5411"
      }), _dec14 = property({
        type: _yx_collection_view_list_mode,
        tooltip: "\u5217\u8868\u5355\u5143\u8282\u70B9\u52A0\u8F7D\u6A21\u5F0F (\u8BE6\u7EC6\u533A\u522B\u67E5\u770B\u679A\u4E3E\u6CE8\u91CA)\nRECYCLE: \u6839\u636E\u5217\u8868\u663E\u793A\u8303\u56F4\u52A0\u8F7D\u9700\u8981\u7684\u8282\u70B9\uFF0C\u540C\u7C7B\u578B\u7684\u8282\u70B9\u4F1A\u8FDB\u884C\u590D\u7528\nPRELOAD: \u4F1A\u5B9E\u4F8B\u5316\u6240\u6709\u8282\u70B9\uFF0C\u5E76\u975E\u771F\u6B63\u7684\u865A\u62DF\u5217\u8868\uFF0C\u4EC5\u4EC5\u662F\u628A\u663E\u793A\u8303\u56F4\u5916\u7684\u8282\u70B9\u900F\u660E\u4E86\uFF0C\u5982\u679C\u5217\u8868\u6570\u636E\u91CF\u5F88\u5927\u4ECD\u7136\u4F1A\u5361"
      }), _dec15 = property({
        tooltip: "\u9884\u52A0\u8F7D\u6A21\u5F0F\u4E0B\u6BCF\u5E27\u52A0\u8F7D\u591A\u5C11\u4E2A\u8282\u70B9",
        visible: function visible() {
          return this.mode == _yx_collection_view_list_mode.PRELOAD;
        }
      }), _dec16 = property({
        tooltip: "\u6BCF\u591A\u5C11\u5E27\u5237\u65B0\u4E00\u6B21\u53EF\u89C1\u8282\u70B9\uFF0C1 \u8868\u793A\u6BCF\u5E27\u90FD\u5237"
      }), _dec17 = property({
        tooltip: "\u6EDA\u52A8\u8FC7\u7A0B\u4E2D\uFF0C\u6BCF\u591A\u5C11\u5E27\u56DE\u6536\u4E00\u6B21\u4E0D\u53EF\u89C1\u8282\u70B9\uFF0C1\u8868\u793A\u6BCF\u5E27\u90FD\u56DE\u6536\uFF0C0\u8868\u793A\u4E0D\u5728\u6EDA\u52A8\u8FC7\u7A0B\u4E2D\u56DE\u6536\u4E0D\u53EF\u89C1\u8282\u70B9"
      }), _dec18 = property({
        type: [_yx_editor_register_cell_info],
        visible: true,
        displayName: "Register Cells",
        tooltip: "\u914D\u7F6E\u6B64\u5217\u8868\u5185\u9700\u8981\u7528\u5230\u7684 cell \u8282\u70B9\u7C7B\u578B"
      }), _dec7(_class8 = _dec8(_class8 = _dec9(_class8 = _dec10(_class8 = (_class9 = (_class10 = /*#__PURE__*/function (_Component2) {
        _inheritsLoose(YXCollectionView, _Component2);

        function YXCollectionView() {
          var _this5;

          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          _this5 = _Component2.call.apply(_Component2, [this].concat(args)) || this;
          /**
           * 自动给挂载节点添加 mask 组件  
           */

          _initializerDefineProperty(_this5, "mask", _descriptor4, _assertThisInitialized(_this5));
          /**
           * 允许手势滚动
           */


          _initializerDefineProperty(_this5, "scrollEnabled", _descriptor5, _assertThisInitialized(_this5));
          /**
           * 列表滚动方向，默认垂直方向滚动  
           * 自定义 YXLayout 应该尽量根据这个配置来实现不同方向的布局业务  
           * 注意: 如果使用的 YXLayout 未支持对应的滚动方向，则此配置不会生效
           */


          _initializerDefineProperty(_this5, "scrollDirection", _descriptor6, _assertThisInitialized(_this5));
          /**
           * 列表单元节点加载模式
           */


          _initializerDefineProperty(_this5, "mode", _descriptor7, _assertThisInitialized(_this5));
          /**
           * 预加载模式下每帧加载多少个节点
           */


          _initializerDefineProperty(_this5, "preloadNodesLimitPerFrame", _descriptor8, _assertThisInitialized(_this5));
          /**
           * 每多少帧刷新一次可见节点，1 表示每帧都刷
           */


          _initializerDefineProperty(_this5, "frameInterval", _descriptor9, _assertThisInitialized(_this5));
          /**
           * 滚动过程中，每多少帧回收一次不可见节点，1表示每帧都回收，0表示不在滚动过程中回收不可见节点
           * @bug 滚动过程中如果实时的回收不可见节点，有时候会收不到 scroll view 的 cancel 事件，导致 scroll view 的滚动状态不会更新 (且收不到滚动结束事件)
           * @fix 当这个属性设置为 0 时，只会在 `touch-up` 和 `scroll-ended` 里面回收不可见节点  
           */


          _initializerDefineProperty(_this5, "recycleInterval", _descriptor10, _assertThisInitialized(_this5));
          /**
           * 通过编辑器注册节点类型
           */


          _initializerDefineProperty(_this5, "registerCellForEditor", _descriptor11, _assertThisInitialized(_this5));
          /**
           * 每个注册的标识符对应一个节点池
           */


          _this5.pools = new Map();
          /**
           * 每个注册的标识符对应一个生成节点回调
           */

          _this5.makers = new Map();
          /**
           * 内容要分几个区展示，默认 1
           * 没有分区展示的需求可以不管这个配置
           */

          _this5.numberOfSections = 1;
          /**
           * 每个区里要展示多少条内容
           */

          _this5.numberOfItems = 0;
          /**
           * 配置每块内容对应的 UI 节点  
           * 在这个方法里，需要确定 indexPath 这个位置对应的节点应该是用注册过的哪个类型的 Node 节点，然后通过 dequeueReusableCell 生成对应的 Node
           * 
           * @example
           * yourList.cellForItemAt = (indexPath ,collectionView) => {
           *      let cell = collectionView.dequeueReusableCell(`your identifier`, indexPath)
           *      let comp = cell.getComponent(YourCellComp)
           *      comp.label.string = `${indexPath}`
           *      return cell
           * }
           * 
           * @returns 注意: 不要在这个方法里创建新的节点对象，这个方法返回的 Node，必须是通过 dequeueReusableCell 匹配到的 Node
           */

          _this5.cellForItemAt = null;
          /**
           * 当 cell 进入当前可见范围后执行    
           * 如果同类型的节点大小可能不一样，可以在这里调整子节点的位置   
           */

          _this5.onCellDisplay = null;
          /**
           * 当 cell 移出当前可见范围后执行
           */

          _this5.onCellEndDisplay = null;
          /**
           * 点击到节点后执行这个方法  
           */

          _this5.onTouchItemAt = null;
          /**
           * 布局规则
           */

          _this5.layout = null;
          /**
           * 记录当前正在显示的所有节点
           * 通过 Map 结构实现，减少查找复杂度，key = indexpath.string  value = 对应的节点  
           */

          _this5.visibleNodesMap = new Map();
          /**
           * 记录预加载的所有节点
           */

          _this5.preloadNodesMap = new Map();
          _this5._late_reload_data = false;
          /**
           * 记录 @reloadData 执行了多少次了，用来区分刷新列表的时候是否是首次刷新列表
           */

          _this5.reloadDataCounter = 0;
          /**
           * 记录在 @reloadData 之后 @reloadVisibleCells 执行了多少次了
           * 每次在开始执行 @reloadData 时重置为 0
           */

          _this5.reloadVisibleCellsCounter = 0;
          _this5._frameIdx = 0;
          /**
           * 刷新当前可见节点
           * @param force true: 立即刷新  false: 下帧刷新
           */

          _this5._late_update_visible_data = false;
          /**
           * 回收不可见节点逻辑
           */

          _this5._late_recycle_invisible_node = false;
          /**
           * 预加载节点逻辑
           */

          _this5.preloadIdx = null;
          _this5._scroll_offset_on_touch_start = null;
          return _this5;
        }

        var _proto5 = YXCollectionView.prototype;
        /**
         * 注册 cell
         * 可多次注册不同种类的 cell，只要确保 @identifier 的唯一性就好
         * @param identifier cell 标识符，通过 @dequeueReusableCell 获取重用 cell 时，会根据这个值匹配
         * @param maker 生成节点，当重用池里没有可用的节点时，会通过这个回调获取节点，需要在这个回调里面生成节点
         * @param poolComp (可选) 节点自定义组件，可以通过这个组件跟 @NodePool 的重用业务关联起来
         */

        _proto5.register = function register(identifier, maker, poolComp) {
          if (poolComp === void 0) {
            poolComp = null;
          }

          var pool = new NodePool(poolComp);
          this.pools.set(identifier, pool);
          this.makers.set(identifier, maker);
        };
        /**
         * 通过标识符从重用池里取出一个可用的 cell 节点
         * @param identifier 注册时候的标识符
         * @param indexPath 节点当前位置索引，内部用来比对此位置已经存在的节点类型是否跟需求的节点类型一致
         * @returns 
         */


        _proto5.dequeueReusableCell = function dequeueReusableCell(identifier, indexPath) {
          var pool = this.pools.get(identifier);

          if (pool == null) {
            throw new Error("YXCollectionView: \u672A\u6CE8\u518C\u6807\u8BC6\u7B26\u4E3A `" + identifier + "` \u7684 cell\uFF0C\u8BF7\u5148\u8C03\u7528 YXCollectionView \u7684 register() \u65B9\u6CD5\u6CE8\u518C cell \u8282\u70B9");
          }

          var result = null; // 检查节点是否正在显示

          if (result == null) {
            var node = this.getVisibleNode(indexPath);

            if (node) {
              var cellComp = node.getComponent(_cell_);

              if (cellComp.identifier === identifier) {
                result = node; // 此位置的节点类型跟刷新之前已经存在的节点类型一致，可以直接拿来使用  
              } else {
                this.pools.get(cellComp.identifier).put(node); // 此位置的节点类型发生了变化，这个节点已经没用了，直接回收掉  
              }
            }
          } // 尝试从重用池获取


          if (result == null) {
            result = pool.get();
          } // 重新生成一个  


          if (result == null) {
            var maker = this.makers.get(identifier);
            result = maker();

            var _cell = result.getComponent(_cell_) || result.addComponent(_cell_);

            _cell.identifier = identifier;
            result.on(NodeEventType.TOUCH_END, this.onTouchItem, this);
          }

          return result;
        };

        _proto5.onTouchItem = function onTouchItem(ev) {
          if (this.onTouchItemAt) {
            var _cell2 = ev.target.getComponent(_cell_);

            this.onTouchItemAt(_cell2.attributes.indexPath, this);
          }
        };
        /**
         * 获取当前正在显示的某个节点/组件
         * @param indexPath 
         */


        _proto5.getVisibleNode = function getVisibleNode(indexPath) {
          return this.visibleNodesMap.get(indexPath.toString());
        };

        _proto5.getVisibleCell = function getVisibleCell(indexPath) {
          var node = this.getVisibleNode(indexPath);

          if (node == null) {
            return null;
          }

          return node.getComponent(_cell_);
        }
        /**
         * 获取指定节点的私有 cell 组件  
         */
        ;

        _proto5.getCellComp = function getCellComp(node) {
          if (node == null) {
            return null;
          }

          return node.getComponent(_cell_);
        }
        /**
         * 刷新列表数据
         */
        ;

        _proto5.reloadData = function reloadData() {
          if (this.node.activeInHierarchy && this.node.parent) {
            this._reloadData();
          } else {
            this._late_reload_data = true;
          }
        };

        _proto5.update_reloadDataIfNeeds = function update_reloadDataIfNeeds(dt) {
          if (this._late_reload_data == false) {
            return;
          }

          this._reloadData();
        };

        _proto5._reloadData = function _reloadData() {
          this._late_reload_data = false;
          this.reloadVisibleCellsCounter = 0; // 校验 layout 参数

          if (this.layout == null) {
            throw new Error("YXCollectionView: 参数错误，请正确配置 layout 以确定布局方案");
          } // 立即停止当前滚动，准备刷新


          this.scrollView.stopAutoScroll(); // 池子清一下

          this.pools.forEach(function (element) {
            element.clear();
          }); // 如果是预加载模式，需要清空当前显示的所有节点以及已经预加载过的所有节点

          if (this.mode == _yx_collection_view_list_mode.PRELOAD) {
            // 销毁当前所有正在显示的节点
            this.visibleNodesMap.forEach(function (value, key) {
              if (value) {
                value.removeFromParent();
                value.destroy();
              }
            });
            this.visibleNodesMap.clear(); // 销毁所有预加载的节点

            this.preloadNodesMap.forEach(function (value, key) {
              if (value) {
                value.removeFromParent();
                value.destroy();
              }
            });
            this.preloadNodesMap.clear(); // 从第一个开始预加载节点

            this.preloadIdx = 0;
          } // 记录一下当前的偏移量，保证数据更新之后位置也不会太偏


          var offset = this.scrollView.getScrollOffset();
          offset.x = -offset.x; // 重新计算一遍布局属性

          this.layout.prepare(this); // 更新 content size

          var contentTransform = this.scrollView.content.getComponent(UITransform) || this.scrollView.content.addComponent(UITransform);
          contentTransform.contentSize = this.layout.contentSize; // 默认偏移量 或者 恢复偏移量

          if (this.reloadDataCounter <= 0) {
            this.layout.initOffset(this);
          } else {
            var maxOffset = this.scrollView.getMaxScrollOffset();
            math.Vec2.min(offset, offset, maxOffset);
            this.scrollView.scrollToOffset(offset);
          } // 更新 cell 节点


          this.markForUpdateVisibleData(true); // 偶现 bug: 列表节点有时候不正常显示，这里标记下帧再更新一下列表

          this.markForUpdateVisibleData();
          this.reloadDataCounter++;
        };
        /**
         * 根据当前的可见区域调整需要显示的节点
         */


        _proto5.reloadVisibleCells = function reloadVisibleCells(rect) {
          if (rect === void 0) {
            rect = null;
          } // 获取当前可见区域


          if (rect == null) {
            rect = this.visibleRect;
          } // 根据可见区域，找出对应的布局属性


          var layoutAttributes = this.layout.layoutAttributesForElementsInRect(rect, this); // 按 zIndex 排序

          var shouldUpdateAttributesZIndex = this.layout.shouldUpdateAttributesZIndex();

          if (shouldUpdateAttributesZIndex) {
            if (layoutAttributes == null || layoutAttributes == this.layout.attributes) {
              layoutAttributes = this.layout.attributes.slice();
            }

            layoutAttributes.sort(function (a, b) {
              return a.zIndex - b.zIndex;
            });
          }
          /*
          let poolsCounter = 0
          this.pools.forEach((a) => {
              poolsCounter = poolsCounter + a.size()
          })
          log(`需要显示的节点数量: ${layoutAttributes.length}  当前显示的节点数量: ${this.scrollView.content.children.length}  缓存池里的节点数量: ${poolsCounter}`)
          */
          // 添加需要显示的节点


          for (var index = 0; index < layoutAttributes.length; index++) {
            var element = layoutAttributes[index];
            var cellNode = null; // 检查是否已经预加载过了

            if (cellNode == null) {
              cellNode = this.preloadNodesMap.get(element.indexPath.toString());
            } // 检查节点是否正在显示了


            if (this.reloadVisibleCellsCounter > 0 && cellNode == null) {
              cellNode = this.getVisibleNode(element.indexPath);
            } // 尝试通过注册标识符从节点池获取节点


            if (cellNode == null) {
              cellNode = this.cellForItemAt(element.indexPath, this);
            } // 无法正确获取节点，报错


            if (cellNode == null) {
              throw new Error("需要实现 cellForItemAt 方法并确保正确的返回了节点");
            } // 恢复节点状态


            var restoreStatus = this.restoreCellNodeIfNeeds(cellNode); // 更新节点变化

            this.applyLayoutAttributes(cellNode, element); // 调整节点层级

            if (shouldUpdateAttributesZIndex) {
              cellNode.setSiblingIndex(-1);
            } // 标记此节点正在显示


            this.visibleNodesMap.set(element.indexPath.toString(), cellNode); // 通知 onCellDisplay 
            // reloadVisibleCellsCounter 为 0 时候节点大小可能会发生变化，也一并通知一下

            if (restoreStatus == 1 || this.reloadVisibleCellsCounter == 0) {
              if (this.onCellDisplay) {
                this.onCellDisplay(cellNode, element.indexPath, this);
              }
            }
          }

          layoutAttributes = [];
          this.reloadVisibleCellsCounter++;
        };
        /**
         * 节点被回收后需要重新使用时，根据当前回收模式恢复节点的状态，保证节点可见
         */


        _proto5.restoreCellNodeIfNeeds = function restoreCellNodeIfNeeds(node) {
          // 是否触发了恢复行为，0表示节点已经可见了  1表示触发了恢复行为，节点从不可见变为了可见
          var restoreStatus = 0; // 不管哪种模式，父节点检查都是必须的，只有正确的添加了才能确保正常可见  

          if (node.parent != this.scrollView.content) {
            node.parent = this.scrollView.content;
            restoreStatus = 1;
          } // 如果启用了预加载模式，给节点挂上 UIOpacity 组件，未启用则不管


          var opacityComp = node.getComponent(UIOpacity);

          if (this.mode == _yx_collection_view_list_mode.PRELOAD) {
            if (opacityComp == null) {
              opacityComp = node.addComponent(UIOpacity);
            }
          }

          if (opacityComp) {
            if (opacityComp.opacity !== 255) {
              opacityComp.opacity = 255;
              restoreStatus = 1;
            }
          }

          return restoreStatus;
        }
        /**
         * 回收不可见节点
         */
        ;

        _proto5.recycleInvisibleNodes = function recycleInvisibleNodes(visibleRect) {
          var _this6 = this;

          if (visibleRect === void 0) {
            visibleRect = null;
          }

          if (visibleRect == null) {
            visibleRect = this.visibleRect;
          }

          var _realFrame = _recycleInvisibleNodes_realFrame;
          var _contentSize = this.scrollView.content.getComponent(UITransform).contentSize; // 可能会触发删除元素行为，这里使用 forEach 迭代

          this.visibleNodesMap.forEach(function (value, key) {
            var cell = value.getComponent(_cell_);
            /**
             * @version 1.0.2
             * 检查节点是否可见应该是通过变换后的位置来检查
             * 通过 boundingBox 获取实际变换后的大小
             * 把实际的 position 转换为 origin
             */

            var boundingBox = value.getComponent(UITransform).getBoundingBox();
            _realFrame.size = boundingBox.size;
            _realFrame.x = (_contentSize.width - _realFrame.width) * 0.5 + value.position.x;
            _realFrame.y = (_contentSize.height - _realFrame.height) * 0.5 - value.position.y;

            if (visibleRect.intersects(_realFrame) == false) {
              if (_this6.mode == _yx_collection_view_list_mode.PRELOAD) {
                value.getComponent(UIOpacity).opacity = 0;
              } else {
                _this6.pools.get(cell.identifier).put(value);
              }

              _this6.visibleNodesMap["delete"](key); // 从可见节点里删除


              if (_this6.onCellEndDisplay) {
                _this6.onCellEndDisplay(cell.node, cell.attributes.indexPath, _this6);
              }
            }
          });
        }
        /**
         * 调整节点的位置/变换
         */
        ;

        _proto5.applyLayoutAttributes = function applyLayoutAttributes(node, attributes) {
          var cell = node.getComponent(_cell_);
          cell.attributes = attributes;
          var transform = node.getComponent(UITransform) || node.addComponent(UITransform);
          transform.setContentSize(attributes.frame.size);
          _vec3Out.x = -(this.layout.contentSize.width - attributes.frame.width) * 0.5 + attributes.frame.x;
          _vec3Out.y = +(this.layout.contentSize.height - attributes.frame.height) * 0.5 - attributes.frame.y;
          _vec3Out.z = node.position.z;

          if (attributes.offset) {
            math.Vec3.add(_vec3Out, _vec3Out, attributes.offset);
          }

          node.position = _vec3Out;

          if (attributes.scale) {
            node.scale = attributes.scale;
          }

          if (attributes.eulerAngles) {
            node.eulerAngles = attributes.eulerAngles;
          }

          if (this.layout.shouldUpdateAttributesOpacity() && attributes.opacity) {
            var opacity = node.getComponent(UIOpacity) || node.addComponent(UIOpacity);
            opacity.opacity = attributes.opacity;
          }
        }
        /**
         * 滚动到指定节点的位置
         * @returns 
         */
        ;

        _proto5.scrollTo = function scrollTo(indexPath, timeInSecond, attenuated) {
          if (timeInSecond === void 0) {
            timeInSecond = 0;
          }

          if (attenuated === void 0) {
            attenuated = true;
          }

          var toOffSet = this.layout.scrollTo(indexPath, this);

          if (toOffSet == null) {
            var _this$layout$layoutAt;

            toOffSet = (_this$layout$layoutAt = this.layout.layoutAttributesForItemAtIndexPath(indexPath, this)) == null ? void 0 : _this$layout$layoutAt.frame.origin;
          }

          if (toOffSet) {
            this.scrollView.stopAutoScroll();
            this.scrollView.scrollToOffset(toOffSet, timeInSecond, attenuated);
            this.markForUpdateVisibleData();
          }
        }
        /**
         * 生命周期方法
         */
        ;

        _proto5.onLoad = function onLoad() {
          var _this7 = this;

          var _loop = function _loop() {
            var element = _this7.registerCellForEditor[index];

            _this7.register(element.identifier, function () {
              return instantiate(element.prefab);
            }, element.comp);
          };

          for (var index = 0; index < this.registerCellForEditor.length; index++) {
            _loop();
          }

          this.node.on(ScrollView.EventType.SCROLL_BEGAN, this.onScrollBegan, this);
          this.node.on(ScrollView.EventType.SCROLLING, this.onScrolling, this);
          this.node.on(ScrollView.EventType.TOUCH_UP, this.onScrollTouchUp, this);
          this.node.on(ScrollView.EventType.SCROLL_ENDED, this.onScrollEnded, this);
          this._scrollView._yxOnStartInertiaScroll = this.onStartInertiaScroll.bind(this);
        };

        _proto5.onDestroy = function onDestroy() {
          this.node.off(ScrollView.EventType.SCROLL_BEGAN, this.onScrollBegan, this);
          this.node.off(ScrollView.EventType.SCROLLING, this.onScrolling, this);
          this.node.off(ScrollView.EventType.TOUCH_UP, this.onScrollTouchUp, this);
          this.node.off(ScrollView.EventType.SCROLL_ENDED, this.onScrollEnded, this); // 销毁当前所有正在显示的节点

          this.visibleNodesMap.forEach(function (value, key) {
            if (value) {
              value.removeFromParent();
              value.destroy();
            }
          });
          this.visibleNodesMap.clear();
          this.visibleNodesMap = null; // 销毁所有预加载的节点

          this.preloadNodesMap.forEach(function (value, key) {
            if (value) {
              value.removeFromParent();
              value.destroy();
            }
          });
          this.preloadNodesMap.clear();
          this.preloadNodesMap = null; // 清空池子

          this.pools.forEach(function (element) {
            element.clear();
          });
          this.pools.clear();
          this.pools = null;
          this.makers.clear();
          this.makers = null;

          if (this.layout) {
            this.layout.attributes = [];
          }
        };

        _proto5.update = function update(dt) {
          this._frameIdx++;
          this.update_reloadVisibleCellsIfNeeds(dt);
          this.update_recycleInvisibleNodesIfNeeds(dt);
          this.update_reloadDataIfNeeds(dt);
          this.update_preloadNodeIfNeeds(dt);
        };

        _proto5.markForUpdateVisibleData = function markForUpdateVisibleData(force) {
          if (force === void 0) {
            force = false;
          }

          if (force) {
            var visibleRect = this.visibleRect;
            this.reloadVisibleCells(visibleRect);
            this.recycleInvisibleNodes(visibleRect);
            return;
          }

          this._late_update_visible_data = true;
          this._late_recycle_invisible_node = true;
        }
        /**
         * 更新可见区域节点逻辑
         */
        ;

        _proto5.update_reloadVisibleCellsIfNeeds = function update_reloadVisibleCellsIfNeeds(dt) {
          if (this.frameInterval <= 1 || this._frameIdx % this.frameInterval == 0) {
            if (this._late_update_visible_data) {
              this._late_update_visible_data = false;
              this.reloadVisibleCells();
            }
          }
        };

        _proto5.update_recycleInvisibleNodesIfNeeds = function update_recycleInvisibleNodesIfNeeds(dt) {
          if (this.recycleInterval >= 1 && this._frameIdx % this.recycleInterval == 0) {
            if (this._late_recycle_invisible_node) {
              this._late_recycle_invisible_node = false;
              this.recycleInvisibleNodes();
            }
          }
        };

        _proto5.update_preloadNodeIfNeeds = function update_preloadNodeIfNeeds(dt) {
          if (this.mode !== _yx_collection_view_list_mode.PRELOAD) {
            return;
          }

          if (this.preloadIdx == null) {
            return;
          }

          if (this.preloadIdx >= this.layout.attributes.length) {
            return;
          }

          var num = this.preloadNodesLimitPerFrame;

          for (var index = num; index > 0; index--) {
            var attr = this.layout.attributes[this.preloadIdx];
            var key = attr.indexPath.toString();
            var node = null; // 检查节点是否正在显示

            if (node == null) {
              node = this.getVisibleNode(attr.indexPath);
            } // 检查节点是否加载过了


            if (node == null) {
              node = this.preloadNodesMap.get(key);
            } // 预加载节点


            if (node == null) {
              node = this.cellForItemAt(attr.indexPath, this);
              this.restoreCellNodeIfNeeds(node);
              this.applyLayoutAttributes(node, attr);
              this.visibleNodesMap.set(key, node);
              this._late_recycle_invisible_node = true;
            } // 保存节点


            this.preloadNodesMap.set(key, node); // 更新预加载索引

            this.preloadIdx++;
          }
        };

        _proto5.onScrollBegan = function onScrollBegan() {};

        _proto5.onScrolling = function onScrolling() {
          this.markForUpdateVisibleData(this.layout.shouldUpdateAttributesForBoundsChange());
          this._late_recycle_invisible_node = true;
        };

        _proto5.onScrollTouchUp = function onScrollTouchUp() {
          this.recycleInvisibleNodes();
        };

        _proto5.onScrollEnded = function onScrollEnded() {
          this.markForUpdateVisibleData();
          this.recycleInvisibleNodes();
          this.layout.onScrollEnded(this);
        };

        _proto5.onStartInertiaScroll = function onStartInertiaScroll(touchMoveVelocity) {
          var endValue = this.layout.targetOffset(this, touchMoveVelocity, this._scroll_offset_on_touch_start);

          if (endValue) {
            this.scrollView.scrollToOffset(endValue.offset, endValue.time);
            this.markForUpdateVisibleData();
          }
        }
        /**
         * - - - - - - - - - - - - - - - - - - - - - - - - - - 
         * - - - - - - - - - - deprecateds - - - - - - - - - -
         * - - - - - - - - - - - - - - - - - - - - - - - - - - 
         * 
         * 所有标记过期的方法都可能在某个版本删除，如果有用到的需要尽快通过替换方案进行修改
         * 
         */

        /**
         * 获取所有正在显示节点的索引
         * @deprecated 可以考虑通过 visibleCells 实现对应的业务
         */
        ;
        /**
         * 获取指定节点的索引  
         * @deprecated 使用 getCellComp 代替
         */


        _proto5.getVisibleNodeIndexPath = function getVisibleNodeIndexPath(node) {
          var comp = this.getCellComp(node);

          if (comp) {
            return comp.attributes.indexPath;
          }

          return null;
        };

        _createClass(YXCollectionView, [{
          key: "scrollView",
          get:
          /**
           * 滚动视图组件
           */
          function get() {
            var result = this.node.getComponent(_scroll_view);

            if (result == null) {
              result = this.node.addComponent(_scroll_view); // 配置 scroll view 默认参数
            }

            if (result.content == null) {
              var content = new Node("com.yx.scroll.content");
              content.parent = result.node;
              content.layer = content.parent.layer;
              var transform = content.getComponent(UITransform) || content.addComponent(UITransform);
              transform.contentSize = this.node.getComponent(UITransform).contentSize;
              result.content = content;
            }

            if (this.mask) {
              var mask = result.node.getComponent(Mask);

              if (mask == null) {
                mask = result.node.addComponent(Mask);
                mask.type = Mask.Type.GRAPHICS_RECT;
              }
            }

            return result;
          }
        }, {
          key: "_scrollView",
          get: function get() {
            return this.scrollView;
          }
        }, {
          key: "visibleRect",
          get:
          /**
           * 获取列表当前的可见范围
           */
          function get() {
            var visibleRect = _scroll_view_visible_rect;
            visibleRect.origin = this.scrollView.getScrollOffset();
            visibleRect.x = -visibleRect.x;
            visibleRect.size = this.scrollView.view.contentSize;
            return visibleRect;
          }
          /**
           * 获取当前正在显示的所有节点/组件
           */

        }, {
          key: "visibleNodes",
          get: function get() {
            var result = [];
            this.visibleNodesMap.forEach(function (value) {
              result.push(value);
            });
            return result;
          }
        }, {
          key: "visibleCells",
          get: function get() {
            var result = [];
            this.visibleNodesMap.forEach(function (value) {
              result.push(value.getComponent(_cell_));
            });
            return result;
          }
        }, {
          key: "visibleIndexPaths",
          get: function get() {
            var result = [];
            this.visibleNodesMap.forEach(function (value) {
              var cell = value.getComponent(_cell_);
              result.push(cell.attributes.indexPath.clone());
            });
            return result;
          }
        }]);

        return YXCollectionView;
      }(Component), _class10.ScrollDirection = _yx_collection_view_scroll_direction, _class10.Mode = _yx_collection_view_list_mode, _class10), (_descriptor4 = _applyDecoratedDescriptor(_class9.prototype, "mask", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class9.prototype, "scrollEnabled", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class9.prototype, "scrollDirection", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return YXCollectionView.ScrollDirection.VERTICAL;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class9.prototype, "mode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return YXCollectionView.Mode.RECYCLE;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class9.prototype, "preloadNodesLimitPerFrame", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class9.prototype, "frameInterval", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class9.prototype, "recycleInterval", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class9.prototype, "registerCellForEditor", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class9)) || _class8) || _class8) || _class8) || _class8));

      (function (_YXCollectionView) {})(YXCollectionView || (YXCollectionView = exports('YXCollectionView', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/yx-cover-layout.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './yx-flow-layout.ts', './yx-collection-view.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, math, YXFlowLayout, YXEdgeInsets, YXCollectionView;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      math = module.math;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }, function (module) {
      YXEdgeInsets = module.YXEdgeInsets;
      YXCollectionView = module.YXCollectionView;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ad37dvhcAhMyJOa2rW7s4sI", "yx-cover-layout", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * 用来实现突出选中节点效果的布局规则
       */

      var YXCoverLayout = exports('YXCoverLayout', /*#__PURE__*/function (_YXFlowLayout) {
        _inheritsLoose(YXCoverLayout, _YXFlowLayout);

        var _proto = YXCoverLayout.prototype;

        _proto.getSectionInset = function getSectionInset() {
          return this.sectionInset;
        }
        /**
         * 节点大小
         */
        ;

        _proto.getItemSize = function getItemSize() {
          return this.itemSize;
        }
        /**
         * 非选中节点的缩放系数
         */
        ;
        /**
         * 构造函数，此类布局必须要确定节点大小属性
         * @param itemSize 
         */


        function YXCoverLayout(itemSize) {
          var _this;

          _this = _YXFlowLayout.call(this) || this;
          /**
           * 禁止外部使用的父类属性
           */

          _this.sectionInset = void 0;
          _this.itemSize = null;
          _this.scaleValue = 0.8;
          /**
           * 非选中节点的 x 轴旋转角度
           * 仅支持 3D 节点
           */

          _this.angleX = 0;
          /**
           * 非选中节点的 y 轴旋转角度
           * 仅支持 3D 节点
           */

          _this.angleY = 0;
          /**
           * 非选中节点的 z 轴旋转角度
           */

          _this.angleZ = 0;
          _this.itemSize = itemSize;
          return _this;
        }

        _proto.prepare = function prepare(collectionView) {
          var pad_horizontal = (collectionView.scrollView.view.width - this.itemSize.width) * 0.5;
          var pad_vertical = (collectionView.scrollView.view.height - this.itemSize.height) * 0.5;
          this.sectionInset = new YXEdgeInsets(pad_vertical, pad_horizontal, pad_vertical, pad_horizontal);

          _YXFlowLayout.prototype.prepare.call(this, collectionView);
        };

        _proto.targetOffset = function targetOffset(collectionView, touchMoveVelocity, startOffset) {
          if (this.pagingEnabled == false) {
            return null;
          }

          var offset = collectionView.scrollView.getScrollOffset();
          offset.x = -offset.x; // 找出离屏幕中心最近的节点

          var visibleRect = new math.Rect();
          visibleRect.origin = collectionView.scrollView.getScrollOffset();
          visibleRect.x = -visibleRect.x;
          visibleRect.size = collectionView.scrollView.view.contentSize;
          var result = this.layoutAttributesForElementsInRect(visibleRect, collectionView);
          var target = null;

          if (collectionView.scrollDirection == YXCollectionView.ScrollDirection.HORIZONTAL) {
            var mid = offset.x + collectionView.scrollView.view.width * 0.5;
            result.forEach(function (element) {
              var distance1 = Math.abs(element.frame.center.x - mid);
              var distance2 = target ? Math.abs(target.frame.center.x - mid) : null;

              if (distance2 == null || distance1 < distance2) {
                target = element;
              }
            });
            offset.x = target.frame.center.x - collectionView.scrollView.view.width * 0.5;
          }

          if (collectionView.scrollDirection == YXCollectionView.ScrollDirection.VERTICAL) {
            var _mid = offset.y + collectionView.scrollView.view.height * 0.5;

            result.forEach(function (element) {
              var distance1 = Math.abs(element.frame.center.y - _mid);
              var distance2 = target ? Math.abs(target.frame.center.y - _mid) : null;

              if (distance2 == null || distance1 < distance2) {
                target = element;
              }
            });
            offset.y = target.frame.center.y - collectionView.scrollView.view.height * 0.5;
          }

          return {
            offset: offset,
            time: 0.5
          };
        };

        _proto.scrollTo = function scrollTo(indexPath, collectionView) {
          var attr = this.layoutAttributesForItemAtIndexPath(indexPath, collectionView);

          if (attr) {
            var offset = attr.frame.origin;

            if (collectionView.scrollDirection == YXCollectionView.ScrollDirection.HORIZONTAL) {
              offset.x = offset.x - (collectionView.scrollView.view.width - attr.frame.width) * 0.5;
            }

            if (collectionView.scrollDirection == YXCollectionView.ScrollDirection.VERTICAL) {
              offset.y = offset.y - (collectionView.scrollView.view.height - attr.frame.height) * 0.5;
            }

            return offset;
          }

          return null;
        };

        _proto.layoutAttributesForElementsInRect = function layoutAttributesForElementsInRect(rect, collectionView) {
          var _this2 = this;

          var result = _YXFlowLayout.prototype.layoutAttributesForElementsInRect.call(this, rect, collectionView);

          var offset = collectionView.scrollView.getScrollOffset();
          offset.x = -offset.x;
          var scale = this.scaleValue;

          if (collectionView.scrollDirection == YXCollectionView.ScrollDirection.HORIZONTAL) {
            var mid = offset.x + collectionView.scrollView.view.width * 0.5;
            result.forEach(function (element) {
              var diff = element.frame.center.x - mid;
              var distance = Math.abs(diff);
              var progress = distance / _this2.itemSize.width;
              progress = Math.min(1, progress);
              var scaleValue = 1 - (1 - scale) * progress;
              element.scale = new math.Vec3(scaleValue, scaleValue, 1);
              element.zIndex = -distance;
              var eulerAngles = new math.Vec3();
              eulerAngles.x = progress * _this2.angleX * (diff > 0 ? -1 : 1);
              eulerAngles.y = progress * _this2.angleY * (diff > 0 ? -1 : 1);
              eulerAngles.z = progress * _this2.angleZ * (diff > 0 ? -1 : 1);
              element.eulerAngles = eulerAngles;
            });
          }

          if (collectionView.scrollDirection == YXCollectionView.ScrollDirection.VERTICAL) {
            var _mid2 = offset.y + collectionView.scrollView.view.height * 0.5;

            result.forEach(function (element) {
              var diff = element.frame.center.y - _mid2;
              var distance = Math.abs(diff);
              var progress = distance / _this2.itemSize.height;
              progress = Math.min(1, progress);
              var scaleValue = 1 - (1 - scale) * progress;
              element.scale = new math.Vec3(scaleValue, scaleValue, 1);
              element.zIndex = 1 - progress;
              var eulerAngles = new math.Vec3();
              eulerAngles.x = progress * _this2.angleX * (diff > 0 ? -1 : 1);
              eulerAngles.y = progress * _this2.angleY * (diff > 0 ? -1 : 1);
              eulerAngles.z = progress * _this2.angleZ * (diff > 0 ? -1 : 1);
              element.eulerAngles = eulerAngles;
            });
          }

          return result;
        };

        _proto.shouldUpdateAttributesZIndex = function shouldUpdateAttributesZIndex() {
          return true;
        };

        _proto.shouldUpdateAttributesForBoundsChange = function shouldUpdateAttributesForBoundsChange() {
          return true;
        };

        return YXCoverLayout;
      }(YXFlowLayout));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/yx-flow-layout.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './yx-collection-view.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, math, UITransform, YXCollectionView, YXIndexPath, YXLayout, YXEdgeInsets, YXLayoutAttributes;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      math = module.math;
      UITransform = module.UITransform;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
      YXIndexPath = module.YXIndexPath;
      YXLayout = module.YXLayout;
      YXEdgeInsets = module.YXEdgeInsets;
      YXLayoutAttributes = module.YXLayoutAttributes;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6aefbGH/rxJFpOp8GLjvdH1", "yx-flow-layout", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var _rectOut = new math.Rect();
      /**
       * 流式布局
       * 支持水平/垂直方向排列滚动
       */


      var YXFlowLayout = exports('YXFlowLayout', /*#__PURE__*/function (_YXLayout) {
        _inheritsLoose(YXFlowLayout, _YXLayout);

        function YXFlowLayout() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _YXLayout.call.apply(_YXLayout, [this].concat(args)) || this;
          /**
           * 是否开启分页滚动效果
           */

          _this.pagingEnabled = false;
          /**
           * @bug 如果节点大小差距很大，可能会导致计算屏幕内节点时不准确，出现节点不被正确添加到滚动视图上的问题 (使用瀑布流布局时问题明显)
           * @fix 可以通过此属性，追加屏幕显示的节点数量
           * 设置这个值会在检查是否可见的节点时，尝试检查更多的可能处于屏幕外的节点，具体设置多少要根据实际情况调试，一般如果都是正常大小的节点，不需要考虑这个配置
           * 设置负值会检查所有的节点
           */

          _this.extraVisibleCount = 0;
          /**
           * 元素大小
           */

          _this.itemSize = new math.Size(100, 100);
          /**
           * 元素之间垂直间距
           */

          _this.verticalSpacing = 0;
          /**
           * 元素之间水平间距
           */

          _this.horizontalSpacing = 0;
          /**
           * 边距
           */

          _this.sectionInset = YXEdgeInsets.ZERO;
          return _this;
        }

        var _proto = YXFlowLayout.prototype;

        _proto.getItemSize = function getItemSize() {
          if (this.itemSize instanceof Function == false) {
            return this.itemSize;
          }

          throw new Error("YXFlowLayout: 动态配置的布局参数不支持直接获取，请检查自己的布局逻辑并谨慎的通过动态配置自己获取，注意避免死循环");
        };

        _proto.getVerticalSpacing = function getVerticalSpacing() {
          if (this.verticalSpacing instanceof Function == false) {
            return this.verticalSpacing;
          }

          throw new Error("YXFlowLayout: 动态配置的布局参数不支持直接获取，请检查自己的布局逻辑并谨慎的通过动态配置自己获取，注意避免死循环");
        };

        _proto.getHorizontalSpacing = function getHorizontalSpacing() {
          if (this.horizontalSpacing instanceof Function == false) {
            return this.horizontalSpacing;
          }

          throw new Error("YXFlowLayout: 动态配置的布局参数不支持直接获取，请检查自己的布局逻辑并谨慎的通过动态配置自己获取，注意避免死循环");
        };

        _proto.getSectionInset = function getSectionInset() {
          if (this.sectionInset instanceof Function == false) {
            return this.sectionInset;
          }

          throw new Error("YXFlowLayout: 动态配置的布局参数不支持直接获取，请检查自己的布局逻辑并谨慎的通过动态配置自己获取，注意避免死循环");
        };

        _proto.prepare = function prepare(collectionView) {
          if (collectionView.scrollDirection == YXCollectionView.ScrollDirection.HORIZONTAL) {
            this._horizontal(collectionView);

            return;
          }

          if (collectionView.scrollDirection == YXCollectionView.ScrollDirection.VERTICAL) {
            this._vertical(collectionView);

            return;
          }
        };

        _proto.initOffset = function initOffset(collectionView) {
          if (collectionView.scrollDirection == YXCollectionView.ScrollDirection.HORIZONTAL) {
            collectionView.scrollView.scrollToLeft(0);
            return;
          }

          if (collectionView.scrollDirection == YXCollectionView.ScrollDirection.VERTICAL) {
            collectionView.scrollView.scrollToTop(0);
            return;
          }
        };

        _proto.targetOffset = function targetOffset(collectionView, touchMoveVelocity, startOffset) {
          if (this.pagingEnabled == false) {
            return null;
          }

          var offset = collectionView.scrollView.getScrollOffset();
          offset.x = -offset.x;
          var threshold = 0.2;

          if (collectionView.scrollDirection == YXCollectionView.ScrollDirection.HORIZONTAL) {
            var idx = Math.round(offset.x / collectionView.scrollView.view.width);
            var r = touchMoveVelocity.x / collectionView.scrollView.view.width;

            if (startOffset && Math.abs(r) >= threshold) {
              idx = Math.round(startOffset.x / collectionView.scrollView.view.width) + (r > 0 ? -1 : 1);
            }

            offset.x = idx * collectionView.scrollView.view.width;
          }

          if (collectionView.scrollDirection == YXCollectionView.ScrollDirection.VERTICAL) {
            var _idx = Math.round(offset.y / collectionView.scrollView.view.height);

            var _r = touchMoveVelocity.y / collectionView.scrollView.view.height;

            if (startOffset && Math.abs(_r) >= threshold) {
              _idx = Math.round(startOffset.y / collectionView.scrollView.view.height) + (_r > 0 ? 1 : -1);
            }

            offset.y = _idx * collectionView.scrollView.view.height;
          }

          return {
            offset: offset,
            time: 0.25
          };
        };

        _proto.layoutAttributesForElementsInRect = function layoutAttributesForElementsInRect(rect, collectionView) {
          if (this.extraVisibleCount < 0) {
            return _YXLayout.prototype.layoutAttributesForElementsInRect.call(this, rect, collectionView);
          } // 二分先查出大概位置


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

            if (rect.yMax < attr.frame.yMin || rect.xMax < attr.frame.xMin) {
              right = mid - 1;
            } else {
              left = mid + 1;
            }
          }

          if (midIdx < 0) {
            return _YXLayout.prototype.layoutAttributesForElementsInRect.call(this, rect, collectionView);
          }

          var result = [];
          result.push(this.attributes[midIdx]); // 往前检查

          var startIdx = midIdx;

          while (startIdx > 0) {
            var idx = startIdx - 1;
            var _attr = this.attributes[idx];

            if (rect.intersects(_attr.frame) == false) {
              break;
            }

            result.push(_attr);
            startIdx = idx;
          } // 追加检查


          var extra_left = this.extraVisibleCount;

          while (extra_left > 0) {
            var _idx2 = startIdx - 1;

            if (_idx2 < 0) {
              break;
            }

            var _attr2 = this.attributes[_idx2];

            if (rect.intersects(_attr2.frame)) {
              result.push(_attr2);
            }

            startIdx = _idx2;
            extra_left--;
          } // 往后检查


          var endIdx = midIdx;

          while (endIdx < this.attributes.length - 1) {
            var _idx3 = endIdx + 1;

            var _attr3 = this.attributes[_idx3];

            if (rect.intersects(_attr3.frame) == false) {
              break;
            }

            result.push(_attr3);
            endIdx = _idx3;
          } // 追加检查


          var extra_right = this.extraVisibleCount;

          while (extra_right > 0) {
            var _idx4 = endIdx + 1;

            if (_idx4 >= this.attributes.length) {
              break;
            }

            var _attr4 = this.attributes[_idx4];

            if (rect.intersects(_attr4.frame)) {
              result.push(_attr4);
            }

            endIdx = _idx4;
            extra_right--;
          }

          return result;
        };

        _proto.layoutAttributesForItemAtIndexPath = function layoutAttributesForItemAtIndexPath(indexPath, collectionView) {
          var left = 0;
          var right = this.attributes.length - 1;

          while (left <= right && right >= 0) {
            var mid = left + (right - left) / 2;
            mid = Math.floor(mid);
            var attr = this.attributes[mid];

            if (attr.indexPath.equals(indexPath)) {
              return attr;
            }

            if (attr.indexPath.section < indexPath.section || attr.indexPath.section == indexPath.section && attr.indexPath.item < indexPath.item) {
              left = mid + 1;
            } else {
              right = mid - 1;
            }
          }

          return _YXLayout.prototype.layoutAttributesForItemAtIndexPath.call(this, indexPath, collectionView);
        };

        _proto._horizontal = function _horizontal(collectionView) {
          collectionView.scrollView.horizontal = true;
          collectionView.scrollView.vertical = false;
          var contentSize = collectionView.node.getComponent(UITransform).contentSize.clone();
          var allAttributes = [];
          var numberOfSections = collectionView.numberOfSections instanceof Function ? collectionView.numberOfSections(collectionView) : collectionView.numberOfSections;
          var sectionMaxX = 0;

          for (var _section = 0; _section < numberOfSections; _section++) {
            var numberOfItems = collectionView.numberOfItems instanceof Function ? collectionView.numberOfItems(_section, collectionView) : collectionView.numberOfItems;
            var verticalSpacing = this.verticalSpacing instanceof Function ? this.verticalSpacing(_section, this, collectionView) : this.verticalSpacing;
            var horizontalSpacing = this.horizontalSpacing instanceof Function ? this.horizontalSpacing(_section, this, collectionView) : this.horizontalSpacing;
            var sectionInset = this.sectionInset instanceof Function ? this.sectionInset(_section, this, collectionView) : this.sectionInset;
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
              var _indexPath = new YXIndexPath(_section, item);

              var itemSize = this.itemSize instanceof Function ? this.itemSize(_indexPath, this, collectionView) : this.itemSize;
              var attr = whole.layout_horizontal_item(_indexPath, itemSize);

              if (attr == null) {
                // 返回 null 表示摆不下了，需要换列排列
                whole.offset = whole.offset + whole.containerWidth + horizontalSpacing;
                whole.containerWidth = 0;
                whole.attrs = [];
                attr = whole.layout_horizontal_item(_indexPath, itemSize);
              }

              if (attr) {
                allAttributes.push(attr);
              }

              sectionMaxX = Math.max(sectionMaxX, whole.offset + whole.containerWidth);
            }

            sectionMaxX += sectionInset.right;
          }

          this.attributes = allAttributes;
          contentSize.width = Math.max(contentSize.width, sectionMaxX);
          this.contentSize = contentSize;
        };

        _proto._vertical = function _vertical(collectionView) {
          collectionView.scrollView.horizontal = false;
          collectionView.scrollView.vertical = true;
          var contentSize = collectionView.node.getComponent(UITransform).contentSize.clone();
          var allAttributes = [];
          var numberOfSections = collectionView.numberOfSections instanceof Function ? collectionView.numberOfSections(collectionView) : collectionView.numberOfSections;
          var sectionMaxY = 0;

          for (var _section2 = 0; _section2 < numberOfSections; _section2++) {
            var numberOfItems = collectionView.numberOfItems instanceof Function ? collectionView.numberOfItems(_section2, collectionView) : collectionView.numberOfItems;
            var verticalSpacing = this.verticalSpacing instanceof Function ? this.verticalSpacing(_section2, this, collectionView) : this.verticalSpacing;
            var horizontalSpacing = this.horizontalSpacing instanceof Function ? this.horizontalSpacing(_section2, this, collectionView) : this.horizontalSpacing;
            var sectionInset = this.sectionInset instanceof Function ? this.sectionInset(_section2, this, collectionView) : this.sectionInset;
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
              var _indexPath2 = new YXIndexPath(_section2, item);

              var itemSize = this.itemSize instanceof Function ? this.itemSize(_indexPath2, this, collectionView) : this.itemSize;
              var attr = whole.layout_vertical_item(_indexPath2, itemSize);

              if (attr == null) {
                // 返回 null 表示摆不下了，需要换行排列
                whole.offset = whole.offset + whole.containerHeight + verticalSpacing;
                whole.containerHeight = 0;
                whole.attrs = [];
                attr = whole.layout_vertical_item(_indexPath2, itemSize);
              }

              if (attr) {
                allAttributes.push(attr);
              }

              sectionMaxY = Math.max(sectionMaxY, whole.offset + whole.containerHeight);
            }

            sectionMaxY += sectionInset.bottom;
          }

          this.attributes = allAttributes;
          contentSize.height = Math.max(contentSize.height, sectionMaxY);
          this.contentSize = contentSize;
        };

        return YXFlowLayout;
      }(YXLayout));
      /**
       * 这个类用来实现紧凑流式布局  
       * 目前版本使用的策略: 贪心算法，遍历取当前整体内最优的位置  
       * GPT: 水平/垂直扫描 和 贪心算法 是解决这种矩形排列问题的简单有效方法。它们通过从当前矩形的位置出发，逐步扫描周围空白区域来寻找新矩形的放置位置。虽然这种方法比较直观且易于实现，但在复杂情况下可能不是最优解。对于更高效的排列策略，可能需要结合更多的启发式方法或优化算法。  
       * @todo 优化排列算法 (如果能想到更好的排列算法的话)  
       */

      var _yx_flow_layout_whole = /*#__PURE__*/function () {
        function _yx_flow_layout_whole() {
          /**
           * 当前这块内容的起始位置
           */
          this.offset = void 0;
          /**
           * flow layout 部分参数
           */

          this.verticalSpacing = void 0;
          this.horizontalSpacing = void 0;
          this.sectionInset = void 0;
          /**
           * 容器相关的参数
           */

          this.containerWidth = void 0;
          this.containerHeight = void 0;
          /**
           * 这块内容区域目前已经摆放的节点
           */

          this.attrs = [];
        }

        var _proto2 = _yx_flow_layout_whole.prototype;
        /**
         * 检查传进来的位置是否跟当前这块内容的其他节点重叠
         */

        _proto2.intersects = function intersects(rect) {
          for (var index = 0; index < this.attrs.length; index++) {
            var element = this.attrs[index];
            math.Rect.intersection(_rectOut, element.frame, rect);

            if (_rectOut.width > 0 && _rectOut.height > 0) {
              return true;
            }
          }

          return false;
        }
        /**
         * 垂直方向列表的节点的排列规则
         */
        ;

        _proto2.layout_vertical_item = function layout_vertical_item(indexPath, itemSize) {
          if (this.attrs.length <= 0) {
            var attributes = new YXLayoutAttributes();
            attributes.indexPath = indexPath;
            attributes.frame = new math.Rect(this.sectionInset.left, this.offset, itemSize.width, itemSize.height);
            this.attrs.push(attributes);
            this.containerHeight = Math.max(this.containerHeight, attributes.frame.height);
            return attributes;
          }

          var frame = new math.Rect();
          frame.size = itemSize; // 检查所有节点的右边

          for (var index = 0; index < this.attrs.length; index++) {
            var element = this.attrs[index];
            frame.x = element.frame.xMax + this.horizontalSpacing;
            frame.y = element.frame.y;

            if (frame.xMax <= this.containerWidth - this.sectionInset.right) {
              if (this.intersects(frame) == false) {
                var _attributes = new YXLayoutAttributes();

                _attributes.indexPath = indexPath;
                _attributes.frame = frame;
                this.attrs.push(_attributes); // this.containerHeight = Math.max(this.containerHeight, attributes.frame.height)

                this.containerHeight = Math.max(this.containerHeight, _attributes.frame.yMax - this.offset);
                return _attributes;
              }
            }
          } // 检测所有节点的下边


          for (var _index = 0; _index < this.attrs.length; _index++) {
            var _element = this.attrs[_index];
            frame.x = _element.frame.x;
            frame.y = _element.frame.yMax + this.verticalSpacing;
            var check_xMax = frame.xMax <= this.containerWidth - this.sectionInset.right;
            var check_yMax = frame.yMax <= this.offset + this.containerHeight;

            if (check_xMax && check_yMax) {
              if (this.intersects(frame) == false) {
                var _attributes2 = new YXLayoutAttributes();

                _attributes2.indexPath = indexPath;
                _attributes2.frame = frame;
                this.attrs.push(_attributes2);
                this.containerHeight = Math.max(this.containerHeight, _attributes2.frame.height);
                return _attributes2;
              }
            }
          } // 走到这里表示这块内容区域已经摆不下了，需要换行处理


          return null;
        }
        /**
         * 水平方向列表的节点的排列规则
         */
        ;

        _proto2.layout_horizontal_item = function layout_horizontal_item(indexPath, itemSize) {
          if (this.attrs.length <= 0) {
            var attributes = new YXLayoutAttributes();
            attributes.indexPath = indexPath;
            attributes.frame = new math.Rect(this.offset, this.sectionInset.top, itemSize.width, itemSize.height);
            this.attrs.push(attributes);
            this.containerWidth = Math.max(this.containerWidth, attributes.frame.width);
            return attributes;
          }

          var frame = new math.Rect();
          frame.size = itemSize; // 检测所有节点的下边

          for (var index = 0; index < this.attrs.length; index++) {
            var element = this.attrs[index];
            frame.x = element.frame.x;
            frame.y = element.frame.yMax + this.verticalSpacing;

            if (frame.yMax <= this.containerHeight - this.sectionInset.bottom) {
              if (this.intersects(frame) == false) {
                var _attributes3 = new YXLayoutAttributes();

                _attributes3.indexPath = indexPath;
                _attributes3.frame = frame;
                this.attrs.push(_attributes3); // this.containerWidth = Math.max(this.containerWidth, attributes.frame.width)

                this.containerWidth = Math.max(this.containerWidth, _attributes3.frame.xMax - this.offset);
                return _attributes3;
              }
            }
          } // 检查所有节点的右边


          for (var _index2 = 0; _index2 < this.attrs.length; _index2++) {
            var _element2 = this.attrs[_index2];
            frame.x = _element2.frame.xMax + this.horizontalSpacing;
            frame.y = _element2.frame.y;
            var check_xMax = frame.xMax <= this.offset + this.containerWidth;
            var check_yMax = frame.yMax <= this.containerHeight - this.sectionInset.bottom;

            if (check_xMax && check_yMax) {
              if (this.intersects(frame) == false) {
                var _attributes4 = new YXLayoutAttributes();

                _attributes4.indexPath = indexPath;
                _attributes4.frame = frame;
                this.attrs.push(_attributes4);
                this.containerWidth = Math.max(this.containerWidth, _attributes4.frame.width);
                return _attributes4;
              }
            }
          } // 走到这里表示这块内容区域已经摆不下了


          return null;
        };

        return _yx_flow_layout_whole;
      }();

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/yx-masonry-flow-layout.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './yx-flow-layout.ts', './yx-collection-view.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, UITransform, math, YXFlowLayout, YXCollectionView, YXIndexPath, YXLayoutAttributes;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      math = module.math;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
      YXIndexPath = module.YXIndexPath;
      YXLayoutAttributes = module.YXLayoutAttributes;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2b51dRMeF9LFoLitCy5wKXY", "yx-masonry-flow-layout", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * 瀑布流布局方案
       */

      var YXMasonryFlowLayout = exports('YXMasonryFlowLayout', /*#__PURE__*/function (_YXFlowLayout) {
        _inheritsLoose(YXMasonryFlowLayout, _YXFlowLayout);

        function YXMasonryFlowLayout() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _YXFlowLayout.call.apply(_YXFlowLayout, [this].concat(args)) || this;
          /**
           * 分几行(水平滚动模式下)或者几列(垂直滚动模式下)展示
           */

          _this.divide = 1;
          /**
           * @see YXFlowLayout.extraVisibleCount
           */

          _this.extraVisibleCount = 10;
          /**
           * 水平滚动模式下，仅宽度生效
           * 垂直滚动模式下，仅高度生效
           */

          _this.itemSize = new math.Size(100, 100);
          return _this;
        }

        var _proto = YXMasonryFlowLayout.prototype;

        _proto.prepare = function prepare(collectionView) {
          if (collectionView.scrollDirection == YXCollectionView.ScrollDirection.HORIZONTAL) {
            this._masonry_horizontal(collectionView);

            return;
          }

          if (collectionView.scrollDirection == YXCollectionView.ScrollDirection.VERTICAL) {
            this._masonry_vertical(collectionView);

            return;
          }
        };

        _proto._masonry_horizontal = function _masonry_horizontal(collectionView) {
          collectionView.scrollView.horizontal = true;
          collectionView.scrollView.vertical = false;
          var contentSize = collectionView.node.getComponent(UITransform).contentSize.clone();
          var allAttributes = [];
          var numberOfSections = collectionView.numberOfSections instanceof Function ? collectionView.numberOfSections(collectionView) : collectionView.numberOfSections;
          var sectionMaxX = 0;

          for (var _section = 0; _section < numberOfSections; _section++) {
            var numberOfItems = collectionView.numberOfItems instanceof Function ? collectionView.numberOfItems(_section, collectionView) : collectionView.numberOfItems;
            var verticalSpacing = this.verticalSpacing instanceof Function ? this.verticalSpacing(_section, this, collectionView) : this.verticalSpacing;
            var horizontalSpacing = this.horizontalSpacing instanceof Function ? this.horizontalSpacing(_section, this, collectionView) : this.horizontalSpacing;
            var sectionInset = this.sectionInset instanceof Function ? this.sectionInset(_section, this, collectionView) : this.sectionInset;
            var divide = this.divide instanceof Function ? this.divide(_section, this, collectionView) : this.divide;
            var itemHeight = (contentSize.height - sectionInset.top - sectionInset.bottom - (divide - 1) * verticalSpacing) / divide;
            sectionMaxX += sectionInset.left; // 初始化区布局信息，key=行，value=目前此行最右边的位置

            var sectionInfos = {};

            for (var divideIdx = 0; divideIdx < divide; divideIdx++) {
              sectionInfos["" + divideIdx] = sectionMaxX;
            }

            for (var item = 0; item < numberOfItems; item++) {
              var _indexPath = new YXIndexPath(_section, item);

              var itemSize = this.itemSize instanceof Function ? this.itemSize(_indexPath, this, collectionView) : this.itemSize;
              itemSize.height = itemHeight; // 查找目前最短的行，在最短的行后面插入节点

              var x = null;
              var y = null;
              var idx = null;

              for (var _divideIdx = 0; _divideIdx < divide; _divideIdx++) {
                var max = sectionInfos["" + _divideIdx];

                if (x == null || max < x) {
                  idx = _divideIdx;
                  x = max;
                  y = sectionInset.top + (itemHeight + verticalSpacing) * _divideIdx;
                }
              }

              var attributes = new YXLayoutAttributes();
              attributes.indexPath = _indexPath;
              attributes.frame = new math.Rect(x + horizontalSpacing, y, itemSize.width, itemSize.height);
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

        _proto._masonry_vertical = function _masonry_vertical(collectionView) {
          collectionView.scrollView.horizontal = false;
          collectionView.scrollView.vertical = true;
          var contentSize = collectionView.node.getComponent(UITransform).contentSize.clone();
          var allAttributes = [];
          var numberOfSections = collectionView.numberOfSections instanceof Function ? collectionView.numberOfSections(collectionView) : collectionView.numberOfSections;
          var sectionMaxY = 0;

          for (var _section2 = 0; _section2 < numberOfSections; _section2++) {
            var numberOfItems = collectionView.numberOfItems instanceof Function ? collectionView.numberOfItems(_section2, collectionView) : collectionView.numberOfItems;
            var verticalSpacing = this.verticalSpacing instanceof Function ? this.verticalSpacing(_section2, this, collectionView) : this.verticalSpacing;
            var horizontalSpacing = this.horizontalSpacing instanceof Function ? this.horizontalSpacing(_section2, this, collectionView) : this.horizontalSpacing;
            var sectionInset = this.sectionInset instanceof Function ? this.sectionInset(_section2, this, collectionView) : this.sectionInset;
            var divide = this.divide instanceof Function ? this.divide(_section2, this, collectionView) : this.divide;
            var itemWidth = (contentSize.width - sectionInset.left - sectionInset.right - (divide - 1) * horizontalSpacing) / divide;
            sectionMaxY += sectionInset.top; // 初始化区布局信息，key=列，value=目前此列最底部的位置

            var sectionInfos = {};

            for (var divideIdx = 0; divideIdx < divide; divideIdx++) {
              sectionInfos["" + divideIdx] = sectionMaxY;
            }

            for (var item = 0; item < numberOfItems; item++) {
              var _indexPath2 = new YXIndexPath(_section2, item);

              var itemSize = this.itemSize instanceof Function ? this.itemSize(_indexPath2, this, collectionView) : this.itemSize;
              itemSize.width = itemWidth; // 查找目前最短的列，在最短的列下面插入节点

              var x = null;
              var y = null;
              var idx = null;

              for (var _divideIdx2 = 0; _divideIdx2 < divide; _divideIdx2++) {
                var max = sectionInfos["" + _divideIdx2];

                if (y == null || max < y) {
                  idx = _divideIdx2;
                  y = max;
                  x = sectionInset.left + (itemWidth + horizontalSpacing) * _divideIdx2;
                }
              }

              var attributes = new YXLayoutAttributes();
              attributes.indexPath = _indexPath2;
              attributes.frame = new math.Rect(x, y + verticalSpacing, itemSize.width, itemSize.height);
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
      }(YXFlowLayout));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/yx-page-view.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, ScrollView, Component, YXCollectionView, YXIndexPath, YXFlowLayout;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      ScrollView = module.ScrollView;
      Component = module.Component;
    }, null, function (module) {
      YXCollectionView = module.YXCollectionView;
      YXIndexPath = module.YXIndexPath;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;

      cclegacy._RF.push({}, "96dd56aO5BGmZczD/xUC+Z/", "yx-page-view", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * 基于 YXCollectionView 和 YXFlowLayout 封装的一个简单的 PageView
       * 请注意，这个组件更多是为了演示如何基于 YXCollectionView 来实现 PageView 相关的需求，并非完整的功能组件
       * 如果这个组件符合业务的话可以直接拿来用，如果满足不了需求，可以根据实际业务，选择开放更多的配置或者直接使用 YXCollectionView
       * 
       * ---
       * 此组件说明
       * - 支持一般的 PageView 业务
       * - 演示了如何封装页面变化事件
       */

      var YXPageView = exports('YXPageView', (_dec = ccclass('YXPageView'), _dec2 = property({
        tooltip: "\u6EDA\u52A8\u65B9\u5411",
        type: YXCollectionView.ScrollDirection,
        visible: true
      }), _dec3 = property({
        tooltip: "\u662F\u5426\u5141\u8BB8\u624B\u52BF\u6EDA\u52A8",
        visible: true
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(YXPageView, _Component);

        function YXPageView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * 列表组件
           */

          _this.collectionView = null;
          /**
           * 滚动方向
           */

          _initializerDefineProperty(_this, "_scrollDirection", _descriptor, _assertThisInitialized(_this));
          /**
           * 是否允许手势滚动
           * 关闭的话可以禁掉手势滚动业务，但仍然可以通过代码切换页面
           */


          _initializerDefineProperty(_this, "_scrollEnabled", _descriptor2, _assertThisInitialized(_this));
          /**
           * 保存所有的页面
           */


          _this.pages = [];
          _this._late_update_pages = false;
          _this.currentPageForOnScrolling = null;
          _this.currentPageForOnScrollEnded = null;
          return _this;
        }

        var _proto = YXPageView.prototype;
        /**
         * 获取所有页面
         * @returns 
         */

        _proto.getPages = function getPages() {
          return this.pages;
        }
        /**
         * 新增页面到尾部
         * @param page 
         */
        ;

        _proto.addPage = function addPage(page) {
          this.pages.push(page);
          this._late_update_pages = true;
        }
        /**
         * 获取当前页面索引
         * @returns 
         */
        ;

        _proto.getCurrentPageIndex = function getCurrentPageIndex() {
          if (this.collectionView.scrollDirection == YXCollectionView.ScrollDirection.HORIZONTAL) {
            var offset = this.collectionView.scrollView.getScrollOffset();
            offset.x = -offset.x;
            var idx = Math.round(offset.x / this.collectionView.scrollView.view.width);
            return idx;
          }

          if (this.collectionView.scrollDirection == YXCollectionView.ScrollDirection.VERTICAL) {
            var _offset = this.collectionView.scrollView.getScrollOffset();

            var _idx = Math.round(_offset.y / this.collectionView.scrollView.view.height);

            return _idx;
          }

          return null;
        }
        /**
         * 设置当前要显示的页面
         * 也可以视作 scrollToPage 方法
         * @param index 
         * @param timeInSecond 
         */
        ;

        _proto.setCurrentPageIndex = function setCurrentPageIndex(index, timeInSecond) {
          if (timeInSecond === void 0) {
            timeInSecond = 0;
          }

          var indexPath = new YXIndexPath(0, index);
          this.collectionView.scrollTo(indexPath, timeInSecond);
        }
        /**
         * 插入一个新页面
         * @param page 
         * @param index 
         */
        ;

        _proto.insertPage = function insertPage(page, index) {
          this.pages.splice(index, 0, page);
          this._late_update_pages = true;
        }
        /**
         * 移除指定页面
         * @param page 
         * @returns 
         */
        ;

        _proto.removePage = function removePage(page) {
          for (var index = 0; index < this.pages.length; index++) {
            var node = this.pages[index];

            if (page === node) {
              this.removePageAtIndex(index);
              return;
            }
          }
        }
        /**
         * 移除指定页面
         * @param index 
         */
        ;

        _proto.removePageAtIndex = function removePageAtIndex(index) {
          this.pages.splice(index, 1);
          this._late_update_pages = true;
        }
        /**
         * 移除所有页面
         */
        ;

        _proto.removeAllPages = function removeAllPages() {
          this.pages = [];
          this._late_update_pages = true;
        }
        /**
         * 立即更新当前页面
         */
        ;

        _proto.markForUpdatePages = function markForUpdatePages() {
          this.collectionView.reloadData();
          this.onScrolling();
          this.onScrollEnded();
        };

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          this.collectionView = this.node.getComponent(YXCollectionView) || this.node.addComponent(YXCollectionView);
          this.collectionView.recycleInterval = 0;
          this.collectionView.scrollEnabled = this._scrollEnabled;
          this.collectionView.scrollDirection = this._scrollDirection;

          this.collectionView.numberOfItems = function () {
            return _this2.pages.length;
          };

          this.collectionView.register("cell", function () {
            var result = new Node("yx-page");
            result.layer = _this2.collectionView.node.layer;
            return result;
          });

          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {
            cell.removeAllChildren();
            var page = _this2.pages[indexPath.item];
            page.parent = cell;
          };

          var layout = new YXFlowLayout();
          layout.pagingEnabled = true;

          layout.itemSize = function () {
            return _this2.collectionView.scrollView.view.contentSize;
          };

          this.collectionView.layout = layout;
          this.collectionView.node.on(ScrollView.EventType.SCROLLING, function () {
            _this2.onScrolling();
          });
          this.collectionView.node.on(ScrollView.EventType.SCROLL_ENDED, function () {
            _this2.onScrollEnded();
          });
        };

        _proto.onDestroy = function onDestroy() {
          this.pages = [];
        };

        _proto.update = function update(dt) {
          if (this._late_update_pages) {
            this._late_update_pages = false;
            this.collectionView.reloadData();
            this.onScrolling();
            this.onScrollEnded();
          }
        };

        _proto.onScrolling = function onScrolling() {
          var getCurrentPageIndex = this.getCurrentPageIndex();

          if (this.currentPageForOnScrolling != getCurrentPageIndex) {
            this.currentPageForOnScrolling = getCurrentPageIndex;
            this.node.emit(YXPageView.PAGE_CHANGE_EVENT1, this.currentPageForOnScrolling);
          }
        };

        _proto.onScrollEnded = function onScrollEnded() {
          var getCurrentPageIndex = this.getCurrentPageIndex();

          if (this.currentPageForOnScrollEnded != getCurrentPageIndex) {
            this.currentPageForOnScrollEnded = getCurrentPageIndex;
            this.node.emit(YXPageView.PAGE_CHANGE_EVENT2, this.currentPageForOnScrollEnded);
          }
        };

        _createClass(YXPageView, [{
          key: "scrollDirection",
          get: function get() {
            return this.collectionView.scrollDirection;
          },
          set: function set(value) {
            this.collectionView.scrollDirection = value;
            this.collectionView.reloadData();
          }
        }, {
          key: "scrollEnabled",
          get: function get() {
            return this.collectionView.scrollEnabled;
          },
          set: function set(value) {
            this.collectionView.scrollEnabled = value;
          }
        }]);

        return YXPageView;
      }(Component), _class3.PAGE_CHANGE_EVENT1 = "YXPageView.PAGE_CHANGE_EVENT1", _class3.PAGE_CHANGE_EVENT2 = "YXPageView.PAGE_CHANGE_EVENT2", _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_scrollDirection", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return YXCollectionView.ScrollDirection.HORIZONTAL;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_scrollEnabled", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/yx-table-view.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Prefab, instantiate, UITransform, Component, math, YXIndexPath, YXCollectionView, YXEdgeInsets, YXFlowLayout;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Component = module.Component;
      math = module.math;
    }, null, function (module) {
      YXIndexPath = module.YXIndexPath;
      YXCollectionView = module.YXCollectionView;
      YXEdgeInsets = module.YXEdgeInsets;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _class3;

      cclegacy._RF.push({}, "4fddd4eyllKcJchIPJqXAF+", "yx-table-view", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * 节点对齐方式枚举
       */

      var _yx_table_view_item_alignment = /*#__PURE__*/function (_yx_table_view_item_alignment) {
        _yx_table_view_item_alignment[_yx_table_view_item_alignment["LEFT"] = 0] = "LEFT";
        _yx_table_view_item_alignment[_yx_table_view_item_alignment["CENTER"] = 1] = "CENTER";
        _yx_table_view_item_alignment[_yx_table_view_item_alignment["RIGHT"] = 2] = "RIGHT";
        return _yx_table_view_item_alignment;
      }(_yx_table_view_item_alignment || {});

      Enum(_yx_table_view_item_alignment);
      /**
       * 节点大小模式枚举
       */

      var _yx_table_view_item_size_mode = /*#__PURE__*/function (_yx_table_view_item_size_mode) {
        _yx_table_view_item_size_mode[_yx_table_view_item_size_mode["USE_PREFAB_SIZE"] = 0] = "USE_PREFAB_SIZE";
        _yx_table_view_item_size_mode[_yx_table_view_item_size_mode["CUSTOM"] = 1] = "CUSTOM";
        return _yx_table_view_item_size_mode;
      }(_yx_table_view_item_size_mode || {});

      Enum(_yx_table_view_item_size_mode);
      /**
       * 基于 YXCollectionView 和 YXFlowLayout 封装的一个简单的 TableView
       * 请注意，这个组件更多是为了演示如何基于 YXCollectionView 来实现自己需要的列表组件，并非完整的功能组件
       * 如果这个组件符合业务的话可以直接拿来用，如果满足不了需求，可以根据实际业务，选择开放更多的配置或者直接使用 YXCollectionView
       * 
       * ---
       * 此组件说明
       * - 仅支持编辑器配置
       * - 仅支持垂直方向滚动
       * - 仅支持单类型 cell 节点样式
       * - 仅支持固定的 cell 节点大小
       * - 支持 cell 节点相对于列表的对齐方式，默认居中对齐
       */

      var YXTableView = exports('YXTableView', (_dec = ccclass('YXTableView'), _dec2 = property({
        tooltip: "cell \u8282\u70B9\u9884\u5236\u4F53",
        type: Prefab,
        visible: true
      }), _dec3 = property({
        tooltip: "\u5982\u4F55\u914D\u7F6E cell \u8282\u70B9\u5927\u5C0F\nUSE_PREFAB_SIZE: \u81EA\u52A8\u8BFB\u53D6\u9884\u5236\u4F53\u5927\u5C0F\nCUSTOM: \u81EA\u5B9A\u4E49\u8282\u70B9\u5927\u5C0F",
        type: _yx_table_view_item_size_mode,
        visible: true
      }), _dec4 = property({
        tooltip: "cell \u8282\u70B9\u5927\u5C0F",
        visible: function visible() {
          return this.itemSizeMode == _yx_table_view_item_size_mode.CUSTOM;
        }
      }), _dec5 = property({
        tooltip: "cell \u8282\u70B9\u5BF9\u9F50\u65B9\u5F0F",
        type: _yx_table_view_item_alignment,
        visible: true
      }), _dec6 = property({
        tooltip: "cell \u8282\u70B9\u4E4B\u95F4\u95F4\u8DDD",
        visible: true
      }), _dec7 = property({
        tooltip: "\u9876\u90E8\u6700\u5927\u504F\u79FB\u8DDD\u79BB",
        visible: true
      }), _dec8 = property({
        tooltip: "\u5E95\u90E8\u6700\u5927\u504F\u79FB\u8DDD\u79BB",
        visible: true
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(YXTableView, _Component);

        function YXTableView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "cellPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "itemSizeMode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "itemSize", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "alignment", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "spacing", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "top", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bottom", _descriptor7, _assertThisInitialized(_this));
          /**
           * 列表组件
           */


          _this.collectionView = null;
          _this.data = null;
          _this.updateCellCall = null;
          return _this;
        }

        var _proto = YXTableView.prototype;
        /**
         * 更新列表数据
         * @param data 列表绑定的数据源
         */

        _proto.setData = function setData(data) {
          this.data = data;
          this.reloadCollectionViewIfNeeds();
        };
        /**
         * 更新 cell 节点
         * @param call 
         */


        _proto.onCellDisplay = function onCellDisplay(call) {
          this.updateCellCall = call;
          this.reloadCollectionViewIfNeeds();
        };
        /**
         * 滚动到指定节点位置
         * @param idx 
         */


        _proto.scrollTo = function scrollTo(idx) {
          var indexPath = new YXIndexPath(0, idx);
          this.collectionView.scrollTo(indexPath);
        }
        /**
         * 生命周期方法
         */
        ;

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          this.collectionView = this.node.getComponent(YXCollectionView) || this.node.addComponent(YXCollectionView);
          this.collectionView.register("cell", function () {
            return instantiate(_this2.cellPrefab);
          });
          this.collectionView.scrollDirection = YXCollectionView.ScrollDirection.VERTICAL;

          this.collectionView.numberOfItems = function () {
            return _this2.data.length;
          };

          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {
            if (_this2.updateCellCall) {
              _this2.updateCellCall(cell, _this2.data[indexPath.item], indexPath.item);
            }
          };

          var layout = new YXFlowLayout();
          var itemSize = this.itemSize;

          if (this.itemSizeMode == _yx_table_view_item_size_mode.USE_PREFAB_SIZE) {
            itemSize = instantiate(this.cellPrefab).getComponent(UITransform).contentSize;
          }

          layout.itemSize = itemSize;
          var left = 0;

          if (this.alignment == YXTableView.Alignment.LEFT) {
            left = 0;
          }

          if (this.alignment == YXTableView.Alignment.CENTER) {
            left = (this.collectionView.scrollView.view.width - itemSize.width) * 0.5;
          }

          if (this.alignment == YXTableView.Alignment.RIGHT) {
            left = (this.collectionView.scrollView.view.width - itemSize.width) * 1;
          }

          layout.sectionInset = new YXEdgeInsets(this.top, left, this.bottom, 0);
          layout.verticalSpacing = this.spacing;
          this.collectionView.layout = layout;
        };

        _proto.onDestroy = function onDestroy() {
          this.data = [];
        };

        _proto.reloadCollectionViewIfNeeds = function reloadCollectionViewIfNeeds() {
          // `数据源` 配置好后才去更新列表，没配置好的话更新没有意义
          if (this.data == null) {
            return;
          }

          this.collectionView.reloadData();
        };

        return YXTableView;
      }(Component), _class3.Alignment = _yx_table_view_item_alignment, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemSizeMode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return _yx_table_view_item_size_mode.CUSTOM;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemSize", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new math.Size(100, 100);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "alignment", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return _yx_table_view_item_alignment.CENTER;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spacing", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "top", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bottom", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});