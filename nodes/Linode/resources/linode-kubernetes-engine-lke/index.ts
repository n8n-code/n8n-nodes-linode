import type { INodeProperties } from 'n8n-workflow';

export const linodeKubernetesEngineLkeDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					]
				}
			},
			"options": [
				{
					"name": "Get LKE Clusters",
					"value": "Get LKE Clusters",
					"action": "Kubernetes Clusters List",
					"description": "Lists current Kubernetes clusters available on your account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lke/clusters"
						}
					}
				},
				{
					"name": "Create LKE Cluster",
					"value": "Create LKE Cluster",
					"action": "Kubernetes Cluster Create",
					"description": "Creates a Kubernetes cluster. The Kubernetes cluster will be created\nasynchronously. You can use the events system to determine when the\nKubernetes cluster is ready to use. Please note that it often takes 2-5 minutes before the\n[Kubernetes API server endpoint](/docs/api/linode-kubernetes-engine-lke/#kubernetes-api-endpoints-list) and\nthe [Kubeconfig file](/docs/api/linode-kubernetes-engine-lke/#kubeconfig-view) for the new cluster\nare ready.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/lke/clusters"
						}
					}
				},
				{
					"name": "Delete LKE Cluster",
					"value": "Delete LKE Cluster",
					"action": "Kubernetes Cluster Delete",
					"description": "Deletes a Cluster you have permission to `read_write`.\n\n**Deleting a Cluster is a destructive action and cannot be undone.**\n\nDeleting a Cluster:\n  - Deletes all Linodes in all pools within this Kubernetes cluster\n  - Deletes all supporting Kubernetes services for this Kubernetes\n    cluster (API server, etcd, etc)\n  - Deletes all NodeBalancers created by this Kubernetes cluster\n  - Does not delete any of the volumes created by this Kubernetes\n    cluster\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/lke/clusters/{{$parameter[\"clusterId\"]}}"
						}
					}
				},
				{
					"name": "Get LKE Cluster",
					"value": "Get LKE Cluster",
					"action": "Kubernetes Cluster View",
					"description": "Get a specific Cluster by ID.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lke/clusters/{{$parameter[\"clusterId\"]}}"
						}
					}
				},
				{
					"name": "Put LKE Cluster",
					"value": "Put LKE Cluster",
					"action": "Kubernetes Cluster Update",
					"description": "Updates a Kubernetes cluster.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/lke/clusters/{{$parameter[\"clusterId\"]}}"
						}
					}
				},
				{
					"name": "Get LKE Cluster API Endpoints",
					"value": "Get LKE Cluster API Endpoints",
					"action": "Kubernetes API Endpoints List",
					"description": "List the Kubernetes API server endpoints for this cluster. Please note that it often takes 2-5 minutes before the endpoint is ready after first [creating a new cluster](/docs/api/linode-kubernetes-engine-lke/#kubernetes-cluster-create).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lke/clusters/{{$parameter[\"clusterId\"]}}/api-endpoints"
						}
					}
				},
				{
					"name": "Get LKE Cluster Dashboard",
					"value": "Get LKE Cluster Dashboard",
					"action": "Kubernetes Cluster Dashboard URL View",
					"description": "Get a [Kubernetes Dashboard](https://github.com/kubernetes/dashboard) access URL for this Cluster, which enables performance of administrative tasks through a web interface.\n\nDashboards are installed for Clusters by default.\n\nTo access the Cluster Dashboard login prompt, enter the URL in a web browser. Select either **Token** or **Kubeconfig** authentication, then select **Sign in**.\n\nFor additional guidance on using the Cluster Dashboard, see the [Navigating the Cluster Dashboard](/docs/guides/using-the-kubernetes-dashboard-on-lke/#navigating-the-cluster-dashboard) section of our guide on [Using the Kubernetes Dashboard on LKE](/docs/guides/using-the-kubernetes-dashboard-on-lke/).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lke/clusters/{{$parameter[\"clusterId\"]}}/dashboard"
						}
					}
				},
				{
					"name": "Delete LKE Cluster Kubeconfig",
					"value": "Delete LKE Cluster Kubeconfig",
					"action": "Kubeconfig Delete",
					"description": "Delete and regenerate the Kubeconfig file for a Cluster.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/lke/clusters/{{$parameter[\"clusterId\"]}}/kubeconfig"
						}
					}
				},
				{
					"name": "Get LKE Cluster Kubeconfig",
					"value": "Get LKE Cluster Kubeconfig",
					"action": "Kubeconfig View",
					"description": "Get the Kubeconfig file for a Cluster. Please note that it often takes 2-5 minutes before\nthe Kubeconfig file is ready after first [creating a new cluster](/docs/api/linode-kubernetes-engine-lke/#kubernetes-cluster-create).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lke/clusters/{{$parameter[\"clusterId\"]}}/kubeconfig"
						}
					}
				},
				{
					"name": "Delete LKE Cluster Node",
					"value": "Delete LKE Cluster Node",
					"action": "Node Delete",
					"description": "Deletes a specific Node from a Node Pool.\n\n**Deleting a Node is a destructive action and cannot be undone.**\n\nDeleting a Node will reduce the size of the Node Pool it belongs to.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/lke/clusters/{{$parameter[\"clusterId\"]}}/nodes/{{$parameter[\"nodeId\"]}}"
						}
					}
				},
				{
					"name": "Get LKE Cluster Node",
					"value": "Get LKE Cluster Node",
					"action": "Node View",
					"description": "Returns the values for a specified node object.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lke/clusters/{{$parameter[\"clusterId\"]}}/nodes/{{$parameter[\"nodeId\"]}}"
						}
					}
				},
				{
					"name": "Post LKE Cluster Node Recycle",
					"value": "Post LKE Cluster Node Recycle",
					"action": "Node Recycle",
					"description": "Recycles an individual Node in the designated Kubernetes Cluster. The Node will be deleted\nand replaced with a new Linode, which may take a few minutes. Replacement Nodes are\ninstalled with the latest available patch for the Cluster's Kubernetes Version.\n\n**Any local storage on deleted Linodes (such as \"hostPath\" and \"emptyDir\" volumes, or \"local\" PersistentVolumes) will be erased.**\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/lke/clusters/{{$parameter[\"clusterId\"]}}/nodes/{{$parameter[\"nodeId\"]}}/recycle"
						}
					}
				},
				{
					"name": "Get LKE Cluster Pools",
					"value": "Get LKE Cluster Pools",
					"action": "Node Pools List",
					"description": "Returns all active Node Pools on a Kubernetes cluster.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lke/clusters/{{$parameter[\"clusterId\"]}}/pools"
						}
					}
				},
				{
					"name": "Post LKE Cluster Pools",
					"value": "Post LKE Cluster Pools",
					"action": "Node Pool Create",
					"description": "Creates a new Node Pool for the designated Kubernetes cluster.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/lke/clusters/{{$parameter[\"clusterId\"]}}/pools"
						}
					}
				},
				{
					"name": "Delete LKE Node Pool",
					"value": "Delete LKE Node Pool",
					"action": "Node Pool Delete",
					"description": "Delete a specific Node Pool from a Kubernetes cluster.\n\n**Deleting a Node Pool is a destructive action and cannot be undone.**\n\nDeleting a Node Pool will delete all Linodes within that Pool.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/lke/clusters/{{$parameter[\"clusterId\"]}}/pools/{{$parameter[\"poolId\"]}}"
						}
					}
				},
				{
					"name": "Get LKE Node Pool",
					"value": "Get LKE Node Pool",
					"action": "Node Pool View",
					"description": "Get a specific Node Pool by ID.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lke/clusters/{{$parameter[\"clusterId\"]}}/pools/{{$parameter[\"poolId\"]}}"
						}
					}
				},
				{
					"name": "Put LKE Node Pool",
					"value": "Put LKE Node Pool",
					"action": "Node Pool Update",
					"description": "Updates a Node Pool's count and autoscaler configuration.\n\nLinodes will be created or deleted to match changes to the Node Pool's count.\n\n**Any local storage on deleted Linodes (such as \"hostPath\" and \"emptyDir\" volumes, or \"local\" PersistentVolumes) will be erased.**\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/lke/clusters/{{$parameter[\"clusterId\"]}}/pools/{{$parameter[\"poolId\"]}}"
						}
					}
				},
				{
					"name": "Post LKE Cluster Pool Recycle",
					"value": "Post LKE Cluster Pool Recycle",
					"action": "Node Pool Recycle",
					"description": "Recycles a Node Pool for the designated Kubernetes Cluster. All Linodes within the Node Pool will be deleted\nand replaced with new Linodes on a rolling basis, which may take several minutes. Replacement Nodes are\ninstalled with the latest available patch for the Cluster's Kubernetes Version.\n\n**Any local storage on deleted Linodes (such as \"hostPath\" and \"emptyDir\" volumes, or \"local\" PersistentVolumes) will be erased.**\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/lke/clusters/{{$parameter[\"clusterId\"]}}/pools/{{$parameter[\"poolId\"]}}/recycle"
						}
					}
				},
				{
					"name": "Post LKE Cluster Recycle",
					"value": "Post LKE Cluster Recycle",
					"action": "Cluster Nodes Recycle",
					"description": "Recycles all nodes in all pools of a designated Kubernetes Cluster. All Linodes within the Cluster will be deleted\nand replaced with new Linodes on a rolling basis, which may take several minutes. Replacement Nodes are\ninstalled with the latest available [patch version](https://github.com/kubernetes/community/blob/master/contributors/design-proposals/release/versioning.md#kubernetes-release-versioning) for the Cluster's current Kubernetes minor release.\n\n**Any local storage on deleted Linodes (such as \"hostPath\" and \"emptyDir\" volumes, or \"local\" PersistentVolumes) will be erased.**\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/lke/clusters/{{$parameter[\"clusterId\"]}}/recycle"
						}
					}
				},
				{
					"name": "Post LKE Cluster Regenerate",
					"value": "Post LKE Cluster Regenerate",
					"action": "Kubernetes Cluster Regenerate",
					"description": "Regenerate the Kubeconfig file and/or the service account token for a Cluster.\n\nThis is a helper command that allows performing both the [Kubeconfig Delete](#kubeconfig-delete) and the [Service Token Delete](#service-token-delete) actions with a single request.\n\nWhen using this command, at least one of `kubeconfig` or `servicetoken` is required.\n\n**Note**: When regenerating a service account token, the Cluster's control plane components and Linode CSI drivers are also restarted and configured with the new token. High Availability Clusters should not experience any disruption, while standard Clusters may experience brief control plane downtime while components are restarted.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/lke/clusters/{{$parameter[\"clusterId\"]}}/regenerate"
						}
					}
				},
				{
					"name": "Post LKEC Service Token Delete",
					"value": "Post LKEC Service Token Delete",
					"action": "Service Token Delete",
					"description": "Delete and regenerate the service account token for a Cluster.\n\n**Note**: When regenerating a service account token, the Cluster's control plane components and Linode CSI drivers are also restarted and configured with the new token. High Availability Clusters should not experience any disruption, while standard Clusters may experience brief control plane downtime while components are restarted.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/lke/clusters/{{$parameter[\"clusterId\"]}}/servicetoken"
						}
					}
				},
				{
					"name": "Get LKE Versions",
					"value": "Get LKE Versions",
					"action": "Kubernetes Versions List",
					"description": "List the Kubernetes versions available for deployment to a Kubernetes cluster.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lke/versions"
						}
					}
				},
				{
					"name": "Get LKE Version",
					"value": "Get LKE Version",
					"action": "Kubernetes Version View",
					"description": "View a Kubernetes version available for deployment to a Kubernetes cluster.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/lke/versions/{{$parameter[\"version\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /lke/clusters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Get LKE Clusters"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Get LKE Clusters"
					]
				}
			}
		},
		{
			"displayName": "POST /lke/clusters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Create LKE Cluster"
					]
				}
			}
		},
		{
			"displayName": "Control Plane",
			"name": "control_plane",
			"type": "json",
			"default": "{\n  \"high_availability\": true\n}",
			"description": "Defines settings for the Kubernetes Control Plane. Allows for the enabling of High Availability (HA) for Control Plane Components. Enabling High Availability for LKE is an **irreversible** change.\n",
			"routing": {
				"send": {
					"property": "control_plane",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Create LKE Cluster"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "K 8 S Version",
			"name": "k8s_version",
			"type": "string",
			"default": "1.25",
			"description": "The desired Kubernetes version for this Kubernetes cluster in the format of &lt;major&gt;.&lt;minor&gt;, and the latest supported patch version will be deployed.\n",
			"routing": {
				"send": {
					"property": "k8s_version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Create LKE Cluster"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "lkecluster12345",
			"description": "This Kubernetes cluster's unique label for display purposes only.\nLabels have the following constraints:\n\n  * UTF-8 characters will be returned by the API using escape\n    sequences of their Unicode code points. For example, the\n    Japanese character *か* is 3 bytes in UTF-8 (`0xE382AB`). Its\n    Unicode code point is 2 bytes (`0x30AB`). APIv4 supports this\n    character and the API will return it as the escape sequence\n    using six 1 byte characters which represent 2 bytes of Unicode\n    code point (`\"\\u30ab\"`).\n  * 4 byte UTF-8 characters are not supported.\n  * If the label is entirely composed of UTF-8 characters, the API\n    response will return the code points using up to 193 1 byte\n    characters.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Create LKE Cluster"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Node Pools",
			"name": "node_pools",
			"type": "json",
			"default": "[\n  {\n    \"autoscaler\": {\n      \"enabled\": true,\n      \"max\": 12,\n      \"min\": 3\n    },\n    \"count\": 6,\n    \"disks\": [\n      {\n        \"size\": 1024,\n        \"type\": \"ext-4\"\n      }\n    ],\n    \"tags\": [\n      \"example tag\",\n      \"another example\"\n    ],\n    \"type\": \"g6-standard-4\"\n  }\n]",
			"routing": {
				"send": {
					"property": "node_pools",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Create LKE Cluster"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Region",
			"name": "region",
			"type": "string",
			"default": "us-central",
			"description": "This Kubernetes cluster's location.",
			"routing": {
				"send": {
					"property": "region",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Create LKE Cluster"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"ecomm\",\n  \"blogs\"\n]",
			"description": "An array of tags applied to the Kubernetes cluster. Tags are for organizational purposes only.\n",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Create LKE Cluster"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Create LKE Cluster"
					]
				}
			}
		},
		{
			"displayName": "DELETE /lke/clusters/{clusterId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Delete LKE Cluster"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Delete LKE Cluster"
					]
				}
			}
		},
		{
			"displayName": "GET /lke/clusters/{clusterId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Get LKE Cluster"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Get LKE Cluster"
					]
				}
			}
		},
		{
			"displayName": "PUT /lke/clusters/{clusterId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Put LKE Cluster"
					]
				}
			}
		},
		{
			"displayName": "Control Plane",
			"name": "control_plane",
			"type": "json",
			"default": "{\n  \"high_availability\": true\n}",
			"description": "Defines settings for the Kubernetes Control Plane. Allows for the enabling of High Availability (HA) for Control Plane Components.\n\nEnabling High Availability for LKE is an **irreversible** change.\n\nWhen upgrading pre-existing LKE clusters to use the HA Control Plane, the following changes will additionally occur:\n\n- All nodes will be deleted and new nodes will be created to replace them.\n\n- Any local storage (such as `hostPath` volumes) will be erased.\n\n- The upgrade process may take several minutes to complete, as nodes will be replaced on a rolling basis.\n",
			"routing": {
				"send": {
					"property": "control_plane",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Put LKE Cluster"
					]
				}
			}
		},
		{
			"displayName": "K 8 S Version",
			"name": "k8s_version",
			"type": "string",
			"default": "",
			"description": "The desired Kubernetes version for this Kubernetes cluster in the format of &lt;major&gt;.&lt;minor&gt;. New and recycled Nodes in this cluster will be installed with the latest available patch for the Cluster's Kubernetes version.\n\nWhen upgrading the Kubernetes version, only the next latest minor version following the current version can be deployed. For example, a cluster with Kubernetes version 1.19 can be upgraded to version 1.20, but not directly to 1.21.\n\nThe Kubernetes version of a cluster can not be downgraded.\n",
			"routing": {
				"send": {
					"property": "k8s_version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Put LKE Cluster"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "lkecluster12345",
			"description": "This Kubernetes cluster's unique label for display purposes only.\nLabels have the following constraints:\n\n  * UTF-8 characters will be returned by the API using escape\n    sequences of their Unicode code points. For example, the\n    Japanese character *か* is 3 bytes in UTF-8 (`0xE382AB`). Its\n    Unicode code point is 2 bytes (`0x30AB`). APIv4 supports this\n    character and the API will return it as the escape sequence\n    using six 1 byte characters which represent 2 bytes of Unicode\n    code point (`\"\\u30ab\"`).\n  * 4 byte UTF-8 characters are not supported.\n  * If the label is entirely composed of UTF-8 characters, the API\n    response will return the code points using up to 193 1 byte\n    characters.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Put LKE Cluster"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"prod\",\n  \"monitoring\",\n  \"ecomm\",\n  \"blog\"\n]",
			"description": "An array of tags applied to the Kubernetes cluster. Tags are for organizational purposes only. To delete a tag, exclude it from your `tags` array.\n",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Put LKE Cluster"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Put LKE Cluster"
					]
				}
			}
		},
		{
			"displayName": "GET /lke/clusters/{clusterId}/api-endpoints",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Get LKE Cluster API Endpoints"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Get LKE Cluster API Endpoints"
					]
				}
			}
		},
		{
			"displayName": "GET /lke/clusters/{clusterId}/dashboard",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Get LKE Cluster Dashboard"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Get LKE Cluster Dashboard"
					]
				}
			}
		},
		{
			"displayName": "DELETE /lke/clusters/{clusterId}/kubeconfig",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Delete LKE Cluster Kubeconfig"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Delete LKE Cluster Kubeconfig"
					]
				}
			}
		},
		{
			"displayName": "GET /lke/clusters/{clusterId}/kubeconfig",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Get LKE Cluster Kubeconfig"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Get LKE Cluster Kubeconfig"
					]
				}
			}
		},
		{
			"displayName": "DELETE /lke/clusters/{clusterId}/nodes/{nodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Delete LKE Cluster Node"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Delete LKE Cluster Node"
					]
				}
			}
		},
		{
			"displayName": "GET /lke/clusters/{clusterId}/nodes/{nodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Get LKE Cluster Node"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Get LKE Cluster Node"
					]
				}
			}
		},
		{
			"displayName": "POST /lke/clusters/{clusterId}/nodes/{nodeId}/recycle",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Post LKE Cluster Node Recycle"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Post LKE Cluster Node Recycle"
					]
				}
			}
		},
		{
			"displayName": "GET /lke/clusters/{clusterId}/pools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Get LKE Cluster Pools"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Get LKE Cluster Pools"
					]
				}
			}
		},
		{
			"displayName": "POST /lke/clusters/{clusterId}/pools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Post LKE Cluster Pools"
					]
				}
			}
		},
		{
			"displayName": "Autoscaler",
			"name": "autoscaler",
			"type": "json",
			"default": "{\n  \"enabled\": true,\n  \"max\": 12,\n  \"min\": 3\n}",
			"description": "When enabled, the number of nodes autoscales within the defined minimum and maximum values.\n\nWhen making a request, `max` and `min` require each other.\n",
			"routing": {
				"send": {
					"property": "autoscaler",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Post LKE Cluster Pools"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "count",
			"type": "number",
			"default": 6,
			"description": "The number of nodes in the Node Pool.",
			"routing": {
				"send": {
					"property": "count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Post LKE Cluster Pools"
					]
				}
			}
		},
		{
			"displayName": "Disks",
			"name": "disks",
			"type": "json",
			"default": "[\n  {\n    \"size\": 1024,\n    \"type\": \"ext-4\"\n  }\n]",
			"description": "**Note**: This field should be omitted except for special use cases. The disks specified here are\npartitions in *addition* to the primary partition and reduce the size of the primary partition,\nwhich can lead to stability problems for the Node.\n\nThis Node Pool's custom disk layout. Each item in this array will create a new disk\npartition for each node in this Node Pool.\n\n  * The custom disk layout is applied to each node in this Node Pool.\n  * The maximum number of custom disk partitions that can be configured is 7.\n  * Once the requested disk paritions are allocated, the remaining disk space is allocated to the node's boot disk.\n  * A Node Pool's custom disk layout is immutable over the lifetime of the Node Pool.\n",
			"routing": {
				"send": {
					"property": "disks",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Post LKE Cluster Pools"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"example tag\",\n  \"another example\"\n]",
			"description": "An array of tags applied to this object. Tags are for organizational purposes only.\n",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Post LKE Cluster Pools"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "g6-standard-4",
			"description": "The Linode Type for all of the nodes in the Node Pool.",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Post LKE Cluster Pools"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Post LKE Cluster Pools"
					]
				}
			}
		},
		{
			"displayName": "DELETE /lke/clusters/{clusterId}/pools/{poolId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Delete LKE Node Pool"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Delete LKE Node Pool"
					]
				}
			}
		},
		{
			"displayName": "GET /lke/clusters/{clusterId}/pools/{poolId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Get LKE Node Pool"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Get LKE Node Pool"
					]
				}
			}
		},
		{
			"displayName": "PUT /lke/clusters/{clusterId}/pools/{poolId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Put LKE Node Pool"
					]
				}
			}
		},
		{
			"displayName": "Autoscaler",
			"name": "autoscaler",
			"type": "json",
			"default": "{\n  \"enabled\": true,\n  \"max\": 12,\n  \"min\": 3\n}",
			"description": "When enabled, the number of nodes autoscales within the defined minimum and maximum values.\n\nWhen making a request, `max` and `min` require each other.\n",
			"routing": {
				"send": {
					"property": "autoscaler",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Put LKE Node Pool"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "count",
			"type": "number",
			"default": 6,
			"description": "The number of nodes in the Node Pool.",
			"routing": {
				"send": {
					"property": "count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Put LKE Node Pool"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Put LKE Node Pool"
					]
				}
			}
		},
		{
			"displayName": "POST /lke/clusters/{clusterId}/pools/{poolId}/recycle",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Post LKE Cluster Pool Recycle"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Post LKE Cluster Pool Recycle"
					]
				}
			}
		},
		{
			"displayName": "POST /lke/clusters/{clusterId}/recycle",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Post LKE Cluster Recycle"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Post LKE Cluster Recycle"
					]
				}
			}
		},
		{
			"displayName": "POST /lke/clusters/{clusterId}/regenerate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Post LKE Cluster Regenerate"
					]
				}
			}
		},
		{
			"displayName": "Kubeconfig",
			"name": "kubeconfig",
			"type": "boolean",
			"default": true,
			"description": "Whether to delete and regenerate the Kubeconfig file for this Cluster.\n",
			"routing": {
				"send": {
					"property": "kubeconfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Post LKE Cluster Regenerate"
					]
				}
			}
		},
		{
			"displayName": "Servicetoken",
			"name": "servicetoken",
			"type": "boolean",
			"default": true,
			"description": "Whether to delete and regenerate the service access token for this Cluster.\n",
			"routing": {
				"send": {
					"property": "servicetoken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Post LKE Cluster Regenerate"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Post LKE Cluster Regenerate"
					]
				}
			}
		},
		{
			"displayName": "DELETE /lke/clusters/{clusterId}/servicetoken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Post LKEC Service Token Delete"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Post LKEC Service Token Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /lke/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Get LKE Versions"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Get LKE Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /lke/versions/{version}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Get LKE Version"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linode Kubernetes Engine LKE"
					],
					"operation": [
						"Get LKE Version"
					]
				}
			}
		},
];
