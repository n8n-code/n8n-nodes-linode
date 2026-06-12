import type { INodeProperties } from 'n8n-workflow';

export const regionsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Regions"
					]
				}
			},
			"options": [
				{
					"name": "Get Regions",
					"value": "Get Regions",
					"action": "Regions List",
					"description": "Lists the Regions available for Linode services. Not all services are guaranteed to be\navailable in all Regions.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/regions"
						}
					}
				},
				{
					"name": "Get Region",
					"value": "Get Region",
					"action": "Region View",
					"description": "Returns a single Region.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/regions/{{$parameter[\"regionId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /regions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Regions"
					],
					"operation": [
						"Get Regions"
					]
				}
			}
		},
		{
			"displayName": "GET /regions/{regionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Regions"
					],
					"operation": [
						"Get Region"
					]
				}
			}
		},
];
