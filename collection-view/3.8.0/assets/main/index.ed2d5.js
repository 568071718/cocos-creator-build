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

System.register("chunks:///_virtual/demo1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts', './yx-types.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, UITransform, Label, randomRangeInt, Sprite, math, Component, YXCollectionView, YXFlowLayout, YXEdgeInsets;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      NodeEventType = module.NodeEventType;
      director = module.director;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Label = module.Label;
      randomRangeInt = module.randomRangeInt;
      Sprite = module.Sprite;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }, function (module) {
      YXEdgeInsets = module.YXEdgeInsets;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "81c2cAOrgxH+6bUCzTfvfoH", "demo1", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * @example
       * 如果需要监听 NodePool 的节点复用逻辑，需要给自己的节点组件实现 YXCollectionViewCell 接口并在 register() 方法注册组件
       */

      var YourCustomComp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(YourCustomComp, _Component);

        function YourCustomComp() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = YourCustomComp.prototype;

        _proto.unuse = function unuse() {};

        _proto.reuse = function reuse(args) {};

        return YourCustomComp;
      }(Component);

      var demo1 = exports('demo1', (_dec = ccclass('demo1'), _dec2 = property(YXCollectionView), _dec3 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component2) {
        _inheritsLoose(demo1, _Component2);

        function demo1() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component2.call.apply(_Component2, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cellPrefab", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto2 = demo1.prototype;

        _proto2.onLoad = function onLoad() {
          this.initBackAction();
        };

        _proto2.initBackAction = function initBackAction() {
          this.node.once(NodeEventType.TOUCH_END, function () {
            director.loadScene("home");
          });
        };

        _proto2.start = function start() {
          var _this2 = this;

          this.collectionView.register("cell", function () {
            return instantiate(_this2.cellPrefab);
          }, YourCustomComp);

          this.collectionView.numberOfItems = function () {
            return 10000;
          };

          this.collectionView.cellForItemAt = function (indexPath, collectionView) {
            return collectionView.dequeueReusableCell("cell");
          };

          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {
            var transform = cell.getComponent(UITransform);
            cell.getChildByName("Bg").getComponent(UITransform).contentSize = transform.contentSize;
            cell.getChildByName("Label").getComponent(Label).string = "" + indexPath;
            var r = randomRangeInt(10, 150);
            var g = randomRangeInt(10, 150);
            var b = randomRangeInt(10, 150);
            cell.getChildByName("Bg").getComponent(Sprite).color = new math.Color(r, g, b);
          };

          var layout = new YXFlowLayout();
          layout.scrollDirection = YXFlowLayout.ScrollDirection.HORIZONTAL;
          layout.itemSize = new math.Size(400, 500);
          layout.horizontalSpacing = 20;
          layout.sectionInset = new YXEdgeInsets(0, 20, 0, 0);
          this.collectionView.layout = layout;
          this.collectionView.reloadData();
        };

        return demo1;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collectionView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec3], {
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

System.register("chunks:///_virtual/demo10.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts', './yx-types.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, UITransform, Label, randomRangeInt, Sprite, math, Component, YXCollectionView, YXFlowLayout, YXEdgeInsets;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      NodeEventType = module.NodeEventType;
      director = module.director;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Label = module.Label;
      randomRangeInt = module.randomRangeInt;
      Sprite = module.Sprite;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }, function (module) {
      YXEdgeInsets = module.YXEdgeInsets;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "d9df56/1i1MeZzIiAK9pOW/", "demo10", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var demo10 = exports('demo10', (_dec = ccclass('demo10'), _dec2 = property(YXCollectionView), _dec3 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo10, _Component);

        function demo10() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cellPrefab", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = demo10.prototype;

        _proto.onLoad = function onLoad() {
          this.initBackAction();
        };

        _proto.initBackAction = function initBackAction() {
          this.node.once(NodeEventType.TOUCH_END, function () {
            director.loadScene("home");
          });
        };

        _proto.start = function start() {
          var _this2 = this;

          this.collectionView.register("cell", function () {
            return instantiate(_this2.cellPrefab);
          });
          this.collectionView.numberOfSections = 4;

          this.collectionView.numberOfItems = function (section) {
            if (section == 0) {
              return 1;
            }

            if (section == 1) {
              return 5;
            }

            if (section == 2) {
              return 3;
            }

            return 10000;
          };

          this.collectionView.cellForItemAt = function (indexPath, collectionView) {
            return collectionView.dequeueReusableCell("cell");
          };

          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {
            var transform = cell.getComponent(UITransform);
            cell.getChildByName("Bg").getComponent(UITransform).contentSize = transform.contentSize;
            cell.getChildByName("Label").getComponent(Label).string = "" + indexPath;
            var r = randomRangeInt(10, 150);
            var g = randomRangeInt(10, 150);
            var b = randomRangeInt(10, 150);
            cell.getChildByName("Bg").getComponent(Sprite).color = new math.Color(r, g, b);
          };

          var layout = new YXFlowLayout();
          layout.scrollDirection = YXFlowLayout.ScrollDirection.VERTICAL;
          layout.horizontalSpacing = 20;
          layout.verticalSpacing = 20;
          layout.sectionInset = new YXEdgeInsets(20, 0, 0, 0);

          layout.itemSize = function (indexPath, flowLayout, collectionView) {
            if (indexPath.section == 0) {
              return new math.Size(collectionView.scrollView.view.width, 400);
            }

            if (indexPath.section == 1) {
              return new math.Size(200, 200);
            }

            if (indexPath.section == 2) {
              return new math.Size(collectionView.scrollView.view.width, 200);
            }

            return new math.Size(310, 200);
          };

          this.collectionView.layout = layout;
          this.collectionView.reloadData();
        };

        return demo10;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collectionView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec3], {
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

System.register("chunks:///_virtual/demo11.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts', './yx-types.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, UITransform, Label, math, Component, YXCollectionView, YXFlowLayout, YXIndexPath;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      NodeEventType = module.NodeEventType;
      director = module.director;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Label = module.Label;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }, function (module) {
      YXIndexPath = module.YXIndexPath;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "e05e6LmOxFMgrujwt63bjLR", "demo11", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * 测试数据
       */

      var Data = function Data() {
        this.id = Data.ID++;
      };

      Data.ID = 0;
      var demo11 = exports('demo11', (_dec = ccclass('demo11'), _dec2 = property(YXCollectionView), _dec3 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo11, _Component);

        function demo11() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cellPrefab", _descriptor2, _assertThisInitialized(_this));

          _this.testData = [];
          return _this;
        }

        var _proto = demo11.prototype;

        _proto.onLoad = function onLoad() {
          this.initBackAction();
        };

        _proto.initBackAction = function initBackAction() {
          this.node.once(NodeEventType.TOUCH_END, function () {
            director.loadScene("home");
          });
        };

        _proto.start = function start() {
          var _this2 = this;

          Data.ID = 0;

          for (var index = 0; index < 5; index++) {
            this.testData.push(new Data());
          }

          this.collectionView.register("cell", function () {
            return instantiate(_this2.cellPrefab);
          });

          this.collectionView.numberOfItems = function (section) {
            return _this2.testData.length;
          };

          this.collectionView.cellForItemAt = function (indexPath, collectionView) {
            return collectionView.dequeueReusableCell("cell");
          };

          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {
            var rowData = _this2.testData[indexPath.item];
            var transform = cell.getComponent(UITransform);
            cell.getChildByName("Bg").getComponent(UITransform).contentSize = transform.contentSize;
            cell.getChildByName("Label").getComponent(Label).string = "\u70B9\u51FB\u5220\u9664\n" + rowData.id;
          };

          this.collectionView.onTouchItemAt = function (indexPath, collectionView) {
            _this2.testData.splice(indexPath.item, 1);

            collectionView.reloadData();
          };

          var layout = new YXFlowLayout();
          layout.scrollDirection = YXFlowLayout.ScrollDirection.VERTICAL;
          layout.horizontalSpacing = 20;
          layout.verticalSpacing = 20;

          layout.itemSize = function () {
            return new math.Size(200, 200);
          };

          this.collectionView.layout = layout;
          this.collectionView.reloadData();
        };

        _proto.onTouchAdd = function onTouchAdd(ev, value) {
          var count = +value;

          for (var index = 0; index < count; index++) {
            this.testData.push(new Data());
          }

          this.collectionView.reloadData();
          this.collectionView.scrollTo(new YXIndexPath(0, this.testData.length - 1), 0.25);
        };

        return demo11;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collectionView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec3], {
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

System.register("chunks:///_virtual/demo12.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-cover-layout.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Toggle, NodeEventType, director, instantiate, UITransform, Label, randomRangeInt, Sprite, math, Component, YXCollectionView, YXCoverLayout, YXFlowLayout;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Toggle = module.Toggle;
      NodeEventType = module.NodeEventType;
      director = module.director;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Label = module.Label;
      randomRangeInt = module.randomRangeInt;
      Sprite = module.Sprite;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXCoverLayout = module.YXCoverLayout;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "df042KLwLxClIOq+SFoBThK", "demo12", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var demo12 = exports('demo12', (_dec = ccclass('demo12'), _dec2 = property(YXCollectionView), _dec3 = property(Prefab), _dec4 = property(Toggle), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo12, _Component);

        function demo12() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cellPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "toggle", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = demo12.prototype;

        _proto.onLoad = function onLoad() {
          this.initBackAction();
        };

        _proto.initBackAction = function initBackAction() {
          this.node.once(NodeEventType.TOUCH_END, function () {
            director.loadScene("home");
          });
        };

        _proto.start = function start() {
          var _this2 = this;

          this.collectionView.register("cell", function () {
            return instantiate(_this2.cellPrefab);
          });

          this.collectionView.numberOfItems = function () {
            return 10000;
          };

          this.collectionView.cellForItemAt = function (indexPath, collectionView) {
            return collectionView.dequeueReusableCell("cell");
          };

          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {
            var transform = cell.getComponent(UITransform);
            cell.getChildByName("Bg").getComponent(UITransform).contentSize = transform.contentSize;
            cell.getChildByName("Label").getComponent(Label).string = "" + indexPath;
            var r = randomRangeInt(10, 150);
            var g = randomRangeInt(10, 150);
            var b = randomRangeInt(10, 150);
            cell.getChildByName("Bg").getComponent(Sprite).color = new math.Color(r, g, b);
          };

          this.collectionView.onTouchItemAt = function (indexPath, collectionView) {
            collectionView.scrollTo(indexPath, 0.5);
          };
          /**
           * 注意: 用分页效果的话，需要禁掉实时回收以便正确的监听手势事件
           */


          this.collectionView.immediateAutoRecycleInvisibleNodes = false;
          var layout = new YXCoverLayout(new math.Size(500, 400));
          layout.scrollDirection = YXFlowLayout.ScrollDirection.HORIZONTAL;
          layout.pagingEnabled = this.toggle.isChecked;
          this.collectionView.layout = layout;
          this.collectionView.reloadData();
        };

        _proto.onToggleChange = function onToggleChange(toggle) {
          if (this.collectionView.layout instanceof YXCoverLayout) {
            this.collectionView.layout.pagingEnabled = toggle.isChecked;

            if (this.collectionView.layout.pagingEnabled) {
              var indexPath = this.collectionView.visibleIndexPaths.shift();
              this.collectionView.scrollTo(indexPath, 0.5);
            }
          }
        };

        return demo12;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collectionView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toggle", [_dec4], {
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

System.register("chunks:///_virtual/demo13.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-masonry-flow-layout.ts', './yx-flow-layout.ts', './yx-types.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, UITransform, Label, randomRangeInt, Sprite, math, Component, YXCollectionView, YXMasonryFlowLayout, YXFlowLayout, YXEdgeInsets;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      NodeEventType = module.NodeEventType;
      director = module.director;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Label = module.Label;
      randomRangeInt = module.randomRangeInt;
      Sprite = module.Sprite;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXMasonryFlowLayout = module.YXMasonryFlowLayout;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }, function (module) {
      YXEdgeInsets = module.YXEdgeInsets;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "4c971NbOJNMM5BaedhWNGkP", "demo13", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var Data = function Data() {
        this.id = Data.ID++;
        this.width = randomRangeInt(200, 500);
        this.height = randomRangeInt(200, 500);
      };

      Data.ID = 0;
      var demo13 = exports('demo13', (_dec = ccclass('demo13'), _dec2 = property(YXCollectionView), _dec3 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo13, _Component);

        function demo13() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cellPrefab", _descriptor2, _assertThisInitialized(_this));

          _this.testData = [];
          return _this;
        }

        var _proto = demo13.prototype;

        _proto.onLoad = function onLoad() {
          this.initBackAction();
        };

        _proto.initBackAction = function initBackAction() {
          this.node.once(NodeEventType.TOUCH_END, function () {
            director.loadScene("home");
          });
        };

        _proto.start = function start() {
          var _this2 = this;

          for (var index = 0; index < 10000; index++) {
            this.testData.push(new Data());
          }

          this.collectionView.register("cell", function () {
            return instantiate(_this2.cellPrefab);
          });

          this.collectionView.numberOfItems = function (section) {
            return _this2.testData.length;
          };

          this.collectionView.cellForItemAt = function (indexPath, collectionView) {
            return collectionView.dequeueReusableCell("cell");
          };

          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {
            var transform = cell.getComponent(UITransform);
            cell.getChildByName("Bg").getComponent(UITransform).contentSize = transform.contentSize;
            cell.getChildByName("Label").getComponent(Label).string = "" + indexPath;
            var r = randomRangeInt(10, 150);
            var g = randomRangeInt(10, 150);
            var b = randomRangeInt(10, 150);
            cell.getChildByName("Bg").getComponent(Sprite).color = new math.Color(r, g, b);
          };

          var layout = new YXMasonryFlowLayout();
          layout.scrollDirection = YXFlowLayout.ScrollDirection.VERTICAL;
          layout.horizontalSpacing = 20;
          layout.verticalSpacing = 20;
          layout.sectionInset = new YXEdgeInsets(20, 20, 20, 20); // 修改这个值查看不同行列效果

          layout.divide = 3;

          layout.itemSize = function (indexPath, flowLayout, collectionView) {
            var rowData = _this2.testData[indexPath.item];
            return new math.Size(rowData.width, rowData.height);
          };

          this.collectionView.layout = layout;
          this.collectionView.reloadData();
        };

        _proto.updateScrollDirection = function updateScrollDirection() {
          var layout = this.collectionView.layout;
          layout.scrollDirection = layout.scrollDirection == YXFlowLayout.ScrollDirection.HORIZONTAL ? YXFlowLayout.ScrollDirection.VERTICAL : YXFlowLayout.ScrollDirection.HORIZONTAL;
          this.collectionView.reloadData();
        };

        return demo13;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collectionView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec3], {
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

System.register("chunks:///_virtual/demo14.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, math, Component, randomRangeInt, YXCollectionView, YXFlowLayout;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      NodeEventType = module.NodeEventType;
      director = module.director;
      instantiate = module.instantiate;
      math = module.math;
      Component = module.Component;
      randomRangeInt = module.randomRangeInt;
    }, null, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "69a42SHtYtBxpX3yOPENP9p", "demo14", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var Data = function Data() {
        this.id = Data.ID++; // 模拟数据，0表示失败 1表示胜利

        this.type = randomRangeInt(0, 2);
      };

      Data.ID = 0;
      var demo14 = exports('demo14', (_dec = ccclass('demo14'), _dec2 = property(YXCollectionView), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo14, _Component);

        function demo14() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "winPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "losePrefab", _descriptor3, _assertThisInitialized(_this));

          _this.testData = [];
          return _this;
        }

        var _proto = demo14.prototype;

        _proto.onLoad = function onLoad() {
          this.initBackAction();
        };

        _proto.initBackAction = function initBackAction() {
          this.node.once(NodeEventType.TOUCH_END, function () {
            director.loadScene("home");
          });
        };

        _proto.start = function start() {
          var _this2 = this;

          for (var index = 0; index < 10000; index++) {
            this.testData.push(new Data());
          } // 注册列表需要用到的节点类型


          this.collectionView.register("win", function () {
            return instantiate(_this2.winPrefab);
          });
          this.collectionView.register("lose", function () {
            return instantiate(_this2.losePrefab);
          });

          this.collectionView.numberOfItems = function () {
            return _this2.testData.length;
          };

          this.collectionView.cellForItemAt = function (indexPath, collectionView) {
            // 根据数据区分要用的节点类型
            var rowData = _this2.testData[indexPath.item];

            if (rowData.type == 0) {
              return collectionView.dequeueReusableCell("lose");
            }

            if (rowData.type == 1) {
              return collectionView.dequeueReusableCell("win");
            }

            return null;
          };

          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {
            var rowData = _this2.testData[indexPath.item];
            if (rowData.type == 0) ;
            if (rowData.type == 1) ;
          }; // 配置列表的布局方案


          var layout = new YXFlowLayout();
          layout.scrollDirection = YXFlowLayout.ScrollDirection.VERTICAL; // 滚动方向

          layout.itemSize = function (indexPath, flowLayout, collectionView) {
            var rowData = _this2.testData[indexPath.item];

            if (rowData.type == 0) {
              return new math.Size(500, 300); // `lose` 节点大小
            }

            if (rowData.type == 1) {
              return new math.Size(500, 200); // `win` 节点大小
            }

            return null;
          };

          layout.verticalSpacing = 20; // 间距

          this.collectionView.layout = layout; // 刷新列表

          this.collectionView.reloadData();
        };

        return demo14;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collectionView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "winPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "losePrefab", [_dec4], {
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

System.register("chunks:///_virtual/demo2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, UITransform, Label, randomRangeInt, Sprite, math, Component, YXCollectionView, YXFlowLayout;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      NodeEventType = module.NodeEventType;
      director = module.director;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Label = module.Label;
      randomRangeInt = module.randomRangeInt;
      Sprite = module.Sprite;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "d93f98GQ9ZFK47f9Q7QAIx/", "demo2", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var demo2 = exports('demo2', (_dec = ccclass('demo2'), _dec2 = property(YXCollectionView), _dec3 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo2, _Component);

        function demo2() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cellPrefab", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = demo2.prototype;

        _proto.onLoad = function onLoad() {
          this.initBackAction();
        };

        _proto.initBackAction = function initBackAction() {
          this.node.once(NodeEventType.TOUCH_END, function () {
            director.loadScene("home");
          });
        };

        _proto.start = function start() {
          var _this2 = this;
          /**
           * 注意: 用分页效果的话，需要禁掉实时回收以便正确的监听手势事件
           */


          this.collectionView.immediateAutoRecycleInvisibleNodes = false;
          this.collectionView.register("cell", function () {
            return instantiate(_this2.cellPrefab);
          });

          this.collectionView.numberOfItems = function () {
            return 10000;
          };

          this.collectionView.cellForItemAt = function (indexPath, collectionView) {
            return collectionView.dequeueReusableCell("cell");
          };

          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {
            var transform = cell.getComponent(UITransform);
            cell.getChildByName("Bg").getComponent(UITransform).contentSize = transform.contentSize;
            cell.getChildByName("Label").getComponent(Label).string = "" + indexPath;
            var r = randomRangeInt(10, 150);
            var g = randomRangeInt(10, 150);
            var b = randomRangeInt(10, 150);
            cell.getChildByName("Bg").getComponent(Sprite).color = new math.Color(r, g, b);
          };

          var layout = new YXFlowLayout();
          layout.scrollDirection = YXFlowLayout.ScrollDirection.HORIZONTAL;
          layout.pagingEnabled = true;
          layout.itemSize = this.collectionView.scrollView.view.contentSize;
          this.collectionView.layout = layout;
          this.collectionView.reloadData();
        };

        return demo2;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collectionView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec3], {
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

System.register("chunks:///_virtual/demo3.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, Label, randomRangeInt, Sprite, math, Component, YXCollectionView, YXFlowLayout;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      NodeEventType = module.NodeEventType;
      director = module.director;
      instantiate = module.instantiate;
      Label = module.Label;
      randomRangeInt = module.randomRangeInt;
      Sprite = module.Sprite;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "10ba5R7SQdOkrCRmiDQ6u82", "demo3", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var Data = function Data() {
        this.id = Data.ID++;
        this.value = randomRangeInt(0, 10000);
      };

      Data.ID = 0;
      var demo3 = exports('demo3', (_dec = ccclass('demo3'), _dec2 = property(YXCollectionView), _dec3 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo3, _Component);

        function demo3() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cellPrefab", _descriptor2, _assertThisInitialized(_this));

          _this.testData = [];
          return _this;
        }

        var _proto = demo3.prototype;

        _proto.onLoad = function onLoad() {
          this.initBackAction();
        };

        _proto.initBackAction = function initBackAction() {
          this.node.once(NodeEventType.TOUCH_END, function () {
            director.loadScene("home");
          });
        };

        _proto.start = function start() {
          var _this2 = this;

          for (var index = 0; index < 10000; index++) {
            this.testData.push(new Data());
          }

          this.collectionView.register("cell", function () {
            return instantiate(_this2.cellPrefab);
          });

          this.collectionView.numberOfItems = function () {
            return _this2.testData.length;
          };

          this.collectionView.cellForItemAt = function (indexPath, collectionView) {
            return collectionView.dequeueReusableCell("cell");
          };

          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {
            var rowData = _this2.testData[indexPath.item];
            cell.getChildByName("Label").getComponent(Label).string = "" + indexPath;
            cell.getChildByName("Label1").getComponent(Label).string = "" + rowData.value;
            var r = randomRangeInt(10, 150);
            var g = randomRangeInt(10, 150);
            var b = randomRangeInt(10, 150);
            cell.getChildByName("Bg").getComponent(Sprite).color = new math.Color(r, g, b);
          };

          var layout = new YXFlowLayout();
          layout.scrollDirection = YXFlowLayout.ScrollDirection.VERTICAL;
          layout.itemSize = new math.Size(600, 200);
          layout.verticalSpacing = 20;
          this.collectionView.layout = layout;
          this.collectionView.reloadData();
        };

        return demo3;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collectionView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec3], {
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

System.register("chunks:///_virtual/demo4.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, UITransform, Label, randomRangeInt, Sprite, math, Component, YXCollectionView, YXFlowLayout;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      NodeEventType = module.NodeEventType;
      director = module.director;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Label = module.Label;
      randomRangeInt = module.randomRangeInt;
      Sprite = module.Sprite;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "e4e79dp/6NKerSbAYJ0q9Hi", "demo4", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var demo4 = exports('demo4', (_dec = ccclass('demo4'), _dec2 = property(YXCollectionView), _dec3 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo4, _Component);

        function demo4() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cellPrefab", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = demo4.prototype;

        _proto.onLoad = function onLoad() {
          this.initBackAction();
        };

        _proto.initBackAction = function initBackAction() {
          this.node.once(NodeEventType.TOUCH_END, function () {
            director.loadScene("home");
          });
        };

        _proto.start = function start() {
          var _this2 = this;
          /**
           * 注意: 用分页效果的话，需要禁掉实时回收以便正确的监听手势事件
           */


          this.collectionView.immediateAutoRecycleInvisibleNodes = false;
          this.collectionView.register("cell", function () {
            return instantiate(_this2.cellPrefab);
          });

          this.collectionView.numberOfItems = function () {
            return 10000;
          };

          this.collectionView.cellForItemAt = function (indexPath, collectionView) {
            return collectionView.dequeueReusableCell("cell");
          };

          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {
            var transform = cell.getComponent(UITransform);
            cell.getChildByName("Bg").getComponent(UITransform).contentSize = transform.contentSize;
            cell.getChildByName("Label").getComponent(Label).string = "" + indexPath;
            var r = randomRangeInt(10, 150);
            var g = randomRangeInt(10, 150);
            var b = randomRangeInt(10, 150);
            cell.getChildByName("Bg").getComponent(Sprite).color = new math.Color(r, g, b);
          };

          var layout = new YXFlowLayout();
          layout.scrollDirection = YXFlowLayout.ScrollDirection.VERTICAL;
          layout.pagingEnabled = true;
          layout.itemSize = this.collectionView.scrollView.view.contentSize;
          this.collectionView.layout = layout;
          this.collectionView.reloadData();
        };

        return demo4;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collectionView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec3], {
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

System.register("chunks:///_virtual/demo5.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, UITransform, Label, randomRangeInt, Sprite, math, Component, YXCollectionView, YXFlowLayout;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      NodeEventType = module.NodeEventType;
      director = module.director;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Label = module.Label;
      randomRangeInt = module.randomRangeInt;
      Sprite = module.Sprite;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "eaad2L4PvBMYoy0njoX/ztw", "demo5", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var demo5 = exports('demo5', (_dec = ccclass('demo5'), _dec2 = property(YXCollectionView), _dec3 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo5, _Component);

        function demo5() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cellPrefab", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = demo5.prototype;

        _proto.onLoad = function onLoad() {
          this.initBackAction();
        };

        _proto.initBackAction = function initBackAction() {
          this.node.once(NodeEventType.TOUCH_END, function () {
            director.loadScene("home");
          });
        };

        _proto.start = function start() {
          var _this2 = this;

          this.collectionView.register("cell", function () {
            return instantiate(_this2.cellPrefab);
          });

          this.collectionView.numberOfItems = function () {
            return 10000;
          };

          this.collectionView.cellForItemAt = function (indexPath, collectionView) {
            return collectionView.dequeueReusableCell("cell");
          };

          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {
            var transform = cell.getComponent(UITransform);
            cell.getChildByName("Bg").getComponent(UITransform).contentSize = transform.contentSize;
            cell.getChildByName("Label").getComponent(Label).string = "" + indexPath;
            var r = randomRangeInt(10, 150);
            var g = randomRangeInt(10, 150);
            var b = randomRangeInt(10, 150);
            cell.getChildByName("Bg").getComponent(Sprite).color = new math.Color(r, g, b);
          };

          var layout = new YXFlowLayout();
          layout.scrollDirection = YXFlowLayout.ScrollDirection.VERTICAL;
          layout.horizontalSpacing = 20;
          layout.verticalSpacing = 20;
          layout.itemSize = new math.Size(200, 200);
          this.collectionView.layout = layout;
          this.collectionView.reloadData();
        };

        return demo5;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collectionView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec3], {
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

System.register("chunks:///_virtual/demo6.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Toggle, NodeEventType, director, math, instantiate, UITransform, Label, Sprite, ScrollView, log, Component, YXCollectionView, YXFlowLayout;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Toggle = module.Toggle;
      NodeEventType = module.NodeEventType;
      director = module.director;
      math = module.math;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Label = module.Label;
      Sprite = module.Sprite;
      ScrollView = module.ScrollView;
      log = module.log;
      Component = module.Component;
    }, null, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "ae3e1+R7q1JhoMYe1VQp6np", "demo6", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var demo6 = exports('demo6', (_dec = ccclass('demo6'), _dec2 = property(YXCollectionView), _dec3 = property(Prefab), _dec4 = property(Toggle), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo6, _Component);

        function demo6() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cellPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "autoToggle", _descriptor3, _assertThisInitialized(_this));
          /**
           * 模拟数据
           */


          _this.testData = [];
          _this.timer = 0;
          _this.currentPage = null;
          return _this;
        }

        var _proto = demo6.prototype;

        _proto.onLoad = function onLoad() {
          this.initBackAction();
        };

        _proto.initBackAction = function initBackAction() {
          this.node.once(NodeEventType.TOUCH_END, function () {
            director.loadScene("home");
          });
        };

        _proto.start = function start() {
          var _this2 = this;
          /**
           * 无限轮播实现思路
           * 列表容器总体大小为 数据条数 * 3 的大小，每次在滚动结束的时候，偏移量总是调整到中间的位置，以此来实现无限滚动
           * 
           * 比如原始数据 [ 0,1,2 ]，实际上在列表中为 [ 0,1,2,0,1,2,0,1,2 ]，每次滑动结束之后位置总是移动到中间区域
           */


          this.testData = [{
            page: "Page1",
            bgColor: new math.Color(30, 30, 30)
          }, {
            page: "Page2",
            bgColor: new math.Color(80, 30, 30)
          }, {
            page: "Page3",
            bgColor: new math.Color(30, 80, 30)
          }, {
            page: "Page4",
            bgColor: new math.Color(30, 30, 80)
          }];
          var layout = new YXFlowLayout();
          layout.scrollDirection = YXFlowLayout.ScrollDirection.HORIZONTAL;
          layout.pagingEnabled = true;
          layout.itemSize = this.collectionView.scrollView.view.contentSize;
          this.collectionView.layout = layout;
          this.collectionView.register("cell", function () {
            return instantiate(_this2.cellPrefab);
          });

          this.collectionView.numberOfItems = function () {
            return _this2.testData.length * 3;
          };

          this.collectionView.cellForItemAt = function (indexPath, collectionView) {
            return collectionView.dequeueReusableCell("cell");
          };

          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {
            var rowData = _this2.testData[indexPath.item % _this2.testData.length];
            var transform = cell.getComponent(UITransform);
            cell.getChildByName("Bg").getComponent(UITransform).contentSize = transform.contentSize;
            cell.getChildByName("Label").getComponent(Label).string = rowData.page;
            cell.getChildByName("Bg").getComponent(Sprite).color = rowData.bgColor;
          };
          /**
           * 注意: 用分页效果的话，需要禁掉实时回收以便正确的监听手势事件
           */


          this.collectionView.immediateAutoRecycleInvisibleNodes = false;
          this.collectionView.reloadData();
          this.collectionView.node.on(ScrollView.EventType.SCROLL_ENDED, function () {
            var offset = _this2.collectionView.scrollView.getScrollOffset();

            offset.x = -offset.x;

            var idx = Math.round(offset.x / _this2.collectionView.scrollView.view.width) % _this2.testData.length;

            offset.x = _this2.collectionView.scrollView.view.width * (_this2.testData.length + idx);

            _this2.collectionView.scrollView.scrollToOffset(offset, 0); // 直接设置滚动位置不会触发刷新，这里强制刷新一下


            _this2.collectionView.markForUpdateVisibleData(true);
          });
        };

        _proto.update = function update(dt) {
          this.update_autoScroll(dt);
          this.update_pageCall();
        };

        _proto.update_autoScroll = function update_autoScroll(dt) {
          if (this.autoToggle.isChecked == false) {
            return;
          }

          if (this.collectionView.scrollView.isScrolling()) {
            return;
          }

          this.timer += dt;

          if (this.timer >= 2) {
            this.timer = 0; // 实现自动滚动逻辑

            var offset = this.collectionView.scrollView.getScrollOffset();
            offset.x = -offset.x;
            var idx = Math.round(offset.x / this.collectionView.scrollView.view.width) + 1;
            offset.x = this.collectionView.scrollView.view.width * idx;
            this.collectionView.scrollView.scrollToOffset(offset, 0.5);
          }
        };

        _proto.update_pageCall = function update_pageCall() {
          var offset = this.collectionView.scrollView.getScrollOffset();
          offset.x = -offset.x;
          var idx = Math.round(offset.x / this.collectionView.scrollView.view.width) % this.testData.length;

          if (idx != this.currentPage) {
            this.currentPage = idx; // 当前页面变化
            // 这里可以跟其他节点关联

            log(this.currentPage + 1 + " / " + this.testData.length);
          }
        };

        return demo6;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collectionView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "autoToggle", [_dec4], {
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

System.register("chunks:///_virtual/demo7.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts', './yx-types.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, math, UITransform, Sprite, v3, Label, HorizontalTextAlignment, log, Component, randomRangeInt, YXCollectionView, YXFlowLayout, YXEdgeInsets;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      NodeEventType = module.NodeEventType;
      director = module.director;
      instantiate = module.instantiate;
      math = module.math;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      v3 = module.v3;
      Label = module.Label;
      HorizontalTextAlignment = module.HorizontalTextAlignment;
      log = module.log;
      Component = module.Component;
      randomRangeInt = module.randomRangeInt;
    }, null, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }, function (module) {
      YXEdgeInsets = module.YXEdgeInsets;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "da73cE5YZRNYKwkXkH+DFz8", "demo7", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var Data = function Data(content) {
        this.id = Data.ID++;
        this.content = "";
        this.sender = randomRangeInt(0, 2);
        this.content = content;
      };

      Data.ID = 0;
      var demo7 = exports('demo7', (_dec = ccclass('demo7'), _dec2 = property(YXCollectionView), _dec3 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo7, _Component);

        function demo7() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cellPrefab", _descriptor2, _assertThisInitialized(_this));
          /**
           * 调整这个值，查看限制不同宽度的情况
           */


          _this.labelMaxWidth = 450;
          _this.testData = [];
          /**
           * 计算高度用到的节点
           */

          _this.calculateNode = null;
          /**
           * 实际开发中，数据一般会有一个唯一字段，可以通过唯一标识 + width(如果节点宽度是动态变化的话) 作为 key 把当前宽度下对应的大小缓存起来，避免 reloadData 时候多次运算
           */

          _this.heightCache = new Map();
          return _this;
        }

        var _proto = demo7.prototype;

        _proto.onLoad = function onLoad() {
          this.initBackAction();
        };

        _proto.initBackAction = function initBackAction() {
          this.node.once(NodeEventType.TOUCH_END, function () {
            director.loadScene("home");
          });
        };

        _proto.start = function start() {
          var _this2 = this;

          this.testData = [new Data("\u6709\u4E00\u5929\u6211\u53BB\u6587\u5177\u5E97\u4E70\u7B14\uFF0C\u6B63\u5728\u6211\u8981\u628A\u7B14\u6346\u8D77\u6765\u65F6\uFF0C\u5E97\u5458\u5BF9\u6211\u8BF4:\u8FD9\u4E2A\u7B14\u4E0D\u7528\u6346\u3002\u4E8E\u662F\u6211\u95EE\u4ED6:\u5565\u7B14\u624D\u9700\u6346\uFF1F\u4ED6\u62FF\u51FA\u4E00\u4E2A\u6495\u6389\u4E8C\u7EF4\u7801\u7684\u7B14\u5BF9\u6211\u8BF4:\u6495\u4E86\u7801\u7684\u624D\u9700\u6346\u3002"), new Data("\u4E00\u5929\uFF0C\u90B9\u5FCC\u7167\u4E86\u7167\u955C\u5B50\uFF0C\u5BF9\u7740\u4ED6\u7684\u59BB\u5B50\u8BF4\uFF1A\u201C\u543E\u719F\u4E0E\u57CE\u5317\u8521\u5F90\u5764\u7F8E\uFF1F\u201D\u5176\u59BB\u66F0\u201C\u5FCC\u4F60\u592A\u7F8E\u3002\u201D"), new Data("\u77ED\u6587\u672C"), new Data("\u6709\u4E00\u5929\u5C0F\u5409\u548C\u4E00\u7FA4\u4EBA\u53BB\u5C71\u6D1E\uFF0C\u53D1\u73B0\u5C71\u6D1E\u6709\u4E2A\u5C38\u4F53\uFF0C\u5C31\u548C\u5176\u4ED6\u4EBA\u62AC\u51FA\u53BB\u4E86\u3002\u56DE\u5BB6\u540E\uFF0C\u5176\u4ED6\u4EBA\u90FD\u6B7B\u4E86\uFF0C\u7237\u7237\u95EE\uFF1A\u201C\u5409\u4F60\u62AC\u6CA1\uFF1F\u201D\u5C0F\u5409\u6447\u4E86\u6447\u5934\u3002\u8FD9\u65F6\u5C0F\u5409\u7684\u8EAB\u4E0A\u53D8\u7EFF\u4E86\uFF0C\u7237\u7237\u8BF4\uFF1A\u201C\u4E0D\u597D\uFF0C\u662F\u7EFF\u5C38\u5BD2\u8B66\u544A\uFF01\u201D"), new Data("\u4E00\u5BF9\u6CF0\u56FD\u592B\u5987\u5E26\u7740\u5B69\u5B50\u51FA\u56FD\u65C5\u6E38\uFF0C\u8FC7\u6D77\u5173\u65F6\uFF0C\u5DE5\u4F5C\u4EBA\u5458\u95EE\u592B\u5987\uFF0C\u5B69\u5B50\u59D3\u540D\u56FD\u7C4D\u51FA\u751F\u6708\u4EFD\uFF0C\u7236\u6BCD\u9053\uFF1A\u6770\u59AE\u6CF0\u56FD\u4EBA\u4E94\u6708\uFF0C\u673A\u5668\u7FFB\u8BD1\u51FA\u6765\uFF1AJenny Thai May"), new Data("\u9732\u97E9\u548C\u51AC\u502A\u90FD\u662F\u516C\u53F8\u51FA\u8272\u7684\u5458\u5DE5\uFF0C\u9732\u6DB5\u5F88\u5AC9\u5992\u51AC\u59AE\u7684\u989C\u503C\u3002\u6709\u6B21\u516C\u53F8\u4E3E\u529E\u6D3B\u52A8\uFF0C\u9080\u8BF7\u5404\u754C\u4EBA\u58EB\u6765\u53C2\u52A0\u3002\u9732\u6DB5\u548C\u51AC\u502A\u4F5C\u4E3A\u4E3B\u6301\u4EBA\uFF0C\u6D3B\u52A8\u524D\u665A\u9732\u6DB5\u8DD1\u5230\u51AC\u502A\u5316\u5986\u5BA4\u5F04\u810F\u5979\u7684\u88D9\u5B50\u3002\u88AB\u53E6\u4E00\u4EBA\u770B\u89C1\u95EE\u5979\u4E3A\u4F55\u8981\u8FD9\u6837\u505A\u3002\u9732\u6DB5\uFF1A\u5FCC\u502A\u592A\u7F8E"), new Data("\u4ECA\u5929\u53BB\u4E86\u519C\u6751\u7684\u5927\u5A18\u5BB6\uFF0C\u53BB\u7684\u65F6\u5019\u5927\u5A18\u6B63\u5728\u5730\u91CC\u5E72\u6D3B\u3002\u6211\u95EE\uFF1A\u201C\u5927\u5A18\u4F60\u5728\u5E72\u4EC0\u4E48\u554A\uFF1F\u201D\u5927\u5A18\u8BF4\uFF1A\u201C\u6211\u5728\u5228\u6728\u6750\u3002\u201D\u8FC7\u4E86\u4F1A\u7A81\u7136\u558A\u6211\uFF1A\u201C\u4F84\u5B50\uFF0C\u53BB\u5E2E\u5927\u5A18\u62FF\u7EF3\u5B50\u3002\u201D\u6211\u95EE\u5230\uFF1A\u201C\u62FF\u7EF3\u5B50\u5E72\u4EC0\u4E48\uFF1F\u201D\u5A18\u8BF4\uFF1A\u201C\u5927\u5A18\u5228\u6750\u9700\u6346\u3002\u201D"), new Data("\u67D0\u5929\u6211\u7A7F\u8D8A\u5230\u6B66\u4FA0\u5C0F\u8BF4\u91CC\uFF0C\u9047\u5230\u4E86\u5F20\u65E0\u5FCC\u3002\u6211\u8BF4:\u5FCC\uFF0C\u6765\u5207\u78CB\u4E00\u4E0B?\u5FCC:\u540E\u9762\u3002\u6211\u770B\u89C1\u51E0\u4E07\u4EBA\u8FFD\u7740\u5F20\u65E0\u5FCC\u8BF4\u8981\u6376\u6B7B\u4ED6\u3002\u6211\u5FC3\u751F\u601C\u60AF\uFF0C\u8BF4:\u5FCC\uFF0C\u4F60\u592A\u9709\uFF01\u7A81\u7136\uFF0C\u4ED6\u4EEC\u7684\u8001\u5927\u5415\u65BD\u6DB5\u5411\u6211\u4EEC\u53D1\u51FA\u8B66\u544A\u3002\u6211\u8BF4:\u906D\u4E86\uFF01\u662F\u5415\u65BD\u6DB5\u8B66\u544A\uFF01"), new Data("\u865E\u59EC\u7684\u76AE\u80A4\u597D\u597D\u770B\u554A\uFF0C\u5FCD\u4E0D\u4F4F\u6211\u60F3\u4F5C\u8BD7\u4E00\u9996\uFF1A\u65E2\u6709\u6B4C\u821E\u60CA\u4E91\u9704\uFF0C\u9713\u88F3\u7FBD\u8863\u6F2B\u7A88\u7A95\u3002\u62AC\u6307\u4E00\u6325\u8F6C\u5929\u7C41\uFF0C\u7F8E\u9152\u4F73\u80B4\u5171\u900D\u9065\u3002"), new Data("\u6D4B\u8BD5")];
          this.testData.sort(function () {
            return Math.random() - 0.5;
          });
          this.collectionView.register("cell", function () {
            return instantiate(_this2.cellPrefab);
          });

          this.collectionView.numberOfItems = function () {
            return _this2.testData.length;
          };

          this.collectionView.cellForItemAt = function (indexPath, collectionView) {
            return collectionView.dequeueReusableCell("cell");
          };

          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {
            var rowData = _this2.testData[indexPath.item];

            _this2.setData(rowData, cell);
          };

          var layout = new YXFlowLayout();
          layout.scrollDirection = YXFlowLayout.ScrollDirection.VERTICAL;
          layout.verticalSpacing = 20;
          layout.sectionInset = new YXEdgeInsets(20, 0, 20, 0);

          layout.itemSize = function (indexPath, flowLayout, collectionView) {
            var rowData = _this2.testData[indexPath.item];
            return new math.Size(640, _this2.calculateRowHeight(rowData));
          };

          this.collectionView.layout = layout;
          this.collectionView.reloadData();
        }
        /**
         * 更新 cell 内容
         */
        ;

        _proto.setData = function setData(rowData, node) {
          // 获取到节点大小
          var nodeSize = node.getComponent(UITransform).contentSize; // 获取文本大小

          var key = rowData.id + "-" + this.labelMaxWidth;
          var labelSize = this.heightCache.get(key);
          /**
           * 更新数据并调整节点位置
           * 气泡大小靠文本撑起来，文本相对气泡居中
           */

          var head = node.getChildByName("Head");
          var headPos = head.position.clone();
          headPos.y = nodeSize.height * 0.5 - (nodeSize.height > 100 ? 60 : 50);
          headPos.x = rowData.sender == 0 ? -270 : 270;
          head.position = headPos;
          var headSprite = head.getComponent(Sprite);
          var labelBG = node.getChildByName("LabelBG");
          var labelBGTransform = labelBG.getComponent(UITransform);
          labelBGTransform.contentSize = new math.Size(labelSize.width + 40, nodeSize.height);
          var labelBGSprite = labelBG.getComponent(Sprite);
          labelBGSprite.color = rowData.sender == 0 ? new math.Color("#FF426D") : math.Color.WHITE;
          var labelBGOffsetX = (nodeSize.width - labelBGTransform.width) * 0.5 - 120; // 120 是头像 + 间距

          labelBG.position = v3(rowData.sender == 0 ? -labelBGOffsetX : labelBGOffsetX, labelBG.position.y, labelBG.position.z);
          var label = node.getChildByName("Label").getComponent(Label);
          label.string = rowData.content;
          label.node.position = labelBG.position;
          label.color = rowData.sender == 0 ? new math.Color("#FFFFFF") : new math.Color("#000000");
          label.horizontalAlign = labelSize.width < this.labelMaxWidth ? HorizontalTextAlignment.CENTER : HorizontalTextAlignment.LEFT;

          if (label.getComponent(UITransform).width != this.labelMaxWidth) {
            label.getComponent(UITransform).width = this.labelMaxWidth;
          }
        }
        /**
         * 计算高度
         * demo 这里是用了 label 来计算高度
         * 实际项目中，并不局限于这个方案，只要能准确计算出高度就好
         * 比如像有的需求，假如每块最多展示 6 个数据量，最大分两行展示，3个数据量是一个固定行高，超过3个是另一个固定行高，这种情况的话，可以直接根据数据量写死高度就好
         */
        ;

        _proto.calculateRowHeight = function calculateRowHeight(rowData) {
          // 检查是否已经计算过了
          var key = rowData.id + "-" + this.labelMaxWidth;
          var labelSize = this.heightCache.get(key);

          if (labelSize == null) {
            // 创建一个同类的节点，通过提前赋值一遍计算出高度，只是用来算高度的，创建一次就好，可以反复用
            if (this.calculateNode == null) {
              this.calculateNode = instantiate(this.cellPrefab);
            }

            var label = this.calculateNode.getChildByName("Label").getComponent(Label);
            label.string = rowData.content;

            try {
              labelSize = this.calculateLabelSize(label, this.labelMaxWidth);
            } catch (error) {
              alert(error);
            } // 缓存起来避免刷新数据的时候多次计算


            this.heightCache.set(key, labelSize);
            log("\u8BA1\u7B97\u51FA\u6765\u7684\u6587\u672C\u5927\u5C0F: " + labelSize);
          }

          var height = labelSize.height + 40;
          /* 40 在这里是为了补上 label 的上下距离 */

          height = Math.max(height, 100); // 限制一个最低高度

          return height;
        }
        /**
         * 计算 label 的实际大小
         * @param label 
         * @param maxWidth 
         * @returns 
         */
        ;

        _proto.calculateLabelSize = function calculateLabelSize(label, maxWidth) {
          label.overflow = Label.Overflow.NONE;
          label.updateRenderData(true);

          if (label.getComponent(UITransform).width <= maxWidth) {
            return label.getComponent(UITransform).contentSize.clone();
          }

          label.overflow = Label.Overflow.RESIZE_HEIGHT;
          label.getComponent(UITransform).width = maxWidth;
          label.updateRenderData(true);
          return label.getComponent(UITransform).contentSize.clone();
        };
        /**
         * 模拟刷新，测试高度缓存是否正常
         */


        _proto.onTouchReload = function onTouchReload() {
          this.testData.sort(function () {
            return Math.random() - 0.5;
          });
          this.collectionView.reloadData();
        };

        return demo7;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collectionView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec3], {
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

System.register("chunks:///_virtual/demo8.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts', './yx-types.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, UITransform, Label, randomRangeInt, Sprite, math, Component, YXCollectionView, YXFlowLayout, YXEdgeInsets;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      NodeEventType = module.NodeEventType;
      director = module.director;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Label = module.Label;
      randomRangeInt = module.randomRangeInt;
      Sprite = module.Sprite;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }, function (module) {
      YXEdgeInsets = module.YXEdgeInsets;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "a6a269yU/hMvL4mRacoxJz5", "demo8", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var demo8 = exports('demo8', (_dec = ccclass('demo8'), _dec2 = property(YXCollectionView), _dec3 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo8, _Component);

        function demo8() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cellPrefab", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = demo8.prototype;

        _proto.onLoad = function onLoad() {
          this.initBackAction();
        };

        _proto.initBackAction = function initBackAction() {
          this.node.once(NodeEventType.TOUCH_END, function () {
            director.loadScene("home");
          });
        };

        _proto.start = function start() {
          var _this2 = this;

          this.collectionView.register("cell", function () {
            return instantiate(_this2.cellPrefab);
          });

          this.collectionView.numberOfItems = function () {
            return 10000;
          };

          this.collectionView.cellForItemAt = function (indexPath, collectionView) {
            return collectionView.dequeueReusableCell("cell");
          };

          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {
            var transform = cell.getComponent(UITransform);
            cell.getChildByName("Bg").getComponent(UITransform).contentSize = transform.contentSize;
            cell.getChildByName("Label").getComponent(Label).string = "" + indexPath;
            var r = randomRangeInt(10, 150);
            var g = randomRangeInt(10, 150);
            var b = randomRangeInt(10, 150);
            cell.getChildByName("Bg").getComponent(Sprite).color = new math.Color(r, g, b);
          };

          var layout = new YXFlowLayout();
          layout.scrollDirection = YXFlowLayout.ScrollDirection.HORIZONTAL;
          layout.horizontalSpacing = 20;
          layout.verticalSpacing = 20;
          layout.sectionInset = new YXEdgeInsets(0, 20, 0, 0);
          layout.itemSize = new math.Size(200, 200);
          this.collectionView.layout = layout;
          this.collectionView.reloadData();
        };

        return demo8;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collectionView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec3], {
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

System.register("chunks:///_virtual/demo9.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts', './yx-types.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, UITransform, Label, randomRangeInt, Sprite, math, Component, YXCollectionView, YXFlowLayout, YXEdgeInsets;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      NodeEventType = module.NodeEventType;
      director = module.director;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Label = module.Label;
      randomRangeInt = module.randomRangeInt;
      Sprite = module.Sprite;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }, function (module) {
      YXEdgeInsets = module.YXEdgeInsets;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "48078Tr3SpMwYetjDWvfzj5", "demo9", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var demo9 = exports('demo9', (_dec = ccclass('demo9'), _dec2 = property(YXCollectionView), _dec3 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo9, _Component);

        function demo9() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cellPrefab", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = demo9.prototype;

        _proto.onLoad = function onLoad() {
          this.initBackAction();
        };

        _proto.initBackAction = function initBackAction() {
          this.node.once(NodeEventType.TOUCH_END, function () {
            director.loadScene("home");
          });
        };

        _proto.start = function start() {
          var _this2 = this;

          this.collectionView.register("cell", function () {
            return instantiate(_this2.cellPrefab);
          });
          this.collectionView.numberOfSections = 4;

          this.collectionView.numberOfItems = function (section) {
            if (section == 0) {
              return 1;
            }

            if (section == 1) {
              return 5;
            }

            if (section == 2) {
              return 3;
            }

            return 10000;
          };

          this.collectionView.cellForItemAt = function (indexPath, collectionView) {
            return collectionView.dequeueReusableCell("cell");
          };

          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {
            var transform = cell.getComponent(UITransform);
            cell.getChildByName("Bg").getComponent(UITransform).contentSize = transform.contentSize;
            cell.getChildByName("Label").getComponent(Label).string = "" + indexPath;
            var r = randomRangeInt(10, 150);
            var g = randomRangeInt(10, 150);
            var b = randomRangeInt(10, 150);
            cell.getChildByName("Bg").getComponent(Sprite).color = new math.Color(r, g, b);
          };

          var layout = new YXFlowLayout();
          layout.scrollDirection = YXFlowLayout.ScrollDirection.HORIZONTAL;
          layout.horizontalSpacing = 20;
          layout.verticalSpacing = 20;
          layout.sectionInset = new YXEdgeInsets(0, 20, 0, 0);

          layout.itemSize = function (indexPath, flowLayout, collectionView) {
            if (indexPath.section == 0) {
              return new math.Size(300, 640);
            }

            if (indexPath.section == 1) {
              return new math.Size(200, 200);
            }

            if (indexPath.section == 2) {
              return new math.Size(200, 640);
            }

            return new math.Size(310, 310);
          };

          this.collectionView.layout = layout;
          this.collectionView.reloadData();
        };

        return demo9;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collectionView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec3], {
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

System.register("chunks:///_virtual/home.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, ProgressBar, instantiate, UITransform, Label, director, math, Component, YXCollectionView, YXFlowLayout;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      ProgressBar = module.ProgressBar;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Label = module.Label;
      director = module.director;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3;

      cclegacy._RF.push({}, "44846CmwAhCrY4/ZZ8KUxtV", "home", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var home = exports('home', (_dec = ccclass('home'), _dec2 = property(Prefab), _dec3 = property(YXCollectionView), _dec4 = property(Node), _dec5 = property(ProgressBar), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(home, _Component);

        function home() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "cellPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "collectionView", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "loading", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "progressBar", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = home.prototype;

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          this.loading.active = false;
          this.progressBar.progress = 0;
          /**
           * 通过这组数据查看效果对应的实现场景
           * 每个场景目录下都是单独的项目，不会与其他目录文件关联，查看时只需要查看对应的目录下的文件就好
           */

          var array = [{
            title: "\u6C34\u5E73\u6EDA\u52A8 - \u57FA\u7840",
            scene: "demo1"
          }, {
            title: "\u6C34\u5E73\u6EDA\u52A8 - \u5206\u9875",
            scene: "demo2"
          }, {
            title: "\u6C34\u5E73\u6EDA\u52A8 - \u591A\u884C",
            scene: "demo8"
          }, {
            title: "\u6C34\u5E73\u6EDA\u52A8 - \u5206\u533A",
            scene: "demo9"
          }, {
            title: "\u5782\u76F4\u6EDA\u52A8 - \u57FA\u7840",
            scene: "demo3"
          }, {
            title: "\u5782\u76F4\u6EDA\u52A8 - \u5206\u9875",
            scene: "demo4"
          }, {
            title: "\u5782\u76F4\u6EDA\u52A8 - \u591A\u5217",
            scene: "demo5"
          }, {
            title: "\u5782\u76F4\u6EDA\u52A8 - \u5206\u533A",
            scene: "demo10"
          }, {
            title: "\u7011\u5E03\u6D41",
            scene: "demo13"
          }, {
            title: "\u589E\u5220\u6761\u76EE",
            scene: "demo11"
          }, {
            title: "\u65E0\u9650\u8F6E\u64AD\u6548\u679C",
            scene: "demo6"
          }, {
            title: "\u8282\u70B9\u52A8\u6001\u9AD8\u5EA6",
            scene: "demo7"
          }, {
            title: "\u7A81\u51FA\u9009\u4E2D\u8282\u70B9 - \u7F29\u653E",
            scene: "demo12"
          }, {
            title: "\u540C\u5217\u8868\u591A\u79CD\u8282\u70B9\u6837\u5F0F",
            scene: "demo14"
          }];
          this.collectionView.numberOfItems = array.length;
          this.collectionView.register("cell", function () {
            return instantiate(_this2.cellPrefab);
          });

          this.collectionView.cellForItemAt = function (indexPath, collectionView) {
            return collectionView.dequeueReusableCell("cell");
          };

          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {
            var rowData = array[indexPath.item];
            var transform = cell.getComponent(UITransform);
            cell.getChildByName("Bg").getComponent(UITransform).contentSize = transform.contentSize;
            cell.getChildByName("Label").getComponent(Label).string = rowData.title;
          };

          this.collectionView.onTouchItemAt = function (indexPath, collectionView) {
            var rowData = array[indexPath.item];
            _this2.loading.active = true;
            var progress = 0;
            director.preloadScene(rowData.scene, function (a, b) {
              progress = Math.max(progress, a / b);
              _this2.progressBar.progress = progress;
            }, function (err) {
              if (err == null) {
                home.LAST_OFFSET = _this2.collectionView.scrollView.getScrollOffset();
                home.LAST_OFFSET.x = -home.LAST_OFFSET.x;
                director.loadScene(rowData.scene);
              } else {
                _this2.loading.active = false;
                _this2.progressBar.progress = 0;
                alert(err);
              }
            });
          };

          var layout = new YXFlowLayout();
          layout.itemSize = new math.Size(600, 100);
          layout.verticalSpacing = 20;
          this.collectionView.layout = layout;
          this.collectionView.reloadData();

          if (home.LAST_OFFSET) {
            this.collectionView.scrollView.scrollToOffset(home.LAST_OFFSET);
            this.collectionView.markForUpdateVisibleData();
          }
        };

        return home;
      }(Component), _class3.LAST_OFFSET = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "collectionView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "loading", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec5], {
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

System.register("chunks:///_virtual/index.ts", ['cc', './yx-collection-view.ts', './yx-cover-layout.ts', './yx-flow-layout.ts', './yx-masonry-flow-layout.ts', './yx-types.ts'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      var _setter = {};
      _setter.YXCollectionView = module.YXCollectionView;
      _setter.YXLayout = module.YXLayout;
      _setter.YXLayoutAttributes = module.YXLayoutAttributes;
      exports(_setter);
    }, function (module) {
      exports('YXCoverLayout', module.YXCoverLayout);
    }, function (module) {
      exports('YXFlowLayout', module.YXFlowLayout);
    }, function (module) {
      exports('YXMasonryFlowLayout', module.YXMasonryFlowLayout);
    }, function (module) {
      var _setter = {};
      _setter.YXEdgeInsets = module.YXEdgeInsets;
      _setter.YXIndexPath = module.YXIndexPath;
      exports(_setter);
    }],
    execute: function () {
      cclegacy._RF.push({}, "1e299YNYrBBRo6Zh9p5Ik3Z", "index", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './demo1.ts', './demo10.ts', './demo11.ts', './demo12.ts', './demo13.ts', './demo14.ts', './demo2.ts', './demo3.ts', './demo4.ts', './demo5.ts', './demo6.ts', './demo7.ts', './demo8.ts', './demo9.ts', './home.ts', './index.ts', './yx-collection-view.ts', './yx-cover-layout.ts', './yx-flow-layout.ts', './yx-masonry-flow-layout.ts', './yx-types.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/yx-collection-view.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, math, NodePool, Node, NodeEventType, UITransform, ScrollView, Component, Mask;

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
      math = module.math;
      NodePool = module.NodePool;
      Node = module.Node;
      NodeEventType = module.NodeEventType;
      UITransform = module.UITransform;
      ScrollView = module.ScrollView;
      Component = module.Component;
      Mask = module.Mask;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "f2c14q0UedOp7pnWIKia8C+", "yx-collection-view", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          requireComponent = _decorator.requireComponent,
          disallowMultiple = _decorator.disallowMultiple,
          help = _decorator.help;
      /**
       * 私有组件
       * cell 节点添加到 YXCollectionView 上时，自动挂载此组件，用来记录一些实时参数
       */

      var _cell_ = /*#__PURE__*/function (_Component) {
        _inheritsLoose(_cell_, _Component);

        function _cell_() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * 此节点是通过哪个标识符创建的
           */

          _this.identifier = void 0;
          /**
           * 此节点目前绑定的布局属性
           */

          _this.attributes = void 0;
          return _this;
        }

        return _cell_;
      }(Component);
      /**
       * 私有组件
       * 内部滚动视图组件
       */


      var _scroll_view = /*#__PURE__*/function (_ScrollView) {
        _inheritsLoose(_scroll_view, _ScrollView);

        function _scroll_view() {
          var _this2;

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          _this2 = _ScrollView.call.apply(_ScrollView, [this].concat(args)) || this;
          _this2.yx_onStartInertiaScroll = void 0;
          return _this2;
        }

        var _proto = _scroll_view.prototype;
        /**
         * 禁掉鼠标滚轮
         */

        _proto._onMouseWheel = function _onMouseWheel(event, captureListeners) {}
        /**
         * 准备开始惯性滚动
         * @param touchMoveVelocity 手势速度
         */
        ;

        _proto._startInertiaScroll = function _startInertiaScroll(touchMoveVelocity) {
          _ScrollView.prototype._startInertiaScroll.call(this, touchMoveVelocity);

          if (this.yx_onStartInertiaScroll) {
            this.yx_onStartInertiaScroll(touchMoveVelocity);
          }
        };

        _proto._onTouchBegan = function _onTouchBegan(event, captureListeners) {
          if (this.node.getComponent(YXCollectionView).scrollEnabled == false) {
            return;
          }

          _ScrollView.prototype._onTouchBegan.call(this, event, captureListeners);
        };

        _proto._onTouchMoved = function _onTouchMoved(event, captureListeners) {
          if (this.node.getComponent(YXCollectionView).scrollEnabled == false) {
            return;
          }

          _ScrollView.prototype._onTouchMoved.call(this, event, captureListeners);
        };

        _proto._onTouchCancelled = function _onTouchCancelled(event, captureListeners) {
          _ScrollView.prototype._onTouchCancelled.call(this, event, captureListeners);
        };

        _proto._onTouchEnded = function _onTouchEnded(event, captureListeners) {
          _ScrollView.prototype._onTouchEnded.call(this, event, captureListeners);
        };

        return _scroll_view;
      }(ScrollView);
      /**
       * 节点的布局属性
       */


      var YXLayoutAttributes = exports('YXLayoutAttributes', /*#__PURE__*/function () {
        function YXLayoutAttributes() {
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
        }

        var _proto2 = YXLayoutAttributes.prototype;
        /**
         * 克隆当前布局属性
         */

        _proto2.clone = function clone() {
          var _this$indexPath, _this$frame, _this$scale, _this$offset, _this$eulerAngles;

          var result = new YXLayoutAttributes();
          result.indexPath = (_this$indexPath = this.indexPath) == null ? void 0 : _this$indexPath.clone();
          result.frame = (_this$frame = this.frame) == null ? void 0 : _this$frame.clone();
          result.scale = (_this$scale = this.scale) == null ? void 0 : _this$scale.clone();
          result.offset = (_this$offset = this.offset) == null ? void 0 : _this$offset.clone();
          result.eulerAngles = (_this$eulerAngles = this.eulerAngles) == null ? void 0 : _this$eulerAngles.clone();
          return result;
        };

        return YXLayoutAttributes;
      }());
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

        var _proto3 = YXLayout.prototype;
        /**
         * @optional
         * 列表在首次更新数据后会执行这个方法
         * 在这个方法里设置滚动视图的初始偏移量
         */

        _proto3.initOffset = function initOffset(collectionView) {}
        /**
         * @optional
         * 当一次手势拖动结束后会立即调用此方法
         * 实现这个方法的话滚动视图会自动滚动到此方法返回的位置
         * @param touchMoveVelocity 本次手势拖动速度
         * @param startOffset 本次手势拖动开始时滚动视图的偏移位置
         * @returns null 不处理
         */
        ;

        _proto3.targetOffset = function targetOffset(collectionView, touchMoveVelocity, startOffset) {
          return null;
        }
        /**
         * @optional
         * 返回区域内可见的节点属性，并实时的调整这些节点变换效果
         * 根据实际的布局情况，计算出当前屏幕内需要显示的布局属性
         * 这个方法会直接影响到列表的性能，如果在自定义的时候对性能要求不高(比如明确知道数据量不多的情况下)，可以忽略此方法
         * @param rect 当前滚动视图的可见区域
         */
        ;

        _proto3.layoutAttributesForElementsInRect = function layoutAttributesForElementsInRect(rect, collectionView) {
          return this.attributes;
        }
        /**
         * @optional
         * 通过索引查找布局属性，默认 Array.find()
         * @param indexPath 
         * @param collectionView 
         */
        ;

        _proto3.layoutAttributesForItemAtIndexPath = function layoutAttributesForItemAtIndexPath(indexPath, collectionView) {
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

        _proto3.scrollTo = function scrollTo(indexPath, collectionView) {
          return null;
        }
        /**
         * @optional
         * @see YXLayoutAttributes.zIndex
         * @returns 
         */
        ;

        _proto3.shouldUpdateAttributesZIndex = function shouldUpdateAttributesZIndex() {
          return false;
        };

        return YXLayout;
      }());
      /**
       * @see NodePool.poolHandlerComp
       * 节点的自定义组件可以通过这个接口跟 @NodePool 的重用业务关联起来
       */

      var YXCollectionView = exports('YXCollectionView', (_dec = ccclass('YXCollectionView'), _dec2 = disallowMultiple(true), _dec3 = help(""), _dec4 = property({
        tooltip: "\u81EA\u52A8\u7ED9\u6302\u8F7D\u8282\u70B9\u6DFB\u52A0 mask \u7EC4\u4EF6"
      }), _dec5 = property({
        tooltip: "\u5141\u8BB8\u624B\u52BF\u6EDA\u52A8"
      }), _dec6 = property({
        tooltip: "\u6BCF\u591A\u5C11\u5E27\u5237\u65B0\u4E00\u6B21\u53EF\u89C1\u8282\u70B9\uFF0C1 \u8868\u793A\u6BCF\u5E27\u90FD\u5237"
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Component2) {
        _inheritsLoose(YXCollectionView, _Component2);

        function YXCollectionView() {
          var _this3;

          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          _this3 = _Component2.call.apply(_Component2, [this].concat(args)) || this;
          /**
           * 自动给挂载节点添加 mask 组件
           */

          _initializerDefineProperty(_this3, "mask", _descriptor, _assertThisInitialized(_this3));
          /**
           * 允许手势滚动
           */


          _initializerDefineProperty(_this3, "scrollEnabled", _descriptor2, _assertThisInitialized(_this3));
          /**
           * 每多少帧刷新一次可见节点，1 表示每帧都刷
           */


          _initializerDefineProperty(_this3, "frameInterval", _descriptor3, _assertThisInitialized(_this3));

          _this3._frameIdx = 0;
          /**
           * 是否在滚动过程中立即回收不可见节点，默认 true
           * @bug 滚动过程中如果实时的回收不可见节点，有时候会收不到 scroll view 的 cancel 事件，导致 scroll view 的滚动状态不会更新 (且收不到滚动结束事件)
           * @fix 当这个属性设置为 false 时，只会在 `touch-up` 和 `scroll-ended` 里面回收不可见节点
           */

          _this3.immediateAutoRecycleInvisibleNodes = true;
          /**
           * 内容要分几个区展示，默认 1
           * 没有分区展示的需求可以不管这个配置
           */

          _this3.numberOfSections = 1;
          /**
           * 每个区里要展示多少条内容
           */

          _this3.numberOfItems = 0;
          _this3.pools = new Map();
          _this3.makers = new Map();
          /**
           * 配置每块内容对应的 UI 节点
           * 在这个方法里，只需要关心 @indexPath 这个位置对应的节点应该是用注册过的哪个类型的 Node 节点，然后通过 @dequeueReusableCell 生成对应的 Node
           * 注意: 不要在这个方法里创建新的节点对象
           * @example
           * yourList.cellForItemAt = (indexPath, collectionView) => {
           *      return collectionView.dequeueReusableCell(`your identifier`)
           * }
           * @returns 注意: 这个方法返回的 cell，必须是通过 @dequeueReusableCell 匹配到的 Node
           */

          _this3.cellForItemAt = null;
          /**
           * cell 添加到滚动视图上之后执行，在这个方法里更新 cell 显示的 UI 内容
           * 可以通过 @indexPath 区分 cell 的种类
           * 重要: 如果 cell 的大小不是固定的，需要在这里重新调整子节点的位置，避免布局错乱
           */

          _this3.onCellDisplay = null;
          /**
           * 点击到节点后调用
           */

          _this3.onTouchItemAt = null;
          /**
           * 布局属性
           */

          _this3.layout = null;
          /**
           * 获取当前正在显示的所有节点
           */

          _this3.visibleNodes = [];
          /**
           * 记录 @reloadData 执行了多少次了，用来区分刷新列表的时候是否是首次刷新列表
           */

          _this3.reloadDataCounter = 0;
          _this3._late_update_visible_data = false;
          _this3._scroll_offset_on_touch_start = null;
          return _this3;
        }

        var _proto4 = YXCollectionView.prototype;
        /**
         * 注册 cell
         * 可多次注册不同种类的 cell，只要确保 @identifier 的唯一性就好
         * @param identifier cell 标识符，通过 @dequeueReusableCell 获取重用 cell 时，会根据这个值匹配
         * @param maker 生成节点，当重用池里没有可用的节点时，会通过这个回调获取节点，需要在这个回调里面生成节点
         * @param poolComp 节点自定义组件，可以通过这个组件跟 @NodePool 的重用业务关联起来
         */

        _proto4.register = function register(identifier, maker, poolComp) {
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
         * @returns 
         */


        _proto4.dequeueReusableCell = function dequeueReusableCell(identifier) {
          var pool = this.pools.get(identifier);

          if (pool == null) {
            throw new Error("YXCollectionView: \u672A\u6CE8\u518C\u6807\u8BC6\u7B26\u4E3A `" + identifier + "` \u7684 cell\uFF0C\u8BF7\u5148\u8C03\u7528 YXCollectionView \u7684 register() \u65B9\u6CD5\u6CE8\u518C cell \u8282\u70B9");
          }

          var result = pool.get();

          if (result == null) {
            var maker = this.makers.get(identifier);

            if (maker instanceof Function == false) {
              throw new Error("YXCollectionView: register() \u53C2\u6570\u9519\u8BEF\uFF0C\u8BF7\u6B63\u786E\u914D\u7F6E maker \u56DE\u8C03\u51FD\u6570\u4EE5\u751F\u6210\u6807\u8BC6\u5BF9\u5E94\u7684\u8282\u70B9");
            }

            result = this.makers.get(identifier)();

            if (result instanceof Node && pool.poolHandlerComp instanceof Function) {
              result.getComponent(pool.poolHandlerComp) || result.addComponent(pool.poolHandlerComp);
            }

            var _cell = result.getComponent(_cell_) || result.addComponent(_cell_);

            _cell.identifier = identifier;
            result.on(NodeEventType.TOUCH_END, this.onTouchItem, this);
          }

          return result;
        };

        _proto4.onTouchItem = function onTouchItem(ev) {
          if (this.onTouchItemAt) {
            var _cell2 = ev.target.getComponent(_cell_);

            this.onTouchItemAt(_cell2.attributes.indexPath, this);
          }
        };
        /**
         * 获取当前正在显示的某个节点
         * @param indexPath 
         */


        _proto4.getVisibleNode = function getVisibleNode(indexPath) {
          return this.visibleNodes.find(function (element) {
            var cell = element.getComponent(_cell_);
            return cell.attributes.indexPath.equals(indexPath);
          });
        }
        /**
         * 获取指定节点的索引
         * @param node 
         * @returns 
         */
        ;

        _proto4.getVisibleNodeIndexPath = function getVisibleNodeIndexPath(node) {
          var cell = node.getComponent(_cell_);

          if (cell) {
            return cell.attributes.indexPath.clone();
          }

          return null;
        }
        /**
         * 刷新列表数据
         */
        ;

        _proto4.reloadData = function reloadData() {
          // 校验 layout 参数
          if (this.layout == null) {
            throw new Error("YXCollectionView: 参数错误，请正确配置 layout 以确定布局方案");
          } // 立即停止当前滚动


          this.scrollView.stopAutoScroll(); // 移除掉当前所有节点，准备刷新

          for (var index = 0; index < this.visibleNodes.length; index++) {
            var element = this.visibleNodes[index];
            this.pools.get(element.getComponent(_cell_).identifier).put(element);
          }

          this.visibleNodes = []; // 记录一下当前的偏移量，保证数据更新之后位置也不会太偏

          var offset = this.scrollView.getScrollOffset(); // 重新计算一遍布局属性

          this.layout.prepare(this); // 更新 content size

          var contentTransform = this.scrollView.content.getComponent(UITransform) || this.scrollView.content.addComponent(UITransform);
          contentTransform.contentSize = this.layout.contentSize; // 默认偏移量 或者 恢复偏移量

          if (this.reloadDataCounter <= 0) {
            this.layout.initOffset(this);
          } else {
            var maxOffset = this.scrollView.getMaxScrollOffset();
            math.Vec2.min(offset, offset, maxOffset);
            this.scrollView.scrollToOffset(offset, 0);
          } // 更新 cell 节点


          this.reloadVisibleCells();
          this.reloadDataCounter++;
        };
        /**
         * 根据当前的可见区域调整需要显示的节点以及移除不需要显示的节点
         */


        _proto4.reloadVisibleCells = function reloadVisibleCells() {
          // 获取当前可见区域
          var visibleRect = new math.Rect();
          visibleRect.origin = this.scrollView.getScrollOffset();
          visibleRect.x = -visibleRect.x;
          visibleRect.size = this.scrollView.view.contentSize; // 根据可见区域，找出对应的布局属性

          var layoutAttributes = this.layout.layoutAttributesForElementsInRect(visibleRect, this);

          if (layoutAttributes == null || layoutAttributes == this.layout.attributes) {
            layoutAttributes = this.layout.attributes.slice();
          } // 按 zIndex 排序


          var shouldUpdateAttributesZIndex = this.layout.shouldUpdateAttributesZIndex();

          if (shouldUpdateAttributesZIndex) {
            layoutAttributes.sort(function (a, b) {
              return a.zIndex - b.zIndex;
            });
          } // 回收不可见节点


          if (this.immediateAutoRecycleInvisibleNodes) {
            this.recycleInvisibleNodes(visibleRect);
          }
          /*
          let poolsCounter = 0
          this.pools.forEach((a) => {
              poolsCounter = poolsCounter + a.size()
          })
          log(`需要显示的节点数量: ${layoutAttributes.length}  当前显示的节点数量: ${this.visibleNodes.length}  缓存池里的节点数量: ${poolsCounter}`)
          */
          // 添加需要显示的节点


          for (var index = 0; index < layoutAttributes.length; index++) {
            var element = layoutAttributes[index];

            if (visibleRect.intersects(element.frame) == false) {
              continue;
            } // 这里还是要确实的检查一下是否真正可见，防止未实现 layoutAttributesForElementsInRect 时的情况
            // 需要显示并且正在显示的


            var visibleNode = this.getVisibleNode(element.indexPath);

            if (visibleNode) {
              this.applyLayoutAttributes(visibleNode, element, shouldUpdateAttributesZIndex);
              continue;
            } // 需要显示但是当前未显示出来的


            var node = this.cellForItemAt(element.indexPath, this);
            node.parent = this.scrollView.content;
            this.applyLayoutAttributes(node, element, shouldUpdateAttributesZIndex);
            this.visibleNodes.push(node);

            if (this.onCellDisplay) {
              this.onCellDisplay(node, element.indexPath, this);
            }
          }
        }
        /**
         * 回收不可见节点
         */
        ;

        _proto4.recycleInvisibleNodes = function recycleInvisibleNodes(visibleRect) {
          var _this4 = this;

          if (visibleRect === void 0) {
            visibleRect = null;
          }

          if (visibleRect == null) {
            visibleRect = new math.Rect();
            visibleRect.origin = this.scrollView.getScrollOffset();
            visibleRect.x = -visibleRect.x;
            visibleRect.size = this.scrollView.view.contentSize;
          }

          this.visibleNodes = this.visibleNodes.filter(function (element) {
            var cell = element.getComponent(_cell_);

            if (visibleRect.intersects(cell.attributes.frame) == false) {
              _this4.pools.get(cell.identifier).put(element);

              return false;
            }

            return true;
          });
        }
        /**
         * 刷新当前可见节点
         * @param force true: 立即刷新  false: 下帧刷新
         */
        ;

        _proto4.markForUpdateVisibleData = function markForUpdateVisibleData(force) {
          if (force === void 0) {
            force = false;
          }

          if (force) {
            this.reloadVisibleCells();
            return;
          }

          this._late_update_visible_data = true;
        };
        /**
         * 调整节点的位置/变换
         * @param bringToFront 是否把这个节点移到最上层显示
         */


        _proto4.applyLayoutAttributes = function applyLayoutAttributes(node, attributes, bringToFront) {
          var cell = node.getComponent(_cell_);
          cell.attributes = attributes;
          var transform = node.getComponent(UITransform) || node.addComponent(UITransform);
          transform.setContentSize(attributes.frame.size);
          var pos = attributes["_in_collection_view_pos"];

          if (pos == null) {
            pos = node.position.clone();
            pos.x = -(this.layout.contentSize.width - attributes.frame.width) * 0.5 + attributes.frame.x;
            pos.y = +(this.layout.contentSize.height - attributes.frame.height) * 0.5 - attributes.frame.y;
            attributes["_in_collection_view_pos"] = pos;
          }

          if (attributes.offset) {
            pos.add(attributes.offset);
          }

          node.position = pos;

          if (attributes.scale) {
            node.scale = attributes.scale;
          }

          if (attributes.eulerAngles) {
            node.eulerAngles = attributes.eulerAngles;
          }

          if (bringToFront) {
            node.setSiblingIndex(-1);
          }
        }
        /**
         * 滚动到指定节点的位置
         * @returns 
         */
        ;

        _proto4.scrollTo = function scrollTo(indexPath, timeInSecond, attenuated) {
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

        _proto4.onLoad = function onLoad() {
          this.node.on(NodeEventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(ScrollView.EventType.SCROLL_BEGAN, this.onScrollBegan, this);
          this.node.on(ScrollView.EventType.SCROLLING, this.onScrolling, this);
          this.node.on(ScrollView.EventType.TOUCH_UP, this.onScrollTouchUp, this);
          this.node.on(ScrollView.EventType.SCROLL_ENDED, this.onScrollEnded, this);
          this._scrollView.yx_onStartInertiaScroll = this.onStartInertiaScroll.bind(this);
        };

        _proto4.onDestroy = function onDestroy() {
          this.node.off(NodeEventType.TOUCH_START, this.onTouchStart, this);
          this.node.off(ScrollView.EventType.SCROLL_BEGAN, this.onScrollBegan, this);
          this.node.off(ScrollView.EventType.SCROLLING, this.onScrolling, this);
          this.node.off(ScrollView.EventType.TOUCH_UP, this.onScrollTouchUp, this);
          this.node.off(ScrollView.EventType.SCROLL_ENDED, this.onScrollEnded, this);
          this.visibleNodes = [];
          this.pools.forEach(function (element) {
            element.clear();
          });
          this.pools.clear();
          this.makers.clear();
          this.layout.attributes = [];
        };

        _proto4.update = function update(dt) {
          this.updateVisibleDataIfNeeds(dt);
        }
        /**
         * 更新可见区域的 cell ，如果需要的话
         */
        ;

        _proto4.updateVisibleDataIfNeeds = function updateVisibleDataIfNeeds(dt) {
          if (this._late_update_visible_data) {
            this._late_update_visible_data = false;
            this.reloadVisibleCells();
          }
        };

        _proto4.onTouchStart = function onTouchStart() {
          var offset = this.scrollView.getScrollOffset();
          offset.x = -offset.x;
          this._scroll_offset_on_touch_start = offset;
        };

        _proto4.onScrollBegan = function onScrollBegan() {};

        _proto4.onScrolling = function onScrolling() {
          if (this.frameInterval <= 1) {
            this.reloadVisibleCells();
            return;
          }

          this._frameIdx++;

          if (this._frameIdx % this.frameInterval == 0) {
            this.reloadVisibleCells();
          }
        };

        _proto4.onScrollTouchUp = function onScrollTouchUp() {
          this.recycleInvisibleNodes();
        };

        _proto4.onScrollEnded = function onScrollEnded() {
          this.recycleInvisibleNodes();
        };

        _proto4.onStartInertiaScroll = function onStartInertiaScroll(touchMoveVelocity) {
          var endValue = this.layout.targetOffset(this, touchMoveVelocity, this._scroll_offset_on_touch_start);

          if (endValue) {
            this.scrollView.scrollToOffset(endValue.offset, endValue.time);
            this.markForUpdateVisibleData();
          }
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

              result.brake = 0.6;
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
          key: "visibleIndexPaths",
          get: function get() {
            var result = [];

            for (var index = 0; index < this.visibleNodes.length; index++) {
              var element = this.visibleNodes[index];

              var _cell3 = element.getComponent(_cell_);

              result.push(_cell3.attributes.indexPath.clone());
            }

            return result;
          }
        }], [{
          key: "VERSION",
          get:
          /**
           * 版本号
           */
          function get() {
            return "1.0.0";
          }
        }]);

        return YXCollectionView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scrollEnabled", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "frameInterval", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/yx-cover-layout.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './yx-types.ts', './yx-flow-layout.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, math, v3, YXEdgeInsets, YXFlowLayout;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      math = module.math;
      v3 = module.v3;
    }, function (module) {
      YXEdgeInsets = module.YXEdgeInsets;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
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
         * 元素大小
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
          _this.mode = YXCoverLayout.Mode.DEFAULT;
          /**
           * 禁止外部使用的父类属性
           */

          _this.sectionInset = void 0;
          _this.itemSize = null;
          _this.scaleValue = 0.8;
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

          if (this.scrollDirection == YXFlowLayout.ScrollDirection.HORIZONTAL) {
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

          if (this.scrollDirection == YXFlowLayout.ScrollDirection.VERTICAL) {
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
            time: 0.25
          };
        };

        _proto.scrollTo = function scrollTo(indexPath, collectionView) {
          var attr = this.layoutAttributesForItemAtIndexPath(indexPath, collectionView);

          if (attr) {
            var offset = attr.frame.origin;

            if (this.scrollDirection == YXFlowLayout.ScrollDirection.HORIZONTAL) {
              offset.x = offset.x - (collectionView.scrollView.view.width - attr.frame.width) * 0.5;
            }

            if (this.scrollDirection == YXFlowLayout.ScrollDirection.VERTICAL) {
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

          if (this.scrollDirection == YXFlowLayout.ScrollDirection.HORIZONTAL) {
            var mid = offset.x + collectionView.scrollView.view.width * 0.5;
            result.forEach(function (element) {
              var distance = Math.abs(element.frame.center.x - mid);
              var progress = distance / _this2.itemSize.width;
              progress = Math.min(1, progress);
              var scaleValue = 1 - (1 - scale) * progress;
              element.scale = v3(scaleValue, scaleValue, 1);
              element.zIndex = 1 - progress;
            });
          }

          if (this.scrollDirection == YXFlowLayout.ScrollDirection.VERTICAL) {
            var _mid2 = offset.y + collectionView.scrollView.view.height * 0.5;

            result.forEach(function (element) {
              var distance = Math.abs(element.frame.center.y - _mid2);
              var progress = distance / _this2.itemSize.height;
              progress = Math.min(1, progress);
              var scaleValue = 1 - (1 - scale) * progress;
              element.scale = v3(scaleValue, scaleValue, 1);
              element.zIndex = 1 - progress;
            });
          }

          return result;
        };

        _proto.shouldUpdateAttributesZIndex = function shouldUpdateAttributesZIndex() {
          return true;
        };

        return YXCoverLayout;
      }(YXFlowLayout));

      (function (_YXCoverLayout) {
        var Mode = /*#__PURE__*/function (Mode) {
          Mode[Mode["DEFAULT"] = 0] = "DEFAULT";
          return Mode;
        }({});

        _YXCoverLayout.Mode = Mode;
      })(YXCoverLayout || (YXCoverLayout = exports('YXCoverLayout', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/yx-flow-layout.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './yx-collection-view.ts', './yx-types.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, UITransform, math, YXLayout, YXLayoutAttributes, YXIndexPath, YXEdgeInsets;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      math = module.math;
    }, function (module) {
      YXLayout = module.YXLayout;
      YXLayoutAttributes = module.YXLayoutAttributes;
    }, function (module) {
      YXIndexPath = module.YXIndexPath;
      YXEdgeInsets = module.YXEdgeInsets;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6aefbGH/rxJFpOp8GLjvdH1", "yx-flow-layout", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
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
           * 滚动方向，默认垂直方向滚动
           */

          _this.scrollDirection = YXFlowLayout.ScrollDirection.VERTICAL;
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
          if (this.scrollDirection == YXFlowLayout.ScrollDirection.HORIZONTAL) {
            this._horizontal(collectionView);

            return;
          }

          if (this.scrollDirection == YXFlowLayout.ScrollDirection.VERTICAL) {
            this._vertical(collectionView);

            return;
          }
        };

        _proto.initOffset = function initOffset(collectionView) {
          if (this.scrollDirection == YXFlowLayout.ScrollDirection.HORIZONTAL) {
            collectionView.scrollView.scrollToLeft(0);
            return;
          }

          if (this.scrollDirection == YXFlowLayout.ScrollDirection.VERTICAL) {
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

          if (this.scrollDirection == YXFlowLayout.ScrollDirection.HORIZONTAL) {
            var idx = Math.round(offset.x / collectionView.scrollView.view.width);
            var r = touchMoveVelocity.x / collectionView.scrollView.view.width;

            if (startOffset && Math.abs(r) >= threshold) {
              idx = Math.round(startOffset.x / collectionView.scrollView.view.width) + (r > 0 ? -1 : 1);
            }

            offset.x = idx * collectionView.scrollView.view.width;
          }

          if (this.scrollDirection == YXFlowLayout.ScrollDirection.VERTICAL) {
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
          }

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
          result.push(this.attributes[midIdx]);
          var startIdx = midIdx;

          while (startIdx > 0) {
            var idx = startIdx - 1;
            var _attr = this.attributes[idx];

            if (rect.intersects(_attr.frame) == false) {
              break;
            }

            result.push(_attr);
            startIdx = idx;
          }

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
          }

          var endIdx = midIdx;

          while (endIdx < this.attributes.length - 1) {
            var _idx3 = endIdx + 1;

            var _attr3 = this.attributes[_idx3];

            if (rect.intersects(_attr3.frame) == false) {
              break;
            }

            result.push(_attr3);
            endIdx = _idx3;
          }

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
            var currentX = sectionMaxX;
            var currentY = sectionInset.top;
            var maxWidthInRow = 0;

            for (var item = 0; item < numberOfItems; item++) {
              var _indexPath = new YXIndexPath(_section, item);

              var itemSize = this.itemSize instanceof Function ? this.itemSize(_indexPath, this, collectionView) : this.itemSize;
              var attributes = new YXLayoutAttributes();
              attributes.indexPath = _indexPath;

              if (currentY + itemSize.height <= contentSize.height - sectionInset.bottom) {
                attributes.frame = new math.Rect(currentX, currentY, itemSize.width, itemSize.height);
                currentY = currentY + itemSize.height + verticalSpacing;
                maxWidthInRow = Math.max(maxWidthInRow, itemSize.width);
              } else {
                currentX = currentX + maxWidthInRow + horizontalSpacing;
                currentY = sectionInset.top;
                attributes.frame = new math.Rect(currentX, currentY, itemSize.width, itemSize.height);
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
            var currentX = sectionInset.left;
            var currentY = sectionMaxY;
            var maxHeightInRow = 0;

            for (var item = 0; item < numberOfItems; item++) {
              var _indexPath2 = new YXIndexPath(_section2, item);

              var itemSize = this.itemSize instanceof Function ? this.itemSize(_indexPath2, this, collectionView) : this.itemSize;
              var attributes = new YXLayoutAttributes();
              attributes.indexPath = _indexPath2;

              if (currentX + itemSize.width <= contentSize.width - sectionInset.right) {
                attributes.frame = new math.Rect(currentX, currentY, itemSize.width, itemSize.height);
                currentX = currentX + itemSize.width + horizontalSpacing;
                maxHeightInRow = Math.max(maxHeightInRow, itemSize.height);
              } else {
                currentX = sectionInset.left;
                currentY = currentY + maxHeightInRow + verticalSpacing;
                attributes.frame = new math.Rect(currentX, currentY, itemSize.width, itemSize.height);
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
      }(YXLayout));

      (function (_YXFlowLayout) {
        var ScrollDirection = /*#__PURE__*/function (ScrollDirection) {
          ScrollDirection[ScrollDirection["HORIZONTAL"] = 0] = "HORIZONTAL";
          ScrollDirection[ScrollDirection["VERTICAL"] = 1] = "VERTICAL";
          return ScrollDirection;
        }({});

        _YXFlowLayout.ScrollDirection = ScrollDirection;
      })(YXFlowLayout || (YXFlowLayout = exports('YXFlowLayout', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/yx-masonry-flow-layout.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './yx-collection-view.ts', './yx-types.ts', './yx-flow-layout.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, UITransform, math, YXLayoutAttributes, YXIndexPath, YXFlowLayout;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      math = module.math;
    }, function (module) {
      YXLayoutAttributes = module.YXLayoutAttributes;
    }, function (module) {
      YXIndexPath = module.YXIndexPath;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
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
          if (this.scrollDirection == YXMasonryFlowLayout.ScrollDirection.HORIZONTAL) {
            this._masonry_horizontal(collectionView);

            return;
          }

          if (this.scrollDirection == YXMasonryFlowLayout.ScrollDirection.VERTICAL) {
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

System.register("chunks:///_virtual/yx-types.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, ValueType;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ValueType = module.ValueType;
    }],
    execute: function () {
      var _dec, _class, _class2, _dec2, _class3, _class4;

      cclegacy._RF.push({}, "24ed4RpeJRNHYSSsdct+6s4", "yx-types", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * 表示索引的对象
       */

      var YXIndexPath = exports('YXIndexPath', (_dec = ccclass("YXIndexPath"), _dec(_class = (_class2 = /*#__PURE__*/function (_ValueType) {
        _inheritsLoose(YXIndexPath, _ValueType);

        function YXIndexPath(section, item) {
          var _this;

          _this = _ValueType.call(this) || this;
          _this.section = 0;
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

        return YXIndexPath;
      }(ValueType), _class2.ZERO = new _class2(0, 0), _class2)) || _class));
      /**
       * 表示边距的对象
       */

      var YXEdgeInsets = exports('YXEdgeInsets', (_dec2 = ccclass("YXEdgeInsets"), _dec2(_class3 = (_class4 = /*#__PURE__*/function (_ValueType2) {
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
      }(ValueType), _class4.ZERO = new _class4(0, 0, 0, 0), _class4)) || _class3));

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