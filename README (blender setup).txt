Download and Install Blender 2.83 LTS: https://www.blender.org/download/releases/2-83/
Download Latest Blender-to-MSFS addon toolkit: https://www.fsdeveloper.com/forum/resources/blender2msfs-toolkit.256/

"Install" the MSFS toolkit by opening Blender:
Then navigate the toolbar and click "edit" (top-left). 
Then "preferences" (bottom of list). 
Then "Add-ons" (left list). 
Then "Install...: (top-right).
Then navigate to the "MSFSToolkit.zip" file you just downloaded and click on that (must be in ".zip" format).
Double-check the Add-ons is enabled by clicked the check box next to "3D View: MSFSToolkit.

Go watch some blender tutorials and become familiar.

When you want to export to MSFS:
1. Ensure the "extended glTF 2.0 (.glb/.gtf) for MSFS is selected (NOT the default blender glTF).
2. Set format: "glTF Separate (.gltf + .bin + textures)"
3. Change the "Textures" directory to that of your "[insert_filepath_here]\T6A-MSFS-Project\PackageSources\SimObjects\Airplanes\t-6a\texture\" folder.

4. CURRENT SETTINGS FOR EXPORTING (check back for changes later):

MSFS------------------------------------
	Batch export LODS = false (unchecked) (not using LODS yet)
	Generate/Append XML file = false (not supported yet)
Include----------------------------------
	Selected Objects = false (auto export ALL scene objects vs. manually selecting only certain assets)
	Custom Properties = false
Transform-------------------------------
	Y+ Up = true (checked)
Geometry--------------------------------
	Apply Modifiers = true
	UVs = true
	Normals = true
	Tangents = false
	Vertex Colors = true
	Materials = true
	Images = Automatic
Animations-------------------------------
	Use Current Frame = false
Extensions------*IMPORTANT*-----
	ASOBO extensions = true

5. Navigate to "[insert_filepath_here]\T6A-MSFS-Project\PackageSources\SimObjects\Airplanes\t-6a\model\"6. 
6. Select the "SimpleAircraft_LOD00.gltf" (I'll change the name later)
7. EXPORT!
8. Open the "msfs-t-6a-project.xml" using MSFS [DEV MODE] toolbar
9. Click on the t-6a project in the MSFS DevMode Project GUI
10. Hit "Build package" in the MSFS DevMode Project GUI (bottom left)

rinse, wash, repeat!