## Why use computers to make physical art ([1m32s](https://www.youtube.com/watch?v=BZNKLvqh8ts&t=92s))

Charlotte Dann — front-end developer by day, generative artist by night — argues that computers are actually a *better* medium for art than carpentry: every iteration is free, every variation is one tweak away, and the loop from idea to output is short enough to fail fast.

> "with code, you can build off what you already have, and you can make as many copies as you like along the way"

> "imagine building a rocking chair and getting infinite variations of that rocking chair — that's basically what we have with code"

> "making physical things from code usually involves writing code to tell a machine how to make something, which is still a whole lot less laborious than carpentry"

## Generative CSS with `nth-child` ([2m03s](https://www.youtube.com/watch?v=BZNKLvqh8ts&t=123s))

She demonstrates that generative art doesn't need JavaScript: a 10×10 grid of white squares, each containing a black circle twice as wide as its container, plus a few `nth-child` rules that flip the circle's position — and you get a series of strikingly different patterns from three lines of code.

> "repeatability is the key thing that makes generative art possible"

> "it's a visual result you didn't expect from three lines of code"

> "you don't need to get what is going on — it just looks pretty"

## Printing it onto a wall ([4m38s](https://www.youtube.com/watch?v=BZNKLvqh8ts&t=278s))

She printed the best CSS results on a desktop printer (10p per A4 in a copy shop), sandwiched them between two thin sheets of acrylic, and hung them on her studio wall with binder clips and a nail. Most accessible "physical generative art" you can make: 20 lines of CSS and a stationery cupboard.

> "every time I open the door, it made me so, so happy"

> "I think the physical presence of having something you've made decorated your space is really powerful, and it clearly doesn't have to cost a lot"

> "computers are constantly mode-switching... there is no permanence in what you're seeing on the screen"

## Pen plotting with AxiDraw ([6m42s](https://www.youtube.com/watch?v=BZNKLvqh8ts&t=402s))

Pen plotters fell out of favour in the 80s when inkjet got cheap, but generative-art Twitter has rediscovered them. The AxiDraw is the gold standard (£550 for the A3 model). The output has the same digital precision as a printout but with the irreducible imperfections of a physical pen — over-inking on contact, slight wobble, paper-grain interactions.

> "you can have a very detailed millimetre-perfect drawing yet you get the spots where the pen over inks when it hits the paper... and I think that's really beautiful"

> "when you look at a piece for a pen plotter, you can feel the hours that have gone into it"

> "test everything on the rubbish paper first"

## `canvas2svg` for vector outputs ([9m48s](https://www.youtube.com/watch?v=BZNKLvqh8ts&t=588s))

Canvas is a raster output; pen plotters and laser cutters want vectors. The `canvas2svg` npm package gives you a drop-in 2D-context replacement that *also* records every drawing call into an SVG, so the same JavaScript that paints to canvas in the browser produces the SVG file the plotter needs.

> "the canvas element is a raster output, so you can right-click it and save it... but you need a vector format to tell the pen where to go"

> "you just define a context with the same width and height that you would have for your canvas, and it has the same methods of the 2D canvas rendering context — so you treat it exactly the same"

> "this works from node canvas — if you want to do it from the server, I don't know why you want to do that but you can"

## Laser-cut jigsaw puzzles ([11m56s](https://www.youtube.com/watch?v=BZNKLvqh8ts&t=716s))

She's been spending weekends generating unique jigsaw puzzles where both the artwork *and* the cut pattern are algorithmically generated. Most jigsaws use a metal die stamp shared across thousands of puzzles; laser cutting lets every puzzle be unique, with the design constraint of "every piece is recognisable, but pieces group obviously".

> "the challenge of designing jigsaws is about balancing simplicity and complexity in the design"

> "I don't know if anyone has written an algorithm to generate random jigsaw puzzles? This is what you spend your weekends doing, it's genuinely so much fun"

> "the alternative with that is laser cutting"

## Materials, etching and scanner art ([15m32s](https://www.youtube.com/watch?v=BZNKLvqh8ts&t=932s))

Different materials behave very differently in a laser cutter — paper cuts cleanly but is too delicate to handle once cut; foam board's foam melts faster than its card, producing odd depth-effects; MDF is consistent through its thickness but produces smoke that stains printed faces. The cross-domain trick is laser-etching a paper drawing into wood, scanning it back into the digital space, and using that round trip as the design.

> "if ever you're doing laser cutting, try whatever materials you have around — I'm sure you will get interesting results"

> "I made some sort of spilling algorithm to see how the water disperses among the water ways — and I laser-cut it out of paper"

> "get access at hackspace, university, or pay-by-the-hour facilities... laser cutters are exorbitantly expensive"

## Hexatope: Game of Life on hexagons ([20m08s](https://www.youtube.com/watch?v=BZNKLvqh8ts&t=1208s))

Her favourite project, *Hexatope*, started as a Computational Arts MSc final piece — Conway's Game of Life played on a hexagonal grid, where each active cell draws lines connecting it to its active neighbours using glyphs borrowed from the *Generative Gestaltung* book. After adding creator and destroyer cells, double-line variants and mouse interaction to draw the seed pattern by hand, she realised she'd accidentally made jewellery.

> "I love hexagons — they have more sides, that will make this more interesting"

> "I introduced the creator-destroyer relationship — Game of Life was happening a bit too quickly"

> "I kind of got to this point of being like, oh no, I've made jewellery!"

## From canvas to silver jewellery ([28m51s](https://www.youtube.com/watch?v=BZNKLvqh8ts&t=1731s))

The production pipeline: rewrite the canvas app in Three.js for a 3D wireframe, export the resulting model as an STL with a Three.js exporter, print it in the wax-castable resin on a Formlabs Form 2, then run it through the conventional centrifugal lost-wax casting process to produce a sterling-silver original.

> "you can export STL files straight from Three.js — this is really mind-blowing"

> "as JavaScript developers... you don't need to touch a Sketchup or Blender — you can do 3D modelling in the browser and have it print out"

> "this is how 99% of jewellery is made, by the way"

## Mass customisation and the future ([39m18s](https://www.youtube.com/watch?v=BZNKLvqh8ts&t=2358s))

A short tour of the rest of the field: *Nervous System* in upstate New York (generative jewellery and jigsaws inspired by nature), Unmade (mass-customised knitwear), and MIT's 3D printer for glass — which she flags as the most exciting development in the space because "eventually we'll be able to 3D-print literally anything."

> "nervous system... 3D-print the mould, and then use traditional slip-casting techniques to make the thing"

> "MIT has a fricking 3D printer for glass which is bananas"

> "eventually we will be able to 3D print literally anything, and I'm really excited for that"

---

Charlotte Dann walks you across the bridge from generative code to physical objects, starting with three lines of `nth-child` CSS printed at a copy shop and ending with a sterling-silver pendant cast from a browser sketch. Along the way she shows pen plotters with their beautiful ink wobble, laser-cut jigsaws where every piece is unique, and the two practical magic tricks that unlock the pipeline: `canvas2svg` for vector output and Three.js's STL exporter for 3D printing. The headline project, *Hexatope*, runs Conway's Game of Life on hexagons until it accidentally becomes jewellery. Everything here, any developer can start tomorrow.
