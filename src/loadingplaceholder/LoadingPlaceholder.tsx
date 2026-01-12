import React from 'react';

import { BaseComponentProps } from '..';

import './LoadingPlaceholder.scss';

// SimCity loading messages! https://gist.github.com/erikcox/7e96d031d00d7ecb1a2f
const MESSAGES = [
	'Adding Hidden Agendas',
	'Adjusting Bell Curves',
	'Aesthesizing Industrial Areas',
	'Aligning Covariance Matrices',
	'Applying Feng Shui Shaders',
	'Applying Theatre Soda Layer',
	'Asserting Packed Exemplars',
	'Attempting to Lock Back-Buffer',
	'Binding Sapling Root System',
	'Building Data Trees',
	'Bureacritizing Bureaucracies',
	'Calculating Inverse Probability Matrices',
	'Calculating Llama Expectoration Trajectory',
	'Calibrating Blue Skies',
	'Charging Ozone Layer',
	'Coalescing Cloud Formations',
	'Cohorting Exemplars',
	'Collecting Meteor Particles',
	'Compounding Inert Tessellations',
	'Compressing Fish Files',
	'Computing Optimal Bin Packing',
	'Concatenating Sub-Contractors',
	'Containing Existential Buffer',
	'Debunching Unionized Commercial Services',
	'Deciding What Message to Display Next',
	'Decomposing Singular Values',
	'Decrementing Tectonic Plates',
	'Deleting Ferry Routes',
	'Depixelating Inner Mountain Surface Back Faces',
	'Deunionizing Bulldozers',
	'Dicing Models',
	'Diluting Livestock Nutrition Variables',
	'Downloading Satellite Terrain Data',
	'Exposing Flash Variables to Streak System',
	'Extracting Resources',
	'Flushing Pipe Network',
	'Gathering Particle Sources',
	'Generating Jobs',
	'Gesticulating Mimes',
	'Graphing Whale Migration',
	'Hiding Willio Webnet Mask',
	'Increasing Accuracy of RCI Simulators',
	'Increasing Magmafacation',
	'Initializing My Sim Tracking Mechanism',
	'Initializing Robotic Click-Path AI',
	'Inserting Sublimated Messages',
	'Integrating Curves',
	'Integrating Illumination Form Factors',
	'Integrating Population Graphs',
	'Iterating Cellular Automata',
	'Lecturing Errant Subsystems',
	'Modeling Object Components',
	'Mopping Occupant Leaks',
	'Normalizing Power',
	'Obfuscating Quigley Matrix',
	'Partitioning Singularities',
	'Perturbing Matrices',
	'Polishing Water Highlights',
	'Populating Lot Templates',
	'Preparing Sprites for Random Walks',
	'Prioritizing Landmarks',
	'Projecting Law Enforcement Pastry Intake',
	'Realigning Alternate Time Frames',
	'Relaxing Splines',
	'Removing Road Network Speed Bumps',
	'Removing Texture Gradients',
	'Removing Vehicle Avoidance Behavior',
	'Reticulating Splines',
	'Retracting Phong Shader',
	'Retrieving from Back Store',
	'Reverse Engineering Image Consultant',
	'Routing Neural Network Infanstructure',
	'Scattering Rhino Food Sources',
	'Scrubbing Terrain',
	'Searching for Llamas',
	'Seeding Architecture Simulation Parameters',
	'Sequencing Particles',
	'Setting Advisor Moods',
	'Setting Inner Deity Indicators',
	'Setting Universal Physical Constants',
	'Sonically Enhancing Occupant-Free Timber',
	'Speculating Stock Market Indices',
	'Splatting Transforms',
	'Stratifying Ground Layers',
	'Sub-Sampling Water Data',
	'Synthesizing Gravity',
	'Synthesizing Wavelets',
	'Time-Compressing Simulator Clock',
	'Unable to Reveal Current Activity',
];

interface IProps extends BaseComponentProps {
	text?: string;
}

export default function LoadingPlaceholder(props: IProps) {
	return (
		<div id={props.id} className="loading-placeholder">
			<span className="text">{props.text || MESSAGES[Math.floor(Math.random() * (MESSAGES.length - 1))]}</span>
			<div></div>
			<div></div>
		</div>
	);
}
