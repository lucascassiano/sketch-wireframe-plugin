import sketch from 'sketch';
let ShapePath = sketch.ShapePath
var Shape = sketch.Shape
var Rectangle = sketch.Rectangle
const Group = sketch.Group;
const Text = sketch.Text;

// documentation: https://developer.sketchapp.com/reference/api/

export default function () {

    const doc = sketch.getSelectedDocument()
    const selectedLayers = doc.selectedLayers
    const selectedCount = selectedLayers.length

    selectedLayers.forEach(layer => {
        let frame = layer.frame;
        layer.style.borders = ["#000000"];
        layer.style.fills = ["#F0f0f0"];

        var group = new Group({
            parent: layer.parent,
            frame: new Rectangle(frame.x, frame.y, frame.width, frame.height),
            name: "button",
            selected: true,
        })

        var rect = new Shape({
            frame: new Rectangle(0, 0, frame.width, frame.height),
            style: layer.style,
            parent: group,
            name: 'rectangle'
        });
        // const line = new ShapePath({
        //     name: 'line',
        //     frame: new Rectangle(0, 0, frame.width, frame.height),
        //     style: { borders: ['#000000'] },
        //     points: [
        //         { point: { x: 0, y: 0 } },
        //         { point: { x: 1, y: 1 } }
        //     ],
        //     parent: group

        // });
        // const line2 = new ShapePath({
        //     name: 'line',
        //     frame: new Rectangle(0, 0, frame.width, frame.height),
        //     style: { borders: ['#000000'] },
        //     points: [
        //         { point: { x: 0, y: 1 } },
        //         { point: { x: 1, y: 0 } }
        //     ],
        //     parent: group
        // });

        var text = new Text({
            text: 'Button',
            style: {
                fontSize: 22,
                verticalAlignment: Text.VerticalAlignment.center
            },
            alignment: Text.Alignment.center,
            parent: group,
            fixedWidth: true,
            frame: new Rectangle(0, frame.height / 2 - 11, frame.width, frame.height)
        });

        text.adjustToFit();
        layer.remove();
    });
}
