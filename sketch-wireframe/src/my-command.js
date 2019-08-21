import sketch from 'sketch';
let ShapePath = sketch.ShapePath
var Shape = sketch.Shape
var Rectangle = sketch.Rectangle
const Group = sketch.Group;

// documentation: https://developer.sketchapp.com/reference/api/

export default function () {
  //sketch.UI.message("It's alive 🙌");
  const doc = sketch.getSelectedDocument()
  const selectedLayers = doc.selectedLayers
  const selectedCount = selectedLayers.length

  selectedLayers.forEach(layer => {
    //sketch.UI.message(layer.frame);
    let frame = layer.frame;
    layer.style.borders = ["#000000"];
    layer.style.fills = ["#F0f0f0"];

    var group = new Group({
      parent: layer.parent,
      frame: new Rectangle(frame.x, frame.y, frame.width, frame.height),
      name: layer.name,
      selected: true,
    })

    var rect = new Shape({
      frame: new Rectangle(0, 0, frame.width, frame.height),
      style: layer.style,
      parent: group
    })

    const line = new ShapePath({
      name: 'line',
      frame: new Rectangle(0, 0, frame.width, frame.height),
      style: { borders: ['#000000'] },
      points: [
        { point: { x: 0, y: 0 } },
        { point: { x: 1, y: 1 } }
      ],
      parent: group

    });
    const line2 = new ShapePath({
      name: 'line',
      frame: new Rectangle(0, 0, frame.width, frame.height),
      style: { borders: ['#000000'] },
      points: [
        { point: { x: 0, y: 1 } },
        { point: { x: 1, y: 0 } }
      ],
      parent: group
    });



    layer.remove();
  });
}
