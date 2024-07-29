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

System.register("chunks:///_virtual/demo1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './Demo1Cell.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, NodeEventType, director, math, Component, Demo1Cell, YXCollectionView, YXEdgeInsets, YXFlowLayout;

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
      Demo1Cell = module.Demo1Cell;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
      YXEdgeInsets = module.YXEdgeInsets;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "81c2cAOrgxH+6bUCzTfvfoH", "demo1", undefined);

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

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = demo1.prototype;

        _proto.onLoad = function onLoad() {
          this.initBackAction();
        };

        _proto.initBackAction = function initBackAction() {
          this.node.once(NodeEventType.TOUCH_END, function () {
            director.loadScene("home");
          });
        };

        _proto.start = function start() {
          // 确定列表一共多少条内容
          this.collectionView.numberOfItems = function () {
            return 10000;
          }; // 当节点添加到列表上后执行，更新节点数据 (注册 cell 通过编辑器实现)


          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {
            var comp = cell.getComponent(Demo1Cell);
            comp.updateBackground();
            comp.label.string = "" + indexPath;
          }; // 配置列表的布局方案


          var layout = new YXFlowLayout();
          layout.itemSize = new math.Size(400, 500);
          layout.horizontalSpacing = 20;
          layout.sectionInset = new YXEdgeInsets(0, 20, 0, 0);
          this.collectionView.layout = layout; // 刷新列表

          this.collectionView.reloadData();
        };

        return demo1;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "collectionView", [_dec2], {
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

System.register("chunks:///_virtual/demo10.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, UITransform, Label, randomRangeInt, Sprite, math, Component, YXCollectionView, YXEdgeInsets, YXFlowLayout;

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
      YXEdgeInsets = module.YXEdgeInsets;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
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

System.register("chunks:///_virtual/demo11.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, UITransform, Label, math, Component, YXCollectionView, YXIndexPath, YXFlowLayout;

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
      YXIndexPath = module.YXIndexPath;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
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

System.register("chunks:///_virtual/demo12.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-cover-layout.ts', './yx-collection-view.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Toggle, NodeEventType, director, instantiate, UITransform, Label, randomRangeInt, Sprite, math, Component, YXCoverLayout, YXCollectionView;

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
      YXCoverLayout = module.YXCoverLayout;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
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

          this.collectionView.scrollDirection = YXCollectionView.ScrollDirection.HORIZONTAL;
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


          this.collectionView.recycleInterval = 0;
          var layout = new YXCoverLayout(new math.Size(500, 400));
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

System.register("chunks:///_virtual/demo13.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-masonry-flow-layout.ts', './yx-collection-view.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, UITransform, Label, randomRangeInt, Sprite, math, Component, YXMasonryFlowLayout, YXCollectionView, YXEdgeInsets;

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
      YXMasonryFlowLayout = module.YXMasonryFlowLayout;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
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
          this.collectionView.scrollDirection = this.collectionView.scrollDirection == YXCollectionView.ScrollDirection.HORIZONTAL ? YXCollectionView.ScrollDirection.VERTICAL : YXCollectionView.ScrollDirection.HORIZONTAL;
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
          /**
           * 模拟数据源
           */


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
          } // 确定列表一共多少条内容


          this.collectionView.numberOfItems = function () {
            return _this2.testData.length;
          }; // 注册列表需要用到的节点类型


          this.collectionView.register("win", function () {
            return instantiate(_this2.winPrefab);
          });
          this.collectionView.register("lose", function () {
            return instantiate(_this2.losePrefab);
          }); // 根据数据确定要用的节点类型 (通过注册时候的标识符来确定)

          this.collectionView.cellForItemAt = function (indexPath, collectionView) {
            var rowData = _this2.testData[indexPath.item];

            if (rowData.type == 0) {
              return collectionView.dequeueReusableCell("lose");
            }

            if (rowData.type == 1) {
              return collectionView.dequeueReusableCell("win");
            }

            return null;
          }; // 当节点添加到列表上后执行，更新节点数据


          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {
            var rowData = _this2.testData[indexPath.item];
            if (rowData.type == 0) ;
            if (rowData.type == 1) ;
          }; // 配置列表的布局方案


          var layout = new YXFlowLayout();

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

          layout.verticalSpacing = 20;
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

System.register("chunks:///_virtual/demo15.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, Node, math, randomRangeInt, Sprite, Component, YXCollectionView, YXEdgeInsets, YXFlowLayout;

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
      Node = module.Node;
      math = module.math;
      randomRangeInt = module.randomRangeInt;
      Sprite = module.Sprite;
      Component = module.Component;
    }, null, function (module) {
      YXCollectionView = module.YXCollectionView;
      YXEdgeInsets = module.YXEdgeInsets;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "f9b14HGzxxAG5zAngyOMgtu", "demo15", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var demo15 = exports('demo15', (_dec = ccclass('demo15'), _dec2 = property(YXCollectionView), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo15, _Component);

        function demo15() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cell1Prefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cell2Prefab", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "commomEmptyPrefab", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = demo15.prototype;

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


          this.collectionView.recycleInterval = 0;
          this.collectionView.scrollDirection = YXCollectionView.ScrollDirection.HORIZONTAL; // 注册列表需要用到的节点类型

          this.collectionView.register("cell1", function () {
            return instantiate(_this2.cell1Prefab);
          });
          this.collectionView.register("cell2", function () {
            return instantiate(_this2.cell2Prefab);
          });
          this.collectionView.register("cell3", function () {
            var res = new Node().addComponent(YXCollectionView);

            _this2.setupCell3(res);

            return res.node;
          });

          this.collectionView.numberOfItems = function () {
            return 3;
          };

          this.collectionView.cellForItemAt = function (indexPath, collectionView) {
            // 根据数据区分要用的节点类型
            if (indexPath.item == 0) {
              return collectionView.dequeueReusableCell("cell1");
            }

            if (indexPath.item == 1) {
              return collectionView.dequeueReusableCell("cell2");
            }

            if (indexPath.item == 2) {
              return collectionView.dequeueReusableCell("cell3");
            }

            return null;
          };

          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {
            if (indexPath.item == 2) {
              cell.getComponent(YXCollectionView).reloadData();
              return;
            }
          }; // 配置列表的布局方案


          var layout = new YXFlowLayout();
          layout.itemSize = this.collectionView.scrollView.view.contentSize;
          layout.pagingEnabled = true;
          this.collectionView.layout = layout; // 刷新列表

          this.collectionView.reloadData();
        };

        _proto.setupCell3 = function setupCell3(list) {
          var _this3 = this;

          var layout = new YXFlowLayout();
          layout.itemSize = new math.Size(640, 200);
          layout.verticalSpacing = 20;
          layout.sectionInset = new YXEdgeInsets(20, 40, 0, 40);
          list.layout = layout;
          list.register("cell", function () {
            return instantiate(_this3.commomEmptyPrefab);
          });
          list.numberOfItems = 1000;

          list.cellForItemAt = function (indexPath, collectionView) {
            return collectionView.dequeueReusableCell("cell");
          };

          list.onCellDisplay = function (cell) {
            var r = randomRangeInt(10, 150);
            var g = randomRangeInt(10, 150);
            var b = randomRangeInt(10, 150);
            cell.getChildByName("Bg").getComponent(Sprite).color = new math.Color(r, g, b);
          };
        };

        return demo15;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collectionView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cell1Prefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cell2Prefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "commomEmptyPrefab", [_dec5], {
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

System.register("chunks:///_virtual/Demo15Cell1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-masonry-flow-layout.ts', './yx-collection-view.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Label, randomRangeInt, Sprite, math, log, Component, YXMasonryFlowLayout, YXCollectionView, YXEdgeInsets;

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
      instantiate = module.instantiate;
      Label = module.Label;
      randomRangeInt = module.randomRangeInt;
      Sprite = module.Sprite;
      math = module.math;
      log = module.log;
      Component = module.Component;
    }, null, function (module) {
      YXMasonryFlowLayout = module.YXMasonryFlowLayout;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
      YXEdgeInsets = module.YXEdgeInsets;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "dd251TAr99HmII6Scsj8Vcu", "Demo15Cell1", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Demo15Cell1 = exports('Demo15Cell1', (_dec = ccclass('Demo15Cell1'), _dec2 = property(YXCollectionView), _dec3 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Demo15Cell1, _Component);

        function Demo15Cell1() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cellPrefab", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Demo15Cell1.prototype;

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
            cell.getChildByName("Label").getComponent(Label).string = "" + indexPath;
            var r = randomRangeInt(10, 150);
            var g = randomRangeInt(10, 150);
            var b = randomRangeInt(10, 150);
            cell.getChildByName("Bg").getComponent(Sprite).color = new math.Color(r, g, b);
          };

          this.collectionView.onTouchItemAt = function (indexPath) {
            log("Demo15Cell1: " + indexPath);
          };

          var layout = new YXMasonryFlowLayout();
          layout.horizontalSpacing = 20;
          layout.verticalSpacing = 20;
          layout.sectionInset = new YXEdgeInsets(20, 20, 20, 20);
          layout.divide = 3;

          layout.itemSize = function () {
            return new math.Size(0, randomRangeInt(200, 400));
          };

          this.collectionView.layout = layout;
          this.collectionView.reloadData();
        };

        return Demo15Cell1;
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

System.register("chunks:///_virtual/Demo15Cell2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-cover-layout.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Node, UITransform, Label, randomRangeInt, Sprite, math, Component, YXCoverLayout, YXCollectionView, YXEdgeInsets, YXFlowLayout;

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
      instantiate = module.instantiate;
      Node = module.Node;
      UITransform = module.UITransform;
      Label = module.Label;
      randomRangeInt = module.randomRangeInt;
      Sprite = module.Sprite;
      math = module.math;
      Component = module.Component;
    }, null, function (module) {
      YXCoverLayout = module.YXCoverLayout;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
      YXEdgeInsets = module.YXEdgeInsets;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "9a7678fMaNLsLhHZevOcP9F", "Demo15Cell2", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Demo15Cell2 = exports('Demo15Cell2', (_dec = ccclass('Demo15Cell2'), _dec2 = property(YXCollectionView), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Demo15Cell2, _Component);

        function Demo15Cell2() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cellPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "layoutPrefab", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Demo15Cell2.prototype;

        _proto.start = function start() {
          var _this2 = this;

          this.collectionView.register("cell", function () {
            return instantiate(_this2.cellPrefab);
          });
          this.collectionView.register("banner", function () {
            var banner = new Node().addComponent(YXCollectionView);

            _this2.setupBanner(banner);

            return banner.node;
          });
          this.collectionView.register("layout", function () {
            return instantiate(_this2.layoutPrefab);
          });
          this.collectionView.numberOfSections = 5;

          this.collectionView.numberOfItems = function (section) {
            if (section == 0) {
              return 1;
            }

            if (section == 1) {
              return 1;
            }

            if (section == 2) {
              return 5;
            }

            if (section == 3) {
              return 3;
            }

            return 10000;
          };

          this.collectionView.cellForItemAt = function (indexPath, collectionView) {
            if (indexPath.section == 0) {
              return collectionView.dequeueReusableCell("banner");
            }

            if (indexPath.section == 1) {
              return collectionView.dequeueReusableCell("layout");
            }

            return collectionView.dequeueReusableCell("cell");
          };

          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {
            if (indexPath.section == 0) {
              var banner = cell.getComponent(YXCollectionView);
              banner.reloadData();
              return;
            }

            if (indexPath.section == 1) {
              return;
            }

            var transform = cell.getComponent(UITransform);
            cell.getChildByName("Bg").getComponent(UITransform).contentSize = transform.contentSize;
            cell.getChildByName("Label").getComponent(Label).string = "" + indexPath;
            var r = randomRangeInt(10, 150);
            var g = randomRangeInt(10, 150);
            var b = randomRangeInt(10, 150);
            cell.getChildByName("Bg").getComponent(Sprite).color = new math.Color(r, g, b);
          };

          var layout = new YXFlowLayout();
          layout.horizontalSpacing = 20;
          layout.verticalSpacing = 20;
          layout.sectionInset = new YXEdgeInsets(20, 20, 0, 20);

          layout.itemSize = function (indexPath, flowLayout, collectionView) {
            if (indexPath.section == 0) {
              return new math.Size(collectionView.scrollView.view.width - 20 * 2, 400);
            }

            if (indexPath.section == 1) {
              return new math.Size(680, 800);
            }

            if (indexPath.section == 2) {
              return new math.Size(213, 213);
            }

            if (indexPath.section == 3) {
              return new math.Size(collectionView.scrollView.view.width - 20 * 2, 200);
            }

            return new math.Size(330, 200);
          };

          this.collectionView.layout = layout;
          this.collectionView.reloadData();
        };

        _proto.setupBanner = function setupBanner(banner) {
          var _this3 = this;

          banner.scrollDirection = YXCollectionView.ScrollDirection.HORIZONTAL;
          banner.register("cell", function () {
            return instantiate(_this3.cellPrefab);
          });

          banner.numberOfItems = function () {
            return 10000;
          };

          banner.cellForItemAt = function (indexPath, collectionView) {
            return collectionView.dequeueReusableCell("cell");
          };

          banner.onCellDisplay = function (cell, indexPath, collectionView) {
            cell.getChildByName("Label").getComponent(Label).string = "" + indexPath;
            var r = randomRangeInt(10, 150);
            var g = randomRangeInt(10, 150);
            var b = randomRangeInt(10, 150);
            cell.getChildByName("Bg").getComponent(Sprite).color = new math.Color(r, g, b);
          };

          var layout = new YXCoverLayout(new math.Size(600, 400));
          layout.pagingEnabled = true;
          layout.horizontalSpacing = -100;
          banner.layout = layout;
          banner.recycleInterval = 0;
        };

        return Demo15Cell2;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "layoutPrefab", [_dec4], {
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

System.register("chunks:///_virtual/demo16.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-carousel-layout.ts', './yx-collection-view.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, UITransform, Label, randomRangeInt, Sprite, math, Component, YXCarouselLayout, YXCollectionView;

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
      YXCarouselLayout = module.YXCarouselLayout;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "285e5KlqF1AH6zv6VRfllyg", "demo16", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var demo16 = exports('demo16', (_dec = ccclass('demo16'), _dec2 = property(YXCollectionView), _dec3 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo16, _Component);

        function demo16() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cellPrefab", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = demo16.prototype;

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

          this.collectionView.recycleInterval = 0;
          this.collectionView.register("cell", function () {
            return instantiate(_this2.cellPrefab);
          });

          this.collectionView.numberOfItems = function () {
            return 10;
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
            collectionView.scrollTo(indexPath, 1);
          };

          var layout = new YXCarouselLayout();
          layout.itemSize = new math.Size(200, 250);
          layout.radius = 260;
          layout.minAlpha = 0.8;
          this.collectionView.layout = layout;
          this.collectionView.reloadData();
        };

        return demo16;
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

System.register("chunks:///_virtual/demo17.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-cover-layout.ts', './yx-collection-view.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Camera, geometry, NodeEventType, director, instantiate, UITransform, Label, randomRangeInt, Sprite, math, PhysicsSystem, log, Component, YXCoverLayout, YXCollectionView;

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
      Camera = module.Camera;
      geometry = module.geometry;
      NodeEventType = module.NodeEventType;
      director = module.director;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Label = module.Label;
      randomRangeInt = module.randomRangeInt;
      Sprite = module.Sprite;
      math = module.math;
      PhysicsSystem = module.PhysicsSystem;
      log = module.log;
      Component = module.Component;
    }, null, function (module) {
      YXCoverLayout = module.YXCoverLayout;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "dbc6eyZf4RNVYY80CwPGpfI", "demo17", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * 关于 3d cell 节点效果说明  
       * 列表仍为 2d 节点不做变化，只是把 cell 节点改为 3d 相机照得到的节点 (后面统称 3d节点)  
       * 需要在场景内自己管理一个 3d 相机用来照 3d 节点  
       * 保证 3d 节点的 layer 设置正确可以被 3d 相机照到  
       * 列表的 `mask` 属性要设置为 false (备注: 3d 节点的父节点添加 mask 组件，会导致看不到子节点 ????)  
       * 列表的 `is3DCell` 属性要设置为 true，这个设置是为了避免节点点击事件错乱  
       * 调整 3d 相机远近(z) 和 相机视角大小(fov)，这些没有确定的值，需要实际的调试出一个感觉比较合适的值  
       * 注意: 当列表 cell 为 3d 节点时，列表仅做展示，节点的点击事件需要通过射线检测自行实现  
       * 附: https://docs.cocos.com/creator/manual/zh/engine/event/event-input.html#3d-%E7%89%A9%E4%BD%93%E7%9A%84%E8%A7%A6%E6%91%B8%E6%A3%80%E6%B5%8B
       */

      var demo17 = exports('demo17', (_dec = ccclass('demo17'), _dec2 = property(YXCollectionView), _dec3 = property(Prefab), _dec4 = property(Camera), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo17, _Component);

        function demo17() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));
          /**
           * 备注: cell 节点，是要能被 3d 相机照到的节点
           */


          _initializerDefineProperty(_this, "cellPrefab", _descriptor2, _assertThisInitialized(_this));
          /**
           * 相机需为透视相机
           */


          _initializerDefineProperty(_this, "camera", _descriptor3, _assertThisInitialized(_this));

          _this._ray = new geometry.Ray();
          /**
           * 由于事件脱离了 cancelInnerEvents 处理范围，这里简单的通过一个时间来判断一下是点击行为还是拖动行为
           * 如果按下时间极短，表示点击，否则表示拖动
           * 如果是拖动行为的话，不去执行射线检测
           */

          _this._timer = 0;
          return _this;
        }

        var _proto = demo17.prototype;

        _proto.onLoad = function onLoad() {
          this.initBackAction();
        };

        _proto.initBackAction = function initBackAction() {
          this.node.once(NodeEventType.TOUCH_END, function () {
            director.loadScene("home");
          });
          this.collectionView.node.on(NodeEventType.TOUCH_START, this.onTouchStart, this);
          this.collectionView.node.on(NodeEventType.TOUCH_END, this.onTouchEnd, this);
        };

        _proto.start = function start() {
          var _this2 = this;

          var cameraPosition = this.camera.node.position.clone();
          cameraPosition.z = 500;
          this.camera.node.position = cameraPosition;
          this.camera.fov = 2 * Math.atan(1280 / (2 * cameraPosition.z)) * (180 / Math.PI);
          this.collectionView.is3DCell = true;
          this.collectionView.recycleInterval = 0;
          this.collectionView.scrollDirection = YXCollectionView.ScrollDirection.HORIZONTAL;
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

          var layout = new YXCoverLayout(new math.Size(300, 400));
          layout.horizontalSpacing = -100;
          layout.angleY = 70;
          this.collectionView.layout = layout;
          this.collectionView.reloadData();
        };

        _proto.update = function update(dt) {
          this._timer -= dt;
        };

        _proto.onTouchStart = function onTouchStart(event) {
          this._timer = 0.1;
        };

        _proto.onTouchEnd = function onTouchEnd(event) {
          if (this._timer < 0) {
            return;
          }

          var touch = event.touch;
          this.camera.screenPointToRay(touch.getLocationX(), touch.getLocationY(), this._ray);

          if (PhysicsSystem.instance.raycast(this._ray)) {
            var raycastResults = PhysicsSystem.instance.raycastResults;

            for (var i = 0; i < raycastResults.length; i++) {
              var item = raycastResults[i];
              var indexPath = this.collectionView.getVisibleNodeIndexPath(item.collider.node);

              if (indexPath) {
                this.collectionView.scrollTo(indexPath, 1);
                return;
              }
            }
          } else {
            log('raycast does not hit the target node !');
          }
        };

        return demo17;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec4], {
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

System.register("chunks:///_virtual/demo18.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './yx-table-view.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, NodeEventType, director, Label, Component, YXTableView;

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
      Component = module.Component;
    }, function (module) {
      YXTableView = module.YXTableView;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "5d3087FFnlIF7qqSN2J6Pe4", "demo18", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var Data = function Data() {
        this.id = Data.ID++;
      };

      Data.ID = 0;
      var demo18 = exports('demo18', (_dec = ccclass('demo18'), _dec2 = property(YXTableView), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo18, _Component);

        function demo18() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "list", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = demo18.prototype;

        _proto.onLoad = function onLoad() {
          this.initBackAction();
        };

        _proto.initBackAction = function initBackAction() {
          this.node.once(NodeEventType.TOUCH_END, function () {
            director.loadScene("home");
          });
        };

        _proto.start = function start() {
          // 更新节点内容
          this.list.onCellDisplay(function (cell, data) {
            var label = cell.getChildByName("Label").getComponent(Label);
            label.string = "" + data.id;
          }); // 刷新列表数据

          var array = [];

          for (var index = 0; index < 10000; index++) {
            array.push(new Data());
          }

          this.list.setData(array);
        };

        return demo18;
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

System.register("chunks:///_virtual/demo19.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './yx-page-view.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, log, instantiate, Label, Component, YXPageView;

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
      log = module.log;
      instantiate = module.instantiate;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      YXPageView = module.YXPageView;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "759c1a/+jtFb5tCNiCqGKK1", "demo19", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var demo19 = exports('demo19', (_dec = ccclass('demo19'), _dec2 = property(YXPageView), _dec3 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo19, _Component);

        function demo19() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "list", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "pagePrefab", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = demo19.prototype;

        _proto.onLoad = function onLoad() {
          this.initBackAction();
        };

        _proto.initBackAction = function initBackAction() {
          this.node.once(NodeEventType.TOUCH_END, function () {
            director.loadScene("home");
          });
        };

        _proto.start = function start() {
          this.list.node.on(YXPageView.PAGE_CHANGE_EVENT2, function (idx) {
            log(idx);
          });

          for (var index = 0; index < 5; index++) {
            var page = instantiate(this.pagePrefab);
            var label = page.getChildByName("Label").getComponent(Label);
            label.string = "Page " + index;
            this.list.addPage(page);
          } // this.list.markForUpdatePages()
          // this.list.setCurrentPageIndex(2)

        };

        return demo19;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "list", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pagePrefab", [_dec3], {
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

System.register("chunks:///_virtual/Demo1Cell.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, UITransform, randomRangeInt, Sprite, math, Component;

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
      UITransform = module.UITransform;
      randomRangeInt = module.randomRangeInt;
      Sprite = module.Sprite;
      math = module.math;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "72ff7QH5jBFTYUcK6TLNpbk", "Demo1Cell", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Demo1Cell = exports('Demo1Cell', (_dec = ccclass('Demo1Cell'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Demo1Cell, _Component);

        function Demo1Cell() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Demo1Cell.prototype;

        _proto.unuse = function unuse() {// log(`unuse`)
        };

        _proto.reuse = function reuse(args) {// log(`reuse`)
        };

        _proto.updateBackground = function updateBackground() {
          var bg = this.node.getChildByName("Bg");
          var transform = this.node.getComponent(UITransform);
          bg.getComponent(UITransform).contentSize = transform.contentSize;
          var r = randomRangeInt(10, 150);
          var g = randomRangeInt(10, 150);
          var b = randomRangeInt(10, 150);
          bg.getComponent(Sprite).color = new math.Color(r, g, b);
        };

        return Demo1Cell;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
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

System.register("chunks:///_virtual/demo2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, UITransform, Label, randomRangeInt, Sprite, math, ScrollView, log, Component, YXCollectionView, YXFlowLayout;

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
      ScrollView = module.ScrollView;
      log = module.log;
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

          _this.currentPage = null;
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


          this.collectionView.recycleInterval = 0;
          this.collectionView.scrollDirection = YXCollectionView.ScrollDirection.HORIZONTAL;
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
          layout.pagingEnabled = true;
          layout.itemSize = this.collectionView.scrollView.view.contentSize;
          this.collectionView.layout = layout;
          this.collectionView.reloadData(); // 立即通知一下页面变化

          this.onPageChange();
          /** 滚动 或者 滚动结束，按需求监听一个即可，一个是可以实时的监听到页面变化，一个是只有滚动结束才去检查页面变化*/
          // 实时的监听页面变化

          this.collectionView.node.on(ScrollView.EventType.SCROLLING, function () {
            _this2.onPageChange();
          }); // 仅在滚动结束时检查页面是否变化

          this.collectionView.node.on(ScrollView.EventType.SCROLL_ENDED, function () {
            _this2.onPageChange();
          });
        };

        _proto.onPageChange = function onPageChange() {
          var offset = this.collectionView.scrollView.getScrollOffset();
          offset.x = -offset.x;
          var idx = Math.round(offset.x / this.collectionView.scrollView.view.width);

          if (idx == this.currentPage) {
            return;
          }

          this.currentPage = idx;
          log("onPageChange: " + this.currentPage);
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

System.register("chunks:///_virtual/demo20.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './Demo20Cell1.ts', './Demo20Cell0.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, NodeEventType, director, math, Component, randomRangeInt, Demo20Cell1, Demo20Cell0, YXCollectionView, YXEdgeInsets, YXFlowLayout;

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
      Demo20Cell1 = module.Demo20Cell1;
    }, function (module) {
      Demo20Cell0 = module.Demo20Cell0;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
      YXEdgeInsets = module.YXEdgeInsets;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "19532DZpoBBuYeK2gRYiXn1", "demo20", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var Data = function Data() {
        this.id = Data.ID++;
        this.width = randomRangeInt(200, 500);
        this.height = randomRangeInt(200, 500);
      };

      Data.ID = 0;

      var SectionData = function SectionData(flag) {
        this.flag = null;
        this.list = [];
        /**
         * 模拟数据
         */

        this.flag = flag;

        if (flag == 0) {
          this.list.push(new Data());
          return;
        }

        var random_data_length = randomRangeInt(50, 60);

        if (flag == 1) {
          for (var index = 0; index < random_data_length; index++) {
            this.list.push(new Data());
          }

          return;
        }

        if (flag == 2) {
          for (var _index = 0; _index < random_data_length; _index++) {
            this.list.push(new Data());
          }

          return;
        }

        if (flag == 3) {
          for (var _index2 = 0; _index2 < random_data_length; _index2++) {
            this.list.push(new Data());
          }

          return;
        }
      };

      var demo20 = exports('demo20', (_dec = ccclass('demo20'), _dec2 = property(YXCollectionView), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo20, _Component);

        function demo20() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _this.listData = [];
          return _this;
        }

        var _proto = demo20.prototype;

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

          this.listData.push(new SectionData(0));
          this.listData.push(new SectionData(1));
          this.listData.push(new SectionData(2));
          this.listData.push(new SectionData(3));

          this.collectionView.numberOfSections = function () {
            return _this2.listData.length;
          };

          this.collectionView.numberOfItems = function (section) {
            return _this2.listData[section].list.length;
          };

          this.collectionView.cellForItemAt = function (indexPath, collectionView) {
            var sectionData = _this2.listData[indexPath.section];

            if (sectionData.flag == 0) {
              var rowData = sectionData.list[indexPath.item];
              var result = collectionView.dequeueReusableCell("cell0");
              var comp = result.getComponent(Demo20Cell0);
              comp.setData(null);
              return result;
            }

            if (sectionData.flag == 1) {
              var _rowData = sectionData.list[indexPath.item];

              var _result = collectionView.dequeueReusableCell("cell1");

              var _comp = _result.getComponent(Demo20Cell1);

              _comp.randomUpdate();

              return _result;
            }

            if (sectionData.flag == 2) {
              var _rowData2 = sectionData.list[indexPath.item];

              var _result2 = collectionView.dequeueReusableCell("cell2");

              var _comp2 = _result2.getComponent(Demo20Cell1);

              _comp2.randomUpdate();

              return _result2;
            }

            if (sectionData.flag == 3) {
              var _rowData3 = sectionData.list[indexPath.item];

              var _result3 = collectionView.dequeueReusableCell("cell3");

              var _comp3 = _result3.getComponent(Demo20Cell1);

              _comp3.randomUpdate();

              return _result3;
            }

            return null;
          };

          this.collectionView.onCellDisplay = function (cell, indexPath, collectionView) {};

          this.collectionView.onCellEndDisplay = function (cell, indexPath, collectionView) {};

          var commonSpacing = 20;
          var layout = new YXFlowLayout();
          layout.horizontalSpacing = commonSpacing;
          layout.verticalSpacing = commonSpacing;
          layout.sectionInset = new YXEdgeInsets(20, 0, 0, 0);
          layout.extraVisibleCount = 2;

          layout.itemSize = function (indexPath, flowLayout, collectionView) {
            var list_width = collectionView.scrollView.view.width;
            var sectionData = _this2.listData[indexPath.section];

            if (sectionData.flag == 0) {
              return new math.Size(list_width, 380);
            }

            if (sectionData.flag == 1) {
              var width = Math.floor((list_width - commonSpacing * 2) / 3);
              return new math.Size(width, width);
            }

            if (sectionData.flag == 2) {
              var _width = Math.floor((list_width - commonSpacing * 2) / 3);

              if (indexPath.item == 0) {
                var first_width = list_width - commonSpacing - _width;
                return new math.Size(first_width, first_width);
              }

              return new math.Size(_width, _width);
            }

            if (sectionData.flag == 3) {
              return new math.Size(list_width, 200);
            }

            return null;
          };

          this.collectionView.layout = layout;
          this.collectionView.reloadData();
        };

        return demo20;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "collectionView", [_dec2], {
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

System.register("chunks:///_virtual/Demo20Cell0.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Demo20Cell1.ts', './index.ts', './yx-cover-layout.ts', './yx-collection-view.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, math, randomRangeInt, Component, Demo20Cell1, YXCoverLayout, YXCollectionView;

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
      randomRangeInt = module.randomRangeInt;
      Component = module.Component;
    }, function (module) {
      Demo20Cell1 = module.Demo20Cell1;
    }, null, function (module) {
      YXCoverLayout = module.YXCoverLayout;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "4d274eC5uBM2qCxK7qGass+", "Demo20Cell0", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Demo20Cell0 = exports('Demo20Cell0', (_dec = ccclass('Demo20Cell0'), _dec2 = property(YXCollectionView), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Demo20Cell0, _Component);

        function Demo20Cell0() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _this.data = [];
          _this.needs_reload_data = false;
          return _this;
        }

        var _proto = Demo20Cell0.prototype;

        _proto.start = function start() {
          var _this2 = this;

          var layout = new YXCoverLayout(new math.Size(700, 380));
          layout.pagingEnabled = true;
          this.collectionView.layout = layout;

          this.collectionView.numberOfItems = function () {
            return _this2.data.length;
          };

          this.collectionView.cellForItemAt = function (indexPath, collectionView) {
            var result = collectionView.dequeueReusableCell("cell");
            var comp = result.getComponent(Demo20Cell1);
            comp.randomUpdate();
            return result;
          };
        };

        _proto.setData = function setData(array) {
          // this.data = array
          this.data = [];
          var test = randomRangeInt(10, 20);

          for (var index = 0; index < test; index++) {
            this.data.push(index);
          }

          this.needs_reload_data = true;
        };

        _proto.update = function update(dt) {
          if (this.needs_reload_data) {
            this.needs_reload_data = false;
            this.collectionView.reloadData();
          }
        };

        return Demo20Cell0;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "collectionView", [_dec2], {
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

System.register("chunks:///_virtual/Demo20Cell1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Sprite, SpriteFrame, randomRangeInt, Widget, Component;

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
      Widget = module.Widget;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _class3;

      cclegacy._RF.push({}, "dfe5e3+PZlPP5O/aeZLgYlZ", "Demo20Cell1", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Demo20Cell1 = exports('Demo20Cell1', (_dec = ccclass('Demo20Cell1'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec8 = property([SpriteFrame]), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Demo20Cell1, _Component);

        function Demo20Cell1() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "nameLabel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "titleLabel", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "otherLabel", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "detailLabel", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "heroContent", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "heroBackground", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "imgs", _descriptor7, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Demo20Cell1.prototype;

        _proto.randomUpdate = function randomUpdate() {
          this.nameLabel.string = Demo20Cell1.TestTexts[randomRangeInt(0, Demo20Cell1.TestTexts.length)];
          this.nameLabel.updateRenderData(true);
          this.nameLabel.node.getComponent(Widget).updateAlignment();
          this.titleLabel.string = Demo20Cell1.TestTexts[randomRangeInt(0, Demo20Cell1.TestTexts.length)];
          this.titleLabel.updateRenderData(true);
          this.titleLabel.node.getComponent(Widget).updateAlignment();
          this.detailLabel.string = Demo20Cell1.TestTexts[randomRangeInt(0, Demo20Cell1.TestTexts.length)];
          this.detailLabel.updateRenderData(true);
          this.detailLabel.node.getComponent(Widget).updateAlignment();
          this.otherLabel.string = Demo20Cell1.TestTexts[randomRangeInt(0, Demo20Cell1.TestTexts.length)];
          this.otherLabel.updateRenderData(true);
          this.otherLabel.node.getComponent(Widget).updateAlignment();
          var hero = this.imgs[randomRangeInt(0, this.imgs.length)];
          this.heroContent.spriteFrame = hero;
          this.heroBackground.spriteFrame = hero;
        };

        return Demo20Cell1;
      }(Component), _class3.TestTexts = ["huchcy", "stlaloc", "jones", "supejones", "tizerc", "tlaloc", "GiantSpiders"], _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "titleLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "otherLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "detailLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "heroContent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "heroBackground", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "imgs", [_dec8], {
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

System.register("chunks:///_virtual/demo21.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-card-page-layout.ts', './Demo21Cell.ts', './yx-collection-view.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, NodeEventType, director, math, Widget, ScrollView, Component, randomRangeInt, YXCardPageLayout, Demo21Cell, YXCollectionView;

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
      Widget = module.Widget;
      ScrollView = module.ScrollView;
      Component = module.Component;
      randomRangeInt = module.randomRangeInt;
    }, null, function (module) {
      YXCardPageLayout = module.YXCardPageLayout;
    }, function (module) {
      Demo21Cell = module.Demo21Cell;
    }, function (module) {
      YXCollectionView = module.YXCollectionView;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "d52c7GGvHRGroSOQuSt/l+R", "demo21", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var Data = function Data() {
        this.id = Data.ID++;
        this.title = Data.TestTexts[randomRangeInt(0, Data.TestTexts.length)];
        this.detail = Data.TestTexts[randomRangeInt(0, Data.TestTexts.length)];
        this.other = Data.TestTexts[randomRangeInt(0, Data.TestTexts.length)];
      };

      Data.ID = 0;
      Data.TestTexts = ["huchcy", "stlaloc", "jones", "supejones", "tizerc", "tlaloc", "GiantSpiders"];
      var demo21 = exports('demo21', (_dec = ccclass('demo21'), _dec2 = property(YXCollectionView), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo21, _Component);

        function demo21() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = demo21.prototype;

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

          var array = [];

          for (var index = 0; index < 10; index++) {
            array.push(new Data());
          }

          var layout = new YXCardPageLayout(new math.Size(500, 600));
          layout.contentOffset = new math.Vec3(0, 44);
          this.collectionView.layout = layout;

          this.collectionView.numberOfItems = function () {
            return array.length;
          };

          this.collectionView.cellForItemAt = function (indexPath, collectionView) {
            var rowData = array[indexPath.item];
            var cell = collectionView.dequeueReusableCell("cell");
            var comp = cell.getComponent(Demo21Cell);
            comp.nameLabel.string = "data-id: " + rowData.id;
            comp.nameLabel.updateRenderData(true);
            comp.nameLabel.node.getComponent(Widget).updateAlignment();
            comp.titleLabel.string = rowData.title;
            comp.titleLabel.updateRenderData(true);
            comp.titleLabel.node.getComponent(Widget).updateAlignment();
            comp.detailLabel.string = rowData.detail;
            comp.detailLabel.updateRenderData(true);
            comp.detailLabel.node.getComponent(Widget).updateAlignment();
            comp.otherLabel.string = rowData.other;
            comp.otherLabel.updateRenderData(true);
            comp.otherLabel.node.getComponent(Widget).updateAlignment();
            return cell;
          };

          this.collectionView.reloadData();
          /**
           * 滚动结束时，需要检查是否成功切换了，根据切换结果判断是否更新列表
           */

          this.collectionView.node.on(ScrollView.EventType.SCROLL_ENDED, function () {
            var offset = _this2.collectionView.scrollView.getScrollOffset();

            offset.x = -offset.x;
            var idx = Math.round(offset.x / _this2.collectionView.scrollView.view.width);

            if (idx == 1) {
              return; // 1 表示没切成功
            } // 切换成功，复位并且更新数据


            offset.x = _this2.collectionView.scrollView.view.width;

            _this2.collectionView.scrollView.scrollToOffset(offset);

            array.shift();

            _this2.collectionView.reloadData();
          });
        };

        return demo21;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "collectionView", [_dec2], {
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

System.register("chunks:///_virtual/Demo21Cell.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;

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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "fda9ceDdENHLId+iemk4U7u", "Demo21Cell", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Demo21Cell = exports('Demo21Cell', (_dec = ccclass('Demo21Cell'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Demo21Cell, _Component);

        function Demo21Cell() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "nameLabel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "titleLabel", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "otherLabel", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "detailLabel", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        return Demo21Cell;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "titleLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "otherLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "detailLabel", [_dec5], {
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

System.register("chunks:///_virtual/demo22.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, UITransform, Label, randomRangeInt, Sprite, math, ScrollBar, Component, YXCollectionView, YXEdgeInsets, YXFlowLayout;

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
      ScrollBar = module.ScrollBar;
      Component = module.Component;
    }, null, function (module) {
      YXCollectionView = module.YXCollectionView;
      YXEdgeInsets = module.YXEdgeInsets;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "8f980Obn2xCtoh/uKRuwT8R", "demo22", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var demo22 = exports('demo22', (_dec = ccclass('demo22'), _dec2 = property(YXCollectionView), _dec3 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(demo22, _Component);

        function demo22() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cellPrefab", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = demo22.prototype;

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

          this.setupScrollBar();
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

            return 100;
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
           * 也就是在需要滑动条的时候要自己创建一个，然后通过 ScrollView 组件关联起来就好 (这个组件是区分方向的，需要注意方向配置统一)  
           */


          var scrollBar = this.node.getChildByName("scrollBar").getComponent(ScrollBar);
          this.collectionView.scrollView.verticalScrollBar = scrollBar;
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

            _this3.collectionView.scrollView.stopAutoScroll();

            _this3.collectionView.scrollView.scrollToPercentVertical(1 - progress);

            _this3.collectionView.markForUpdateVisibleData(true); // 更新当前可见节点

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

            _this3.collectionView.scrollView.stopAutoScroll();

            _this3.collectionView.scrollView.scrollToPercentVertical(1 - progress);

            _this3.collectionView.markForUpdateVisibleData(); // 更新当前可见节点

          });
        };

        return demo22;
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


          this.collectionView.recycleInterval = 0;
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

          this.collectionView.frameInterval = 1;
          this.collectionView.recycleInterval = 1;
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
          layout.pagingEnabled = true;
          layout.itemSize = this.collectionView.scrollView.view.contentSize;
          this.collectionView.layout = layout;
          this.collectionView.scrollDirection = YXCollectionView.ScrollDirection.HORIZONTAL;
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


          this.collectionView.recycleInterval = 0;
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

System.register("chunks:///_virtual/demo7.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, math, UITransform, Sprite, v3, Label, HorizontalTextAlignment, log, Component, randomRangeInt, YXCollectionView, YXEdgeInsets, YXFlowLayout;

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
      YXEdgeInsets = module.YXEdgeInsets;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
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

          this.testData = [new Data("\u6709\u4E00\u5929\u6211\u53BB\u6587\u5177\u5E97\u4E70\u7B14\uFF0C\u6B63\u5728\u6211\u8981\u628A\u7B14\u6346\u8D77\u6765\u65F6\uFF0C\u5E97\u5458\u5BF9\u6211\u8BF4:\u8FD9\u4E2A\u7B14\u4E0D\u7528\u6346\u3002\u4E8E\u662F\u6211\u95EE\u4ED6:\u5565\u7B14\u624D\u9700\u6346\uFF1F\u4ED6\u62FF\u51FA\u4E00\u4E2A\u6495\u6389\u4E8C\u7EF4\u7801\u7684\u7B14\u5BF9\u6211\u8BF4:\u6495\u4E86\u7801\u7684\u624D\u9700\u6346\u3002"), new Data("\u4E00\u5929\uFF0C\u90B9\u5FCC\u7167\u4E86\u7167\u955C\u5B50\uFF0C\u5BF9\u7740\u4ED6\u7684\u59BB\u5B50\u8BF4\uFF1A\u201C\u543E\u719F\u4E0E\u57CE\u5317\u8521\u5F90\u5764\u7F8E\uFF1F\u201D\u5176\u59BB\u66F0\u201C\u5FCC\u4F60\u592A\u7F8E\u3002\u201D"), new Data("\u77ED\u6587\u672C"), new Data("\u6709\u4E00\u5929\u5C0F\u5409\u548C\u4E00\u7FA4\u4EBA\u53BB\u5C71\u6D1E\uFF0C\u53D1\u73B0\u5C71\u6D1E\u6709\u4E2A\u5C38\u4F53\uFF0C\u5C31\u548C\u5176\u4ED6\u4EBA\u62AC\u51FA\u53BB\u4E86\u3002\u56DE\u5BB6\u540E\uFF0C\u5176\u4ED6\u4EBA\u90FD\u6B7B\u4E86\uFF0C\u7237\u7237\u95EE\uFF1A\u201C\u5409\u4F60\u62AC\u6CA1\uFF1F\u201D\u5C0F\u5409\u6447\u4E86\u6447\u5934\u3002\u8FD9\u65F6\u5C0F\u5409\u7684\u8EAB\u4E0A\u53D8\u7EFF\u4E86\uFF0C\u7237\u7237\u8BF4\uFF1A\u201C\u4E0D\u597D\uFF0C\u662F\u7EFF\u5C38\u5BD2\u8B66\u544A\uFF01\u201D"), new Data("\u4E00\u5BF9\u6CF0\u56FD\u592B\u5987\u5E26\u7740\u5B69\u5B50\u51FA\u56FD\u65C5\u6E38\uFF0C\u8FC7\u6D77\u5173\u65F6\uFF0C\u5DE5\u4F5C\u4EBA\u5458\u95EE\u592B\u5987\uFF0C\u5B69\u5B50\u59D3\u540D\u56FD\u7C4D\u51FA\u751F\u6708\u4EFD\uFF0C\u7236\u6BCD\u9053\uFF1A\u6770\u59AE\u6CF0\u56FD\u4EBA\u4E94\u6708\uFF0C\u673A\u5668\u7FFB\u8BD1\u51FA\u6765\uFF1AJenny Thai May"), new Data("\u9732\u97E9\u548C\u51AC\u502A\u90FD\u662F\u516C\u53F8\u51FA\u8272\u7684\u5458\u5DE5\uFF0C\u9732\u6DB5\u5F88\u5AC9\u5992\u51AC\u59AE\u7684\u989C\u503C\u3002\u6709\u6B21\u516C\u53F8\u4E3E\u529E\u6D3B\u52A8\uFF0C\u9080\u8BF7\u5404\u754C\u4EBA\u58EB\u6765\u53C2\u52A0\u3002\u9732\u6DB5\u548C\u51AC\u502A\u4F5C\u4E3A\u4E3B\u6301\u4EBA\uFF0C\u6D3B\u52A8\u524D\u665A\u9732\u6DB5\u8DD1\u5230\u51AC\u502A\u5316\u5986\u5BA4\u5F04\u810F\u5979\u7684\u88D9\u5B50\u3002\u88AB\u53E6\u4E00\u4EBA\u770B\u89C1\u95EE\u5979\u4E3A\u4F55\u8981\u8FD9\u6837\u505A\u3002\u9732\u6DB5\uFF1A\u5FCC\u502A\u592A\u7F8E"), new Data("\u4ECA\u5929\u53BB\u4E86\u519C\u6751\u7684\u5927\u5A18\u5BB6\uFF0C\u53BB\u7684\u65F6\u5019\u5927\u5A18\u6B63\u5728\u5730\u91CC\u5E72\u6D3B\u3002\u6211\u95EE\uFF1A\u201C\u5927\u5A18\u4F60\u5728\u5E72\u4EC0\u4E48\u554A\uFF1F\u201D\u5927\u5A18\u8BF4\uFF1A\u201C\u6211\u5728\u5228\u6728\u6750\u3002\u201D\u8FC7\u4E86\u4F1A\u7A81\u7136\u558A\u6211\uFF1A\u201C\u4F84\u5B50\uFF0C\u53BB\u5E2E\u5927\u5A18\u62FF\u7EF3\u5B50\u3002\u201D\u6211\u95EE\u5230\uFF1A\u201C\u62FF\u7EF3\u5B50\u5E72\u4EC0\u4E48\uFF1F\u201D\u5A18\u8BF4\uFF1A\u201C\u5927\u5A18\u5228\u6750\u9700\u6346\u3002\u201D"), new Data("\u67D0\u5929\u6211\u7A7F\u8D8A\u5230\u6B66\u4FA0\u5C0F\u8BF4\u91CC\uFF0C\u9047\u5230\u4E86\u5F20\u65E0\u5FCC\u3002\u6211\u8BF4:\u5FCC\uFF0C\u6765\u5207\u78CB\u4E00\u4E0B?\u5FCC:\u540E\u9762\u3002\u6211\u770B\u89C1\u51E0\u4E07\u4EBA\u8FFD\u7740\u5F20\u65E0\u5FCC\u8BF4\u8981\u6376\u6B7B\u4ED6\u3002\u6211\u5FC3\u751F\u601C\u60AF\uFF0C\u8BF4:\u5FCC\uFF0C\u4F60\u592A\u9709\uFF01\u7A81\u7136\uFF0C\u4ED6\u4EEC\u7684\u8001\u5927\u5415\u65BD\u6DB5\u5411\u6211\u4EEC\u53D1\u51FA\u8B66\u544A\u3002\u6211\u8BF4:\u906D\u4E86\uFF01\u662F\u5415\u65BD\u6DB5\u8B66\u544A\uFF01"), new Data("\u865E\u59EC\u7684\u76AE\u80A4\u597D\u597D\u770B\u554A\uFF0C\u5FCD\u4E0D\u4F4F\u6211\u60F3\u4F5C\u8BD7\u4E00\u9996\uFF1A\u65E2\u6709\u6B4C\u821E\u60CA\u4E91\u9704\uFF0C\u9713\u88F3\u7FBD\u8863\u6F2B\u7A88\u7A95\u3002\u62AC\u6307\u4E00\u6325\u8F6C\u5929\u7C41\uFF0C\u7F8E\u9152\u4F73\u80B4\u5171\u900D\u9065\u3002"), new Data("\u6D4B\u8BD5"), new Data("\u6709\u4E00\u5929\u6211\u53BB\u6587\u5177\u5E97\u4E70\u7B14\uFF0C\u6B63\u5728\u6211\u8981\u628A\u7B14\u6346\u8D77\u6765\u65F6\uFF0C\u5E97\u5458\u5BF9\u6211\u8BF4:\u8FD9\u4E2A\u7B14\u4E0D\u7528\u6346\u3002\u4E8E\u662F\u6211\u95EE\u4ED6:\u5565\u7B14\u624D\u9700\u6346\uFF1F\u4ED6\u62FF\u51FA\u4E00\u4E2A\u6495\u6389\u4E8C\u7EF4\u7801\u7684\u7B14\u5BF9\u6211\u8BF4:\u6495\u4E86\u7801\u7684\u624D\u9700\u6346\u3002"), new Data("\u4E00\u5929\uFF0C\u90B9\u5FCC\u7167\u4E86\u7167\u955C\u5B50\uFF0C\u5BF9\u7740\u4ED6\u7684\u59BB\u5B50\u8BF4\uFF1A\u201C\u543E\u719F\u4E0E\u57CE\u5317\u8521\u5F90\u5764\u7F8E\uFF1F\u201D\u5176\u59BB\u66F0\u201C\u5FCC\u4F60\u592A\u7F8E\u3002\u201D"), new Data("\u77ED\u6587\u672C"), new Data("\u6709\u4E00\u5929\u5C0F\u5409\u548C\u4E00\u7FA4\u4EBA\u53BB\u5C71\u6D1E\uFF0C\u53D1\u73B0\u5C71\u6D1E\u6709\u4E2A\u5C38\u4F53\uFF0C\u5C31\u548C\u5176\u4ED6\u4EBA\u62AC\u51FA\u53BB\u4E86\u3002\u56DE\u5BB6\u540E\uFF0C\u5176\u4ED6\u4EBA\u90FD\u6B7B\u4E86\uFF0C\u7237\u7237\u95EE\uFF1A\u201C\u5409\u4F60\u62AC\u6CA1\uFF1F\u201D\u5C0F\u5409\u6447\u4E86\u6447\u5934\u3002\u8FD9\u65F6\u5C0F\u5409\u7684\u8EAB\u4E0A\u53D8\u7EFF\u4E86\uFF0C\u7237\u7237\u8BF4\uFF1A\u201C\u4E0D\u597D\uFF0C\u662F\u7EFF\u5C38\u5BD2\u8B66\u544A\uFF01\u201D"), new Data("\u4E00\u5BF9\u6CF0\u56FD\u592B\u5987\u5E26\u7740\u5B69\u5B50\u51FA\u56FD\u65C5\u6E38\uFF0C\u8FC7\u6D77\u5173\u65F6\uFF0C\u5DE5\u4F5C\u4EBA\u5458\u95EE\u592B\u5987\uFF0C\u5B69\u5B50\u59D3\u540D\u56FD\u7C4D\u51FA\u751F\u6708\u4EFD\uFF0C\u7236\u6BCD\u9053\uFF1A\u6770\u59AE\u6CF0\u56FD\u4EBA\u4E94\u6708\uFF0C\u673A\u5668\u7FFB\u8BD1\u51FA\u6765\uFF1AJenny Thai May"), new Data("\u9732\u97E9\u548C\u51AC\u502A\u90FD\u662F\u516C\u53F8\u51FA\u8272\u7684\u5458\u5DE5\uFF0C\u9732\u6DB5\u5F88\u5AC9\u5992\u51AC\u59AE\u7684\u989C\u503C\u3002\u6709\u6B21\u516C\u53F8\u4E3E\u529E\u6D3B\u52A8\uFF0C\u9080\u8BF7\u5404\u754C\u4EBA\u58EB\u6765\u53C2\u52A0\u3002\u9732\u6DB5\u548C\u51AC\u502A\u4F5C\u4E3A\u4E3B\u6301\u4EBA\uFF0C\u6D3B\u52A8\u524D\u665A\u9732\u6DB5\u8DD1\u5230\u51AC\u502A\u5316\u5986\u5BA4\u5F04\u810F\u5979\u7684\u88D9\u5B50\u3002\u88AB\u53E6\u4E00\u4EBA\u770B\u89C1\u95EE\u5979\u4E3A\u4F55\u8981\u8FD9\u6837\u505A\u3002\u9732\u6DB5\uFF1A\u5FCC\u502A\u592A\u7F8E"), new Data("\u4ECA\u5929\u53BB\u4E86\u519C\u6751\u7684\u5927\u5A18\u5BB6\uFF0C\u53BB\u7684\u65F6\u5019\u5927\u5A18\u6B63\u5728\u5730\u91CC\u5E72\u6D3B\u3002\u6211\u95EE\uFF1A\u201C\u5927\u5A18\u4F60\u5728\u5E72\u4EC0\u4E48\u554A\uFF1F\u201D\u5927\u5A18\u8BF4\uFF1A\u201C\u6211\u5728\u5228\u6728\u6750\u3002\u201D\u8FC7\u4E86\u4F1A\u7A81\u7136\u558A\u6211\uFF1A\u201C\u4F84\u5B50\uFF0C\u53BB\u5E2E\u5927\u5A18\u62FF\u7EF3\u5B50\u3002\u201D\u6211\u95EE\u5230\uFF1A\u201C\u62FF\u7EF3\u5B50\u5E72\u4EC0\u4E48\uFF1F\u201D\u5A18\u8BF4\uFF1A\u201C\u5927\u5A18\u5228\u6750\u9700\u6346\u3002\u201D"), new Data("\u67D0\u5929\u6211\u7A7F\u8D8A\u5230\u6B66\u4FA0\u5C0F\u8BF4\u91CC\uFF0C\u9047\u5230\u4E86\u5F20\u65E0\u5FCC\u3002\u6211\u8BF4:\u5FCC\uFF0C\u6765\u5207\u78CB\u4E00\u4E0B?\u5FCC:\u540E\u9762\u3002\u6211\u770B\u89C1\u51E0\u4E07\u4EBA\u8FFD\u7740\u5F20\u65E0\u5FCC\u8BF4\u8981\u6376\u6B7B\u4ED6\u3002\u6211\u5FC3\u751F\u601C\u60AF\uFF0C\u8BF4:\u5FCC\uFF0C\u4F60\u592A\u9709\uFF01\u7A81\u7136\uFF0C\u4ED6\u4EEC\u7684\u8001\u5927\u5415\u65BD\u6DB5\u5411\u6211\u4EEC\u53D1\u51FA\u8B66\u544A\u3002\u6211\u8BF4:\u906D\u4E86\uFF01\u662F\u5415\u65BD\u6DB5\u8B66\u544A\uFF01"), new Data("\u865E\u59EC\u7684\u76AE\u80A4\u597D\u597D\u770B\u554A\uFF0C\u5FCD\u4E0D\u4F4F\u6211\u60F3\u4F5C\u8BD7\u4E00\u9996\uFF1A\u65E2\u6709\u6B4C\u821E\u60CA\u4E91\u9704\uFF0C\u9713\u88F3\u7FBD\u8863\u6F2B\u7A88\u7A95\u3002\u62AC\u6307\u4E00\u6325\u8F6C\u5929\u7C41\uFF0C\u7F8E\u9152\u4F73\u80B4\u5171\u900D\u9065\u3002"), new Data("\u6D4B\u8BD5"), new Data("\u6709\u4E00\u5929\u6211\u53BB\u6587\u5177\u5E97\u4E70\u7B14\uFF0C\u6B63\u5728\u6211\u8981\u628A\u7B14\u6346\u8D77\u6765\u65F6\uFF0C\u5E97\u5458\u5BF9\u6211\u8BF4:\u8FD9\u4E2A\u7B14\u4E0D\u7528\u6346\u3002\u4E8E\u662F\u6211\u95EE\u4ED6:\u5565\u7B14\u624D\u9700\u6346\uFF1F\u4ED6\u62FF\u51FA\u4E00\u4E2A\u6495\u6389\u4E8C\u7EF4\u7801\u7684\u7B14\u5BF9\u6211\u8BF4:\u6495\u4E86\u7801\u7684\u624D\u9700\u6346\u3002"), new Data("\u4E00\u5929\uFF0C\u90B9\u5FCC\u7167\u4E86\u7167\u955C\u5B50\uFF0C\u5BF9\u7740\u4ED6\u7684\u59BB\u5B50\u8BF4\uFF1A\u201C\u543E\u719F\u4E0E\u57CE\u5317\u8521\u5F90\u5764\u7F8E\uFF1F\u201D\u5176\u59BB\u66F0\u201C\u5FCC\u4F60\u592A\u7F8E\u3002\u201D"), new Data("\u77ED\u6587\u672C"), new Data("\u6709\u4E00\u5929\u5C0F\u5409\u548C\u4E00\u7FA4\u4EBA\u53BB\u5C71\u6D1E\uFF0C\u53D1\u73B0\u5C71\u6D1E\u6709\u4E2A\u5C38\u4F53\uFF0C\u5C31\u548C\u5176\u4ED6\u4EBA\u62AC\u51FA\u53BB\u4E86\u3002\u56DE\u5BB6\u540E\uFF0C\u5176\u4ED6\u4EBA\u90FD\u6B7B\u4E86\uFF0C\u7237\u7237\u95EE\uFF1A\u201C\u5409\u4F60\u62AC\u6CA1\uFF1F\u201D\u5C0F\u5409\u6447\u4E86\u6447\u5934\u3002\u8FD9\u65F6\u5C0F\u5409\u7684\u8EAB\u4E0A\u53D8\u7EFF\u4E86\uFF0C\u7237\u7237\u8BF4\uFF1A\u201C\u4E0D\u597D\uFF0C\u662F\u7EFF\u5C38\u5BD2\u8B66\u544A\uFF01\u201D"), new Data("\u4E00\u5BF9\u6CF0\u56FD\u592B\u5987\u5E26\u7740\u5B69\u5B50\u51FA\u56FD\u65C5\u6E38\uFF0C\u8FC7\u6D77\u5173\u65F6\uFF0C\u5DE5\u4F5C\u4EBA\u5458\u95EE\u592B\u5987\uFF0C\u5B69\u5B50\u59D3\u540D\u56FD\u7C4D\u51FA\u751F\u6708\u4EFD\uFF0C\u7236\u6BCD\u9053\uFF1A\u6770\u59AE\u6CF0\u56FD\u4EBA\u4E94\u6708\uFF0C\u673A\u5668\u7FFB\u8BD1\u51FA\u6765\uFF1AJenny Thai May"), new Data("\u9732\u97E9\u548C\u51AC\u502A\u90FD\u662F\u516C\u53F8\u51FA\u8272\u7684\u5458\u5DE5\uFF0C\u9732\u6DB5\u5F88\u5AC9\u5992\u51AC\u59AE\u7684\u989C\u503C\u3002\u6709\u6B21\u516C\u53F8\u4E3E\u529E\u6D3B\u52A8\uFF0C\u9080\u8BF7\u5404\u754C\u4EBA\u58EB\u6765\u53C2\u52A0\u3002\u9732\u6DB5\u548C\u51AC\u502A\u4F5C\u4E3A\u4E3B\u6301\u4EBA\uFF0C\u6D3B\u52A8\u524D\u665A\u9732\u6DB5\u8DD1\u5230\u51AC\u502A\u5316\u5986\u5BA4\u5F04\u810F\u5979\u7684\u88D9\u5B50\u3002\u88AB\u53E6\u4E00\u4EBA\u770B\u89C1\u95EE\u5979\u4E3A\u4F55\u8981\u8FD9\u6837\u505A\u3002\u9732\u6DB5\uFF1A\u5FCC\u502A\u592A\u7F8E"), new Data("\u4ECA\u5929\u53BB\u4E86\u519C\u6751\u7684\u5927\u5A18\u5BB6\uFF0C\u53BB\u7684\u65F6\u5019\u5927\u5A18\u6B63\u5728\u5730\u91CC\u5E72\u6D3B\u3002\u6211\u95EE\uFF1A\u201C\u5927\u5A18\u4F60\u5728\u5E72\u4EC0\u4E48\u554A\uFF1F\u201D\u5927\u5A18\u8BF4\uFF1A\u201C\u6211\u5728\u5228\u6728\u6750\u3002\u201D\u8FC7\u4E86\u4F1A\u7A81\u7136\u558A\u6211\uFF1A\u201C\u4F84\u5B50\uFF0C\u53BB\u5E2E\u5927\u5A18\u62FF\u7EF3\u5B50\u3002\u201D\u6211\u95EE\u5230\uFF1A\u201C\u62FF\u7EF3\u5B50\u5E72\u4EC0\u4E48\uFF1F\u201D\u5A18\u8BF4\uFF1A\u201C\u5927\u5A18\u5228\u6750\u9700\u6346\u3002\u201D"), new Data("\u67D0\u5929\u6211\u7A7F\u8D8A\u5230\u6B66\u4FA0\u5C0F\u8BF4\u91CC\uFF0C\u9047\u5230\u4E86\u5F20\u65E0\u5FCC\u3002\u6211\u8BF4:\u5FCC\uFF0C\u6765\u5207\u78CB\u4E00\u4E0B?\u5FCC:\u540E\u9762\u3002\u6211\u770B\u89C1\u51E0\u4E07\u4EBA\u8FFD\u7740\u5F20\u65E0\u5FCC\u8BF4\u8981\u6376\u6B7B\u4ED6\u3002\u6211\u5FC3\u751F\u601C\u60AF\uFF0C\u8BF4:\u5FCC\uFF0C\u4F60\u592A\u9709\uFF01\u7A81\u7136\uFF0C\u4ED6\u4EEC\u7684\u8001\u5927\u5415\u65BD\u6DB5\u5411\u6211\u4EEC\u53D1\u51FA\u8B66\u544A\u3002\u6211\u8BF4:\u906D\u4E86\uFF01\u662F\u5415\u65BD\u6DB5\u8B66\u544A\uFF01"), new Data("\u865E\u59EC\u7684\u76AE\u80A4\u597D\u597D\u770B\u554A\uFF0C\u5FCD\u4E0D\u4F4F\u6211\u60F3\u4F5C\u8BD7\u4E00\u9996\uFF1A\u65E2\u6709\u6B4C\u821E\u60CA\u4E91\u9704\uFF0C\u9713\u88F3\u7FBD\u8863\u6F2B\u7A88\u7A95\u3002\u62AC\u6307\u4E00\u6325\u8F6C\u5929\u7C41\uFF0C\u7F8E\u9152\u4F73\u80B4\u5171\u900D\u9065\u3002"), new Data("\u6D4B\u8BD5"), new Data("\u6709\u4E00\u5929\u6211\u53BB\u6587\u5177\u5E97\u4E70\u7B14\uFF0C\u6B63\u5728\u6211\u8981\u628A\u7B14\u6346\u8D77\u6765\u65F6\uFF0C\u5E97\u5458\u5BF9\u6211\u8BF4:\u8FD9\u4E2A\u7B14\u4E0D\u7528\u6346\u3002\u4E8E\u662F\u6211\u95EE\u4ED6:\u5565\u7B14\u624D\u9700\u6346\uFF1F\u4ED6\u62FF\u51FA\u4E00\u4E2A\u6495\u6389\u4E8C\u7EF4\u7801\u7684\u7B14\u5BF9\u6211\u8BF4:\u6495\u4E86\u7801\u7684\u624D\u9700\u6346\u3002"), new Data("\u4E00\u5929\uFF0C\u90B9\u5FCC\u7167\u4E86\u7167\u955C\u5B50\uFF0C\u5BF9\u7740\u4ED6\u7684\u59BB\u5B50\u8BF4\uFF1A\u201C\u543E\u719F\u4E0E\u57CE\u5317\u8521\u5F90\u5764\u7F8E\uFF1F\u201D\u5176\u59BB\u66F0\u201C\u5FCC\u4F60\u592A\u7F8E\u3002\u201D"), new Data("\u77ED\u6587\u672C"), new Data("\u6709\u4E00\u5929\u5C0F\u5409\u548C\u4E00\u7FA4\u4EBA\u53BB\u5C71\u6D1E\uFF0C\u53D1\u73B0\u5C71\u6D1E\u6709\u4E2A\u5C38\u4F53\uFF0C\u5C31\u548C\u5176\u4ED6\u4EBA\u62AC\u51FA\u53BB\u4E86\u3002\u56DE\u5BB6\u540E\uFF0C\u5176\u4ED6\u4EBA\u90FD\u6B7B\u4E86\uFF0C\u7237\u7237\u95EE\uFF1A\u201C\u5409\u4F60\u62AC\u6CA1\uFF1F\u201D\u5C0F\u5409\u6447\u4E86\u6447\u5934\u3002\u8FD9\u65F6\u5C0F\u5409\u7684\u8EAB\u4E0A\u53D8\u7EFF\u4E86\uFF0C\u7237\u7237\u8BF4\uFF1A\u201C\u4E0D\u597D\uFF0C\u662F\u7EFF\u5C38\u5BD2\u8B66\u544A\uFF01\u201D"), new Data("\u4E00\u5BF9\u6CF0\u56FD\u592B\u5987\u5E26\u7740\u5B69\u5B50\u51FA\u56FD\u65C5\u6E38\uFF0C\u8FC7\u6D77\u5173\u65F6\uFF0C\u5DE5\u4F5C\u4EBA\u5458\u95EE\u592B\u5987\uFF0C\u5B69\u5B50\u59D3\u540D\u56FD\u7C4D\u51FA\u751F\u6708\u4EFD\uFF0C\u7236\u6BCD\u9053\uFF1A\u6770\u59AE\u6CF0\u56FD\u4EBA\u4E94\u6708\uFF0C\u673A\u5668\u7FFB\u8BD1\u51FA\u6765\uFF1AJenny Thai May"), new Data("\u9732\u97E9\u548C\u51AC\u502A\u90FD\u662F\u516C\u53F8\u51FA\u8272\u7684\u5458\u5DE5\uFF0C\u9732\u6DB5\u5F88\u5AC9\u5992\u51AC\u59AE\u7684\u989C\u503C\u3002\u6709\u6B21\u516C\u53F8\u4E3E\u529E\u6D3B\u52A8\uFF0C\u9080\u8BF7\u5404\u754C\u4EBA\u58EB\u6765\u53C2\u52A0\u3002\u9732\u6DB5\u548C\u51AC\u502A\u4F5C\u4E3A\u4E3B\u6301\u4EBA\uFF0C\u6D3B\u52A8\u524D\u665A\u9732\u6DB5\u8DD1\u5230\u51AC\u502A\u5316\u5986\u5BA4\u5F04\u810F\u5979\u7684\u88D9\u5B50\u3002\u88AB\u53E6\u4E00\u4EBA\u770B\u89C1\u95EE\u5979\u4E3A\u4F55\u8981\u8FD9\u6837\u505A\u3002\u9732\u6DB5\uFF1A\u5FCC\u502A\u592A\u7F8E"), new Data("\u4ECA\u5929\u53BB\u4E86\u519C\u6751\u7684\u5927\u5A18\u5BB6\uFF0C\u53BB\u7684\u65F6\u5019\u5927\u5A18\u6B63\u5728\u5730\u91CC\u5E72\u6D3B\u3002\u6211\u95EE\uFF1A\u201C\u5927\u5A18\u4F60\u5728\u5E72\u4EC0\u4E48\u554A\uFF1F\u201D\u5927\u5A18\u8BF4\uFF1A\u201C\u6211\u5728\u5228\u6728\u6750\u3002\u201D\u8FC7\u4E86\u4F1A\u7A81\u7136\u558A\u6211\uFF1A\u201C\u4F84\u5B50\uFF0C\u53BB\u5E2E\u5927\u5A18\u62FF\u7EF3\u5B50\u3002\u201D\u6211\u95EE\u5230\uFF1A\u201C\u62FF\u7EF3\u5B50\u5E72\u4EC0\u4E48\uFF1F\u201D\u5A18\u8BF4\uFF1A\u201C\u5927\u5A18\u5228\u6750\u9700\u6346\u3002\u201D"), new Data("\u67D0\u5929\u6211\u7A7F\u8D8A\u5230\u6B66\u4FA0\u5C0F\u8BF4\u91CC\uFF0C\u9047\u5230\u4E86\u5F20\u65E0\u5FCC\u3002\u6211\u8BF4:\u5FCC\uFF0C\u6765\u5207\u78CB\u4E00\u4E0B?\u5FCC:\u540E\u9762\u3002\u6211\u770B\u89C1\u51E0\u4E07\u4EBA\u8FFD\u7740\u5F20\u65E0\u5FCC\u8BF4\u8981\u6376\u6B7B\u4ED6\u3002\u6211\u5FC3\u751F\u601C\u60AF\uFF0C\u8BF4:\u5FCC\uFF0C\u4F60\u592A\u9709\uFF01\u7A81\u7136\uFF0C\u4ED6\u4EEC\u7684\u8001\u5927\u5415\u65BD\u6DB5\u5411\u6211\u4EEC\u53D1\u51FA\u8B66\u544A\u3002\u6211\u8BF4:\u906D\u4E86\uFF01\u662F\u5415\u65BD\u6DB5\u8B66\u544A\uFF01"), new Data("\u865E\u59EC\u7684\u76AE\u80A4\u597D\u597D\u770B\u554A\uFF0C\u5FCD\u4E0D\u4F4F\u6211\u60F3\u4F5C\u8BD7\u4E00\u9996\uFF1A\u65E2\u6709\u6B4C\u821E\u60CA\u4E91\u9704\uFF0C\u9713\u88F3\u7FBD\u8863\u6F2B\u7A88\u7A95\u3002\u62AC\u6307\u4E00\u6325\u8F6C\u5929\u7C41\uFF0C\u7F8E\u9152\u4F73\u80B4\u5171\u900D\u9065\u3002"), new Data("\u6D4B\u8BD5")];
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

System.register("chunks:///_virtual/demo8.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, UITransform, Label, randomRangeInt, Sprite, math, Component, YXCollectionView, YXEdgeInsets, YXFlowLayout;

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
      YXEdgeInsets = module.YXEdgeInsets;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
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

          this.collectionView.scrollDirection = YXCollectionView.ScrollDirection.HORIZONTAL;
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

System.register("chunks:///_virtual/demo9.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, NodeEventType, director, instantiate, UITransform, Label, randomRangeInt, Sprite, math, Component, YXCollectionView, YXEdgeInsets, YXFlowLayout;

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
      YXEdgeInsets = module.YXEdgeInsets;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
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

          this.collectionView.scrollDirection = YXCollectionView.ScrollDirection.HORIZONTAL;
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
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ProgressBar, game, math, UITransform, Label, director, Component, YXCollectionView, YXFlowLayout;

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
      ProgressBar = module.ProgressBar;
      game = module.game;
      math = module.math;
      UITransform = module.UITransform;
      Label = module.Label;
      director = module.director;
      Component = module.Component;
    }, null, function (module) {
      YXCollectionView = module.YXCollectionView;
    }, function (module) {
      YXFlowLayout = module.YXFlowLayout;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;

      cclegacy._RF.push({}, "44846CmwAhCrY4/ZZ8KUxtV", "home", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var home = exports('home', (_dec = ccclass('home'), _dec2 = property(YXCollectionView), _dec3 = property(Node), _dec4 = property(ProgressBar), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(home, _Component);

        function home() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "collectionView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "loading", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "progressBar", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = home.prototype;

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          this.loading.active = false;
          this.progressBar.progress = 0;
          game.frameRate = 120;
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
            title: "\u7A81\u51FA\u9009\u4E2D\u8282\u70B9 - 3D\u753B\u5ECA",
            scene: "demo17"
          }, {
            title: "\u540C\u5217\u8868\u591A\u79CD\u8282\u70B9\u6837\u5F0F",
            scene: "demo14"
          }, {
            title: "\u5217\u8868\u5D4C\u5957",
            scene: "demo15"
          }, {
            title: "\u65CB\u8F6C\u6728\u9A6C",
            scene: "demo16"
          }, // { title: `TableView  组件演示`, scene: `demo18` },
          // { title: `PageView  组件演示`, scene: `demo19` },
          {
            title: "Label \u5361\u987F\u4F18\u5316",
            scene: "demo20"
          }, {
            title: "\u5806\u53E0\u5361\u7247",
            scene: "demo21"
          }, {
            title: "ScrollBar",
            scene: "demo22"
          }];
          var layout = new YXFlowLayout();
          layout.itemSize = new math.Size(600, 100);
          layout.verticalSpacing = 20;
          this.collectionView.layout = layout;
          this.collectionView.numberOfItems = array.length;

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

          this.collectionView.reloadData();

          if (home.LAST_OFFSET) {
            this.collectionView.scrollView.scrollToOffset(home.LAST_OFFSET);
            this.collectionView.markForUpdateVisibleData();
          }
        };

        return home;
      }(Component), _class3.LAST_OFFSET = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collectionView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loading", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec4], {
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

System.register("chunks:///_virtual/LayoutCell.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Sprite, math, Label, Component;

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
      Sprite = module.Sprite;
      math = module.math;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "bd690DdmBNFEog4cAIIP539", "LayoutCell", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * 嵌套 Layout 组件示例
       */

      var LayoutCell = exports('LayoutCell', (_dec = ccclass('LayoutCell'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LayoutCell, _Component);

        function LayoutCell() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * 当前选中的 tab idx
           */

          _this.selectTab = 0;

          _initializerDefineProperty(_this, "titles", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "content", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = LayoutCell.prototype;

        _proto.onLoad = function onLoad() {};

        _proto.start = function start() {
          this.reloadTab();
          this.reloadContent();
        }
        /**
         * 更新选中标题
         */
        ;

        _proto.reloadTab = function reloadTab() {
          for (var index = 0; index < 4; index++) {
            var name = "Node-00" + index;
            var node = this.titles.getChildByName(name);
            var selected = index == this.selectTab;

            if (selected) {
              node.getComponent(Sprite).color = math.Color.RED;
            } else {
              node.getComponent(Sprite).color = math.Color.WHITE;
            }
          }
        }
        /**
         * 更新 9宫格 数据
         */
        ;

        _proto.reloadContent = function reloadContent() {
          for (var index = 0; index < 9; index++) {
            var name = "Node-00" + index;
            var node = this.content.getChildByName(name);
            var contentText = this.selectTab + "-" + name;
            node.getChildByName("label").getComponent(Label).string = contentText;
          }
        }
        /**
         * 标题按钮点击事件
         */
        ;

        _proto.onTouchTitleElement = function onTouchTitleElement(ev, idx) {
          this.selectTab = idx;
          this.reloadTab();
          this.reloadContent();
        };

        return LayoutCell;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titles", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
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

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './Demo1Cell.ts', './demo1.ts', './demo10.ts', './demo11.ts', './demo12.ts', './demo13.ts', './demo14.ts', './Demo15Cell1.ts', './Demo15Cell2.ts', './LayoutCell.ts', './demo15.ts', './demo16.ts', './demo17.ts', './demo18.ts', './demo19.ts', './demo2.ts', './Demo20Cell0.ts', './Demo20Cell1.ts', './demo20.ts', './Demo21Cell.ts', './demo21.ts', './demo22.ts', './demo3.ts', './demo4.ts', './demo5.ts', './demo6.ts', './demo7.ts', './demo8.ts', './demo9.ts', './home.ts', './yx-card-page-layout.ts', './yx-carousel-layout.ts', './yx-cover-layout.ts', './yx-masonry-flow-layout.ts', './yx-page-view.ts', './yx-table-view.ts', './index.ts', './yx-collection-view.ts', './yx-flow-layout.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
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
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _createClass, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, math, Enum, Prefab, ValueType, NodeEventType, UITransform, UIOpacity, ScrollView, Component, instantiate, Node, Mask;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      math = module.math;
      Enum = module.Enum;
      Prefab = module.Prefab;
      ValueType = module.ValueType;
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
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _dec5, _class4, _class5, _dec6, _class6, _class7, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class8, _class9, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _class10;

      cclegacy._RF.push({}, "f2c14q0UedOp7pnWIKia8C+", "yx-collection-view", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          requireComponent = _decorator.requireComponent,
          executionOrder = _decorator.executionOrder,
          disallowMultiple = _decorator.disallowMultiple,
          help = _decorator.help;

      var _vec2Out = new math.Vec2();

      var _vec3Out = new math.Vec3();

      var _rectOut = new math.Rect();
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
       * 虚拟列表实现模式
       */

      var _yx_collection_view_list_mode = /*#__PURE__*/function (_yx_collection_view_list_mode) {
        _yx_collection_view_list_mode[_yx_collection_view_list_mode["RECYCLE"] = 0] = "RECYCLE";
        _yx_collection_view_list_mode[_yx_collection_view_list_mode["ONCE"] = 1] = "ONCE";
        _yx_collection_view_list_mode[_yx_collection_view_list_mode["PRELOAD"] = 2] = "PRELOAD";
        return _yx_collection_view_list_mode;
      }(_yx_collection_view_list_mode || {});

      Enum(_yx_collection_view_list_mode);
      /**
       * 节点池回收策略
       */

      var _yx_collection_view_cell_item_pool_policy = /*#__PURE__*/function (_yx_collection_view_cell_item_pool_policy) {
        _yx_collection_view_cell_item_pool_policy[_yx_collection_view_cell_item_pool_policy["NONE"] = 0] = "NONE";
        _yx_collection_view_cell_item_pool_policy[_yx_collection_view_cell_item_pool_policy["REMOVE"] = 1] = "REMOVE";
        _yx_collection_view_cell_item_pool_policy[_yx_collection_view_cell_item_pool_policy["UI_OPACITY"] = 2] = "UI_OPACITY";
        return _yx_collection_view_cell_item_pool_policy;
      }(_yx_collection_view_cell_item_pool_policy || {});

      Enum(_yx_collection_view_cell_item_pool_policy);
      /**
       * 节点池  
       * 跟一般的节点池业务差不多，区别是这个 put 行为不会直接将节点从父节点移除，而是提供一个可选策略  
       * https://github.com/cocos/cocos-engine/blob/v3.8.0/extensions/ccpool/node-pool.ts
       */

      var _yx_collection_view_cell_item_pool = /*#__PURE__*/function () {
        function _yx_collection_view_cell_item_pool(poolHandlerComp, policy) {
          if (policy === void 0) {
            policy = _yx_collection_view_cell_item_pool_policy.REMOVE;
          }
          /**
           * 管理当前所有的可用节点
           */


          this.nodes = new Set();
          /**
           * 同 cc 的 NodePool 组件
           */

          this.poolHandlerComp = null;
          /**
           * put 回收策略
           */

          this.policy = void 0;
          this.poolHandlerComp = poolHandlerComp;
          this.policy = policy;
        }
        /**
         * 获取当前缓冲池的可用对象数量
         */


        var _proto = _yx_collection_view_cell_item_pool.prototype;
        /**
         * 将一个 node 节点添加到节点池
         * @param obj 
         */

        _proto.put = function put(obj) {
          if (this.policy == _yx_collection_view_cell_item_pool_policy.REMOVE) {
            obj.removeFromParent();
          } else if (this.policy == _yx_collection_view_cell_item_pool_policy.UI_OPACITY) {
            var comp = obj.getComponent(UIOpacity) || obj.addComponent(UIOpacity);
            comp.opacity = 0;
          } // @ts-ignore


          var handler = this.poolHandlerComp ? obj.getComponent(this.poolHandlerComp) : null;

          if (handler && handler.unuse) {
            handler.unuse();
          }

          this.nodes.add(obj);
        }
        /**
         * 获取对象池中的对象，如果对象池没有可用对象，则返回空。
         */
        ;

        _proto.get = function get() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          for (var _iterator = _createForOfIteratorHelperLoose(this.nodes), _step; !(_step = _iterator()).done;) {
            var obj = _step.value;

            if (this.policy == _yx_collection_view_cell_item_pool_policy.UI_OPACITY) {
              var comp = obj.getComponent(UIOpacity) || obj.addComponent(UIOpacity);
              comp.opacity = 255;
            }

            this.nodes["delete"](obj); // @ts-ignore

            var handler = this.poolHandlerComp ? obj.getComponent(this.poolHandlerComp) : null;

            if (handler && handler.reuse) {
              handler.reuse(arguments);
            }

            return obj;
          }

          return null;
        }
        /**
         * 销毁对象池中缓存的所有节点
         */
        ;

        _proto.clear = function clear() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.nodes), _step2; !(_step2 = _iterator2()).done;) {
            var obj = _step2.value;
            obj.destroy();
          }

          this.nodes.clear();
        };

        _createClass(_yx_collection_view_cell_item_pool, [{
          key: "size",
          get: function get() {
            return this.nodes.size;
          }
        }]);

        return _yx_collection_view_cell_item_pool;
      }();
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

        var _proto2 = YXIndexPath.prototype;

        _proto2.clone = function clone() {
          return new YXIndexPath(this.section, this.item);
        };

        _proto2.equals = function equals(other) {
          return this.section == other.section && this.item == other.item;
        };

        _proto2.set = function set(other) {
          this.section = other.section;
          this.item = other.item;
        };

        _proto2.toString = function toString() {
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

        var _proto3 = YXEdgeInsets.prototype;

        _proto3.clone = function clone() {
          return new YXEdgeInsets(this.top, this.left, this.bottom, this.right);
        };

        _proto3.equals = function equals(other) {
          return this.top == other.top && this.left == other.left && this.bottom == other.bottom && this.right == other.right;
        };

        _proto3.set = function set(other) {
          this.top = other.top;
          this.left = other.left;
          this.bottom = other.bottom;
          this.right = other.right;
        };

        _proto3.toString = function toString() {
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

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
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

          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          _this4 = _ScrollView.call.apply(_ScrollView, [this].concat(args)) || this;
          _this4._yxOnStartInertiaScroll = void 0;
          return _this4;
        }

        var _proto4 = _scroll_view.prototype;
        /**
         * 禁掉鼠标滚轮
         */

        _proto4._onMouseWheel = function _onMouseWheel(event, captureListeners) {}
        /**
         * 准备开始惯性滚动
         * @param touchMoveVelocity 手势速度
         */
        ;

        _proto4._startInertiaScroll = function _startInertiaScroll(touchMoveVelocity) {
          _ScrollView.prototype._startInertiaScroll.call(this, touchMoveVelocity);

          if (this._yxOnStartInertiaScroll) {
            this._yxOnStartInertiaScroll(touchMoveVelocity);
          }
        };

        _proto4._onTouchBegan = function _onTouchBegan(event, captureListeners) {
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

        _proto4._onTouchMoved = function _onTouchMoved(event, captureListeners) {
          if (this.node.getComponent(YXCollectionView).scrollEnabled == false) {
            return;
          } // 处理嵌套冲突，每次只滚动需要滚动的列表


          var scrollTarget = this._yxGetScrollTarget(event, captureListeners);

          if (this.node === scrollTarget) {
            _ScrollView.prototype._onTouchMoved.call(this, event, captureListeners);
          }
        };

        _proto4._onTouchCancelled = function _onTouchCancelled(event, captureListeners) {
          _ScrollView.prototype._onTouchCancelled.call(this, event, captureListeners);
        };

        _proto4._onTouchEnded = function _onTouchEnded(event, captureListeners) {
          _ScrollView.prototype._onTouchEnded.call(this, event, captureListeners);
        };

        _proto4._hasNestedViewGroup = function _hasNestedViewGroup(event, captureListeners) {
          // 直接把所有的列表都标记为可滑动，具体滑动哪一个，去 _onTouchMoved 判断
          return false;
        };

        _proto4._stopPropagationIfTargetIsMe = function _stopPropagationIfTargetIsMe(event) {
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

        _proto4._yxGetScrollTarget = function _yxGetScrollTarget(event, captureListeners) {
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

        var _proto5 = YXLayout.prototype;
        /**
         * @optional
         * 列表在首次更新数据后会执行这个方法
         * 在这个方法里设置滚动视图的初始偏移量
         */

        _proto5.initOffset = function initOffset(collectionView) {}
        /**
         * @optional
         * 当一次手势拖动结束后会立即调用此方法
         * 实现这个方法的话滚动视图会自动滚动到此方法返回的位置
         * @param touchMoveVelocity 本次手势拖动速度
         * @param startOffset 本次手势拖动开始时滚动视图的偏移位置
         * @returns null 不处理
         */
        ;

        _proto5.targetOffset = function targetOffset(collectionView, touchMoveVelocity, startOffset) {
          return null;
        }
        /**
         * @optional
         * 列表每次滚动结束后会调用此方法
         * @param collectionView 
         */
        ;

        _proto5.onScrollEnded = function onScrollEnded(collectionView) {}
        /**
         * @optional
         * 返回区域内可见的节点属性，并实时的调整这些节点变换效果 (如果在这个方法里调整了节点变换属性，需要重写 shouldUpdateAttributesForBoundsChange 以支持实时变换)
         * 根据实际的布局情况，计算出当前屏幕内需要显示的布局属性
         * 这个方法会直接影响到列表的性能，如果在自定义的时候对性能要求不高(比如明确知道数据量不多的情况下)，可以忽略此方法 (默认会检查所有的布局属性并返回所有的处于可见范围内的单元格布局属性)
         * @param rect 当前滚动视图的可见区域
         */
        ;

        _proto5.layoutAttributesForElementsInRect = function layoutAttributesForElementsInRect(rect, collectionView) {
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

        _proto5.layoutAttributesForItemAtIndexPath = function layoutAttributesForItemAtIndexPath(indexPath, collectionView) {
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

        _proto5.scrollTo = function scrollTo(indexPath, collectionView) {
          return null;
        }
        /**
         * @optional
         * @see YXLayoutAttributes.zIndex
         * @returns 
         */
        ;

        _proto5.shouldUpdateAttributesZIndex = function shouldUpdateAttributesZIndex() {
          return false;
        }
        /**
         * @optional
         * @see YXLayoutAttributes.opacity
         * @returns 
         */
        ;

        _proto5.shouldUpdateAttributesOpacity = function shouldUpdateAttributesOpacity() {
          return false;
        }
        /**
         * @optional
         * 此布局下的节点，是否需要实时更新变换效果
         * @returns 返回 true 会忽略 YXCollectionView 的 frameInterval 设置，强制在滚动过程中实时更新节点
         */
        ;

        _proto5.shouldUpdateAttributesForBoundsChange = function shouldUpdateAttributesForBoundsChange() {
          return false;
        };

        return YXLayout;
      }());
      /**
       * @see NodePool.poolHandlerComp
       * 节点的自定义组件可以通过这个接口跟 @NodePool 的重用业务关联起来
       */

      /**
       * 列表组件
       */

      var YXCollectionView = exports('YXCollectionView', (_dec7 = ccclass('YXCollectionView'), _dec8 = disallowMultiple(true), _dec9 = executionOrder(-1), _dec10 = help("https://gitee.com/568071718/creator-collection-view-doc"), _dec11 = property({
        tooltip: "\u81EA\u52A8\u7ED9\u6302\u8F7D\u8282\u70B9\u6DFB\u52A0 mask \u7EC4\u4EF6"
      }), _dec12 = property({
        tooltip: "\u5141\u8BB8\u624B\u52BF\u6EDA\u52A8"
      }), _dec13 = property({
        type: _yx_collection_view_list_mode,
        tooltip: "\u865A\u62DF\u5217\u8868\u6A21\u5F0F (\u8BE6\u7EC6\u533A\u522B\u67E5\u770B\u679A\u4E3E\u6CE8\u91CA)\nRECYCLE: \u6839\u636E\u5217\u8868\u663E\u793A\u8303\u56F4\u52A0\u8F7D\u9700\u8981\u7684\u8282\u70B9\nONCE: \u8DDF RECYCLE \u6A21\u5F0F\u5DEE\u4E0D\u591A\uFF0C\u533A\u522B\u662F\u6B64\u6A21\u5F0F\u4E0B\u6BCF\u6761\u6570\u636E\u90FD\u4F1A\u5BF9\u5E94\u7684\u751F\u6210\u4E00\u4E2A\u8282\u70B9\u800C\u4E0D\u8FDB\u884C\u590D\u7528\nPRELOAD: \u76F4\u63A5\u52A0\u8F7D\u6240\u6709\u7684\u8282\u70B9"
      }), _dec14 = property({
        tooltip: "\u9884\u52A0\u8F7D\u6A21\u5F0F\u4E13\u7528\uFF0C\u6BCF\u591A\u5C11\u5E27\u6267\u884C\u4E00\u6B21\u9884\u52A0\u8F7D\uFF0C1 \u8868\u793A\u6BCF\u5E27\u90FD\u6267\u884C",
        visible: function visible() {
          return this.mode == _yx_collection_view_list_mode.PRELOAD;
        }
      }), _dec15 = property({
        type: _yx_collection_view_scroll_direction,
        tooltip: "\u5217\u8868\u6EDA\u52A8\u65B9\u5411"
      }), _dec16 = property({
        type: _yx_collection_view_cell_item_pool_policy,
        tooltip: "\u56DE\u6536\u8282\u70B9\u7B56\u7565\n\u5177\u4F53\u533A\u522B\u67E5\u770B\u679A\u4E3E\u6CE8\u91CA"
      }), _dec17 = property({
        tooltip: "\u6BCF\u591A\u5C11\u5E27\u5237\u65B0\u4E00\u6B21\u53EF\u89C1\u8282\u70B9\uFF0C1 \u8868\u793A\u6BCF\u5E27\u90FD\u5237"
      }), _dec18 = property({
        tooltip: "\u6EDA\u52A8\u8FC7\u7A0B\u4E2D\uFF0C\u6BCF\u591A\u5C11\u5E27\u56DE\u6536\u4E00\u6B21\u4E0D\u53EF\u89C1\u8282\u70B9\uFF0C1\u8868\u793A\u6BCF\u5E27\u90FD\u56DE\u6536\uFF0C0\u8868\u793A\u4E0D\u5728\u6EDA\u52A8\u8FC7\u7A0B\u4E2D\u56DE\u6536\u4E0D\u53EF\u89C1\u8282\u70B9"
      }), _dec19 = property({
        tooltip: "\u6B64\u5217\u8868\u4E0A\u7684 cell \u8282\u70B9\uFF0C\u662F\u5426\u662F 3d cell \u8282\u70B9"
      }), _dec20 = property({
        type: [_yx_editor_register_cell_info],
        visible: true,
        displayName: "Register Cells",
        tooltip: "\u914D\u7F6E\u6B64\u5217\u8868\u5185\u9700\u8981\u7528\u5230\u7684 cell \u8282\u70B9\u7C7B\u578B"
      }), _dec7(_class8 = _dec8(_class8 = _dec9(_class8 = _dec10(_class8 = (_class9 = (_class10 = /*#__PURE__*/function (_Component2) {
        _inheritsLoose(YXCollectionView, _Component2);

        function YXCollectionView() {
          var _this5;

          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
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
           * 虚拟列表模式
           */


          _initializerDefineProperty(_this5, "mode", _descriptor6, _assertThisInitialized(_this5));
          /**
           * 预加载模式专用，每多少帧执行一次预加载，1 表示每帧都执行
           */


          _initializerDefineProperty(_this5, "preloadInterval", _descriptor7, _assertThisInitialized(_this5));
          /**
           * 列表滚动方向，默认垂直方向滚动  
           * 自定义 YXLayout 应该尽量根据这个配置来实现不同方向的布局业务  
           * 注意: 如果使用的 YXLayout 未支持对应的滚动方向，则此配置不会生效
           */


          _initializerDefineProperty(_this5, "scrollDirection", _descriptor8, _assertThisInitialized(_this5));
          /**
           * 回收节点策略  
           * 必须在 register() 之前设置
           */


          _initializerDefineProperty(_this5, "recyclePolicy", _descriptor9, _assertThisInitialized(_this5));
          /**
           * 每多少帧刷新一次可见节点，1 表示每帧都刷
           */


          _initializerDefineProperty(_this5, "frameInterval", _descriptor10, _assertThisInitialized(_this5));
          /**
           * 滚动过程中，每多少帧回收一次不可见节点，1表示每帧都回收，0表示不在滚动过程中回收不可见节点
           * @bug 滚动过程中如果实时的回收不可见节点，有时候会收不到 scroll view 的 cancel 事件，导致 scroll view 的滚动状态不会更新 (且收不到滚动结束事件)
           * @fix 当这个属性设置为 0 时，只会在 `touch-up` 和 `scroll-ended` 里面回收不可见节点  
           * @fix recyclePolicy 设置为 UI_OPACITY 也可以避免这个问题  
           */


          _initializerDefineProperty(_this5, "recycleInterval", _descriptor11, _assertThisInitialized(_this5));
          /**
           * 此列表上的 cell 节点，是否是 3d cell 节点  
           * 3d 节点的点击事件，需要通过射线检测来做，外部自行配置碰撞体实现节点的点击事件，列表只做个排列展示  
           * https://docs.cocos.com/creator/manual/zh/engine/event/event-input.html#3d-%E7%89%A9%E4%BD%93%E7%9A%84%E8%A7%A6%E6%91%B8%E6%A3%80%E6%B5%8B  
           * 备注: 暂时不支持 2d/3d 节点同时出现在同一个列表内，正确配置此属性避免页面节点事件错乱
           */


          _initializerDefineProperty(_this5, "is3DCell", _descriptor12, _assertThisInitialized(_this5));
          /**
           * 通过编辑器注册节点类型
           */


          _initializerDefineProperty(_this5, "registerCellForEditor", _descriptor13, _assertThisInitialized(_this5));
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
           * 在这个方法里，只需要关心 indexPath 这个位置对应的节点应该是用注册过的哪个类型的 Node 节点，然后通过 dequeueReusableCell 生成对应的 Node
           * @example
           * yourList.cellForItemAt = (indexPath, collectionView) => {
           *      return collectionView.dequeueReusableCell(`your identifier`)
           * }
           * 
           * 另外如果节点大小是确定好了的话，也可以直接在这里更新节点的 UI 内容
           * @example
           * yourList.cellForItemAt = (indexPath ,collectionView) => {
           *      let cell = collectionView.dequeueReusableCell(`your identifier`)
           *      let comp = cell.getComponent(YourCellComp)
           *      comp.label.string = `${indexPath}`
           *      return cell
           * }
           * 
           * @returns 注意: 不要在这个方法里创建新的节点对象，这个方法返回的 Node，必须是通过 dequeueReusableCell 匹配到的 Node
           */

          _this5.cellForItemAt = null;
          /**
           * cell 触发复用之后执行，在这个方法里更新 cell 显示的 UI 内容
           * 如果确定节点大小没什么变化，可以直接在 cellForItemAt 里更新数据，省去这一步，这里主要是为了应付节点大小变化的情况
           * 可以通过 @indexPath 区分 cell 的种类
           * 重要: 如果 cell 的大小不是固定的，需要在这里重新调整子节点的位置，避免布局错乱
           */

          _this5.onCellDisplay = null;
          /**
           * 当 cell 移出当前可见范围后执行
           */

          _this5.onCellEndDisplay = null;
          /**
           * 点击到节点后调用
           * 仅支持 2D 节点
           */

          _this5.onTouchItemAt = null;
          /**
           * 布局规则
           */

          _this5.layout = null;
          /**
           * 记录当前正在显示的所有节点
           */

          _this5.allVisibleNodes = {};
          /**
           * 非回收模式专用，记录已经实例化的所有节点  
           */

          _this5.allNodes = {};
          /**
           * 记录 @reloadData 执行了多少次了，用来区分刷新列表的时候是否是首次刷新列表
           */

          _this5.reloadDataCounter = 0;
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
           * 预加载节点
           */

          _this5._late_preload_offset = null;
          _this5._scroll_offset_on_touch_start = null;
          return _this5;
        }

        var _proto6 = YXCollectionView.prototype;
        /**
         * 注册 cell
         * 可多次注册不同种类的 cell，只要确保 @identifier 的唯一性就好
         * @param identifier cell 标识符，通过 @dequeueReusableCell 获取重用 cell 时，会根据这个值匹配
         * @param maker 生成节点，当重用池里没有可用的节点时，会通过这个回调获取节点，需要在这个回调里面生成节点
         * @param poolComp (可选) 节点自定义组件，可以通过这个组件跟 @NodePool 的重用业务关联起来
         */

        _proto6.register = function register(identifier, maker, poolComp) {
          if (poolComp === void 0) {
            poolComp = null;
          }

          var pool = new _yx_collection_view_cell_item_pool(poolComp, this.recyclePolicy);
          this.pools.set(identifier, pool);
          this.makers.set(identifier, maker);
        };
        /**
         * 通过标识符从重用池里取出一个可用的 cell 节点
         * @param identifier 注册时候的标识符
         * @returns 
         */


        _proto6.dequeueReusableCell = function dequeueReusableCell(identifier) {
          var pool = this.pools.get(identifier);

          if (pool == null) {
            throw new Error("YXCollectionView: \u672A\u6CE8\u518C\u6807\u8BC6\u7B26\u4E3A `" + identifier + "` \u7684 cell\uFF0C\u8BF7\u5148\u8C03\u7528 YXCollectionView \u7684 register() \u65B9\u6CD5\u6CE8\u518C cell \u8282\u70B9");
          }

          var result = null;

          if (this.mode == _yx_collection_view_list_mode.RECYCLE) {
            result = pool.get();
          }

          if (result == null) {
            // 如果对应的重用池里没有的话，新生成一个
            var maker = this.makers.get(identifier);

            if (maker instanceof Function == false) {
              throw new Error("YXCollectionView: register() \u53C2\u6570\u9519\u8BEF\uFF0C\u8BF7\u6B63\u786E\u914D\u7F6E maker \u56DE\u8C03\u51FD\u6570\u4EE5\u751F\u6210\u6807\u8BC6\u5BF9\u5E94\u7684\u8282\u70B9");
            }

            result = maker();

            var _cell = result.getComponent(_cell_) || result.addComponent(_cell_);

            _cell.identifier = identifier;

            if (this.is3DCell == false) {
              result.on(NodeEventType.TOUCH_END, this.onTouchItem, this);
            }
          }

          return result;
        };

        _proto6.onTouchItem = function onTouchItem(ev) {
          if (this.onTouchItemAt) {
            var _cell2 = ev.target.getComponent(_cell_);

            this.onTouchItemAt(_cell2.attributes.indexPath, this);
          }
        };
        /**
         * 获取当前正在显示的某个节点
         * @param indexPath 
         */


        _proto6.getVisibleNode = function getVisibleNode(indexPath) {
          return this.allVisibleNodes[indexPath.toString()];
        }
        /**
         * 获取指定节点的索引
         * @param node 
         * @returns 
         */
        ;

        _proto6.getVisibleNodeIndexPath = function getVisibleNodeIndexPath(node) {
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

        _proto6.reloadData = function reloadData() {
          // 校验 layout 参数
          if (this.layout == null) {
            throw new Error("YXCollectionView: 参数错误，请正确配置 layout 以确定布局方案");
          } // 立即停止当前滚动


          this.scrollView.stopAutoScroll(); // 移除掉当前所有节点，准备刷新

          for (var key in this.allVisibleNodes) {
            var element = this.allVisibleNodes[key];

            var _cell3 = element.getComponent(_cell_);

            this.pools.get(_cell3.identifier).put(element);
            delete this.allVisibleNodes[key];

            if (this.onCellEndDisplay) {
              this.onCellEndDisplay(_cell3.node, _cell3.attributes.indexPath, this);
            }
          }

          this.allVisibleNodes = {};
          this.allNodes = {}; // 记录一下当前的偏移量，保证数据更新之后位置也不会太偏

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
            this.scrollView.scrollToOffset(offset, 0);
          } // 更新 cell 节点


          if (this.mode == _yx_collection_view_list_mode.PRELOAD) {
            this._late_preload_offset = new math.Vec2(0, 0);
          }

          this.markForUpdateVisibleData(true);
          this.reloadDataCounter++;
        };
        /**
         * 根据当前的可见区域调整需要显示的节点
         */


        _proto6.reloadVisibleCells = function reloadVisibleCells(rect, isPreload) {
          if (rect === void 0) {
            rect = null;
          }

          if (isPreload === void 0) {
            isPreload = false;
          } // 获取当前可见区域


          if (rect == null) {
            _rectOut.origin = this.scrollView.getScrollOffset();
            _rectOut.x = -_rectOut.x;
            _rectOut.size = this.scrollView.view.contentSize;
            rect = _rectOut;
          } // 根据可见区域，找出对应的布局属性


          var layoutAttributes = this.layout.layoutAttributesForElementsInRect(rect, this); // 是否需要实时更新节点

          var shouldUpdateAttributesForBoundsChange = this.layout.shouldUpdateAttributesForBoundsChange(); // 按 zIndex 排序

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
          log(`需要显示的节点数量: ${layoutAttributes.length}  当前显示的节点数量: ${this.visibleNodes.length}  缓存池里的节点数量: ${poolsCounter}`)
          */
          // 添加需要显示的节点


          for (var index = 0; index < layoutAttributes.length; index++) {
            var element = layoutAttributes[index];

            if (isPreload == false) {
              // 需要显示并且正在显示的
              var visibleNode = this.getVisibleNode(element.indexPath) || this.allNodes[element.indexPath.toString()];

              if (visibleNode && isPreload == false) {
                this.restoreCellNodeIfNeeds(visibleNode); // 恢复节点状态

                this.applyLayoutAttributes(visibleNode, element); // 更新节点变换

                if (shouldUpdateAttributesZIndex) {
                  visibleNode.setSiblingIndex(-1);
                } // 调整节点层级


                this.allVisibleNodes[element.indexPath.toString()] = visibleNode; // 标记此节点正在显示

                continue;
              }
            } else {
              if (this.getVisibleNode(element.indexPath)) {
                continue; // 去重
              }
            }
            /**
             * 需要显示但是当前未显示出来的
             * @version 1.1.0 开始，单一 cell 类型的列表支持不实现 cellForItemAt 方法来获取重用节点，这里默认自动执行
             */


            var node = this.pools.size > 1 || this.cellForItemAt ? this.cellForItemAt(element.indexPath, this) : this.dequeueReusableCell(this.pools.keys().next().value);

            if (node.parent != this.scrollView.content) {
              node.parent = this.scrollView.content;
            }

            this.applyLayoutAttributes(node, element);
            var key = element.indexPath.toString();
            this.allVisibleNodes[key] = node; // 标记此节点正在显示

            if (this.mode == _yx_collection_view_list_mode.PRELOAD || this.mode == _yx_collection_view_list_mode.ONCE) {
              this.allNodes[key] = node; // 保存节点
            }

            if (this.onCellDisplay) {
              this.onCellDisplay(node, element.indexPath, this);
            }
          }

          layoutAttributes = [];
        }
        /**
         * 节点被回收后需要重新使用时，根据当前回收模式恢复节点的状态，保证节点可见
         */
        ;

        _proto6.restoreCellNodeIfNeeds = function restoreCellNodeIfNeeds(node) {
          if (this.recyclePolicy == _yx_collection_view_cell_item_pool_policy.REMOVE) {
            if (node.parent != this.scrollView.content) {
              node.parent = this.scrollView.content;
            }
          } else if (this.recyclePolicy == _yx_collection_view_cell_item_pool_policy.UI_OPACITY) {
            var comp = node.getComponent(UIOpacity) || node.addComponent(UIOpacity);
            comp.opacity = 255;
          }
        }
        /**
         * 回收不可见节点
         */
        ;

        _proto6.recycleInvisibleNodes = function recycleInvisibleNodes(visibleRect) {
          if (visibleRect === void 0) {
            visibleRect = null;
          }

          if (visibleRect == null) {
            visibleRect = new math.Rect();
            visibleRect.origin = this.scrollView.getScrollOffset();
            visibleRect.x = -visibleRect.x;
            visibleRect.size = this.scrollView.view.contentSize;
          }

          var _realFrame = new math.Rect();

          var _contentSize = this.scrollView.content.getComponent(UITransform).contentSize;

          for (var key in this.allVisibleNodes) {
            var element = this.allVisibleNodes[key];

            var _cell4 = element.getComponent(_cell_);
            /**
             * @version 1.0.2
             * 检查节点是否可见应该是通过变换后的位置来检查
             * 通过 boundingBox 获取实际变换后的大小
             * 把实际的 position 转换为 origin
             */


            var boundingBox = element.getComponent(UITransform).getBoundingBox();
            _realFrame.size = boundingBox.size;
            _realFrame.x = (_contentSize.width - _realFrame.width) * 0.5 + element.position.x;
            _realFrame.y = (_contentSize.height - _realFrame.height) * 0.5 - element.position.y;

            if (visibleRect.intersects(_realFrame) == false) {
              this.pools.get(_cell4.identifier).put(element);
              delete this.allVisibleNodes[key];

              if (this.onCellEndDisplay) {
                this.onCellEndDisplay(_cell4.node, _cell4.attributes.indexPath, this);
              }
            }
          }
        }
        /**
         * 调整节点的位置/变换
         */
        ;

        _proto6.applyLayoutAttributes = function applyLayoutAttributes(node, attributes) {
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

        _proto6.scrollTo = function scrollTo(indexPath, timeInSecond, attenuated) {
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

        _proto6.onLoad = function onLoad() {
          var _this6 = this;

          var _loop = function _loop() {
            var element = _this6.registerCellForEditor[index];

            _this6.register(element.identifier, function () {
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

        _proto6.onDestroy = function onDestroy() {
          this.node.off(ScrollView.EventType.SCROLL_BEGAN, this.onScrollBegan, this);
          this.node.off(ScrollView.EventType.SCROLLING, this.onScrolling, this);
          this.node.off(ScrollView.EventType.TOUCH_UP, this.onScrollTouchUp, this);
          this.node.off(ScrollView.EventType.SCROLL_ENDED, this.onScrollEnded, this);
          this.allVisibleNodes = {};
          delete this.allVisibleNodes;
          this.pools.forEach(function (element) {
            element.clear();
          });
          this.pools.clear();
          this.makers.clear();

          if (this.layout) {
            this.layout.attributes = [];
          }
        };

        _proto6.update = function update(dt) {
          this._frameIdx++;
          this.update_reloadVisibleCellsIfNeeds(dt);
          this.update_recycleInvisibleNodesIfNeeds(dt);
          this.update_preloadItemsIfNeeds(dt);
        };

        _proto6.markForUpdateVisibleData = function markForUpdateVisibleData(force) {
          if (force === void 0) {
            force = false;
          }

          if (force) {
            this.reloadVisibleCells();
            return;
          }

          this._late_update_visible_data = true;
          this._late_recycle_invisible_node = true;
        }
        /**
         * 更新可见区域节点逻辑
         */
        ;

        _proto6.update_reloadVisibleCellsIfNeeds = function update_reloadVisibleCellsIfNeeds(dt) {
          if (this.frameInterval <= 1 || this._frameIdx % this.frameInterval == 0) {
            if (this._late_update_visible_data) {
              this._late_update_visible_data = false;
              this.reloadVisibleCells();
            }
          }
        };

        _proto6.update_recycleInvisibleNodesIfNeeds = function update_recycleInvisibleNodesIfNeeds(dt) {
          if (this.recycleInterval >= 1 && this._frameIdx % this.recycleInterval == 0) {
            if (this._late_recycle_invisible_node) {
              this._late_recycle_invisible_node = false;
              this.recycleInvisibleNodes();
            }
          }
        };

        _proto6.update_preloadItemsIfNeeds = function update_preloadItemsIfNeeds(dt) {
          /**
           * 预加载已完成
           */
          if (this._late_preload_offset == null) {
            return;
          }
          /**
           * 分帧加载
           */


          var preloadInterval = this.preloadInterval;

          if (preloadInterval < 1) {
            preloadInterval = 1;
          }

          if (this._frameIdx % preloadInterval != 0) {
            return;
          }
          /**
           * 只有在列表静止的时候才去执行预加载行为
           */


          if (this.scrollView.isScrolling()) {
            return;
          }

          if (this.scrollView.isAutoScrolling()) {
            return;
          }
          /**
           * 预加载逻辑，暂定为每次加载一页的节点
           */


          var rect = _rectOut;
          rect.size = this.scrollView.view.contentSize;

          if (this.scrollDirection == YXCollectionView.ScrollDirection.HORIZONTAL) {
            rect.x = this._late_preload_offset.x + rect.size.width;
          }

          if (this.scrollDirection == YXCollectionView.ScrollDirection.VERTICAL) {
            rect.y = this._late_preload_offset.y + rect.size.height;
          }

          this.reloadVisibleCells(rect, true);
          this._late_recycle_invisible_node = true;
          this._late_preload_offset.x = rect.x;
          this._late_preload_offset.y = rect.y;

          if (this.scrollDirection == YXCollectionView.ScrollDirection.HORIZONTAL) {
            if (rect.xMax > this.layout.contentSize.width) {
              this._late_preload_offset = null;
            }
          }

          if (this.scrollDirection == YXCollectionView.ScrollDirection.VERTICAL) {
            if (rect.yMax > this.layout.contentSize.height) {
              this._late_preload_offset = null;
            }
          }
        };

        _proto6.onScrollBegan = function onScrollBegan() {};

        _proto6.onScrolling = function onScrolling() {
          this.markForUpdateVisibleData(this.layout.shouldUpdateAttributesForBoundsChange());
          this._late_recycle_invisible_node = true;
        };

        _proto6.onScrollTouchUp = function onScrollTouchUp() {
          this.recycleInvisibleNodes();
        };

        _proto6.onScrollEnded = function onScrollEnded() {
          this.markForUpdateVisibleData();
          this.recycleInvisibleNodes();
          this.layout.onScrollEnded(this);
        };

        _proto6.onStartInertiaScroll = function onStartInertiaScroll(touchMoveVelocity) {
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
          key: "visibleNodes",
          get:
          /**
           * 获取当前正在显示的所有节点
           */
          function get() {
            var result = [];

            for (var key in this.allVisibleNodes) {
              result.push(this.allVisibleNodes[key]);
            }

            return result;
          }
          /**
           * 获取所有正在显示节点的索引
           */

        }, {
          key: "visibleIndexPaths",
          get: function get() {
            var result = [];

            for (var key in this.allVisibleNodes) {
              var element = this.allVisibleNodes[key];

              var _cell5 = element.getComponent(_cell_);

              result.push(_cell5.attributes.indexPath.clone());
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
            return "1.1.1";
          }
          /**
           * 访问定义的私有枚举
           */

        }]);

        return YXCollectionView;
      }(Component), _class10.Mode = _yx_collection_view_list_mode, _class10.ScrollDirection = _yx_collection_view_scroll_direction, _class10.RecyclePolicy = _yx_collection_view_cell_item_pool_policy, _class10), (_descriptor4 = _applyDecoratedDescriptor(_class9.prototype, "mask", [_dec11], {
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class9.prototype, "mode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return YXCollectionView.Mode.RECYCLE;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class9.prototype, "preloadInterval", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class9.prototype, "scrollDirection", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return YXCollectionView.ScrollDirection.VERTICAL;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class9.prototype, "recyclePolicy", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return YXCollectionView.RecyclePolicy.REMOVE;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class9.prototype, "frameInterval", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class9.prototype, "recycleInterval", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class9.prototype, "is3DCell", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class9.prototype, "registerCellForEditor", [_dec20], {
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
            time: 0.25
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
  var _inheritsLoose, cclegacy, _decorator, UITransform, math, YXCollectionView, YXIndexPath, YXLayout, YXEdgeInsets, YXLayoutAttributes;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      math = module.math;
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

            if (element.frame.intersects(rect)) {
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
                this.attrs.push(_attributes);
                this.containerHeight = Math.max(this.containerHeight, _attributes.frame.height);
                return _attributes;
              }
            }
          } // 检测所有节点的下边


          for (var _index = 0; _index < this.attrs.length; _index++) {
            var _element = this.attrs[_index];
            frame.x = _element.frame.x;
            frame.y = _element.frame.yMax + this.verticalSpacing;

            if (frame.yMax <= this.offset + this.containerHeight) {
              if (this.intersects(frame) == false) {
                var _attributes2 = new YXLayoutAttributes();

                _attributes2.indexPath = indexPath;
                _attributes2.frame = frame;
                this.attrs.push(_attributes2);
                this.containerHeight = Math.max(this.containerHeight, _attributes2.frame.height);
                return _attributes2;
              }
            }
          } // 走到这里表示这块内容区域已经摆不下了


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
                this.attrs.push(_attributes3);
                this.containerWidth = Math.max(this.containerWidth, _attributes3.frame.width);
                return _attributes3;
              }
            }
          } // 检查所有节点的右边


          for (var _index2 = 0; _index2 < this.attrs.length; _index2++) {
            var _element2 = this.attrs[_index2];
            frame.x = _element2.frame.xMax + this.horizontalSpacing;
            frame.y = _element2.frame.y;

            if (frame.xMax <= this.offset + this.containerWidth) {
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