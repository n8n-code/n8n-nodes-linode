import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { accountDescription } from './resources/account';
import { databasesDescription } from './resources/databases';
import { domainsDescription } from './resources/domains';
import { imagesDescription } from './resources/images';
import { linodeInstancesDescription } from './resources/linode-instances';
import { linodeTypesDescription } from './resources/linode-types';
import { linodeKubernetesEngineLkeDescription } from './resources/linode-kubernetes-engine-lke';
import { longviewDescription } from './resources/longview';
import { managedDescription } from './resources/managed';
import { networkingDescription } from './resources/networking';
import { nodeBalancersDescription } from './resources/node-balancers';
import { objectStorageDescription } from './resources/object-storage';
import { profileDescription } from './resources/profile';
import { regionsDescription } from './resources/regions';
import { stackScriptsDescription } from './resources/stack-scripts';
import { supportDescription } from './resources/support';
import { tagsDescription } from './resources/tags';
import { volumesDescription } from './resources/volumes';

export class Linode implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Linode',
                name: 'N8nDevLinode',
                icon: { light: 'file:./linode.svg', dark: 'file:./linode.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Introduction',
                defaults: { name: 'Linode' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevLinodeApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Account",
					"value": "Account",
					"description": "Use the Account endpoints to manage user settings, billing, and payments. You can also initiate and maintain OAuth client application authentication, enable the Linode Managed service, and create new users on your account."
				},
				{
					"name": "Account",
					"value": "Account",
					"description": ""
				},
				{
					"name": "Databases",
					"value": "Databases",
					"description": "Managed Databases is Linode's fully-managed, high-performance database service. Use the Managed Databases endpoints to create and manage database clusters."
				},
				{
					"name": "Domains",
					"value": "Domains",
					"description": "Use the Domains endpoints to create and manage domains and domain records on your account."
				},
				{
					"name": "Images",
					"value": "Images",
					"description": "Use the Images endpoints to capture, store, and manage custom Linode images."
				},
				{
					"name": "Linode Instances",
					"value": "Linode Instances",
					"description": "Use the Linode Instances endpoints to create, configure, and manage your Linode instances. You can also manage the Linode Backup service; maintain and manage configuration profiles; create and maintain disks, intiate a host migration; view Linode Instance statistics; and more."
				},
				{
					"name": "Linode Types",
					"value": "Linode Types",
					"description": "Use the Linode Types endpoints to retrieve information about Linode plan types, including pricing information, hardware resources, and network transfer allotment."
				},
				{
					"name": "Linode Kubernetes Engine LKE",
					"value": "Linode Kubernetes Engine LKE",
					"description": "Linode Kubernetes Engine (LKE) is Linode's managed Kubernetes service. Use the LKE endpoints to create and manage Kubernetes clusters and their associated Node Pools."
				},
				{
					"name": "Longview",
					"value": "Longview",
					"description": "Longview is Linode's system-level monitoring and graphing service. Use the Longview endpoints to manage your Longview subscription and plan and to create and maintain Longview clients."
				},
				{
					"name": "Managed",
					"value": "Managed",
					"description": "Managed is Linode's incident response service. Use the Managed endpoints to register a service to be monitored by the Managed Service team, provide secure access to your managed services,  view information about detected issues, and more."
				},
				{
					"name": "Networking",
					"value": "Networking",
					"description": "Use the Networking endpoints to view all IP addresses on your account, reorganize assigned IPv4 addresses, update RDNS, and configure IP sharing."
				},
				{
					"name": "Node Balancers",
					"value": "Node Balancers",
					"description": "NodeBalancers is Linode's load balancing service. Use the NodeBalancers endpoints to create and manage NodeBalancers. You can also create and maintain configurations; create and maintain nodes, and view statistics."
				},
				{
					"name": "Object Storage",
					"value": "Object Storage",
					"description": "Object Storage is Linode's S3-compatible data storage service. Use the Object Storage endpoints to create and maintaining buckets, add and remove objects from buckets, create and maintain Object Storage keys, and cancel the Object Storage service."
				},
				{
					"name": "Profile",
					"value": "Profile",
					"description": "Use the Profile endpoints to manage your Linode user profile preferences and security settings. This includes creating and maintaining personal access tokens, creating and maintaining SSH keys, confirming and enabling two-factor authentication, and updating user and profile preferences."
				},
				{
					"name": "Regions",
					"value": "Regions",
					"description": "Use the Regions endpoints to view information about the various Linode data center regions, including the service capabilities for each region, country, status, and more."
				},
				{
					"name": "Stack Scripts",
					"value": "Stack Scripts",
					"description": "Linode StackScripts allow you to create reusable scripts to configure new Linode instances. Use the StackScripts endpoints to create and manage StackScripts on your account."
				},
				{
					"name": "Support",
					"value": "Support",
					"description": "Use the Support endpoints to open, view, and close Linode Support tickets. You can also create and manage your Support ticket replies."
				},
				{
					"name": "Tags",
					"value": "Tags",
					"description": "Tags allow you to organize and group your various Linode services. Use the Tags endpoints to create, assign, and delete your account tags."
				},
				{
					"name": "Volumes",
					"value": "Volumes",
					"description": "Volumes is Linode's block storage service. Use the Volumes endpoints to create, attach, and manage your account Volumes."
				}
			],
			"default": ""
		},
		...accountDescription,
		...databasesDescription,
		...domainsDescription,
		...imagesDescription,
		...linodeInstancesDescription,
		...linodeTypesDescription,
		...linodeKubernetesEngineLkeDescription,
		...longviewDescription,
		...managedDescription,
		...networkingDescription,
		...nodeBalancersDescription,
		...objectStorageDescription,
		...profileDescription,
		...regionsDescription,
		...stackScriptsDescription,
		...supportDescription,
		...tagsDescription,
		...volumesDescription
                ],
        };
}
