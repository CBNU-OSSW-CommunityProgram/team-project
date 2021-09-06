export const virtualrealityCollection = {
	name: "Virtual Reality",
	areas: [
		{
			name: "3D Contents",
			skills: [
				{
					name: "Easy Course",
					description: {
						text: "Learn the capabilities of development about VR/AR Content",
						links: [
							["Learn about VR/AR", "http://www.medici-edu.co.kr/course/sub1.php?lst_code2=009"],
							["VR vs AR vs MR", "https://www.intel.co.kr/content/www/kr/ko/tech-tips-and-tricks/virtual-reality-vs-augmented-reality.html"],
						]
					},
					skills: [
						{
							name: "Unity",
							description: {
								text: "Learn about the basic use of Unity and C# programming to develop 3D Contents",
								links: [
									["Unity - Download", "https://unity3d.com/kr/get-unity/download"],
									["Unity - Getting Started", "https://unity.com/kr/learn/get-started"],
									["Unity - Learn", "https://www.udemy.com/ko/topic/unity/free/"],
									["C# - Learn", "http://www.csharpstudy.com/"],
								]
							}
						},
						{
							name: "Contents Develop",
							description: {
								text: "Develop VR contents for mobile by understanding the composition and characteristics of VR screens",
								links: [
									["VR - Getting Started", "https://docs.unity3d.com/Manual/VROverview.html"],
									["VR - Learn", "https://learn.unity.com/course/oculus-vr"],
									["AR - Getting Started", "https://docs.unity3d.com/Manual/AROverview.html"],
								]
							}
						},
						{
							name: "Photon network",
							description: {
								text: "Develop capability of network content and learn how to utilize the photon cloud engine",
								links: [
									["Photon network - Homepage", "https://www.photonengine.com/pun"],
									["Photon network - Setting", "https://doc.photonengine.com/ko-kr/pun/current/getting-started/initial-setup"],
									["Starting Photon in 5 Minutes", "https://doc.photonengine.com/en/server"],
								]
							}
						}
					]
				},


				{
					name: "Advanced Course",
					description: {
						text: "Learn Advanced Capabilities of Development about VR/AR Contents",
						links: [
							["Particle system - What is a particle system?", "https://docs.unity3d.com/kr/2019.4/Manual/class-ParticleSystem.html"],
							["Data - How to build and save data", "https://www.eminenture.com/blog/how-to-save-money-in-data-processing-build-bi-via-vr/"],
						]
					},
					skills: [
						{
							name: "High-end HMD",
							description: {
								text: "Learn how to develop VR content based on High-end HMD",
								links: [
									["High-end HMD - Introduction", "https://www.forbes.com/sites/charliefink/2018/07/05/new-xtal-5k-vr-hmd-beats-giants-to-high-end-enterprise/"],
									["Best HMD", "https://wear-studio.com/blog/prediction/the-best-hmd-the-battle-for-your-head-has-started/"],
								]
							}
						},
						{
							name: "VR Sound",
							description: {
								text: "Production of VR sound based on understanding the sound of virtual reality contents",
								links: [
									["Dolby Atmos: VR", "https://www.dolby.com/kr/ko/professional/content-creation/vr.html"],
									["Audio in VR: Importance of Sound in VR", "https://usv.edu/blog/virtual-reality-vr-sound-importance/"],
									["Sound in VR/AR", "https://www.futurelearn.com/info/courses/creating-the-amazing-engineering-the-future/0/steps/65304"],
									["VR Sound - Design", "https://developer.oculus.com/resources/audio-intro-sounddesign/"],
									["VR 360 Audio", "https://gaudiolab.com/tech-vr-360-audio/?lang=ko"],
								]
							}
						},
						{
							name: "ML-Agent",
							description: {
								text: "Learning ability to assign the artificial intelligence in content - using ML-Agent",
								links: [
									["What is Unity ML-Agent?", "https://unity.com/kr/products/machine-learning-agents"],
									["Github - Unity ML-Agent Toolkit", "https://github.com/Unity-Technologies/ml-agents"],
									["ML-Agent - Learn", "https://unity3dstudy.com/2020/08/21/MummyBasic-for-ML-Agents-01/"],
								]
							}
						},
						{
							name: "Visual Impact",
							description: {
								text: "Develop ability to maximize the visual effects of VR content by learning Shader Visual Effect Graph, PostProcessing",
								links: [
									["What is Visual Effect Graph?", "https://illu.tistory.com/1365"],
									["Integrate Shader Graph into a Visual Effect", "https://learn.unity.com/tutorial/integrate-shader-graph-into-visual-effect-graph"],
									["Post Processing - Setting", "https://learnandcreate.tistory.com/186"],
									["Github - Post Processing Stack", "https://github.com/Unity-Technologies/PostProcessing"],
									["Unity Post-Processing - Learn", "https://unity3dstudy.com/2020/05/28/PostProcessing/"]
								]
							}
						}
					]
				},
			]
		},



		{
			name:"Implement VR Contents",
			skills: [
				{
					name: "Set development environment",
					description: {
						text: "Learn how to set development environment before implementing VR contents",
						links: [
							["Application Setting for VR", "https://partner.steamgames.com/doc/features/steamvr/settings"],
							["How to Setup and Configure Remote Play", "https://www.amd.com/ko/support/kb/faq/dh-030"],
						]
					},
					skills: [
						{
							name: "Vive",
							description: {
								text: "Learn how to set production preferences based on Vive",
								links: [
									["HTC VIVE - Official Hompage", "https://www.vive.com/kr/"],
									["HTC VIVE - Download/Settings", "https://www.vive.com/kr/setup/"],
									["Vive Developers - Getting started", "https://developer.vive.com/us/"],
									["VIve - Tutorial for Unity", "https://www.raywenderlich.com/9189-htc-vive-tutorial-for-unity"] 
								]
							},
						},
						{
							name: "Oculus",
							description: {
								text: "Learn how to set production preferences based on Oculus",
								links: [
									["Oculus - Official Hompage", "https://www.oculus.com/?locale=ko_KR"],
									["Oculus - Download/Settings", "https://medium.com/javascript-scene/streamline-code-reviews-with-eslint-prettier-6fb817a6b51d"],
									["VR Development with Oculus", "https://www.unrealengine.com/en-US/onlinelearning-courses/vr-development-with-oculus-and-unreal-engine"]
								]
							},
						}
					]
				},


				{
					name: "VR Head Tracking",
					description: {
						text: "Process VR Head Tracking that matches user's eyes",
						links: [
							["How virtual reality positional tracking works", "https://venturebeat.com/2019/05/05/how-virtual-reality-positional-tracking-works/"],
							["How to add Head Tracking in Unity", "https://www.stereolabs.com/blog/adding-positional-tracking-unity/"],
						]
					}
				},


				{
					name: "XR",
					description: {
						text: "Learn about XR to implement the optimized UI which fits best",
						links: [
							["XR - Learn", "https://www.learnxr.io/"],
							["XR - Introduction", "https://www.coursera.org/learn/xr-introduction"],
							["XR - Tutorial/Train", "https://xrworldacademy.com/"],
						]
					}
				},


				{
					name: "UI",
					description: {
						text: "Learn how to implement the UI of VR Content",
						links: [
							["Best UI Practices for VR", "https://learn.unity.com/tutorial/unit-6-best-ui-practices-for-vr"],
							["Unity's UI System in VR - Oculus Developers", "https://developer.oculus.com/blog/unitys-ui-system-in-vr/?locale=ko_KR"],
							["UX/UI Design for VR", "https://www.wedesignx.com/knowledge/vr-ux-ui-human-ergonomics"],
						]
					},
					skills: [
						{
							name: "NGUI",
							description: {
								text: "Learn about NGUI system to implement XR and create UI",
								links: [
									["NGUI to Unity UI", "https://overworks.github.io/unity/2019/03/21/ngui-to-unity-ui.html"],
									["NGUI: Next-Gen UI kit", "http://www.tasharen.com/ngui/docs/index.html"],
								]
							}
						},
						{
							name: "UGUI",
							description: {
								text: "Learn about UGUI system to implement XR and create UI",
								links: [
									["Basic of UGUI", "https://learn.unity.com/tutorial/creating-basic-ui-elements"],
									["Github - Technologies/UGUI", "https://github.com/Unity-Technologies/uGUI"],
									["Functions of UGUI", "https://postpiglet.netlify.app/posts/unity-uguin/"]
								]
							}
						}
					]
				},
				{
					name: "MR",
					description: {
						text: "Develop content such as visual online manuals or maintenance instructions for industrial devices using MR Glass",
						links: [
							["Mixed Reality (MR)", "https://thirdeyegen.com/x2-smart-glasses"],
							["What is Mixed Reality?", "https://www.fi.edu/tech/what-is-mixed-reality"],
							["Unity and Windows Mixed Reality", "https://unity3d.com/kr/partners/microsoft/mixed-reality"],
							["AR and MR Headsets and Glasses", "https://arpost.co/2020/01/13/ar-and-mr-headsets-and-glasses-2019-and-2020-overview/"]
						]
					}
				}
			]
		}
	]
}